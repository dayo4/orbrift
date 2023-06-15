<template>
  <div v-show="scrolled" class="BottomNav pb-1" ref="bottomNav">
    <div @click="scrollUp">
      <span class="icon-up"></span>
      <span>Scroll Up</span>
    </div>
  </div>
</template>
<script lang="ts">
import { useNavs } from "@/store";

export default {
  setup() {
    const $Navs = useNavs();

    const bottomNav: Ref<HTMLElement | null> = ref(null);

    const scrolled = computed(() =>
        $Navs.scrolled
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
  right: 5px;
  z-index: 7;
  display: flex;
  align-items: center;
  background-color: $sec-color-trans;
  border-radius: 28px 28px 1px 1px;
  height: 44px;
  animation: show 0.6s;
  & > * {
    text-align: center;
    margin-left: 10px;
    margin-right: 10px;
    cursor: pointer;
    & span:first-child {
      display: block;
      font-size: 25px;
        color: $pri-color;
    }
    & span:last-child {
  color: $pri-color;
      font-weight: bold;
      display: block;
      font-size: 8px;
      padding-bottom: 2px;
    }
  }
}
@keyframes show {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
