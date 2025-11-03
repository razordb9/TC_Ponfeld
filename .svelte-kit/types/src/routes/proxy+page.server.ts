// @ts-nocheck
import { fail } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { z } from "zod";
import { form } from '$app/server';

const contactform = z.object({
  name: z.string().min(3, { message: "Name is required and must be at least 3 characters long" }),
  email: z.string().email(),  
  message: z.string().min(10, { message: "Bitte Nachricht eingeben mit 10 Zeichen"}),
}); 



export const load = async(event: Parameters<PageServerLoad>[0]) => {};
export const actions = {
  sendmail: async(event) => {
    const formData = await event.request.formData();
    console.log(formData);
    const formEntriey = Object.fromEntries(formData);
    const result = await contactform.safeParseAsync(formEntriey);

    const email = formData.get("email");
    const name = formData.get("name");
    const message = formData.get("message");

    console.log(result);
    if (!result.success){
      const tree = z.treeifyError(result.error);  
      console.log(tree.properties)
      return fail(401, {
                success: false,
                error: "Validation failed",
                errors: tree.properties,
                values: {
                    name,
                    message,
                    email
                }
            }); 
    }


    return{success: true}
  }

} satisfies Actions

