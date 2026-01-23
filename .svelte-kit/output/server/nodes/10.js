import * as server from '../entries/pages/admin/_page.server.ts.js';

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/+page.server.ts";
export const imports = ["_app/immutable/nodes/10.D4Fr1qju.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/0R0_Ar2M.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/DemQrE1o.js","_app/immutable/chunks/CX5J-uUl.js"];
export const stylesheets = [];
export const fonts = [];
