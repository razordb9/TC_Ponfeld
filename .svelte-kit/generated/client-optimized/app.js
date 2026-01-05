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
	() => import('./nodes/18')
];

export const server_loads = [0,3];

export const dictionary = {
		"/": [~5],
		"/AGB": [6],
		"/Blog": [~7],
		"/Impressum": [8],
		"/Scroller": [9,[2]],
		"/admin": [10,[3]],
		"/admin/design": [11,[3]],
		"/admin/posts": [~12,[3]],
		"/admin/posts/create": [15,[3]],
		"/admin/posts/[slug]": [~13,[3]],
		"/admin/posts/[slug]/edit": [~14,[3]],
		"/admin/users": [16,[3,4]],
		"/admin/users/create": [17,[3,4]],
		"/auth/login": [18]
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