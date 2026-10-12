import { db } from '$lib/server/db';
import { blogPost, user } from '$lib/server/db/schema';
import { signupSchema } from '$lib/schema/auth';
import { auth } from '$lib/auth';
import { eq } from 'drizzle-orm';
import { fail, redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

const requireAdmin = (currentUser: App.ExtendedUser | null) => {
	if (!currentUser?.isAdmin) {
		redirect(303, '/admin');
	}
};

export const load: PageServerLoad = async ({ locals, platform }) => {
	requireAdmin(locals.user);

	const database = db({ platform });
	const accounts = await database.select().from(user);
	const posts = await database.select().from(blogPost);
	const users = accounts
		.map((account) => ({
			id: account.id,
			name: account.name,
			email: account.email,
			isAdmin: account.isAdmin,
			createdAt: account.createdAt,
			postCount: posts.filter((post) => post.authorId === account.id).length
		}))
		.sort((a, b) => a.name.localeCompare(b.name));

	return { users };
};

export const actions: Actions = {
	resetPassword: async ({ request, locals, platform, url }) => {
		requireAdmin(locals.user);

		const formData = await request.formData();
		const id = formData.get('id');
		if (typeof id !== 'string') {
			return fail(400, { message: 'Ungültige Benutzer-ID.' });
		}

		const accounts = await db({ platform }).select().from(user);
		const target = accounts.find((account) => account.id === id);

		if (!target) {
			return fail(404, { message: 'Dieser Benutzer wurde nicht gefunden.' });
		}

		await auth({ platform }).api.requestPasswordReset({
			body: {
				email: target.email,
				redirectTo: `${url.origin}/auth/resetpassword`
			},
			headers: request.headers
		});

		return { success: true, message: `Ein Link zum Zurücksetzen des Passworts wurde an ${target.email} gesendet.` };
	},

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
		const accounts = await database.select().from(user);
		const target = accounts.find((account) => account.id === id);

		if (!target) {
			return fail(404, { message: 'Dieser Benutzer wurde nicht gefunden.' });
		}

		const emailOwner = accounts.find(
			(account) => account.email === validated.data.email && account.id !== id
		);

		if (emailOwner) {
			return fail(400, { message: 'Diese E-Mail-Adresse wird bereits verwendet.' });
		}

		if (target.isAdmin && !isAdmin) {
			const adminCount = accounts.filter((account) => account.isAdmin).length;
			if (adminCount <= 1) {
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
		const accounts = await database.select().from(user);
		const target = accounts.find((account) => account.id === id);

		if (!target) {
			return fail(404, { message: 'Dieser Benutzer wurde nicht gefunden.' });
		}

		if (target.isAdmin) {
			const adminCount = accounts.filter((account) => account.isAdmin).length;
			if (adminCount <= 1) {
				return fail(400, { message: 'Der letzte Administrator kann nicht gelöscht werden.' });
			}
		}

		const posts = await database.select().from(blogPost);
		const authoredPostCount = posts.filter((post) => post.authorId === id).length;

		if (authoredPostCount > 0) {
			return fail(400, {
				message:
					'Dieser Benutzer hat Blogbeiträge. Weise diese zuerst einem anderen Autor zu, bevor du das Konto löschst.'
			});
		}

		await database.delete(user).where(eq(user.id, id));
		return { success: true, message: 'Benutzerkonto wurde gelöscht.' };
	}
};