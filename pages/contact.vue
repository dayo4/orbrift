<template>
  <GlobalWrapper :header="true" :footNote="true">
    <template #Title> Get In Touch </template>
    <template #SubText>
      Let's work together
    </template>

    <template #WrapperBody>
      <section class="flex justify-center">
        <div class="TopImg basis-4/12 sm:basis-3/12 md:basis-2/12 mb-7">
          <img src="/defaults/pgs/orbrift_ab1.jpg" draggable="false" />
        </div>
      </section>

      <MainContact></MainContact>

    </template>

    <template #FootNote>
      <div data-aos="zoom-in" class="flex justify-center">
        <div class="basis-full sm:basis-7/12 lg:basis-6/12">
          If you would prefer to have a more streamlined project
          discussion and request a quote, use the button below
          <div class="flex justify-center my-5">
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

export default {

  setup() {
    const { $myMetaInfo } = useNuxtApp();

    useSeoMeta($myMetaInfo({ title: "Contact Me - Request My Service" }));

  },
};
</script>
<style lang="scss" scoped>
//
.TopImg {
  min-height: 80px;
}
</style>
