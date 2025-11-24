import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import * as schema from './schema';

export const local_db = (url: string): ReturnType<typeof drizzle<typeof schema>> => {
    const client = new Database(url);
    return drizzle(client, {schema})
}