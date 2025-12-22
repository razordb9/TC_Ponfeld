import { db } from '$lib/server/db/index.ts';
import { blogPost } from '$lib/server/db/schema.ts';


export const ssr = false;

export const actions = {
    createpost: async(event) => {
        const formData = await event.request.formData();
        const editor = formData.get('editor');
        const title = formData.get('title');

        console.log("FormData: ", formData);
        console.log("Title: ", formData.get('title'));
        console.log("Content: ", formData.get('editorContent'));

        const blogEntry = {
            title: title,
            content: editor
        }

        const newEntry = await db.insert(blogPost).values(blogEntry);

        return {
            success: true,
            newEntry,
            status: 200,
            message: "New entry added"
        }
    }
}