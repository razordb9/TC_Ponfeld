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
	() => import('./nodes/16')
];

export const server_loads = [0,3];

export const dictionary = {
		"/": [~4],
		"/AGB": [5],
		"/Impressum": [6],
		"/Scroller": [7,[2]],
		"/admin": [~8],
		"/admin/posts": [~9],
		"/admin/posts/create": [~12],
		"/admin/posts/[slug]": [~10],
		"/admin/posts/[slug]/edit": [~11],
		"/admin/users": [~13,[3]],
		"/admin/users/create": [~14,[3]],
		"/auth/login": [~15],
		"/auth/signup": [~16]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
	
	reroute: (() => {}),
	transport: {}
};

export const decoders = Object.fromEntries(Object.entries(hooks.transport).map(([k, v]) => [k, v.decode]));

export const hash = false;

export const decode = (type, value) => decoders[type](value);

export { default as root } from '../root.js';