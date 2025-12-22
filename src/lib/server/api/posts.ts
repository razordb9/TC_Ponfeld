import type { Platform, BlogPost } from "../../../app";
import { db, DBType} from '$lib/server/db';
import { blogPost } from '$lib/server/db/schema.ts';


export class Blogapi  {
    /**
     *
     */
    private platform: Platform;
    private db: DBType;
    constructor(platform: Platform) {
        this.platform = platform;
        this.db = db({platform: this.platform})
        
    }

    public createPost = async(postData: BlogPost):Promise<{success: boolean, post?: BlogPost, error?: string}>=> {
        try {
            const postResult: BlogPost[] = await this.db.insert(blogPost).values(postData).returning();
            return {
                success: true,
                post: postResult[0]
            }
        } catch (e: any) {
            return {
                success: false,
                error: e instanceof Error?e.message: "Error creating post"
            }
        }
    }
} 