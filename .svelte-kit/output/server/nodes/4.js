import * as server from '../entries/pages/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.DKHW6lah.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/xvY60Wq7.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/CZPmJO7B.js","_app/immutable/chunks/C6WoGMSm.js","_app/immutable/chunks/BfCaSyTy.js","_app/immutable/chunks/jPJP2TQi.js","_app/immutable/chunks/C_Kp0wSb.js","_app/immutable/chunks/BqoPXeZt.js","_app/immutable/chunks/Dj_2yWtg.js","_app/immutable/chunks/BHPPED1C.js","_app/immutable/chunks/DBKrvvuL.js","_app/immutable/chunks/DEcgcqw6.js"];
export const stylesheets = ["_app/immutable/assets/4.2hh3ehOC.css","_app/immutable/assets/custom_styles.B511r0tp.css"];
export const fonts = [];
