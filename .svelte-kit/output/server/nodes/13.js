import * as server from '../entries/pages/admin/posts/_slug_/_page.server.ts.js';

export const index = 13;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/posts/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/posts/[slug]/+page.server.ts";
export const imports = ["_app/immutable/nodes/13.DoobrzZv.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/DFBGG8-K.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/CnZMGtJo.js","_app/immutable/chunks/CXmtpmQi.js","_app/immutable/chunks/D_Gso9Y0.js"];
export const stylesheets = [];
export const fonts = [];
