<template>
  <GlobalWrapper :header="true" :footNote="true" :useDefaultFootNote="true">
    <template #Title> Get In Touch </template>
    <template #SubText>
      Let’s help you reach and engage your target audience where they are
    </template>

    <template #WrapperBody>
      <section class="flex j-c-center">
        <div class="xs5 sm3 md2 mb-7">
          <img src="/defaults/pgs/orbrift_ab1.jpg" draggable="false" />
        </div>
      </section>

      <!-- <section class="flex j-c-center">
        <div class="xs11 sm8 md6 lg5"> -->
        <MainContact></MainContact>
        <!-- </div>
      </section> -->
    </template>
  </GlobalWrapper>
</template>
<script lang="ts">
import Contact from "~/components/pages/MainContact.vue";

export default {
  components: {
    Contact,
  },

  setup() {
    const { $myMetaInfo } = useNuxtApp();

    useSeoMeta($myMetaInfo({ title: "Get Things Started | orbrift" }));
  },
};
</script>
<style lang="scss" scoped>
//
</style>
