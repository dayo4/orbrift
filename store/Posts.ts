interface Posts {
  posts: [Object] | any;
  prevPost: Object | any;
  nextPost: Object | any;
  // postsQuery: String;
}
import { defineStore } from "pinia";
import * as contentful from "contentful";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

export const usePosts = defineStore("posts", {
  state: (): Posts => ({
    posts: [],
    prevPost: null,
    nextPost: null,
    // postsQuery: `
    //   query {
    //     posts: blogPostCollection(limit: 10, order:sys_firstPublishedAt_DESC) {
    //       items {
    //         title
    //         content {
    //           json
    //           links {
    //             assets{
    //               block {
    //                 url
    //                 title
    //               }
    //             }
    //           }
    //         }
    //         body
    //         body2
    //         slug
    //         excerpt
    //         tags
    //         meta: contentfulMetadata {
    //           tags {
    //             id
    //             name
    //           }
    //         }
    //         images: featuredImageCollection {
    //           items {
    //             title
    //             url
    //           }
    //         }
    //       }
    //     }
    //   }
    //   `
  }),

  actions: {
    async getPosts(runtimeConfig) {
      const client = contentful.createClient({
        space: runtimeConfig.public.contentfulSpaceId,
        environment: "master",
        accessToken: runtimeConfig.public.contentfulDeliveryKey,
      });

      if (this.posts?.length > 0) {
        return this.posts;
      } else {
        const { items } = await client.getEntries({
          content_type: "blogPost",
          limit: 10,
          select: [
            "fields.title",
            "fields.featuredImage",
            "fields.content",
            "fields.excerpt",
            "fields.slug",
            "fields.title",
            "metadata.tags",
          ],
          order: ["-sys.createdAt"],
        });

        return items.map((item, i) => {
          const { title, slug, content, excerpt, featuredImage } = item.fields;
          const options = {
            renderNode: {
              "embedded-asset-block": (node) => {
                // Handle embedded assets (images, videos, etc.)
                return `<img src="${node.data.target.fields.file.url}" alt="${node.data.target.fields.file.url}" />`;
              },
              // You can add more custom renderers for other node types as needed
            },
          };
          return {
            title,
            slug,
            content: documentToHtmlString(content, options),
            excerpt,
            images: featuredImage,
            tags: item.metadata.tags,
          };
        });
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
