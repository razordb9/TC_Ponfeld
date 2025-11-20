import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.CxxLp-O2.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/BXMoDmWe.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/MLM6vQ92.js","_app/immutable/chunks/69_IOA4Y.js","_app/immutable/chunks/BwzExZ-c.js","_app/immutable/chunks/CIgJqq8H.js","_app/immutable/chunks/C0emFRR5.js","_app/immutable/chunks/B_a2Eynt.js","_app/immutable/chunks/DMuQ7M6Y.js"];
export const stylesheets = ["_app/immutable/assets/0.BVsr34iE.css","_app/immutable/assets/custom_styles.0jBb2jw0.css"];
export const fonts = [];
