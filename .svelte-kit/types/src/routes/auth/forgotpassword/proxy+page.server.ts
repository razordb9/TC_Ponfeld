// @ts-nocheck
import type { Actions } from '../../../routes/$types';
import { resetSchema } from "$lib/schema/auth";
import { authClient } from "$lib/auth-client";

import z from "zod";
import { auth } from '$lib/auth';

export const actions = {
    sendReset: async( event: import('./$types').RequestEvent ) => {
        const formData = await event.request.formData();
        const formEntries = Object.fromEntries(formData);
        const result = await resetSchema.safeParseAsync(formEntries);

        const token = new URLSearchParams(window.location.search).get("token");
        if (!token) {

        }

        const data = await auth-client({
            body: {
                newPassword: "";
                token
            }
        })

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
};null as any as Actions;