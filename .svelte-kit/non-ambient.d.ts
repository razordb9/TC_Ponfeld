
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/AGB" | "/Blog" | "/Impressum" | "/Scroller" | "/admin" | "/admin/design" | "/admin/posts" | "/admin/posts/create" | "/admin/posts/[slug]" | "/admin/posts/[slug]/edit" | "/admin/users" | "/admin/users/create" | "/auth" | "/auth/forgotpassword" | "/auth/login" | "/auth/resetpassword";
		RouteParams(): {
			"/admin/posts/[slug]": { slug: string };
			"/admin/posts/[slug]/edit": { slug: string }
		};
		LayoutParams(): {
			"/": { slug?: string };
			"/AGB": Record<string, never>;
			"/Blog": Record<string, never>;
			"/Impressum": Record<string, never>;
			"/Scroller": Record<string, never>;
			"/admin": { slug?: string };
			"/admin/design": Record<string, never>;
			"/admin/posts": { slug?: string };
			"/admin/posts/create": Record<string, never>;
			"/admin/posts/[slug]": { slug: string };
			"/admin/posts/[slug]/edit": { slug: string };
			"/admin/users": Record<string, never>;
			"/admin/users/create": Record<string, never>;
			"/auth": Record<string, never>;
			"/auth/forgotpassword": Record<string, never>;
			"/auth/login": Record<string, never>;
			"/auth/resetpassword": Record<string, never>
		};
		Pathname(): "/" | "/AGB" | "/AGB/" | "/Blog" | "/Blog/" | "/Impressum" | "/Impressum/" | "/Scroller" | "/Scroller/" | "/admin" | "/admin/" | "/admin/design" | "/admin/design/" | "/admin/posts" | "/admin/posts/" | "/admin/posts/create" | "/admin/posts/create/" | `/admin/posts/${string}` & {} | `/admin/posts/${string}/` & {} | `/admin/posts/${string}/edit` & {} | `/admin/posts/${string}/edit/` & {} | "/admin/users" | "/admin/users/" | "/admin/users/create" | "/admin/users/create/" | "/auth" | "/auth/" | "/auth/forgotpassword" | "/auth/forgotpassword/" | "/auth/login" | "/auth/login/" | "/auth/resetpassword" | "/auth/resetpassword/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/Tennispllatz.jpg" | "/avatar_male.jpg" | "/error.png" | "/instagram.svg" | "/logo.png" | "/logo_sponsor.png" | "/logo_transparent_bg.png" | "/petzner.png" | "/robots.txt" | string & {};
	}
}