export const actions = {
    createpost: async(event) => {
        const formData = await event.request.formData();
        console.log("FormData: ", formData);
    }
}