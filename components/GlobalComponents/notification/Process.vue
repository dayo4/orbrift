<template>
  <div>
    <transition name="slide-up-fade">
      <div v-show="status" class="Wrapper flex j-c-center noselect">
        <span class="Load bg-trans-1">
          <div
            v-html="$appLogo('fill', 'logo-x-small logo-rotate shadow-')"
          ></div>
          <div class="TextCont" :class="progressTotal > 0 ? 'HasProgress' : ''">
            <span
              class="
                bg-white
                font-3
                bold-3
                px-1
                py-1
                br4
                flex
                a-i-center
                j-c-around
              "
            >
              <span :class="icon" class="t-pink--4"></span>
              <span class="Text t-pink--4 pr-2 letter-space-1">{{ info }}</span>
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

    return {
      status: $Process.status,
      info: $Process.info,
      icon: $Process.icon,
      progressTotal: $Process.progressTotal,
      progressElapsed: $Process.progressElapsed,
    }
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
  padding-bottom: 2px;
  border-radius: 28px;
  & > .TextCont {
    min-width: 215px;
    max-width: 300px;
    &.HasProgress {
      border-radius: 28px;
      height: 2.1em;
      position: relative;
      background-color: white;
      overflow: hidden;
      & > .Progress {
        position: absolute;
        top: 3px;
        bottom: 3px;
        width: 100%;
        background-color: $pink;
      }
      & > span {
        z-index: 1;
        position: absolute;
        top: 7px;
        bottom: 7px;
        left: 5px;
        right: 5px;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}
</style>
