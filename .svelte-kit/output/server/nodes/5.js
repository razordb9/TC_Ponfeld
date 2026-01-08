import * as server from '../entries/pages/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.D_qTtFjm.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/BGUecI9D.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/Csn-qpoN.js","_app/immutable/chunks/DFJ5hpEc.js","_app/immutable/chunks/N6U3tOuG.js","_app/immutable/chunks/D9hPhtd0.js","_app/immutable/chunks/9BzUVAYX.js","_app/immutable/chunks/Drt5WWuf.js","_app/immutable/chunks/ODBfPBO3.js","_app/immutable/chunks/CUGkdgwm.js","_app/immutable/chunks/CneM0csk.js","_app/immutable/chunks/ClgXlx1M.js","_app/immutable/chunks/BijCVKFR.js","_app/immutable/chunks/BVWqR78I.js","_app/immutable/chunks/BFa-oi8p.js","_app/immutable/chunks/B7RfEUt_.js","_app/immutable/chunks/BDHqCrJV.js"];
export const stylesheets = ["_app/immutable/assets/5.vC72MC1V.css","_app/immutable/assets/custom_styles.BGRpN6LN.css"];
export const fonts = [];
