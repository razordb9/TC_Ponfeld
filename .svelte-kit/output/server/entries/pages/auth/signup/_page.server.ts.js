import "../../../../chunks/auth.js";
const actions = {
  signup: async ({ request }) => {
    const formData = await request.formData();
    Object.fromEntries(formData);
    console.log(formData);
    let isAdmin = formData.get("isAdmin")?.toString() === "on" ? true : false;
    console.log(isAdmin);
  }
};
export {
  actions
};
