import * as server from '../entries/pages/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.BL2yWSCo.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/69_IOA4Y.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/BRSvBzPw.js","_app/immutable/chunks/DM-GjB48.js","_app/immutable/chunks/CpYgTGEx.js","_app/immutable/chunks/Dl0jaFyu.js","_app/immutable/chunks/kQsdP3Qq.js","_app/immutable/chunks/CPl900_u.js","_app/immutable/chunks/DpXeYgHV.js","_app/immutable/chunks/CoFLJScb.js","_app/immutable/chunks/9BzUVAYX.js","_app/immutable/chunks/BJ4MwYNG.js","_app/immutable/chunks/ZPpfmsrP.js","_app/immutable/chunks/DfGhNoSP.js","_app/immutable/chunks/CMTTldKZ.js","_app/immutable/chunks/DIOB9vc8.js"];
export const stylesheets = ["_app/immutable/assets/custom_styles.B0To-WsS.css"];
export const fonts = [];
