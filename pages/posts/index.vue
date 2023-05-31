<template>
  <GlobalWrapper :title="false">
    <template #WrapperHead>
      <!-- <Dropdown ownID="PostSort" class="font-3 bg-trans-3 br4"> -->
      <!-- slots -->
      <!-- <template #labels>
					<span class="icon-sort-alt-down mr-1"></span>
					<span class="mr-2">{{ sort }}</span>
				</template>

				<template #default>
					<a @click="sortBy('Newest', ['created_at', 'desc'])">
						<span class="icon-down-open"></span>
						<span>Newest</span>
					</a>
					<a @click="sortBy('Oldest', ['created_at', 'asc'])">
						<span class="icon-up-open"></span>
						<span>Oldest</span>
					</a>
				</template> -->
      <!-- </Dropdown> -->
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
import { $General } from "@/addons";
import ListOfPosts from "@/components/posts/ListOfPosts.vue";
import { usePosts } from "@/store";

export default {
  components: {
    ListOfPosts,
  },

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

    onMounted(() => {
      // fetchPosts()
    });

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
.Header {
  background-color: rgb(45, 45, 45);
  border-radius: 20px 20px 4px 4px;
}
</style>
