interface Posts {
  posts: [Object] | any;
  parsedContent: String | any;
  prevPost: Object | any;
  nextPost: Object | any;
  postsQuery: String;
}
import { defineStore } from "pinia";

export const usePosts = defineStore("posts", {
  state: (): Posts => ({
    posts: [],
    parsedContent: null, //Contentful CMS content comes in split nodes JSON format 
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
            content {
              json
            }
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
    setParsedContent(value: String | any) {
      this.parsedContent = value;
    },
    setPrevPost(value: Object | null) {
      this.prevPost = value;
    },
    setNextPost(value: Object | null) {
      this.nextPost = value;
    },
  },
});
