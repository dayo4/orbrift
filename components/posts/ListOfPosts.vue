<template>
  <div>
    <div class="BlogPosts">
      <div v-for="(post, i) in posts" :key="i" class="BlogPost xs12 sm10 md7">
        <div class="TopSection" @click="openPost(post.slug)">
          <div class="PostImageWrapper">
            <img
              :src="post.featured_media_src_url"
              alt="Featured Image"
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
        <p
          class="Excerpt"
          v-html="post.excerpt?.rendered"
          @click="openPost(post.slug)"
        ></p>
      </div>
    </div>

    <!-- Pagination -->
    <section class="flex j-c-center">
      <div class="Pagins xs12 sm11 md8">
        <button
          @click="$emit('switchPage', pagin.current - 1)"
          class="btn bg-trans-4"
        >
          <span class="icon-angle-double-left font-6"></span>
          <span class="font-1 mt-1">PREV</span>
        </button>
        <button class="Nums btn bg-white" v-for="i in pagin.pages" :key="i">
          <span
            @click="$emit('switchPage', i)"
            :class="pagin.current === i ? 'active' : ''"
            >{{ i }}</span
          >
        </button>
        <button
          @click="$emit('switchPage', pagin.current + 1)"
          class="btn bg-trans-4"
        >
          <span class="font-1 mt-1">NEXT</span>
          <span class="Icon icon-angle-double-right font-6"></span>
        </button>
      </div>
    </section>
    <!-- Pagination -->
  </div>
</template>
<script lang="ts">
export default {
  props: {
    posts: { required: true, type: Array },
    pagin: { required: true, type: Object },
  },

  setup(props) {
    const router = useRouter();

    const posts = computed(() =>
      props.posts
    );
    const pagin = computed(() =>
      props.pagin
    );

    const openPost = (slug: string) => {
      router.push({ path: "/posts/" + slug });
    };

    return {
      posts,
      pagin,
      openPost
    }
  },
};
</script>
<style lang="scss" scoped>
.BlogPosts {
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
  cursor: pointer;
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
  cursor: pointer;
}

.AuthorName {
  font-size: 14px;
  font-weight: bold;
  color: #777;
  cursor: pointer;
}

.Excerpt {
  margin-top: 10px;
  font-size: 14px;
  color: rgb(59, 59, 59);
  cursor: pointer;
}

//
.Pagins {
  display: flex;
  justify-content: space-between;
  margin: 30px 20px 10px 20px;
  padding: 5px;
  width: 100%;
  border-bottom: rgb(45, 45, 45) solid 2px;
  border-top: rgb(45, 45, 45) solid 2px;
  border-radius: 10px;
  & button {
    box-shadow: none;
  }
  & .Nums {
    padding: 0;
    box-shadow: none;
    text-align: center;
    & span {
      border-radius: 4px;
      border-top: $grey solid 1px;
      border-bottom: $grey solid 1px;
      color: $blue-grey--2;
      padding: 5px 8px;
      margin: 0 5px;
      &:hover {
        background-color: $grey-3;
      }
      &.active {
        background-color: $grey-2;
      }
    }
  }
}

// @include sm-and-up {}
// @include sm-and-down {}
</style>
