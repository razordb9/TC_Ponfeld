import * as server from '../entries/pages/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.dHdfNjSF.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/BXMoDmWe.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/MLM6vQ92.js","_app/immutable/chunks/BwzExZ-c.js","_app/immutable/chunks/CIgJqq8H.js","_app/immutable/chunks/BrAuS5Zh.js","_app/immutable/chunks/BFDgNCUR.js","_app/immutable/chunks/C0emFRR5.js","_app/immutable/chunks/CRLTAYgt.js","_app/immutable/chunks/B_a2Eynt.js","_app/immutable/chunks/CuqBbPPh.js"];
export const stylesheets = ["_app/immutable/assets/custom_styles.0jBb2jw0.css"];
export const fonts = [];
