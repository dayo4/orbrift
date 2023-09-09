<template>
  <div>
    <section class="Posts">
      <article v-for="(post, i) in posts" :key="i" class="Post xs12 sm10 md7">
        <div class="TopSect" @click="openPost(post.slug)">
          <div class="PostImageWrapper">
            <img
              :src="post.images[0].fields.file.url"
              :alt="post.images[0].fields.file.title"
              class="PostImg"
              draggable="false"
            />
          </div>
          <h2 class="Title">
            {{ post.title }}
          </h2>
        </div>
        <div class="Aut">
          <img
            src="/defaults/usr/me1.jpg"
            alt="Samuel Adeniyi"
            class="AutImg"
            draggable="false"
          />
          <span class="AutName">Adedayo A.</span>
        </div>
        <p
          class="Excerpt"
          v-html="post.excerpt"
          @click="openPost(post.slug)"
        ></p>
      </article>
    </section>

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
    const route = useRoute();

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
.Posts {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
}

.Post {
  padding: 16px;
  background-color: #f5f5f5;
  // background-color: $sec-color;
  border-radius: 4px;
}

.TopSect {
  background-color: $sec-color-trans;
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
.PostImg {
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
.Aut {
  display: flex;
  align-items: center;
  margin-top: 10px;
}
.AutImg {
  width: 30px;
  height: 30px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 10px;
  cursor: pointer;
}

.AutName {
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
  background-color: white;
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
</style>
