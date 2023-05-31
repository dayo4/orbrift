<template>
  <GlobalWrapper :header="false" :title="false">
    <template #WrapperBody>
      <div class="Wrapper">
        <!-- HEAD -->
        <section class="Head flex col j-c-center p-2">
          <div
            class="Title a-s-center font-11 bold-3 text-cap text-center letter-space-1 px-8 mb-8"
          >
            {{ post.title?.rendered }}
          </div>
          <div class="FeaturedImage a-s-center br2 p-0 noselect">
            <img
              class="w-full br2"
              :src="post.featured_media_src_url"
              :alt="post.title?.rendered"
              draggable="false"
            />
          </div>
        </section>

        <!-- META -->
        <section class="Meta mt-1">
          <!-- <hr /> -->
          <!-- <div class="m-1 t-blue-grey">
            <b>Updated:</b>
            {{ $moment(post.modified).fromNow() }}
          </div> -->
          <!-- <hr /> -->
          <div class="ShareIcons flex a-i-center noselect">
            <div
              class="icon-forward sec-gradient-btn flex a-i-center j-c-center t-white font-12 br5"
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
          <!-- <hr /> -->
          <div class="Actions flex j-c-center noselect my-1">
            <!-- @click="showCommentModal(post)" -->
            <!-- <span
							class="icon-comment btn pri-gradient-btn"
							>Comments (0)
							 {{
								post.comments_count
									? `(${post.comments_count})`
									: ""
							}} 
                            </span 
						> -->
            <!-- <span
                              class="icon-thumbs-up-alt btn sec-gradient-btn"
                              @click="thumbUp"
                          >{{post.up}}</span>-->
          </div>
        </section>

        <!-- BODY -->
        <section v-html="post.content?.rendered" class="Body p-5"></section>

        <!-- Bottom Meta -->
        <section class="Meta mt-3">
          <div class="ShareIcons flex a-i-center noselect">
            <div
              class="icon-forward sec-gradient-btn flex a-i-center j-c-center t-white font-12 br5"
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
        </section>

        <!-- <div
					class="Divider px-5 mt-5 font-9 bold-3 t-blue-grey text-cap text-center letter-space-1"
				>
					Author
				</div> -->

        <!-- FOOT -->
        <!-- <section class="Foot">
					<div class="UserDetails py-1 px-2 mb-2 mt-4">
						<div class="Info flex col text-center w-full mr-1">
							<div
								class="font-6 bold-3 t-blue-grey--1 text-cap m-1"
							>
								Adedayo Adeniyi
							</div>
							<div class="flex a-s-center">
								<button
									@click="
										$router.push('/adedayo-adeniyi')
									"
									class="icon-user btn font-3 py-1 px-2 m-1 bg-pink--2 t-white br1"
								>
									View Profile
								</button>
							</div>


							<div
								class="flex wrap sm-nowrap j-c-center a-i-center"
							>
								<div class="Image noselect mr-1">
									<img
										src="/defaults/usr/me.jpg"
										alt="author"
										draggable="false"
									/>
								</div>


								<Minimizer
									:initialHeight="90"
									:closeable="false"
								>
									<div class="t-cyan--3 font-4 p-1 b1 br3">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta vero excepturi quam asperiores, animi error itaque maxime nobis impedit! Libero provident atque nesciunt. Voluptatem eligendi repudiandae placeat et cupiditate cum.
									</div>
								</Minimizer>
							</div>
						</div>
					</div>
				</section>  -->

        <section class="NextPrev">
          <div
            v-if="prevPost"
            @click="openPost(prevPost.slug)"
            class="Prev xs9 sm5 flex a-i-center bg-gradient-2 p-1 shadow-2"
          >
            <div class="Img flex a-i-center mr-2">
              <img
                :src="prevPost.featured_media_src_url"
                :alt="prevPost.title?.rendered"
              />
            </div>
            <h4>{{ prevPost.title?.rendered }}</h4>
            <span class="Label">
              <i class="icon-left-open"></i>
              <p class="mr-2">PREV POST</p>
            </span>
          </div>
          <div
            v-if="nextPost"
            @click="openPost(nextPost.slug)"
            class="Next xs9 sm5 flex a-i-center bg-gradient-2 p-1 shadow-2"
          >
            <div class="Img flex a-i-center mr-2">
              <img
                :src="nextPost.featured_media_src_url"
                :alt="nextPost.title?.rendered"
              />
            </div>
            <h4>{{ nextPost.title?.rendered }}</h4>
            <span class="Label">
              <p class="ml-2">NEXT POST</p>
              <i class="icon-right-open"></i>
            </span>
          </div>
        </section>
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

    /* posts properties */
    const {
      data: post,
      error,
      pending,
    } = useAsyncData(async () => {
      const { data } = await $contentApi.get("posts?slug=" + route.params.slug);
      console.log(pending)
      // console.log(error)
      // console.log(data[0])
      return data[0];
    });

    useSeoMeta(
      $myMetaInfo({
        title: post.value.title.rendered,
        content: post.value.excerpt.rendered,
        image: post.value.featured_media_src_url,
        url: "https://orbrift.com" + route.path,
        type: "article",
      })
    );

    onBeforeRouteUpdate(async ({}) => {
      await !pending.value; // Wait until the data is loaded
    });

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
      href:"https://orbrift.com" + route.path
    };
  },
};
</script>
<style lang="scss" scoped>
.Wrapper {
  max-width: 100vw !important;
}
.Wrapper > div {
  margin-bottom: 15px;
  overflow: hidden;
  background-color: white;
}

