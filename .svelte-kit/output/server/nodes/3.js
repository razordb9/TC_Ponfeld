import * as server from '../entries/pages/admin/users/_layout.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/users/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/users/+layout.server.ts";
export const imports = ["_app/immutable/nodes/3.sRjgU0MV.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/CxrVmGQ8.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/BopFfJM5.js"];
export const stylesheets = [];
export const fonts = [];
