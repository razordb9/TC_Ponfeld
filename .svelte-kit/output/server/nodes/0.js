import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.aicfn31h.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/BRSvBzPw.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/DpXeYgHV.js","_app/immutable/chunks/69_IOA4Y.js","_app/immutable/chunks/DM-GjB48.js","_app/immutable/chunks/CPl900_u.js","_app/immutable/chunks/CpYgTGEx.js","_app/immutable/chunks/ZPpfmsrP.js","_app/immutable/chunks/D7YaWMru.js","_app/immutable/chunks/9BzUVAYX.js","_app/immutable/chunks/CMTTldKZ.js","_app/immutable/chunks/kQsdP3Qq.js","_app/immutable/chunks/v2bYc8lV.js"];
export const stylesheets = ["_app/immutable/assets/custom_styles.B0To-WsS.css"];
export const fonts = [];
