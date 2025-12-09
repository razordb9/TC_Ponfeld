import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0._pnXqegO.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/DhQlDxi7.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/xyKh6EvY.js","_app/immutable/chunks/69_IOA4Y.js","_app/immutable/chunks/DwVVnNVU.js","_app/immutable/chunks/CRakC5Jn.js","_app/immutable/chunks/upquREIO.js","_app/immutable/chunks/I6AyiWhU.js","_app/immutable/chunks/BeJ9AWU4.js","_app/immutable/chunks/v2bYc8lV.js"];
export const stylesheets = ["_app/immutable/assets/custom_styles.BVQJ_4Bw.css"];
export const fonts = [];
