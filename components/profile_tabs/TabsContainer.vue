<template>
  <!-- <transition name="slide-fade" mode="in-out"> -->
    <div ref="TabsCont" class="ProfileTabsContainer shadow-3 xs12 sm11 md9 lg7">
      <span @click="back" class="closeBtn"><i class="icon-cancel"></i></span>
      <!-- TABS SLOT -->
      <slot></slot>
    </div>
  <!-- </transition> -->
</template>
<script lang="ts">

export default {
  setup(props, { emit }) {
    const TabsCont: Ref<HTMLElement | null> = ref(null);

    const back = () => {
      TabsCont.value?.classList.add("removed");
      setTimeout(() => {
        TabsCont.value?.classList.remove("removed");
      }, 600);
      emit("return");
    }

    return {
      back
    }

  },
};
</script>
<style lang="scss">
.ProfileTabsContainer {
  position: relative;
  min-height: 200px;
  margin: 20px 5px;
  padding: 15px;
  border-radius: 12px 0px 12px 12px;
  border-top: solid 3px $pri-color-alt;
  border-bottom: solid 3px $pri-color-alt;
  background-color: rgb(247, 247, 240);
  z-index: 2;

  &.removed {
    animation: tab_out 500ms cubic-bezier(0.51, -0.1, 0.02, 0.89) forwards;
  }

  & .closeBtn {
    height: 33px;
    width: 33px;
    font-size: 25px;
    position: absolute;
    top: -30px;
    right: 0px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(247, 247, 240);
    border-radius: 15px 15px 2px 2px;
    color: $blue-grey;
    cursor: pointer;
    & i {
      transition: 0.3s;
    }

    &:hover i {
      transform: rotateZ(180deg);
    }
  }
}

@include sm-and-down {
  .ProfileTabsContainer {
    padding: 5px;
    max-width: 94% !important;
  }
}

@keyframes tab_in {
  0% {
    opacity: 0.5;
    transform: rotateZ(10deg) translateX(20px);
  }

  100% {
    opacity: 1;
    transform: rotateZ(0deg) translateX(0px);
  }
}
@keyframes tab_out {
  0% {
    opacity: 1;
    transform: translateY(0px);
  }
  50% {
    opacity: 0.7;
    transform: translateY(-90px);
  }
  100% {
    opacity: 0;
    transform: translateY(250px);
  }
}
</style>
