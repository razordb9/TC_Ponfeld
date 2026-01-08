export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["Tennispllatz.jpg","avatar_male.jpg","error.png","instagram.svg","logo.png","logo_sponsor.png","logo_transparent_bg.png","petzner.png","robots.txt"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png",".svg":"image/svg+xml",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.SoFmIaD4.js",app:"_app/immutable/entry/app.CnzmMl6j.js",imports:["_app/immutable/entry/start.SoFmIaD4.js","_app/immutable/chunks/BDHqCrJV.js","_app/immutable/chunks/ODBfPBO3.js","_app/immutable/chunks/BGUecI9D.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/Csn-qpoN.js","_app/immutable/chunks/CUGkdgwm.js","_app/immutable/chunks/CneM0csk.js","_app/immutable/entry/app.CnzmMl6j.js","_app/immutable/chunks/BGUecI9D.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/Csn-qpoN.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/ODBfPBO3.js","_app/immutable/chunks/CUGkdgwm.js","_app/immutable/chunks/CneM0csk.js","_app/immutable/chunks/BFa-oi8p.js","_app/immutable/chunks/BijCVKFR.js","_app/immutable/chunks/CTdQcSV1.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js')),
			__memo(() => import('./nodes/12.js')),
			__memo(() => import('./nodes/13.js')),
			__memo(() => import('./nodes/14.js')),
			__memo(() => import('./nodes/15.js')),
			__memo(() => import('./nodes/16.js')),
			__memo(() => import('./nodes/17.js')),
			__memo(() => import('./nodes/18.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/AGB",
				pattern: /^\/AGB\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/Blog",
				pattern: /^\/Blog\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/Impressum",
				pattern: /^\/Impressum\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/Scroller",
				pattern: /^\/Scroller\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/admin",
				pattern: /^\/admin\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/admin/design",
				pattern: /^\/admin\/design\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/admin/posts",
				pattern: /^\/admin\/posts\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/admin/posts/create",
				pattern: /^\/admin\/posts\/create\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/admin/posts/[slug]",
				pattern: /^\/admin\/posts\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,3,], errors: [1,,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/admin/posts/[slug]/edit",
				pattern: /^\/admin\/posts\/([^/]+?)\/edit\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,3,], errors: [1,,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/admin/users",
				pattern: /^\/admin\/users\/?$/,
				params: [],
				page: { layouts: [0,3,4,], errors: [1,,,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/admin/users/create",
				pattern: /^\/admin\/users\/create\/?$/,
				params: [],
				page: { layouts: [0,3,4,], errors: [1,,,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/auth/login",
				pattern: /^\/auth\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 18 },
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
