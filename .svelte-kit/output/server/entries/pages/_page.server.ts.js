import { fail } from "@sveltejs/kit";
import { z } from "zod";
import "@sveltejs/kit/internal/server";
import "../../chunks/utils.js";
import "clsx";
import "../../chunks/query.js";
const contactform = z.object({
  name: z.string().min(3, { message: "Name is required and must be at least 3 characters long" }),
  email: z.string().email(),
  message: z.string().min(10, { message: "Bitte Nachricht eingeben mit 10 Zeichen" })
});
const load = async (event) => {
};
const actions = {
  sendmail: async (event) => {
    const formData = await event.request.formData();
    console.log(formData);
    const formEntriey = Object.fromEntries(formData);
    const result = await contactform.safeParseAsync(formEntriey);
    const email = formData.get("email");
    const name = formData.get("name");
    const message = formData.get("message");
    console.log(result);
    if (!result.success) {
      const tree = z.treeifyError(result.error);
      console.log(tree.properties);
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
    return { success: true };
  }
};
export {
  actions,
  load
};
