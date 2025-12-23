import { Blogapi } from '$lib/server/api/posts';

export const load = async(event) => {
    const api = new Blogapi(event.platform);

    const result = await api.readPost();

    if (result.success){
        return result;
    } else {
        return {
            success: result.success,
            error: result.error
        }
    }
}