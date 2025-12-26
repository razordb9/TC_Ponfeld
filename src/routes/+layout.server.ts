import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = ({locals, platform}) => {
    return {
        user: locals.user
    }
}