export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18'),
	() => import('./nodes/19'),
	() => import('./nodes/20')
];

export const server_loads = [0,2,3];

export const dictionary = {
		"/": [~5],
		"/AGB": [14],
		"/Blog": [~18],
		"/Impressum": [19],
		"/Scroller": [20,[4]],
		"/admin": [~6,[2]],
		"/admin/design": [7,[2]],
		"/admin/posts": [~8,[2]],
		"/admin/posts/create": [~9,[2]],
		"/admin/posts/[slug]": [~10,[2]],
		"/admin/posts/[slug]/edit": [~11,[2]],
		"/admin/users": [~12,[2,3]],
		"/admin/users/create": [~13,[2,3]],
		"/auth/forgotpassword": [~15],
		"/auth/login": [~16],
		"/auth/resetpassword": [17]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
	
	reroute: (() => {}),
	transport: {}
};

export const decoders = Object.fromEntries(Object.entries(hooks.transport).map(([k, v]) => [k, v.decode]));
export const encoders = Object.fromEntries(Object.entries(hooks.transport).map(([k, v]) => [k, v.encode]));

export const hash = false;

export const decode = (type, value) => decoders[type](value);

export { default as root } from '../root.js';