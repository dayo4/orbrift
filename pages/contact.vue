<template>
  <GlobalWrapper :header="false" :footNote="true">
    <template #WrapperTitle> Start Getting Things Done </template>

    <template #WrapperBody>
      <section class="Quote">
        Let’s help you reach and engage your target audience where they are
      </section>

      <section class="flex j-c-center">
        <div class="xs5 sm4 md3 mb-7">
          <img src="/defaults/pgs/orbrift_ab1.jpg" draggable="false" />
        </div>
      </section>

      <Contact></Contact>
    </template>

    <template #WrapperFootNote>
      <div>
        Care for more enquiries? Feel free to contact. Or if you are ready to
        start your project, use the button below
        <div class="flex j-c-center mt-4 mb-1">
          <button
            @click="$router.push({ path: '/create' })"
            class="btn sec-gradient-btn shadow-5 br4 py-3"
          >
            Get a quote
          </button>
        </div>
      </div>
    </template>
  </GlobalWrapper>
</template>
<script lang="ts">
import Contact from "@/components/pages/Contact.vue";

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
.Quote {
  text-align: center;
  font-family: "Itim", "Roboto", sans-serif;
  font-size: 30px;
  color: $top-quotes-color;
  padding: 20px 20px 30px 20px;
}
</style>
