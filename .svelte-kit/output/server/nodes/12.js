import * as server from '../entries/pages/admin/posts/_page.server.ts.js';

export const index = 12;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/posts/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/posts/+page.server.ts";
export const imports = ["_app/immutable/nodes/12.jXnEB-VQ.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/0R0_Ar2M.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/DpkYBiYq.js","_app/immutable/chunks/DiNyOgzF.js","_app/immutable/chunks/DHGorhT9.js"];
export const stylesheets = [];
export const fonts = [];
