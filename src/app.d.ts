// See https://svelte.dev/docs/kit/types#app.d.ts

import type { User, Session } from "better-auth";

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			user: ExtendedUser,
			session: Session
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
		interface ExtendedUser extends User{
			isAdmin: boolean,
		}
		
	}
}



export {Locals, ExtendedUser};
