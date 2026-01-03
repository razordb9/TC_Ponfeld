import { s as signupSchema } from "../../../../../chunks/auth.js";
import "@sveltejs/kit";
import z__default from "zod";
const actions = {
  signup: async ({ request }) => {
    const formData = await request.formData();
    console.log(formData);
    let isAdmin = formData.get("isAdmin")?.toString() === "on" ? true : false;
    let name = formData.get("name");
    let email = formData.get("email");
    let password = formData.get("password");
    console.log(isAdmin);
    const result = await signupSchema.safeParseAsync({ name, email, password, isAdmin });
    if (!result.success) {
      return {
        success: false,
        message: "Validation failed",
        errors: z__default.treeifyError(result.error)?.properties
      };
    } else {
      return {
        success: true,
        message: "Signup successful"
      };
    }
  }
};
export {
  actions
};
