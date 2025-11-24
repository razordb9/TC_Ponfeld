import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.CBfvvENd.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/xvY60Wq7.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/C_Kp0wSb.js","_app/immutable/chunks/69_IOA4Y.js","_app/immutable/chunks/CZPmJO7B.js","_app/immutable/chunks/jPJP2TQi.js","_app/immutable/chunks/C6WoGMSm.js","_app/immutable/chunks/Dj_2yWtg.js","_app/immutable/chunks/7tKdcede.js","_app/immutable/chunks/v2bYc8lV.js"];
export const stylesheets = ["_app/immutable/assets/custom_styles.DMkf_zIV.css"];
export const fonts = [];
