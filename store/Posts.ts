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
            sys {
              id
            }
          }
        }
      }
      `
  }),
  getters: {
    getPosts(){
      return this.posts
    }
  },
  actions: {
     fetchPost(slug: String) {
      const processPost = () => {
        const post = this.posts.find((p) => p.slug === slug);

        const index = this.posts.indexOf(post);
        const prev = index + 1;
        const next = index - 1;

        if (prev > 0 && prev < this.posts.length) {
          this.setPrevPost(this.posts[prev]);
        } else {
          this.setPrevPost(null);
        }

        if (next >= 0 && next < this.posts.length) {
          this.setNextPost(this.posts[next]);
        } else {
          this.setNextPost(null);
        }

        return post;
      };

      if (this.posts?.length > 0) {
        return processPost();
      }
      else {
        return null
      }
    },
    setPosts(value: [Object] | any) {
      this.posts = value;
    },
    // setCurrentPost(value: String | any) {
    //   this.currentPost = value;
    // },
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
