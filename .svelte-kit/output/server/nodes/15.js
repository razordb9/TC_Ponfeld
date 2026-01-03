import * as server from '../entries/pages/admin/posts/create/_page.server.ts.js';

export const index = 15;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/posts/create/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/posts/create/+page.server.ts";
export const imports = ["_app/immutable/nodes/15.ByhfIeXy.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/CmeEZew-.js","_app/immutable/chunks/DFBGG8-K.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/CnZMGtJo.js","_app/immutable/chunks/zchhYFdu.js","_app/immutable/chunks/BgBCFbPb.js","_app/immutable/chunks/CXmtpmQi.js","_app/immutable/chunks/CHxwRZ4A.js","_app/immutable/chunks/D9B4Nryy.js","_app/immutable/chunks/D_Gso9Y0.js","_app/immutable/chunks/DPECiApe.js","_app/immutable/chunks/-Z0YRJiS.js","_app/immutable/chunks/Btq19NGY.js"];
export const stylesheets = ["_app/immutable/assets/purify.Bf4bJ6eu.css"];
export const fonts = [];
