

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const universal = {
  "ssr": false
};
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.bL8tjkXr.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/Dvb8jiWV.js","_app/immutable/chunks/DeITYhp7.js","_app/immutable/chunks/D2YE-E88.js","_app/immutable/chunks/BgmP_f9r.js"];
export const stylesheets = ["_app/immutable/assets/custom_styles.DIa8Lgby.css","_app/immutable/assets/0.B2mWLKhJ.css"];
export const fonts = [];
