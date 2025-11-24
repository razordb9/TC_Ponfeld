import * as server from '../entries/pages/admin/users/_layout.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/users/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/users/+layout.server.ts";
export const imports = ["_app/immutable/nodes/3.BLtIPE5y.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/xvY60Wq7.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/C_Kp0wSb.js"];
export const stylesheets = [];
export const fonts = [];
