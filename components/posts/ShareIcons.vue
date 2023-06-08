<template>
  <!--  Meta -->
  <section class="Meta mt-3 xs12 sm10 md7">
    <div class="ShareIcons flex a-i-center noselect">
      <div
        class="icon-forward flex a-i-center j-c-center t-white font-12 br5"
      ></div>
      <div class="font-7 pl-5 py-1 pr-2 br4 flex j-c-around">
        <a
          :href="`https://www.facebook.com/sharer/sharer.php?u=${href}`"
          target="_blank"
          @mouseout="setTooltip('')"
          @mouseover="setTooltip('facebook')"
          class="icon-facebook t-blue--2"
        ></a>
        <a
          :href="`https://twitter.com/share?url=${href}`"
          target="_blank"
          @mouseout="setTooltip('')"
          @mouseover="setTooltip('twitter')"
          class="icon-twitter t-cyan"
        ></a>
        <a
          :href="`https://www.linkedin.com/sharing/share-offsite/?url=${href}`"
          target="_blank"
          @mouseout="setTooltip('')"
          @mouseover="setTooltip('linkedIn')"
          class="icon-linkedin t-blue--2"
        ></a>
        <a
          :href="`https://reddit.com/submit?url=${href}`"
          target="_blank"
          @mouseout="setTooltip('')"
          @mouseover="setTooltip('reddit')"
          class="icon-reddit t-red-1"
        ></a>
        <i
          class="Tooltip font-4 text-center"
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
