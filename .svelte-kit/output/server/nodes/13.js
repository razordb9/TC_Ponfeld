import * as server from '../entries/pages/admin/posts/_slug_/_page.server.ts.js';

export const index = 13;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/posts/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/posts/[slug]/+page.server.ts";
export const imports = ["_app/immutable/nodes/13.CfkWEpjV.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/DikK63Mf.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/BttR6Jgs.js","_app/immutable/chunks/BdXKh5br.js","_app/immutable/chunks/rCTv9_kY.js"];
export const stylesheets = ["_app/immutable/assets/13.D8hgCykE.css"];
export const fonts = [];
