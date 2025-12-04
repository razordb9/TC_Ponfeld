import * as server from '../entries/pages/admin/users/_layout.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/users/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/users/+layout.server.ts";
export const imports = ["_app/immutable/nodes/3.DrQtksSf.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/CCi-juUc.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/CcDcK6xx.js"];
export const stylesheets = [];
export const fonts = [];
