import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.BZ2qCCUx.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/BGUecI9D.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/CUGkdgwm.js","_app/immutable/chunks/CneM0csk.js","_app/immutable/chunks/69_IOA4Y.js","_app/immutable/chunks/DFJ5hpEc.js","_app/immutable/chunks/Csn-qpoN.js","_app/immutable/chunks/N6U3tOuG.js","_app/immutable/chunks/BVWqR78I.js","_app/immutable/chunks/BFa-oi8p.js","_app/immutable/chunks/D9hPhtd0.js","_app/immutable/chunks/9BzUVAYX.js","_app/immutable/chunks/BDHqCrJV.js","_app/immutable/chunks/ODBfPBO3.js","_app/immutable/chunks/v2bYc8lV.js"];
export const stylesheets = ["_app/immutable/assets/custom_styles.BGRpN6LN.css"];
export const fonts = [];
