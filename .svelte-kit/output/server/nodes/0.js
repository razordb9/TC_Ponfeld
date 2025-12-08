import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.x7eqPFqX.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/BzaMqOHg.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/Dmxv7Y2o.js","_app/immutable/chunks/69_IOA4Y.js","_app/immutable/chunks/DNRIR59j.js","_app/immutable/chunks/DBIU9UIB.js","_app/immutable/chunks/yG0890Sc.js","_app/immutable/chunks/Dzq61bo8.js","_app/immutable/chunks/CACPNXsp.js","_app/immutable/chunks/v2bYc8lV.js"];
export const stylesheets = ["_app/immutable/assets/custom_styles.3bZtHIdv.css"];
export const fonts = [];
