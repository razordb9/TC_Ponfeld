import { r as resetSchema } from "../../../../chunks/auth.js";
import "../../../../chunks/auth-client.js";
import z__default from "zod";
import { a as auth } from "../../../../chunks/auth2.js";
const actions = {
  sendReset: async (event) => {
    const formData = await event.request.formData();
    const formEntries = Object.fromEntries(formData);
    const result = await resetSchema.safeParseAsync(formEntries);
    const token = new URLSearchParams(window.location.search).get("token");
    console.log("token: ", token);
    await auth - client({
      body: {
        newPassword: "",
        token
      }
    });
    if (!result.success) {
      return {
        success: false,
        message: "Validation failed",
        errors: z__default.treeifyError(result.error)?.properties
      };
    } else {
      return {
        success: true,
        message: "Login successful"
      };
    }
  }
};
export {
  actions
};
