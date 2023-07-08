<template>
  <div class="App">
<div ref="parallaxBg" class="ParallaxBg"></div>

    <div class="GBLMContainer">
      <TopNav @search="searchOn = !searchOn" />
      <HoverPanel />
      <Process />

      <ClientOnly>
        <Search v-show="searchOn" @searchoff="searchOn = false" />
      </ClientOnly>

      <section class="Routes">
        <transition name="slide-fade" mode="out-in">
          <slot />
        </transition>
      </section>

      <Footer />
      <BottomNav />
    </div>
  </div>
</template>

<script lang="ts">
import { $General } from "@/addons";

import { useNavs } from "@/store";

export default {
  setup() {
    const { $aos } = useNuxtApp();

    const parallaxBg = ref(null)

    const $Navs = useNavs();
    const searchOn = ref(false);

    onMounted(() => {
      $Navs.setContainer(window ? window : document.body);
      $Navs.setParallaxElem(parallaxBg.value)
      $Navs.setScrollEvent();
      $General.insertLinks();
      $General
        .loadScript()
        .then(() => {
          $General.hideCaptchaBadge();
        })
        .catch((e) => {});
    });

    onMounted(() => $aos());

    onUnmounted(() => {
      $Navs.removeScrollEvent();
    });

    return {
      searchOn,
      parallaxBg
    };
  },
};
</script>

<style lang="scss">
.slide-fade-leave-active,
.slide-fade-enter-active {
  transition: all 0.3s ease-in-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
.App {
  position: relative;
  overflow: hidden;
  width: 100vw;
  min-height: 100vh; /* Adjust the height as needed */
}
.GBLMContainer {
  display: table;
  position: relative;
  min-height: 100vh;
  height: 100%;
  width: 100%;

  & > .Routes {
    padding-bottom: 50px;
  }
  z-index: 1;
}
.ParallaxBg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  // background-image: url('/defaults/pgs/hexgold.png'); /* Replace '~/assets/background.jpg' with your image path */
  background-image: url('defaults/pgs/hgt3.png'); /* Replace '~/assets/background.jpg' with your image path */
  // background-image: url('defaults/pgs/slines.png'); /* Replace '~/assets/background.jpg' with your image path */
  background-size: contain;
  background-repeat: repeat;
  //background-position: center;
 // transform: translateZ(-1px) scale(1.5);
}
</style>
