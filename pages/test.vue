<template>
  <div class="TestTop">
    <div>
      <h1>GraphQL Example</h1>
      <ul v-if="posts">
        {{
          posts
        }}
      </ul>
    </div>
  </div>

</template>
<script lang="ts">
import { usePosts } from "@/store";

export default {
  setup() {
    const $Posts = usePosts();

    const {
      data: posts,
      error,
      pending,
    } = useAsyncData(async () => {
      const res = await $Posts.gqlFetch();
      console.log(res);
      return res;
    });

    return {
      posts,
    };
  },
};
</script>

<style lang="scss" scoped></style>
