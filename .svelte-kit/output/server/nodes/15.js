import * as server from '../entries/pages/admin/posts/create/_page.server.ts.js';

export const index = 15;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/posts/create/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/posts/create/+page.server.ts";
export const imports = ["_app/immutable/nodes/15.BV59D4i1.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/JwTrKaL4.js","_app/immutable/chunks/Ggb_3YAm.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/aNfF06Qi.js","_app/immutable/chunks/CLUl5aer.js","_app/immutable/chunks/GtcsyiZ-.js","_app/immutable/chunks/DzNWZODW.js","_app/immutable/chunks/Cy49vD9S.js","_app/immutable/chunks/BWpd8_Ck.js","_app/immutable/chunks/BD7UFvEK.js","_app/immutable/chunks/BtMrN8Co.js","_app/immutable/chunks/PFW7ySZs.js","_app/immutable/chunks/Btq19NGY.js"];
export const stylesheets = ["_app/immutable/assets/purify.Bf4bJ6eu.css"];
export const fonts = [];
