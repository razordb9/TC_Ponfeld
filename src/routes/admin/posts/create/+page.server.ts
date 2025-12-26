import { Blogapi } from '$lib/server/api/posts.js';
import { redirect } from '@sveltejs/kit';
import slug from 'slug';

export const ssr = false;

export const actions = {
    createpost: async(event) => {
        console.log("platform: " + event.platform?.env);
        const formData = await event.request.formData();
        const html = formData.get('editorContent') as string;
        const title = formData.get('title') as string;
        const _slug = slug(title, {lower: true} ) 
        console.log("FormData: ", formData);
        console.log("Title: ", formData.get('title'));
        console.log("HTML: ", formData.get('editorContent'));

        const blogEntry = {
            title: title,
            html: html,
            slug: _slug,
            markdown: null,
            createdAt: Date.now(),
            updatedAt: Date.now(),
            authorId: event.locals.user?.id
        }
        const api = new Blogapi(event.platform);
        const result = await api.createPost(blogEntry);
        
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