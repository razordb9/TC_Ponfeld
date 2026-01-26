import * as server from '../entries/pages/admin/posts/create/_page.server.ts.js';

export const index = 15;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/posts/create/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/posts/create/+page.server.ts";
export const imports = ["_app/immutable/nodes/15.6PMLBJf9.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/BmR_WWaQ.js","_app/immutable/chunks/DikK63Mf.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/BttR6Jgs.js","_app/immutable/chunks/B96xb4JC.js","_app/immutable/chunks/0P0xxEIU.js","_app/immutable/chunks/BdXKh5br.js","_app/immutable/chunks/h6s2nBn6.js","_app/immutable/chunks/CWWphAVu.js","_app/immutable/chunks/rCTv9_kY.js","_app/immutable/chunks/BOUIxRKT.js","_app/immutable/chunks/B4SZ-WAu.js","_app/immutable/chunks/Btq19NGY.js"];
export const stylesheets = ["_app/immutable/assets/purify.Bf4bJ6eu.css"];
export const fonts = [];
