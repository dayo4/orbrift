<template>
  <!--  Meta -->
  <section class="Meta mt-3 basis-full sm:basis-10/12 md:basis-7/12">
    <div class="ShareIcons flex items-center select-none">
      <div
        class="icon-forward flex items-center justify-center text-white text-3xl rounded-full"
      ></div>
      <div class="text-[22px] pl-5 py-1 pr-2 rounded-3xl flex justify-around">
        <a
          :href="`https://www.facebook.com/sharer/sharer.php?u=${href}`"
          target="_blank"
          @mouseout="setTooltip('')"
          @mouseover="setTooltip('facebook')"
          class="icon-facebook text-blue-600"
        ></a>
        <a
          :href="`https://twitter.com/share?url=${href}`"
          target="_blank"
          @mouseout="setTooltip('')"
          @mouseover="setTooltip('twitter')"
          class="icon-twitter text-cyan-500"
        ></a>
        <a
          :href="`https://www.linkedin.com/sharing/share-offsite/?url=${href}`"
          target="_blank"
          @mouseout="setTooltip('')"
          @mouseover="setTooltip('linkedIn')"
          class="icon-linkedin text-blue-600"
        ></a>
        <a
          :href="`https://reddit.com/submit?url=${href}`"
          target="_blank"
          @mouseout="setTooltip('')"
          @mouseover="setTooltip('reddit')"
          class="icon-reddit text-red-500"
        ></a>
        <i
          class="Tooltip text-base text-center"
          :class="shareIconsTooltip ? '' : 'transform'"
          >{{ shareIconsTooltip }}</i
        >
      </div>
    </div>
  </section>
</template>
<script lang="ts">

export default {
  setup() {
    const shareIconsTooltip = ref("");
    const setTooltip = (value) => {
      shareIconsTooltip.value = value;
    };

    return {
      href: "https://orbrift.com" + useRoute().path,
      shareIconsTooltip,
      setTooltip,
    };
  },
};
</script>
<style lang="scss" scoped>
.Meta {
  padding-left: 20px;
  & .ShareIcons {
    & a {
      text-decoration: none;
    }
    position: relative;
    & div:first-child {
      width: 50px;
      height: 50px;
      z-index: 2;
      background-color: $sec-color;
      color: $pri-color;
    }
    & div:nth-child(2) {
      position: absolute;
      left: 20px;
      top: 1px;
      min-width: 250px;
      border: solid $sec-color 3px;
      z-index: 1;

      & .Tooltip {
        position: absolute;
        content: "";
        bottom: -21px;
        left: 25%;
        min-width: 100px;
        height: 20px;
        background-color: $sec-color;
        color: white;
        border-radius: 0 0 5px 5px;
        transform: rotateX(0deg);
        transition: transform 0.1s ease-in-out;
        &.transform {
          transform: rotateX(90deg);
        }
      }
    }
  }
}
</style>
