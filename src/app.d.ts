// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}

		interface Route {
			path:string,
			name:string
		}

		interface BoardMember {
			name: string,
			function: string,
			picture: string,
			about: string
		}
	}
}



export {Route, BoardMember};
