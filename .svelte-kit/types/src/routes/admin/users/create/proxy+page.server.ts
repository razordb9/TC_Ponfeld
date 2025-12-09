// @ts-nocheck
/* 
    Only needed for zod validation
*/

import { signupSchema } from "$lib/schema/auth";
import type { Actions } from "@sveltejs/kit";
import z from "zod";


export const actions = {
    signup: async({ request }: import('./$types').RequestEvent) => {
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
};null as any as Actions;