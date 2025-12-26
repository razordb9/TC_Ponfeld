import { Blogapi } from "$lib/server/api/posts";
import type { PageServerLoad } from "../$types";

export const load: PageServerLoad = async ({params, platform}) => {
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