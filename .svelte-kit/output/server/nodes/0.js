import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.DtZItC0p.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/CCi-juUc.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/CcDcK6xx.js","_app/immutable/chunks/69_IOA4Y.js","_app/immutable/chunks/Ci5t2LMj.js","_app/immutable/chunks/z7jyqtY_.js","_app/immutable/chunks/CPBzXYIL.js","_app/immutable/chunks/BzWMSwkn.js","_app/immutable/chunks/D_ae3WYQ.js","_app/immutable/chunks/v2bYc8lV.js"];
export const stylesheets = ["_app/immutable/assets/custom_styles.BkhksRxK.css"];
export const fonts = [];
