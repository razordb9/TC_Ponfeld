export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["Tennispllatz.jpg","avatar_female.jpg","avatar_male.jpg","error.png","instagram.svg","logo.png","logo_sponsor.png","logo_transparent_bg.png","robots.txt"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png",".svg":"image/svg+xml",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.7qLpHA_8.js",app:"_app/immutable/entry/app.DeS31Hfw.js",imports:["_app/immutable/entry/start.7qLpHA_8.js","_app/immutable/chunks/u4tEuth-.js","_app/immutable/chunks/D97kPReN.js","_app/immutable/chunks/D7hLUln0.js","_app/immutable/chunks/DDWCo8JX.js","_app/immutable/entry/app.DeS31Hfw.js","_app/immutable/chunks/D7hLUln0.js","_app/immutable/chunks/DDWCo8JX.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/D97kPReN.js","_app/immutable/chunks/fxJJJuoO.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/AGB",
				pattern: /^\/AGB\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/Impressum",
				pattern: /^\/Impressum\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
