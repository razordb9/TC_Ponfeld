import { Blogapi } from '$lib/server/api/posts';
import type { BlogPost } from '../../app.d.ts';

export const load = async(event) => {
    const api = new Blogapi(event.platform);

    const result = await api.readPosts();

    if (result.success){
        return {
            posts: result.posts
        };
    } else {
        return {
            posts: []
        }
    }
}