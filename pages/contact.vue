<template>
  <GlobalWrapper :header="true" :footNote="true">
    <template #Title> Get In Touch </template>
    <template #SubText>
      Let's work together
    </template>

    <template #WrapperBody>
      <section class="flex j-c-center">
        <div class="TopImg xs4 sm3 md2 mb-7">
          <img src="/defaults/pgs/orbrift_ab1.jpg" draggable="false" />
        </div>
      </section>

      <MainContact></MainContact>

    </template>

    <template #FootNote>
      <div data-aos="zoom-in" class="flex j-c-center">
        <div class="xs12 md7 lg6">
          If you would prefer to have a more streamlined project
          discussion and request a quote, use the button below
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
