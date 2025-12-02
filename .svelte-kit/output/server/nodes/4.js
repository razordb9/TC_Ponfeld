import * as server from '../entries/pages/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.BOJwyk1T.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/CxrVmGQ8.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/D4DGIAHa.js","_app/immutable/chunks/ClK69JNM.js","_app/immutable/chunks/BXdAYkD4.js","_app/immutable/chunks/C6Y-3m6V.js","_app/immutable/chunks/BopFfJM5.js","_app/immutable/chunks/B0gRplQ3.js","_app/immutable/chunks/m3KSBnZI.js","_app/immutable/chunks/CqkY_ZtC.js","_app/immutable/chunks/-C8ITU3c.js","_app/immutable/chunks/QsS7mi4Z.js"];
export const stylesheets = ["_app/immutable/assets/custom_styles.CyFPoD9E.css"];
export const fonts = [];
