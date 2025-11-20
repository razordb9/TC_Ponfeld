import * as server from '../entries/pages/admin/posts/create/_page.server.ts.js';

export const index = 12;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/posts/create/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/posts/create/+page.server.ts";
export const imports = ["_app/immutable/nodes/12.BzqVuaR6.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/MLM6vQ92.js","_app/immutable/chunks/BXMoDmWe.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/CRLTAYgt.js","_app/immutable/chunks/B_a2Eynt.js","_app/immutable/chunks/CIgJqq8H.js","_app/immutable/chunks/CdS_l6s4.js","_app/immutable/chunks/BFDgNCUR.js"];
export const stylesheets = ["_app/immutable/assets/12.D2qhvUVx.css"];
export const fonts = [];
