import { fail } from "@sveltejs/kit";
import { z } from "zod";
import "@sveltejs/kit/internal/server";
import "../../chunks/utils.js";
import "@sveltejs/kit/internal";
import "../../chunks/query.js";
import { Resend } from "resend";
import { R as RESEND_API_KEY, E as EMAIL_FROM, a as EMAIL_TO } from "../../chunks/private.js";
const contactform = z.object({
  name: z.string().min(3, { message: "Name is required and must be at least 3 characters long" }),
  email: z.string().email(),
  message: z.string().min(10, { message: "Bitte Nachricht eingeben mit 10 Zeichen" })
});
const resend = new Resend(RESEND_API_KEY);
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
    console.log("api key:", RESEND_API_KEY);
    console.log("from:", EMAIL_FROM);
    console.log("to:", EMAIL_TO);
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
    try {
      await resend.emails.send({
        from: "TC Ponfeld Groessinghof <onboarding@resend.dev>",
        // from: EMAIL_FROM as string,
        to: EMAIL_TO,
        subject: "New message from TC Ponfeld Groessinghof website",
        text: `
          Name: ${result.data.name}
          Email: ${result.data.email}

          Message:
          ${result.data.message}
                  `
      });
      return { success: true };
    } catch (err) {
      console.log(err);
      return { error: "Failed to send email. Try again later." };
    }
  }
};
export {
  actions,
  load
};
