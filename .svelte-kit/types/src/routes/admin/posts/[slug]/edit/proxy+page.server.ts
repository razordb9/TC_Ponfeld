// @ts-nocheck
import { Blogapi } from '$lib/server/api/posts.js';
import { redirect } from '@sveltejs/kit';
import slug from 'slug';
import type { PageServerLoad } from '../$types';

export const ssr = false;

export const load = async ({params, platform}: Parameters<PageServerLoad>[0]) => {
    const {slug} = params as {slug: string};

    const {readPost} = new Blogapi(platform);

    const result = await readPost(slug);

    if (result.success) {
        return {
            post: result.post
        }
    } else {
        return {
            success: result.success,
            error: "No post found "
        }
    }
}

export const actions = {
    updatePost: async(event) => {
        // console.log("platform: " + event.platform?.env);
        const formData = await event.request.formData();
        const html = formData.get('editorContent') as string;
        const title = formData.get('title') as string;
        const orgSlug = formData.get('slug') as string;
        const _slug = slug(title, {lower: true} ) 
        console.log("FormData: ", formData);
        // console.log("Title: ", formData.get('title'));
        // console.log("HTML: ", formData.get('editorContent'));

        const blogEntry = {
            title: title,
            html: html,
            slug: _slug,
            updatedAt: Date.now(),
            authorId: event.locals.user?.id
        }
        const api = new Blogapi(event.platform);
        const result = await api.updatePost(blogEntry, orgSlug);
        console.log(result);
        
        if (result.success) {
            redirect(303, "/admin/posts");
        } else {
            return {
                success: result.success,
                error: result.error
            }
        }
    }
}