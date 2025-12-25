import { drizzle } from 'drizzle-orm/d1';
import * as schema from './schema';
import type { Platform } from '../../../app';
import { local_db } from '../local_db';

export type DBType = ReturnType<typeof drizzle<typeof schema>> | ReturnType<typeof local_db>


export const db = ({platform}:{platform: Platform}):DBType => {
    if(!platform) {
        throw new Error ("Platform not found");
    }
    if (import.meta.env.MODE === 'development') {
        return local_db(platform.env.DATABASE_URL);
    } else {
        let connection = platform.env["tc_ponfeld"];
        return drizzle(connection, {schema})        
    }
}

