<template>
  <GlobalWrapper :header="true" :subText="true">
    <template #Title>
      Discover
      <!-- {{ post.title?.rendered }} -->
    </template>
    <template #SubText>
      {{ post.title?.rendered }}
    </template>

    <template #WrapperBody>
      <div class="PostContainer">
        <!-- HEAD -->
        <div class="BlogPost xs12 sm10 md7">
          <div class="TopSection">
            <div class="PostImageWrapper">
              <img
                :src="post.featured_media_src_url"
                alt="post.title?.rendered"
                class="PostImage"
                draggable="false"
              />
            </div>
            <h2 class="Title">
              {{ post.title?.rendered }}
            </h2>
          </div>
          <div class="Author">
            <img
              src="/defaults/usr/me.jpg"
              alt="Author Image"
              class="AuthorImage"
              draggable="false"
            />
            <span class="AuthorName">Samuel Adeniyi</span>
          </div>
        </div>

        <!-- META -->
        <section class="Meta mt-1 xs12 sm10 md7">
          <!-- <hr /> -->
          <!-- <div class="m-1 t-blue-grey">
            <b>Updated:</b>
            {{ $moment(post.modified).fromNow() }}
          </div> -->
          <!-- <hr /> -->
          <div class="ShareIcons flex a-i-center noselect">
            <div
              class="icon-forward flex a-i-center j-c-center t-white font-12 br5"
            ></div>
            <div class="font-7 pl-5 py-1 pr-2 br4 flex j-c-around">
              <a
                :href="`https://www.facebook.com/sharer/sharer.php?u=${href}`"
                target="_blank"
                @mouseout="shareIconsTooltip = ''"
                @mouseover="shareIconsTooltip = 'facebook'"
                class="icon-facebook t-blue--2"
              ></a>
              <a
                :href="`https://twitter.com/share?url=${href}`"
                target="_blank"
                @mouseout="shareIconsTooltip = ''"
                @mouseover="shareIconsTooltip = 'twitter'"
                class="icon-twitter t-cyan"
              ></a>
              <a
                :href="`https://www.linkedin.com/sharing/share-offsite/?url=${href}`"
                target="_blank"
                @mouseout="shareIconsTooltip = ''"
                @mouseover="shareIconsTooltip = 'linkedIn'"
                class="icon-linkedin t-blue--2"
              ></a>
              <!-- <a
                                  :href="`whatsapp://send?text=${href}`"
                                  data-action="share/whatsapp/share"
                                  target="_blank"
                                  @mouseout="shareIconsTooltip = ''"
                                  @mouseover="shareIconsTooltip = 'whatsapp'"
                                  class="icon-whatsapp t-green--2"
                              ></a>-->
              <a
                :href="`https://reddit.com/submit?url=${href}`"
                target="_blank"
                @mouseout="shareIconsTooltip = ''"
                @mouseover="shareIconsTooltip = 'reddit'"
                class="icon-reddit t-red-1"
              ></a>
              <i
                class="Tooltip font-4 text-center"
                :class="shareIconsTooltip ? '' : 'transform'"
                >{{ shareIconsTooltip }}</i
              >
            </div>
          </div>
          <!-- <div class="Actions flex j-c-center noselect my-1">
          </div> -->
        </section>

        <!-- BODY -->
        <section
          v-html="post.content?.rendered"
          class="Body xs12 sm10 md7 p-5"
        ></section>

        <!-- Bottom Meta -->
        <section class="Meta mt-3 xs12 sm10 md7">
          <div class="ShareIcons flex a-i-center noselect">
            <div
              class="icon-forward flex a-i-center j-c-center t-white font-12 br5"
            ></div>
            <div class="font-7 pl-5 py-1 pr-2 br4 flex j-c-around">
              <a
                :href="`https://www.facebook.com/sharer/sharer.php?u=${href}`"
                target="_blank"
                @mouseout="setTooltip('')"
                @mouseover="setTooltip('facebook')"
                class="icon-facebook t-blue--2"
              ></a>
              <a
                :href="`https://twitter.com/share?url=${href}`"
                target="_blank"
                @mouseout="setTooltip('')"
                @mouseover="setTooltip('twitter')"
                class="icon-twitter t-cyan"
              ></a>
              <a
                :href="`https://www.linkedin.com/sharing/share-offsite/?url=${href}`"
                target="_blank"
                @mouseout="setTooltip('')"
                @mouseover="setTooltip('linkedIn')"
                class="icon-linkedin t-blue--2"
              ></a>
              <a
                :href="`https://reddit.com/submit?url=${href}`"
                target="_blank"
                @mouseout="setTooltip('')"
                @mouseover="setTooltip('reddit')"
                class="icon-reddit t-red-1"
              ></a>
              <i
                class="Tooltip font-4 text-center"
                :class="shareIconsTooltip ? '' : 'transform'"
                >{{ shareIconsTooltip }}</i
              >
            </div>
          </div>
        </section>

        <!-- Next - Prev Buttons -->
        <div class="NP_postNavigation ml-2 mt-20">
          <router-link
            v-if="prevPost"
            :to="`/posts/${prevPost.slug}`"
            class="NP_navigationLink NP_previousLink"
          >
            <div class="NP_thumbnailCont">
              <div class="NP_thumbnail">
                <img
                  :src="prevPost.featured_media_src_url"
                  :alt="prevPost.title?.rendered"
                  class="NP_thumbnailImage"
                />
              </div>
              <div class="NP_label">
                <i class="icon-left mr-2"></i>
                Prev Post
              </div>
            </div>
            <div class="NP_title">{{ prevPost.title?.rendered }}</div>
          </router-link>
        </div>

        <div class="NP_postNavigation j-c-end mr-2">
          <router-link
            v-if="nextPost"
            :to="`/posts/${nextPost.slug}`"
            class="NP_navigationLink NP_nextLink"
          >
            <div class="NP_thumbnailCont">
              <div class="NP_label">
                Next Post
                <i class="icon-right ml-2"></i>
              </div>
              <div class="NP_thumbnail">
                <img
                  :src="nextPost.featured_media_src_url"
                  :alt="nextPost.title?.rendered"
                  class="NP_thumbnailImage"
                />
              </div>
            </div>
            <div class="NP_title">{{ nextPost.title?.rendered }}</div>
          </router-link>
        </div>
      </div>
    </template>
  </GlobalWrapper>
