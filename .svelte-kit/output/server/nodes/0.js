

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const universal = {
  "ssr": false
};
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.BzCni8Q0.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/D7hLUln0.js","_app/immutable/chunks/DDWCo8JX.js","_app/immutable/chunks/CAxkIQj2.js","_app/immutable/chunks/jv7QeSn4.js"];
export const stylesheets = ["_app/immutable/assets/project.DZb63fkZ.css","_app/immutable/assets/0.meeW7VJK.css"];
export const fonts = [];
