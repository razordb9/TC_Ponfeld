import { l as loginSchema } from "../../../../chunks/auth.js";
import z__default from "zod";
const actions = {
  login: async ({ request }) => {
    const formData = await request.formData();
    const formEntries = Object.fromEntries(formData);
    const result = await loginSchema.safeParseAsync(formEntries);
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
