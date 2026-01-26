import { redirect } from "@sveltejs/kit";
const load = ({ locals }) => {
  if (locals.user == null || locals.user == void 0) {
    redirect(303, "/auth/login");
  }
  return {
    user: locals.user
  };
};
export {
  load
};
