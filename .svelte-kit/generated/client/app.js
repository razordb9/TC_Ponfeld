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
	() => import('./nodes/17')
];

export const server_loads = [0,3,4];

export const dictionary = {
		"/": [~5],
		"/AGB": [6],
		"/Impressum": [7],
		"/Scroller": [8,[2]],
		"/admin": [~9,[3]],
		"/admin/design": [10,[3]],
		"/admin/posts": [~11,[3]],
		"/admin/posts/create": [~14,[3]],
		"/admin/posts/[slug]": [~12,[3]],
		"/admin/posts/[slug]/edit": [~13,[3]],
		"/admin/users": [~15,[3,4]],
		"/admin/users/create": [~16,[3,4]],
		"/auth/login": [~17]
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