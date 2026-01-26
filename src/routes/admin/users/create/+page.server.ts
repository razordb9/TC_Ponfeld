/* 
    Only needed for zod validation
*/

import { signupSchema } from "$lib/schema/auth";
import { redirect, type Actions } from "@sveltejs/kit";
import z from "zod";
import type { PageServerLoad } from "../$types";

//necessary to protect from non admins to access page
export const load: PageServerLoad = ({locals}) => {
    if(locals.user == null || locals.user.isAdmin !== true) {
        redirect(303, "/admin")
    }
    
    return {
        user: locals.user
    }
}

export const actions:Actions = {
    signup: async({ request }) => {
        const formData = await request.formData();
        console.log(formData);
        let isAdmin = formData.get('isAdmin')?.toString() === 'on' ? true : false;
        let name = formData.get('name');
        let email = formData.get('email');
        let password = formData.get('password');

        console.log(isAdmin)

        const result = await signupSchema.safeParseAsync({name, email, password, isAdmin});

        if(!result.success) {
            return {
                success: false,
                message: "Validation failed",
                errors: z.treeifyError(result.error)?.properties
            }
        } else {
            return {
                success: true,
                message: "Signup successful"
            }
        }
    }
}