.UserDetails {
  border-radius: 28px 100px 100px 28px;
  position: relative;
  & .Image {
    position: relative;
    border: 2px solid $pri-color;
    background-color: $pri-color;
    border-radius: 100%;
    min-width: 65px;
    min-height: 65px;
    width: 65px;
    height: 65px;
    & img {
      min-width: 60px;
      min-height: 60px;
      width: 60px;
      height: 60px;
      border-radius: 100%;
    }
  }
}

.Head {
  border-radius: 100px;
  & .Title {
    border-radius: 93%;
    border-top: 2px $blue-grey-2 solid;
    color: $blue-grey--2;
    padding-top: 35px;
    width: 100%;
  }
  & .FeaturedImage {
    overflow: hidden;
    width: 92%;
  }
}
.Meta {
  & .ShareIcons {
    & a {
      text-decoration: none;
    }
    position: relative;
    & div:first-child {
      width: 50px;
      height: 50px;
      z-index: 2;
    }
    & div:nth-child(2) {
      position: absolute;
      left: 20px;
      top: 6px;
      min-width: 250px;
      border: solid $sec-color 3px;
      z-index: 1;
      & span {
        border-radius: 50%;
        cursor: pointer;
      }
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

  & .Actions {
    & span:first-child {
      border-radius: 28px;
    }
  }
  & hr {
    color: $blue-grey-4;
    margin: 2px;
  }
}
.Body {
  height: fit-content;
  width: 100%;
  max-width: 100%;
  // color: $blue-grey--4;
  color: black;
}

.Divider {
  border-radius: 93%;
  border-bottom: 2px $blue-grey-2 solid;
  padding-bottom: 15px;
  width: 100%;
}

.Foot {
  height: fit-content;
}

.NextPrev {
  margin: 10px 0 0 0;
  width: 100%;
  color: white;
  letter-spacing: 0.2px;
  & .Img {
    width: 100px;
    height: 100px;
    & img {
      min-width: 100%;
    }
  }
  & .Prev,
  .Next {
    position: relative;
    border-radius: 3px;
    margin-top: 40px;
    cursor: pointer;
  }
  & .Prev {
    float: left;
  }
  & .Next {
    float: right;
  }
  & .Label {
    position: absolute;
    top: -25px;
    left: calc(50% - 60px);
    width: 120px;
    height: 35px;
    background-color: $sec-color;
    font-weight: bold;
    // letter-spacing: 0.3px;
    border-radius: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

@include sm-and-up {
  .NextPrev {
    display: inline-block;
  }
}

@include xs-only {
  .Head {
    & .Title {
      border-radius: 32%;
      padding: 25px 6px 6px 0px;
      width: 99%;
    }
    & .FeaturedImage {
      width: 99%;
    }
  }
}
</style>