</template>
<script lang="ts">
import { $contentApi } from "~/addons/utils/Axios";

import { usePosts } from "@/store";

export default {
  setup() {
    const { $myMetaInfo } = useNuxtApp();
    const router = useRouter();
    const route = useRoute();
    const $Posts = usePosts();

    const shareIconsTooltip = ref("");
    const setTooltip = (value) => {
      shareIconsTooltip.value = value;
    };

const post = ref([])
    /* posts properties */
    const {
      // data: post,
      fetch, fetchState
    } = useFetch(async () => {
      const { data } = await $contentApi.get("posts?slug=" + route.params.slug);
      // console.log(error)
      // console.log(data[0])
      // return data[0];
      post.value = data[0]
    });
    // const {
    //   data: post,
    //   error,
    //   pending,
    // } = useAsyncData(async () => {
    //   const { data } = await $contentApi.get("posts?slug=" + route.params.slug);
    //   // console.log(error)
    //   // console.log(data[0])
    //   return data[0];
    // });

    useSeoMeta(
      $myMetaInfo({
        title: post.value.title.rendered,
        content: post.value.excerpt.rendered,
        image: post.value.featured_media_src_url,
        url: "https://orbrift.com" + route.path,
        type: "article",
      })
    );

    // onBeforeRouteUpdate(async ({}) => {
    //   await !pending.value; // Wait until the data is loaded
    // });

    const prefetchPrev = () => {
      $Posts.fetchPrevPost({
        date: post.value.date,
        id: post.value.id,
      });
    };
    const prefetchNext = () => {
      $Posts.fetchNextPost({
        date: post.value.date,
        id: post.value.id,
      });
    };
    const openPost = (slug: string) => {
      router.push({ path: "/posts/" + slug });
    };

    const prevPost = $Posts.prevPost;
    const nextPost = $Posts.nextPost;

    onMounted(() => {
      prefetchPrev();
      prefetchNext();
    });

    return {
      post,
      prefetchPrev,
      prefetchNext,
      openPost,
      prevPost,
      nextPost,
      href: "https://orbrift.com" + route.path,

      shareIconsTooltip,
      setTooltip,
    };
  },
};
</script>
<style lang="scss" scoped>
.PostContainer {
  max-width: 100vw !important;
  // padding-top: 80px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
}
.BlogPost {
  padding: 16px;
  background-color: #f5f5f5;
  // background-color: $sec-color;
  border-radius: 4px;
}

.TopSection {
  background-color: #333; /* Dark background color for the featured image and title */
  background-color: $sec-color-transparent;
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 10px;
}
.PostImageWrapper {
  width: 100%;
  padding-top: 56.25%; /* 16:9 aspect ratio (9 divided by 16, multiplied by 100) */
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
  background-color: $sec-color-transparent;
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

@include sm-and-down {
  //  .NP_nextLink  {
  //   margin-left:auto;
  // }
}

// @include xs-only {}
</style>
