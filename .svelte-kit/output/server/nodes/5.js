import * as server from '../entries/pages/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.wx0xSQeJ.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/69_IOA4Y.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/DMX7pA8b.js","_app/immutable/chunks/HMMe1zAL.js","_app/immutable/chunks/DCj9DS5B.js","_app/immutable/chunks/CuhWWi5F.js","_app/immutable/chunks/BkABawqT.js","_app/immutable/chunks/DM3MFS-J.js","_app/immutable/chunks/BWfxijNJ.js","_app/immutable/chunks/Cjnqvc_C.js","_app/immutable/chunks/DFCfVBpK.js","_app/immutable/chunks/DI86gTbu.js","_app/immutable/chunks/CSDrxIF3.js"];
export const stylesheets = ["_app/immutable/assets/custom_styles.0A_trXbW.css"];
export const fonts = [];
