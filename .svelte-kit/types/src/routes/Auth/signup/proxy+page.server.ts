// @ts-nocheck
/* 
    Only needed for zod validation
*/

import type { Actions } from '../../../routes/$types';
import { signupSchema } from "$lib/schema/auth";
import z from "zod";

export const actions = {
    signup: async({ request }: import('./$types').RequestEvent) => {
        const formData = await request.formData();
        const formEntries = Object.fromEntries(formData);
        console.log(formData);
        let isAdmin = formData.get('isAdmin')?.toString() === 'on' ? true : false;
    
        console.log(isAdmin)

        // const result = await signupSchema.safeParseAsync(formEntries);

        // if(!result.success) {
        //     return {
        //         success: false,
        //         message: "Validation failed",
        //         errors: z.treeifyError(result.error)?.properties
        //     }
        // } else {
        //     return {
        //         success: true,
        //         message: "Signup successful"
        //     }
        // }
    }
};null as any as Actions;