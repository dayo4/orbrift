<template>
  <GlobalWrapper :header="true" :footNote="true">
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

        <MainContact></MainContact>

    </template>
    
    
    <template #FootNote>
         <div class="flex j-c-center">
        <div class="xs12 md7 lg6">
          Thank you. If you would prefer to have a more streamlined project discussion and request an estimate, use the button below
          <div class="flex j-c-center my-5">
            <Button
              @clicked="$router.push({ path: '/create' })"
              type="cta"
              size="large"
            >
              Get A Quote
            </Button>
          </div>
        </div>
      </div>
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
