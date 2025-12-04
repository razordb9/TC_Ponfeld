import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.CU8bajbz.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/CxrVmGQ8.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/BopFfJM5.js","_app/immutable/chunks/69_IOA4Y.js","_app/immutable/chunks/D4DGIAHa.js","_app/immutable/chunks/C6Y-3m6V.js","_app/immutable/chunks/ClK69JNM.js","_app/immutable/chunks/m3KSBnZI.js","_app/immutable/chunks/ZodYLb2j.js","_app/immutable/chunks/v2bYc8lV.js"];
export const stylesheets = ["_app/immutable/assets/custom_styles.DBuqnjmR.css"];
export const fonts = [];
