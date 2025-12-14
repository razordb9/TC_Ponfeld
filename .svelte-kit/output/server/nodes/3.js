import * as server from '../entries/pages/admin/_layout.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/+layout.server.ts";
export const imports = ["_app/immutable/nodes/3.B5DMfqY2.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/DMX7pA8b.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/DM3MFS-J.js"];
export const stylesheets = [];
export const fonts = [];
