import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "./server/db";

// TODO figure above line out
export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "sqlite",
    }),
    user: {
       additionalFields: {
            isAdmin: {
              type: "boolean",
              defaultValue: false,
              input: true
            } 
        }
    },
    emailAndPassword: {
        enabled: true,
        autoSignIn: false
    }
});