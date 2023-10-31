<template>
  <div>
    <transition name="slide-up-fade">
      <div v-show="status" class="Wrapper flex justify-center select-none">
        <span class="Load bg-opacity-50 bg-my-sec-color">
          <div v-html="$appLogo('white', 'logo-x-small logo-rotate')"></div>
          <div class="ont" :class="progressTotal > 0 ? 'HasProgress' : ''">
            <span
              class="text-sm font-bold px-1 py-1 rounded-3xl flex items-center justify-around"
            >
              <span :class="icon"></span>
              <span class="pr-2" style="letter-spacing: 0.5px">{{ info }}</span>
            </span>
            <i class="Progress" :style="'width:' + progressElapsed + '%;'"></i>
          </div>
        </span>
      </div>
    </transition>
  </div>
</template>
<script lang="ts">
import { useProcess } from "@/store";

export default {
  setup() {
    const $Process = useProcess();

    const status = computed(() => $Process.status);
    const info = computed(() => $Process.info);
    const icon = computed(() => $Process.icon);
    const progressTotal = computed(() => $Process.progressTotal);
    const progressElapsed = computed(() => $Process.progressElapsed);

    return {
      status,
      info,
      icon,
      progressTotal,
      progressElapsed,
    };
  },
};
</script>
<style lang="scss" scoped>
.Wrapper {
  pointer-events: none;
  position: fixed;
  top: 160px;
  left: 0;
  width: 100%;
  z-index: 120;
}
.Load {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  height: 55px;
  padding: 4px;
  // padding-bottom: 2px;
  border-radius: 28px;
  & > .ont {
    min-width: 215px;
    max-width: 300px;
    background-color: $sec-color;
    color: $pri-color;
    border-radius: 28px;
    &.HasProgress {
      height: 2.1em;
      position: relative;
      background-color: $sec-color;
      overflow: hidden;
      & > .Progress {
        position: absolute;
        top: 3px;
        bottom: 3px;
        width: 100%;
        background-color: $pri-color;
      }
      & > span {
        z-index: 1;
        position: absolute;
        top: 7px;
        bottom: 7px;
        left: 5px;
        right: 5px;
        overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}
</style>
