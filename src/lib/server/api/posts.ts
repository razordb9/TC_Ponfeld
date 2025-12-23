import { type Platform, BlogPost } from "../../../app.d.ts";
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
    // done
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

    //done
    public readPost = async():Promise<{success: boolean, post?: BlogPost, error?: string}> => {
        try {
            const postRead: BlogPost[] = await this.db.select().from(blogPost).all();
            return {
                success: true,
                post: postRead[0]
            }
        } catch (e: any) {
            return {
                success: false,
                error: e instanceof Error?e.message: "Error reading post"
            }
        }
    }

    public updatePost = async(postData: BlogPost):Promise<{success: boolean, post?: BlogPost, error?: string}> => {
        try {
            const updatePost: BlogPost[] = await this.db.update(blogPost).set({title: postData.title, html: postData.html, updatedAt: postData.updatedAt, authorId: postData.authorId}).where(eq(postData.id, blogPost.id)).returning();
            //, html: postData.html, updatedAt: postData.updatedAt, authorId: postData.authorId
            return {
                success: true,
                post: updatePost[0]
            }
        } catch (e: any) {
            return {
                success: false,
                error: e instanceof Error?e.message: "Error updating post"
            }
        }
    }

    //done
    public deletePost = async(postData: BlogPost):Promise<{success: boolean, post?: BlogPost, error?: string}> => {
        try {
            const deletePost: BlogPost[] = await this.db.delete(blogPost).where(eq(postData.id, blogPost.id)).returning();
            return {
                success: true,
                post: deletePost[0]
            }
        } catch (e: any) {
            return {
                success: false,
                error: e instanceof Error?e.message: "Error deleting post"
            }
        }
    }
} 