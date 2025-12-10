import * as server from '../entries/pages/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.Bs6FeTp6.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/69_IOA4Y.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/DhQlDxi7.js","_app/immutable/chunks/DwVVnNVU.js","_app/immutable/chunks/upquREIO.js","_app/immutable/chunks/C_3ajLsI.js","_app/immutable/chunks/CRakC5Jn.js","_app/immutable/chunks/xyKh6EvY.js","_app/immutable/chunks/D0xuNrLY.js","_app/immutable/chunks/I6AyiWhU.js","_app/immutable/chunks/DlJEciqm.js","_app/immutable/chunks/CLFOvGGW.js"];
export const stylesheets = ["_app/immutable/assets/custom_styles.CqZGM7MA.css"];
export const fonts = [];
