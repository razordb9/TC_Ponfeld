import * as server from '../entries/pages/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.BXMfuygo.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/69_IOA4Y.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/DFBGG8-K.js","_app/immutable/chunks/DY_jFzJk.js","_app/immutable/chunks/D_Gso9Y0.js","_app/immutable/chunks/BF-pqLtF.js","_app/immutable/chunks/CmeEZew-.js","_app/immutable/chunks/CnZMGtJo.js","_app/immutable/chunks/zchhYFdu.js","_app/immutable/chunks/BgBCFbPb.js","_app/immutable/chunks/OrkO7sU3.js","_app/immutable/chunks/9BzUVAYX.js","_app/immutable/chunks/-Z0YRJiS.js","_app/immutable/chunks/CZxi-XHx.js","_app/immutable/chunks/T0NLYfKp.js","_app/immutable/chunks/CHxwRZ4A.js","_app/immutable/chunks/D9B4Nryy.js","_app/immutable/chunks/wN2ytA05.js"];
export const stylesheets = ["_app/immutable/assets/custom_styles.BGRpN6LN.css"];
export const fonts = [];
