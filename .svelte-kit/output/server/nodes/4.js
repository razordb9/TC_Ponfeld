import * as server from '../entries/pages/admin/users/_layout.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/users/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/users/+layout.server.ts";
export const imports = ["_app/immutable/nodes/4.CnSTVgmn.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/BzaMqOHg.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/Dmxv7Y2o.js"];
export const stylesheets = [];
export const fonts = [];
