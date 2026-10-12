import { db } from '$lib/server/db';
import { blogPost, user } from '$lib/server/db/schema';
import { signupSchema } from '$lib/schema/auth';
import { and, asc, count, eq, ne } from 'drizzle-orm';
import { fail, redirect, type Actions, type PageServerLoad } from '@sveltejs/kit';

const requireAdmin = (currentUser: App.ExtendedUser | null) => {
	if (!currentUser?.isAdmin) {
		redirect(303, '/admin');
	}
};

export const load: PageServerLoad = async ({ locals, platform }) => {
	requireAdmin(locals.user);

	const users = await db({ platform })
		.select({
			id: user.id,
			name: user.name,
			email: user.email,
			isAdmin: user.isAdmin,
			createdAt: user.createdAt,
			postCount: count(blogPost.id)
		})
		.from(user)
		.leftJoin(blogPost, eq(blogPost.authorId, user.id))
		.groupBy(user.id)
		.orderBy(asc(user.name));

	return { users };
};

export const actions: Actions = {
	updateUser: async ({ request, locals, platform }) => {
		requireAdmin(locals.user);

		const formData = await request.formData();
		const id = formData.get('id');
		const name = formData.get('name');
		const email = formData.get('email');
		const isAdmin = formData.get('isAdmin') === 'true';

		if (typeof id !== 'string') {
			return fail(400, { message: 'Ungültige Benutzer-ID.' });
		}

		const validated = signupSchema.pick({ name: true, email: true }).safeParse({ name, email });
		if (!validated.success) {
			return fail(400, {
				message: 'Bitte gib einen gültigen Namen und eine gültige E-Mail-Adresse ein.'
			});
		}

		const database = db({ platform });
		const [target] = await database
			.select({ id: user.id, isAdmin: user.isAdmin })
			.from(user)
			.where(eq(user.id, id))
			.limit(1);

		if (!target) {
			return fail(404, { message: 'Dieser Benutzer wurde nicht gefunden.' });
		}

		const [emailOwner] = await database
			.select({ id: user.id })
			.from(user)
			.where(and(eq(user.email, validated.data.email), ne(user.id, id)))
			.limit(1);

		if (emailOwner) {
			return fail(400, { message: 'Diese E-Mail-Adresse wird bereits verwendet.' });
		}

		if (target.isAdmin && !isAdmin) {
			const [adminCount] = await database
				.select({ value: count() })
				.from(user)
				.where(eq(user.isAdmin, true));

			if (adminCount.value <= 1) {
				return fail(400, { message: 'Der letzte Administrator kann nicht herabgestuft werden.' });
			}
			if (target.id === locals.user?.id) {
				return fail(400, { message: 'Du kannst deine eigene Administratorrolle nicht entfernen.' });
			}
		}

		await database
			.update(user)
			.set({ name: validated.data.name, email: validated.data.email, isAdmin })
			.where(eq(user.id, id));

		return { success: true, message: 'Benutzerdaten wurden gespeichert.' };
	},

	deleteUser: async ({ request, locals, platform }) => {
		requireAdmin(locals.user);

		const formData = await request.formData();
		const id = formData.get('id');
		if (typeof id !== 'string') {
			return fail(400, { message: 'Ungültige Benutzer-ID.' });
		}

		if (id === locals.user?.id) {
			return fail(400, { message: 'Du kannst dein eigenes Konto nicht löschen.' });
		}

		const database = db({ platform });
		const [target] = await database
			.select({ id: user.id, isAdmin: user.isAdmin })
			.from(user)
			.where(eq(user.id, id))
			.limit(1);

		if (!target) {
			return fail(404, { message: 'Dieser Benutzer wurde nicht gefunden.' });
		}

		if (target.isAdmin) {
			const [adminCount] = await database
				.select({ value: count() })
				.from(user)
				.where(eq(user.isAdmin, true));
			if (adminCount.value <= 1) {
				return fail(400, { message: 'Der letzte Administrator kann nicht gelöscht werden.' });
			}
		}

		const [authoredPosts] = await database
			.select({ value: count() })
			.from(blogPost)
			.where(eq(blogPost.authorId, id));

		if (authoredPosts.value > 0) {
			return fail(400, {
				message:
					'Dieser Benutzer hat Blogbeiträge. Weise diese zuerst einem anderen Autor zu, bevor du das Konto löschst.'
			});
		}

		await database.delete(user).where(eq(user.id, id));
		return { success: true, message: 'Benutzerkonto wurde gelöscht.' };
	}
};