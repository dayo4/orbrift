<template>
  <GlobalWrapper :header="true" :subText="true">
    <template #Title> Discover </template>
    <template v-if="post" #SubText>
      {{ post.title }}
    </template>

    <template #WrapperBody>
      {{ rr }}
      <div class="PostContainer">
        <!-- HEAD -->
        <div class="BlogPost xs12 sm10 md7">
          <div class="TopSection">
            <div class="PostImageWrapper">
              <img :src="post?.images.items[0].url" :alt="post?.images.items[0].title" class="PostImage"
                draggable="false" />
            </div>
            <h2 class="Title">
              {{ post?.title }}
            </h2>
          </div>
          <div class="Author">
            <img src="/defaults/usr/me.jpg" alt="Samuel Adeniyif" class="AuthorImage" draggable="false" />
            <span class="AuthorName">Samuel Adeniyi</span>
          </div>
        </div>

        <!-- Top META -->
        <ShareIcons />

        <!-- BODY -->
        <section v-html="parsedContent" class="Body xs12 sm10 md7 p-5"></section>

        <!-- Bottom Meta -->
        <ShareIcons />

        <!-- Next - Prev Buttons -->
        <div v-aos="'fade-right'" class="NP_postNavigation ml-2 mt-20">
          <router-link v-if="prevPost" :to="`/posts/${prevPost.slug}`" class="NP_navigationLink NP_previousLink">
            <div class="NP_thumbnailCont">
              <div class="NP_thumbnail">
                <img :src="prevPost.images.items[0].url" :alt="prevPost.images.items[0].title"
                  class="NP_thumbnailImage" />
              </div>
              <div class="NP_label">
                <i class="icon-left mr-2"></i>
                Prev Post
              </div>
            </div>
            <div class="NP_title">{{ prevPost.title }}</div>
          </router-link>
        </div>

        <div v-aos="'fade-left'" class="NP_postNavigation j-c-end mr-2">
          <router-link v-if="nextPost" :to="`/posts/${nextPost.slug}`" class="NP_navigationLink NP_nextLink">
            <div class="NP_thumbnailCont">
              <div class="NP_label">
                Next Post
                <i class="icon-right ml-2"></i>
              </div>
              <div class="NP_thumbnail">
                <img :src="nextPost.images.items[0].url" :alt="nextPost.images.items[0].title"
                  class="NP_thumbnailImage" />
              </div>
            </div>
            <div class="NP_title">{{ nextPost.title }}</div>
          </router-link>
        </div>
      </div>
    </template>
  </GlobalWrapper>
</template>
<script lang="ts">
import { usePosts } from "@/store";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

export default {
  setup() {
    const { $myMetaInfo } = useNuxtApp();
    const router = useRouter();
    const route = useRoute();
    const $Posts = usePosts();

    // const variables = ref({
    //   slug: route.params.slug,
    // });

    const { data, error, pending } = useAsyncData(async () => {
      if ($Posts.posts?.length > 0) {
        return { data: { posts: { items: $Posts.posts } } };
      } else {
        const {result: data, error, } = useQuery(gql($Posts.postsQuery));
        return { data, error, };
      }
    });

    const openPost = (slug: string) => {
      router.push({ path: "/posts/" + slug });
    };

    const rr = ref([])
    const parsedContent = computed(() => $Posts.parsedContent);
    const prevPost = computed(() => $Posts.prevPost);
    const nextPost = computed(() => $Posts.nextPost);

    const post = computed(() => {
      if (data.value) {
        const posts = data.value?.data?.posts.items; //data.value.data?.posts.items || data.value.existingData;
        if (posts) {
          const currentPost = posts.find((p) => p.slug === route.params.slug);

          const index = posts.indexOf(currentPost);
          const prev = index + 1;
          const next = index - 1;

          if (prev > 0 && prev < posts.length) {
            $Posts.setPrevPost(posts[prev]);
          } else {
            $Posts.setPrevPost(null);
          }

          if (next >= 0 && next < posts.length) {
            $Posts.setNextPost(posts[next]);
          } else {
            $Posts.setNextPost(null);
          }

          useSeoMeta(
            $myMetaInfo({
              title: currentPost?.title,
              content: currentPost?.excerpt,
              image: currentPost?.images.items[0].url,
              url: "https://orbrift.com" + route.path,
              type: "article",
            })
          );

          let options = {
            renderNode: {
              'embedded-asset-block': (node) => {
                return currentPost.content?.links.assets.block
                  .forEach((blk) => {
                    rr.value.push(blk.url)

                    return `<img src="${blk.url}"/>`//.target.fields.file.url
                  })
                //  rr.value.push(currentPost)

              }
            }
          }

          $Posts.setParsedContent(
            documentToHtmlString(currentPost.content.json, options)
          );

          return currentPost;
        }
      }
    });
    return {
      rr,
      post,
      parsedContent,
      pending,
      error,
      openPost,
      prevPost,
      nextPost,
      href: "https://orbrift.com" + route.path,
    };
  },
};
</script>
<style lang="scss" scoped>
.PostContainer {
  max-width: 100vw !important;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
}

.BlogPost {
  padding: 16px;
  background-color: #f5f5f5;
  border-radius: 4px;
}

.TopSection {
  background-color: #333;
  /* Dark background color for the featured image and title */
  background-color: $sec-color-trans-1;
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 10px;
}

.PostImageWrapper {
  width: 100%;
  padding-top: 56.25%;
  /* 16:9 aspect ratio (9 divided by 16, multiplied by 100) */
  position: relative;
}

.PostImage {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
}

.Title {
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: bold;
  color: $pri-color;
}

.Author {
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.AuthorImage {
  width: 30px;
  height: 30px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 10px;
}

.AuthorName {
  font-size: 14px;
  font-weight: bold;
  color: #777;
}

.Meta {
  padding-left: 20px;

  & .ShareIcons {
    & a {
      text-decoration: none;
    }

    position: relative;

    & div:first-child {
      width: 50px;
      height: 50px;
      z-index: 2;
      background-color: $sec-color;
      color: $pri-color;
    }

    & div:nth-child(2) {
      position: absolute;
      left: 20px;
      top: 1px;
      min-width: 250px;
      border: solid $sec-color 3px;
      z-index: 1;

      & .Tooltip {
        position: absolute;
        content: "";
        bottom: -21px;
        left: 25%;
        min-width: 100px;
        height: 20px;
        background-color: $sec-color;
        color: white;
        border-radius: 0 0 5px 5px;
        transform: rotateX(0deg);
        transition: transform 0.1s ease-in-out;

        &.transform {
          transform: rotateX(90deg);
        }
      }
    }
  }
}

.Body {
  width: 100%;
  max-width: 100%; //Bcos the wordpress post images were overflowing the border.
  color: black;
}

.NP_postNavigation {
  display: flex;
  width: 100%;
}

.NP_navigationLink {
  text-align: center;
  text-decoration: none;
  color: #333;
  max-width: 300px;
  min-width: 280px;
}

.NP_thumbnailCont {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border-radius: 4px;
  background-color: $sec-color-trans-1;
}

.NP_thumbnail {
  width: 120px;
  height: 90px;
  border-radius: 4px;
  background-color: #f5f5f5;
  overflow: hidden;
  position: relative;
}

.NP_thumbnailImage {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.NP_label {
  font-size: 14px;
  font-weight: bold;
  color: $pri-color;
  padding: 5px;
  border: solid 2px $pri-color;
  border-radius: 5px;
}

.NP_title {
  font-size: 14px;
  font-weight: bold;
}
</style>
