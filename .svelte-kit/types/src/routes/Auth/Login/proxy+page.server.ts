// @ts-nocheck
import type { Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "../../../routes/$types";
import { loginSchema, signupSchema } from "$lib/schema/auth";
import z from "zod";

export const load = async ({ request, locals, params }: Parameters<PageServerLoad>[0]) => {
    return {};
}

export const actions = {
    login: async ({ request }: import('./$types').RequestEvent) => {
        const formData = await request.formData();
        const email = formData.get("email")?.toString() ?? "";
        const password = formData.get("password")?.toString() ?? "";
        // Validate input;
        const result = await loginSchema.safeParseAsync({ email, password });
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
};;null as any as Actions;