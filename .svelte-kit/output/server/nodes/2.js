import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.DXeq742Z.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/Dvb8jiWV.js","_app/immutable/chunks/D2YE-E88.js","_app/immutable/chunks/BgmP_f9r.js","_app/immutable/chunks/DeITYhp7.js","_app/immutable/chunks/nrLauSKl.js","_app/immutable/chunks/9wNefs1z.js","_app/immutable/chunks/rVp26LjG.js","_app/immutable/chunks/BUIQfYDN.js"];
export const stylesheets = ["_app/immutable/assets/custom_styles.DIa8Lgby.css","_app/immutable/assets/2.BkZDj_DB.css"];
export const fonts = [];
