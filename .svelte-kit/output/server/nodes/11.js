import * as server from '../entries/pages/admin/posts/_page.server.ts.js';

export const index = 11;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/posts/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/posts/+page.server.ts";
export const imports = ["_app/immutable/nodes/11.BZQpST5W.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/69_IOA4Y.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/CcIFFwra.js","_app/immutable/chunks/DbRsr3jy.js","_app/immutable/chunks/CqRUbNok.js","_app/immutable/chunks/ssKayK5H.js"];
export const stylesheets = [];
export const fonts = [];
