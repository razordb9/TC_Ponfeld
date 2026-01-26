import { d as db, b as blogPost, u as user } from "./index2.js";
import { eq } from "drizzle-orm";
class Blogapi {
  /**
   *
   */
  platform;
  db;
  constructor(platform) {
    this.platform = platform;
    this.db = db({ platform: this.platform });
  }
  // done
  createPost = async (postData) => {
    try {
      const postResult = await this.db.insert(blogPost).values(postData).returning();
      return {
        success: true,
        post: postResult[0]
      };
    } catch (e) {
      return {
        success: false,
        error: e instanceof Error ? e.message : "Error creating post"
      };
    }
  };
  //done
  readPosts = async () => {
    try {
      const result = await this.db.select().from(blogPost).all();
      return {
        success: true,
        posts: result
      };
    } catch (e) {
      return {
        success: false,
        error: e instanceof Error ? e.message : "Error reading post"
      };
    }
  };
  //done
  readPost = async (slug) => {
    try {
      const result = await this.db.select({
        id: blogPost.id,
        title: blogPost.title,
        slug: blogPost.slug,
        html: blogPost.html,
        createdAt: blogPost.createdAt,
        updatedAt: blogPost.updatedAt,
        authorName: user.name
      }).from(blogPost).innerJoin(user, eq(blogPost.authorId, user.id)).where(eq(blogPost.slug, slug)).limit(1);
      if (result && result.length > 0) {
        return {
          success: true,
          post: result[0]
        };
      } else {
        return {
          success: false,
          error: "Error readingpost with slug: " + slug
        };
      }
    } catch (e) {
      return {
        success: false,
        error: e instanceof Error ? e.message : "Error reading post"
      };
    }
  };
  //patch
  updatePost = async (postData, orgSlug) => {
    try {
      console.log("slut ", postData.slug);
      const updatePost = await this.db.update(blogPost).set({ ...postData, updated_at: /* @__PURE__ */ new Date() }).where(eq(blogPost.slug, orgSlug)).returning();
      console.log("updatepost ", updatePost);
      return {
        success: true,
        post: updatePost[0]
      };
    } catch (e) {
      return {
        success: false,
        error: e instanceof Error ? e.message : "Error updating post"
      };
    }
  };
  //done
  deletePost = async (slug) => {
    try {
      const result = await this.db.delete(blogPost).where(eq(blogPost.slug, slug)).limit(1).returning();
      if (result) {
        return {
          success: true,
          post: result
        };
      } else {
        return {
          success: false,
          error: "Error deleting post with slug: " + slug
        };
      }
    } catch (e) {
      return {
        success: false,
        error: e instanceof Error ? e.message : "Error deleting post"
      };
    }
  };
}
export {
  Blogapi as B
};
