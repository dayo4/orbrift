<template>
  <div>
    <div
      class="GBLMContainer"
      :class="$route.name === 'samuel-adeniyi' ? 'PrfBg bg-img-masked' : ''"
    >
      <TopNav @search="searchOn = !searchOn" />
      <HoverPanel />
      <Process />

      <Search v-show="searchOn" @searchoff="searchOn = false" />

      <section class="Routes">
        <transition name="fade-in">
          <slot />
        </transition>
      </section>

      <Footer />
      <BottomNav />
    </div>
  </div>
</template>

<script lang="ts">
import TopNav from "@/components/navs/TopNav.vue";
import BottomNav from "@/components/navs/BottomNav.vue";
import Footer from "@/components/navs/Footer.vue";
import HoverPanel from "@/components/navs/HoverPanel.vue";
import Process from "@/components/GlobalComponents/notification/Process.vue";
import Search from "@/components/navs/Search.vue";
import { $General } from "@/addons";

import { useNavs } from "@/store";

export default {
  components: {
    TopNav,
    Footer,
    BottomNav,
    HoverPanel,
    Process,
    Search,
  },

  setup() {
    const $Navs = useNavs();
    const searchOn = ref(false);

    onMounted(() => {
      $Navs.setContainer(window ? window : document.body);
      $Navs.setScrollEvent();
      $General.insertLinks();
      $General
        .loadScript()
        .then(() => {
          $General.hideCaptchaBadge();
        })
        .catch((e) => {});
    });

    onUnmounted(() => {
      $Navs.removeScrollEvent();
    });

    return {
      searchOn,
    };
  },
};
</script>

<style lang="scss">
.GBLMContainer {
  display: table;
  position: relative;
  min-height: 100vh;
  height: 100%;
  width: 100%;

  & > .Routes {
    padding-bottom: 50px;
  }
}
.PrfBg {
  background-color: $sec-color-transparent;
  background-image: url("/defaults/pgs/orbrift_pfbg.jpg");
  background-blend-mode: overlay;
  background-attachment: fixed;
}
</style>
