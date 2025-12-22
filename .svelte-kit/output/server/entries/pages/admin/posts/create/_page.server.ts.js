import { d as db, b as blogPost } from "../../../../../chunks/index3.js";
const ssr = false;
const actions = {
  createpost: async (event) => {
    const formData = await event.request.formData();
    const editor = formData.get("editor");
    const title = formData.get("title");
    console.log("FormData: ", formData);
    console.log("Title: ", formData.get("title"));
    console.log("Content: ", formData.get("editorContent"));
    const blogEntry = {
      title,
      content: editor
    };
    const newEntry = await db.insert(blogPost).values(blogEntry);
    return {
      success: true,
      newEntry,
      status: 200,
      message: "New entry added"
    };
  }
};
export {
  actions,
  ssr
};
