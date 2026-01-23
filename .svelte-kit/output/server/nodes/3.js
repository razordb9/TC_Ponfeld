import * as server from '../entries/pages/admin/_layout.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/+layout.server.ts";
export const imports = ["_app/immutable/nodes/3.DJxG_sGu.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/0R0_Ar2M.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/Dgfss5hr.js","_app/immutable/chunks/CX5J-uUl.js"];
export const stylesheets = [];
export const fonts = [];
