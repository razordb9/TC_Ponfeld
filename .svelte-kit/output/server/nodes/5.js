import * as server from '../entries/pages/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.DqVGW5NS.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/69_IOA4Y.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/CcIFFwra.js","_app/immutable/chunks/DbRsr3jy.js","_app/immutable/chunks/DGDptXZo.js","_app/immutable/chunks/6V4MkxCG.js","_app/immutable/chunks/CYjqQAur.js","_app/immutable/chunks/CqRUbNok.js","_app/immutable/chunks/By5va_bG.js","_app/immutable/chunks/Cq5dnMSc.js","_app/immutable/chunks/9BzUVAYX.js","_app/immutable/chunks/32-RiVOq.js","_app/immutable/chunks/CZxi-XHx.js","_app/immutable/chunks/DZLdOGz-.js","_app/immutable/chunks/C75M92Yd.js","_app/immutable/chunks/DwruINNL.js","_app/immutable/chunks/ssKayK5H.js"];
export const stylesheets = ["_app/immutable/assets/custom_styles.B9UVC1H5.css"];
export const fonts = [];
