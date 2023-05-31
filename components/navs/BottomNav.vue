<template>
  <div class="BottomNav bg-trans-4 pb-1" ref="bottomNav">
    <router-link to="/" class="no-deco">
      <span
        class="icon-home"
        :class="homeRoute ? 't-grey--1' : 't-white'"
      ></span>
      <span>Home</span>
    </router-link>
    <div @click="$router.back()">
      <span
        class="icon-left-open-big"
        :class="backable ? 't-white' : 't-grey-1'"
      ></span>
      <span>Back</span>
    </div>
    <div @click="$router.forward()">
      <span
        class="icon-right-open-big"
        :class="backable ? 't-white' : 't-grey-1'"
      ></span>
      <span>forward</span>
    </div>
    <div @click="scrollUp">
      <span class="icon-up" :class="!scrolled ? 't-grey--1' : 't-white'"></span>
      <span>Scroll Up</span>
    </div>
  </div>
</template>
<script lang="ts">
import { useNavs } from "@/store";

export default {
  setup() {
    const $Navs = useNavs();
    const route = useRoute();

    const homeRoute = ref(true);
    const backable = ref(true);
    const forwardable = ref(true);

    const bottomNav: Ref<HTMLElement | null> = ref(null);

    const scrolled = $Navs.scrolled;

    watch(
      () => route.path,
      () => {
        homeRoute.value = route.path === "/";
        backable.value = history.length > 0;
      }
    );

    const scrollUp = () => {
      if (scrolled) {
        $Navs.container?.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      }
    };

    onMounted(() => {
      $Navs.setBottomNav(bottomNav);
    });

    return {
      homeRoute,
      backable,
      forwardable,
      bottomNav,
      scrolled,
      scrollUp,
    };
  },
};
</script>

<style lang="scss">
.BottomNav {
  position: fixed;
  bottom: 0;
  left: 50%;
  z-index: 7;
  margin-left: -110px;
  display: flex;
  align-items: center;
  border-radius: 20px 20px 0 0;
  height: 44px;
  & > * {
    text-align: center;
    margin-left: 10px;
    margin-right: 10px;
    cursor: pointer;
    & span {
      transition: 0.5s;
    }
    & span:first-child {
      display: block;
      font-size: 25px;
    }
    & span:last-child {
      color: white;
      font-weight: bold;
      display: block;
      font-size: 8px;
    }
  }
}
</style>
