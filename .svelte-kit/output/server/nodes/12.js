import * as server from '../entries/pages/admin/posts/_page.server.ts.js';

export const index = 12;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/posts/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/posts/+page.server.ts";
export const imports = ["_app/immutable/nodes/12.Caexiyal.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/BGUecI9D.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/DFJ5hpEc.js","_app/immutable/chunks/Csn-qpoN.js","_app/immutable/chunks/N6U3tOuG.js"];
export const stylesheets = [];
export const fonts = [];
