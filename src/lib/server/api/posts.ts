import  type { Platform, BlogPost } from "../../../app.d.ts";
import { db, type DBType} from '$lib/server/db';
import { blogPost } from '$lib/server/db/schema';
import { eq } from "drizzle-orm";


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
    public readPosts = async():Promise<{success: boolean, posts?: BlogPost[], error?: string}>  => {
        try {
            const result: BlogPost[] = await this.db.select().from(blogPost).all();
            return {
                success: true,
                posts: result
            }
        } catch (e: any) {
            return {
                success: false,
                error: e instanceof Error?e.message: "Error reading post"
            }
        }
    }

    //done
    public readPost = async(slug: string):Promise<{success: boolean, post?: BlogPost[], error?: string}>  => {
        try {
            const result: BlogPost[] = await this.db.select().from(blogPost).where(eq(blogPost.slug, slug)).limit(1);
            // console.log("APi result ", result);
            if (result && result.length > 0) {
                return {
                    success: true,
                    post: result[0]
                }
            } else {
                return {
                    success: false,
                    error: "Error readingpost with slug: " + slug 
                }
            }
        } catch (e: any) {
            return {
                success: false,
                error: e instanceof Error?e.message: "Error reading post"
            }
        }
    }

    //patch
    public updatePost = async(postData: Partial<BlogPost>, orgSlug: string):Promise<{success: boolean, post?: BlogPost, error?: string}> => {
        try {
            console.log("slut ", postData.slug);
            const updatePost: BlogPost[] = await this.db.update(blogPost).set({...postData, updated_at: new Date()}).where(eq(blogPost.slug, orgSlug)).returning();
            console.log("updatepost ", updatePost)
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
    public deletePost = async(slug: string):Promise<{success: boolean, post?: BlogPost, error?: string}> => {
        try {
            const result: BlogPost = await this.db.delete(blogPost).where(eq(blogPost.slug, slug)).limit(1).returning();
            if (result) {
                return {
                    success: true,
                    post: result
                }
            } else {
                return {
                    success: false,
                    error: "Error deleting post with slug: " + slug 
                }
            }
        } catch (e: any) {
            return {
                success: false,
                error: e instanceof Error?e.message: "Error deleting post"
            }
        }
    }
} 