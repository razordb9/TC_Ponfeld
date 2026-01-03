import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.Djg1ack5.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/DFBGG8-K.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/zchhYFdu.js","_app/immutable/chunks/BgBCFbPb.js","_app/immutable/chunks/69_IOA4Y.js","_app/immutable/chunks/DY_jFzJk.js","_app/immutable/chunks/CnZMGtJo.js","_app/immutable/chunks/D_Gso9Y0.js","_app/immutable/chunks/CZxi-XHx.js","_app/immutable/chunks/T0NLYfKp.js","_app/immutable/chunks/7oIbfcI0.js","_app/immutable/chunks/9BzUVAYX.js","_app/immutable/chunks/D9B4Nryy.js","_app/immutable/chunks/CmeEZew-.js","_app/immutable/chunks/v2bYc8lV.js"];
export const stylesheets = ["_app/immutable/assets/custom_styles.BGRpN6LN.css"];
export const fonts = [];
