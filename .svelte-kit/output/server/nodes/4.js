import * as server from '../entries/pages/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.DIEWbKEC.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/CCi-juUc.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/Ci5t2LMj.js","_app/immutable/chunks/CPBzXYIL.js","_app/immutable/chunks/BFAybStm.js","_app/immutable/chunks/z7jyqtY_.js","_app/immutable/chunks/CcDcK6xx.js","_app/immutable/chunks/DN0FSCWz.js","_app/immutable/chunks/BzWMSwkn.js","_app/immutable/chunks/BfV-YzTV.js","_app/immutable/chunks/D_ae3WYQ.js","_app/immutable/chunks/C0BbMH7p.js"];
export const stylesheets = ["_app/immutable/assets/custom_styles.BkhksRxK.css"];
export const fonts = [];
