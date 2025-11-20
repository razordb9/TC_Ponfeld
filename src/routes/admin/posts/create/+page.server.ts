export const ssr = false;

export const actions = {
    createpost: async(event) => {
        const formData = await event.request.formData();
        console.log("FormData: ", formData);
        console.log("Title: ", formData.get('title'));
        console.log("Content: ", formData.get('editorContent'));
    }
}