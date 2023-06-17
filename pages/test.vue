<template>
  <div class="TestTop">
    <div>
      <h1>GraphQL Example</h1>
      <!-- <ul v-if="posts"> -->
      <!-- {{
          posts
        }} -->
      <!-- </ul> -->
    </div>
  </div>
</template>
<script lang="ts">
import { usePosts } from "@/store";

export default {
  setup() {
    // const { clients } = useApollo()
    // const $Posts = usePosts();

    // const {
    //   data: posts,
    //   error,
    //   pending,
    // } = useAsyncData(async () => {
    //   const res = await $Posts.gqlFetch();
    //   console.log(res);
    //   return res;
    // });

    // const query = gql`
    //   query BlogPost {
    //     blogPostCollection {
    //       items {
    //         title
    //         slug
    //         featuredMedia
    //       }
    //     }
    //   }
    // `;
    // const query = gql`
    //   query {
    //     necCollection {
    //       items {
    //         title
    //         sys {
    //           id
    //           publishedAt
    //         }
    //       }
    //     }
    //   }
    // `;

    // const { data } = useAsyncQuery(query, {
    //   necId: "nec",
    // });
    // console.log(data);
    return {
      // posts,
      // data
    };
  },
};
</script>

<style lang="scss" scoped></style>
