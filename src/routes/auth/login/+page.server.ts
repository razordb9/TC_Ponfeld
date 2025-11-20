import type { Actions } from '../../../routes/$types';
import { loginSchema } from "$lib/schema/auth";
import z from "zod";

export const actions:Actions = {
    login: async({ request }) => {
        const formData = await request.formData();
        const formEntries = Object.fromEntries(formData);
        const result = await loginSchema.safeParseAsync(formEntries);

        if(!result.success) {
            return {
                success: false,
                message: "Validation failed",
                errors: z.treeifyError(result.error)?.properties
            }
        } else {
            return {
                success: true,
                message: "Login successful"
            }
        }
    }
}