<template>
  <GlobalWrapper>
    <template #Title> Explore </template>
    <template #SubText>
      A Collection of inspiring contents to keep you informed
    </template>
    <!-- ListOfPosts Component -->
    <template #WrapperBody>
      {{error}}
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
    
        const { data, error, pending } = useAsyncQuery({
          query: gql($Posts.postsQuery),
          variables: {},
          cache: false
        });

    const posts = computed(() => {
      if (data.value) {
        $Posts.setPosts(data.value.posts.items)
        return data.value.posts.items; //?.blogPostCollection.items;
      }
    });


    const switchPage = (v: number) => {
      
    };

    return {
      pagin,
      posts,
      error,
      switchPage,
    };
  },
};
</script>
<style lang="scss" scoped></style>
