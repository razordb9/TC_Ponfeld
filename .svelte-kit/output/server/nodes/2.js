import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.kzQvrfS2.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/D7hLUln0.js","_app/immutable/chunks/CAxkIQj2.js","_app/immutable/chunks/jv7QeSn4.js","_app/immutable/chunks/DDWCo8JX.js","_app/immutable/chunks/fxJJJuoO.js","_app/immutable/chunks/DAkWrROm.js","_app/immutable/chunks/u4tEuth-.js","_app/immutable/chunks/D97kPReN.js"];
export const stylesheets = ["_app/immutable/assets/project.DZb63fkZ.css","_app/immutable/assets/2.BLWO_hoT.css"];
export const fonts = [];
