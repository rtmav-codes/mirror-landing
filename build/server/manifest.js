const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["contact.png","dylan.png","favicon.ico","globe.png","linkedin.png","logo.png","mirrors.png","pinnacle.png","rotem.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.C0R0FIuX.js","app":"_app/immutable/entry/app.C5AP-sxR.js","imports":["_app/immutable/entry/start.C0R0FIuX.js","_app/immutable/chunks/entry.CF2vRDAH.js","_app/immutable/chunks/runtime.CZqcSDvm.js","_app/immutable/chunks/index-client.NW8WvnXt.js","_app/immutable/entry/app.C5AP-sxR.js","_app/immutable/chunks/runtime.CZqcSDvm.js","_app/immutable/chunks/render.DniwnOBo.js","_app/immutable/chunks/disclose-version.BtCY03eL.js","_app/immutable/chunks/props.2FcZ-JfN.js","_app/immutable/chunks/index-client.NW8WvnXt.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-B9jVlAnt.js')),
			__memo(() => import('./chunks/1-9RIwfpKy.js')),
			__memo(() => import('./chunks/2-BLlcjwhy.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
