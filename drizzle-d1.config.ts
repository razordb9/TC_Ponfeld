import { defineConfig } from 'drizzle-kit';

if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL is not set');
if (!process.env.CLOUDFLARE_ACCOUNT_ID) throw new Error('CLOUDFLARE_ACCOUNT_ID is not set');
if (!process.env.CLOUDFLARE_DATABASE_ID) throw new Error('CLOUDFLARE_DATABASE_ID is not set');
if (!process.env.CLOUDFLARE_D1_TOKEN) throw new Error('CLOUDFLARE_D1_TOKEN is not set'); 


export default defineConfig({
  out: './drizzle',
  schema: './src/lib/server/db/schema.ts',
  dialect: 'sqlite',
  driver: 'd1-http',
  dbCredentials: {
    accountId: process.env.CLOUDFLARE_ACCOUNT_ID!,
    databaseId: process.env.CLOUDFLARE_DATABASE_ID!,
    token: process.env.CLOUDFLARE_D1_TOKEN!,
  },
});

// account ID
// b93600e40e6875cc6919281a3e0cc552

// database ID
// e7479b45-12e7-4cab-9513-2d3c39eeeef0

// API token 
// csGwphz3kjvc0Md9r7PHLa9gzDlEvSORZ8ytVAYL

// API token testing
// curl "https://api.cloudflare.com/client/v4/user/tokens/verify" -H "Authorization: Bearer csGwphz3kjvc0Md9r7PHLa9gzDlEvSORZ8ytVAYL"