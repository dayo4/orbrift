<template>
  <GlobalWrapper>
<template #Title>
  Explore
  </template>
<template #SubText>
  A Collection of inspiring contents to keep you informed
  </template>
    <!-- ListOfPosts Component -->
    <template #WrapperBody>
      <section v-if="posts && posts.length > 0">
        <ListOfPosts :posts="posts" :pagin="pagin" @switchPage="switchPage" />
      </section>
    </template>
  </GlobalWrapper>
</template>
<script lang="ts">
import { usePosts } from "@/store";

export default {

  setup() {
    const { $myMetaInfo } = useNuxtApp();
    const $Posts = usePosts();

    useSeoMeta($myMetaInfo({ title: "orbrift - blog" }));

    const pagin = ref({
      pages: 1,
      current: 1,
    });
    const sort = ref("Newest");
    const query = ref({
      limit: 10,
      offset: 0,
      sort: ["created_at", "desc"],
    });

    /* posts properties */
    const { data:posts, error, pending } = useAsyncData(async () => {
      const res = await $Posts.fetchPosts()
      return res
    });

    const sortBy = (txt, v: string[]) => {
      // this.query.sort = v
      // this.sort = txt
      // $Posts.fetchAll(this.query)
    };

    const switchPage = (v: number) => {
      // if (this.pagin.pages > 1 && v > 0 && v <= this.pagin.pages) {
      // 	this.query.offset = (v - 1) * this.query.limit
      // 	$Posts.fetchAll(this.query).then(loaded => {
      // 		if (loaded) {
      // 			this.pagin.current = v
      // 		}
      // 	})
      // }
    };

    return {
      pagin,
      sort,
      query,
      posts,
      sortBy,
      switchPage,
    };
  },
};
</script>
<style lang="scss" scoped>
</style>
