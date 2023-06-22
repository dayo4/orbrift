interface Posts {
  projects: [Object] | any;
  parsedContent: String | any;
  prevPost: Object | any;
  nextPost: Object | any;
  postsQuery: String;
}
import { defineStore } from "pinia";

export const usePosts = defineStore("projects", {
  state: (): Posts => ({
    projects: [],
    parsedContent: null, //Contentful CMS content comes in split nodes JSON format 
    prevPost: null,
    nextPost: null,
    postsQuery: `
      query {
        projects: blogPostCollection(limit: 10) {
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
      return this.projects
    }
  },
  actions: {
     fetchPost(slug: String) {
      const processPost = () => {
        const post = this.projects.find((p) => p.slug === slug);

        const index = this.projects.indexOf(post);
        const prev = index + 1;
        const next = index - 1;

        if (prev > 0 && prev < this.projects.length) {
          this.setPrevPost(this.projects[prev]);
        } else {
          this.setPrevPost(null);
        }

        if (next >= 0 && next < this.projects.length) {
          this.setNextPost(this.projects[next]);
        } else {
          this.setNextPost(null);
        }

        return post;
      };

      if (this.projects?.length > 0) {
        return processPost();
      }
      else {
        return null
      }
    },
    setPosts(value: [Object] | any) {
      this.projects = value;
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
