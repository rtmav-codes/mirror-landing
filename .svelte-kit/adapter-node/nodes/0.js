

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.CqEk2uk4.js","_app/immutable/chunks/disclose-version.BtCY03eL.js","_app/immutable/chunks/runtime.CZqcSDvm.js"];
export const stylesheets = ["_app/immutable/assets/0.BDg4FOhJ.css"];
export const fonts = [];
