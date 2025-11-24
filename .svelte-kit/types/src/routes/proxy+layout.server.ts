// @ts-nocheck
import type { LayoutServerLoad } from "./$types";

export const load = ({locals, platform}: Parameters<LayoutServerLoad>[0]) => {
    return {
        user: locals.user
    }
}