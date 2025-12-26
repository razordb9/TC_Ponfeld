import * as server from '../entries/pages/admin/posts/_slug_/edit/_page.server.ts.js';

export const index = 13;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/posts/_slug_/edit/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/posts/[slug]/edit/+page.server.ts";
export const imports = ["_app/immutable/nodes/13.DPzO339H.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/69_IOA4Y.js","_app/immutable/chunks/DIeogL5L.js"];
export const stylesheets = [];
export const fonts = [];
