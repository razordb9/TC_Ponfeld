import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.CAgQqFT5.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/CcIFFwra.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/By5va_bG.js","_app/immutable/chunks/69_IOA4Y.js","_app/immutable/chunks/DbRsr3jy.js","_app/immutable/chunks/CqRUbNok.js","_app/immutable/chunks/DGDptXZo.js","_app/immutable/chunks/CZxi-XHx.js","_app/immutable/chunks/DZLdOGz-.js","_app/immutable/chunks/C30f1MpU.js","_app/immutable/chunks/9BzUVAYX.js","_app/immutable/chunks/9GfLLwAL.js","_app/immutable/chunks/CYjqQAur.js","_app/immutable/chunks/v2bYc8lV.js"];
export const stylesheets = ["_app/immutable/assets/custom_styles.BGRpN6LN.css"];
export const fonts = [];
