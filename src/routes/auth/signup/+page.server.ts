import type { Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "../../../routes/$types";
import { signupSchema } from "$lib/schema/auth";
import z from "zod";

export const load: PageServerLoad = async ({ request, locals, params }) => {
    return {};
}

const signupSchema2 = z.object({
    name: z.string().min(2, "Name must be at least 2 characters long"),
    email: z.email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    isAdmin: z.boolean().optional()
})

export const actions: Actions = {
    signup: async ({ request }) => {
        const formData = await request.formData();
        const name = formData.get("name")?.toString() ?? "";
        const email = formData.get("email")?.toString() ?? "";
        const password = formData.get("password")?.toString() ?? "";
        
        // Validate input;
        const result = await signupSchema.safeParseAsync({ name, email, password });
        if (!result.success) {
            return {
                success: false,
                message: 'Validation failed',
                errors: z.treeifyError(result.error)?.properties
            }   // ZodError instance
        } else {
            return {
                message: 'Signup successful',
                success: true,
            }
        }

    }
};