import * as server from '../entries/pages/admin/_layout.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/+layout.server.ts";
export const imports = ["_app/immutable/nodes/3.BrsKqo5d.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/CcIFFwra.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/By5va_bG.js"];
export const stylesheets = [];
export const fonts = [];
