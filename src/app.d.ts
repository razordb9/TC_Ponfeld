// See https://svelte.dev/docs/kit/types#app.d.ts

import type { User, Session } from "better-auth";

// for information about these interfaces
declare global {
	namespace App {
		interface Platform {
            env: Env
            cf: CfProperties
            ctx: ExecutionContext
			caches: { default: Cache } & CacheStorage 
			context: { waitUntil(promise: Promise<any>): void; }
        }
		interface Locals {
			user: ExtendedUser | null,
			session: Session
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
		interface ExtendedUser extends User{
			isAdmin: boolean,
		}
		interface BlogPost {
			title: string,
			html: string,
			slug: string,
			markdown: string,
			createdAt: Date,
			updatedAt: number,
			authorId: string
		}

	}
}



export {Locals, ExtendedUser, Platform, BlogPost};
