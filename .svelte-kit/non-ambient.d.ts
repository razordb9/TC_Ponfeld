
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
		RouteId(): "/" | "/AGB" | "/Impressum";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/AGB": Record<string, never>;
			"/Impressum": Record<string, never>
		};
		Pathname(): "/" | "/AGB" | "/AGB/" | "/Impressum" | "/Impressum/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/Tennispllatz.jpg" | "/avatar_female.jpg" | "/avatar_male.jpg" | "/error.png" | "/instagram.svg" | "/logo.png" | "/logo_sponsor.png" | "/logo_transparent_bg.png" | "/petzner.png" | "/robots.txt" | string & {};
	}
}