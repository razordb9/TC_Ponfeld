import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.Cm5HsL3n.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/DMX7pA8b.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/DM3MFS-J.js","_app/immutable/chunks/69_IOA4Y.js","_app/immutable/chunks/HMMe1zAL.js","_app/immutable/chunks/BkABawqT.js","_app/immutable/chunks/DCj9DS5B.js","_app/immutable/chunks/Cjnqvc_C.js","_app/immutable/chunks/DI86gTbu.js","_app/immutable/chunks/v2bYc8lV.js"];
export const stylesheets = ["_app/immutable/assets/custom_styles.0A_trXbW.css"];
export const fonts = [];
