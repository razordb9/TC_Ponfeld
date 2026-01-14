import * as server from '../entries/pages/admin/posts/_page.server.ts.js';

export const index = 12;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/posts/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/posts/+page.server.ts";
export const imports = ["_app/immutable/nodes/12.DHWFF7QJ.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/Ggb_3YAm.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/DSnApHgW.js","_app/immutable/chunks/aNfF06Qi.js","_app/immutable/chunks/BD7UFvEK.js"];
export const stylesheets = [];
export const fonts = [];
