interface Posts {
  posts: [Object] | any;
  prevPost: Object | any;
  nextPost: Object | any;
}
import { defineStore } from "pinia";
import { $contentApi, defineGqlRequest } from "~/addons/utils/Axios";
// import gql from "graphql-tag";

export const usePosts = defineStore("posts", {
  state: (): Posts => ({
    posts: [],
    prevPost: null,
    nextPost: null,
  }),
  actions: {
    async fetchPosts(config) {

      // if (this.posts?.length > 0) {
      //   return this.posts;
      // } else {
        const { data } = await defineGqlRequest(config).get("")
          // "operationName": "Nec",
        //   query: query,
        //   variables: {
        //     necId: "nec",
        //   },
        // });
        // console.log(data.data.necCollection.items);
        // this.setPosts(data.data.blogPostCollection.items);
        return data;
      // }
      
    },
    // async fetchPosts(config) {
    //   const query = `
    //     query {
    //       blogPostCollection {
    //         items {
    //           title
    //           sys {
    //             id
    //             publishedAt
    //           }
    //         }
    //       }
    //     }
    //   `;

    //   if (this.posts?.length > 0) {
    //     return this.posts;
    //   } else {
    //     const { data } = await defineGqlRequest(config).post("", {
    //       // "operationName": "Nec",
    //       query: query,
    //       variables: {
    //         necId: "nec",
    //       },
    //     });
    //     // console.log(data.data.necCollection.items);
    //     this.setPosts(data.data.blogPostCollection.items);
    //     return data.data.blogPostCollection.items;
    //   }
    // },

    // async fetchPosts() {
    //   if (this.posts?.length > 0) {
    //     return this.posts;
    //   } else {
    //     const { data } = await $contentApi.get("posts/");
    //     this.setPosts(data);
    //     return data;
    //   }
    // },
    
    async fetchPost(slug: String) {
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
      } else {
        const posts = await this.fetchPosts();
        if (posts) {
          return processPost();
        }
      }
    },
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
