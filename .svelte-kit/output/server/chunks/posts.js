import { d as db, b as blogPost } from "./index3.js";
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
  readPost = async () => {
    try {
      const postRead = await this.db.select().from(blogPost).all();
      return {
        success: true,
        post: postRead[0]
      };
    } catch (e) {
      return {
        success: false,
        error: e instanceof Error ? e.message : "Error reading post"
      };
    }
  };
  updatePost = async (postData) => {
    try {
      const updatePost = await this.db.update(blogPost).set({ title: postData.title, html: postData.html, updatedAt: postData.updatedAt, authorId: postData.authorId }).where(eq(postData.id, blogPost.id)).returning();
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
  deletePost = async (postData) => {
    try {
      const deletePost = await this.db.delete(blogPost).where(eq(postData.id, blogPost.id)).returning();
      return {
        success: true,
        post: deletePost[0]
      };
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
