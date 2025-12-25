import { redirect } from "@sveltejs/kit"
import type { PageServerLoad } from "../$types"

export const load: PageServerLoad = ({locals}) => {
    if(locals.user == null || locals.user == undefined) {
        redirect(303, "/auth/login")
    }
    
    return {
        user: locals.user
    }
}