import * as server from '../entries/pages/admin/posts/_slug_/_page.server.ts.js';

export const index = 13;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/posts/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/posts/[slug]/+page.server.ts";
export const imports = ["_app/immutable/nodes/13.BHJkJpmb.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/0R0_Ar2M.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/DiNyOgzF.js","_app/immutable/chunks/D1-Xi4Vg.js","_app/immutable/chunks/DHGorhT9.js"];
export const stylesheets = ["_app/immutable/assets/13.D8hgCykE.css"];
export const fonts = [];
