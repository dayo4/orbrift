<template>
  <div>
    <section v-for="(post, i) in posts" :key="i">
      <!-- regular posts(ARTICLE) template-->
      <article class="Article bg-gradient-2 br2 mb-3">
        <section
          class="PostImage xs12 sm6 md5 noselect"
          @click="openPost(post.slug)"
        >
          <img
            :src="post.featured_media_src_url"
            draggable="false"
            class="br1"
          />
        </section>
        <section class="Details xs12 sm6 md7">
          <div
            @click="openPost(post.slug)"
            class="cursor-pointer flex h-full w-full"
          >
            <img
              src="/defaults/usr/me.jpg"
              width="30"
              height="30"
              draggable="false"
              class="noselect"
            />
            <div>
              <h5 class="font-3 my-1 mx-5 t-white">
                {{ post.title?.rendered }}
              </h5>
              <p class="font-2 my-2 mx-5 t-grey-1 bold-3">
                <span class="mr-2 bold-5 t-grey-2">{{
                  "Adedayo Adeniyi"
                }}</span>

                <!-- - <span class="icon-clock">{{
                  $moment(post.modified).fromNow()
                }}</span> -->
              </p>
              <p
                class="Excerpt hide-sm-downh t-white"
                v-html="post.excerpt?.rendered"
              ></p>
            </div>
          </div>

          <!-- Dropdown component -->
          <Dropdown
            :ownID="post.id"
            :pos="{ type: 'absolute', top: 4, right: 4 }"
            class="Dropdown icon-ellipsis-vert font-8 bg-trans-2"
            style="width: 30px"
          >
            <!-- slots -->
            <template v-slot:default>
              <router-link :to="{ path: '/posts/' + post.slug }">
                <span class="icon-eye"></span>
                <span>Open</span>
              </router-link>
            </template>
          </Dropdown>
        </section>
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

  methods: {
    openPost(slug: string) {
      /* let route = */ this.$router.push({ path: "/posts/" + slug });
      // window.open(route.href, '_blank')
    },
  },
};
</script>
<style lang="scss" scoped>
.Pagins {
  display: flex;
  justify-content: space-between;
  margin: 8px 0;
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

.Article {
  display: flex;
  overflow: hidden;

  & .PostImage {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    // & img {
    // position: absolute;
    // top: 0;
    // max-width: 100%;
    // max-height: 100%;
    // }
  }
  & .Details {
    width: 100%;
    position: relative;
    padding: 5px 8px;
    margin: 2px;
    & .Dropdown {
      box-shadow: none ;
      background-color: transparent;
    }
    & img {
      min-width: 30px;
      height: 30px;
      border-radius: 50%;
    }
    & .Excerpt {
      font-size: 15px ;
      letter-spacing: 0.2px;
      line-height: 16px;
    }
  }
}

@include sm-and-up {
  .Article {
    min-height: 240px;
    max-height: 250px;
  }
}
@include sm-and-down {
  .Article {
    & .Excerpt {
      font-size: 14px !important;
    }
  }
}
@include xs-only {
  .Article {
    flex-wrap: wrap;
    min-height: 400px;
  // & .PostImage {
  //   max-height: 220px;
  // }
    // & .Details {
    // & .Excerpt {
    //   font-size: 12px;
    // }
    // }
  }
}
</style>
