interface Posts {
  posts: [Object] | any;
  prevPost: Object | any;
  nextPost: Object | any;
  postsQuery: String;
}
import { defineStore } from "pinia";

export const usePosts = defineStore("posts", {
  state: (): Posts => ({
    posts: [],
    prevPost: null,
    nextPost: null,
    postsQuery: `
      query {
        posts: blogPostCollection(limit: 10) {
          items {
            title
            body
            slug
            excerpt
            tags
            meta: contentfulMetadata {
              tags {
                id
                name
              }
            }
            images: featuredImageCollection {
              items {
                title
                url
              }
            }
          }
        }
      }
      `
  }),
   
  actions: {
    setPosts(value: [Object] | any) {
      this.posts = value;
    },
    setPrevPost(value: Object | null) {
      this.prevPost = value;
    },
    setNextPost(value: Object | null) {
      this.nextPost = value;
    },
  },
});
