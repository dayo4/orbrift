<template>
  <button :class="classes" class="GenBtn" @click="handleClick">
    <span class="iconClasses"> </span>
    <slot></slot>
  </button>
</template>
<script lang="ts">
export default {
  props: {
    type: {
      type: String,
      default: "basic",
    },
    loading: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: "",
    },
    size: {
      type: String,
      default: "medium",
    },
  },
  setup(props, { emit }) {
    const classes = computed(() => ({
      CtaBtn: props.type === "cta",
      BtnLoading: props.loading,
      Large: props.size === "large",
      Medium: props.size === "medium",
      Small: props.size === "small",
    }));
    const iconClasses = computed(() => ({
      // BtnLoading: props.loading,
      "icon-spin6": props.loading,
      "animate-spin": props.loading,
    }));

    const handleClick = () => {
      if (!props.loading) {
        emit("clicked");
        console.log(classes);
      }
    };

    return {
      classes,
      iconClasses,
      handleClick,
    };
  },
};
</script>
<style lang="scss">
.GenBtn {
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  padding: 6px 10px;
  cursor: pointer;
  outline: none;
  color: $pri-color;
  font-weight: bold;
  border-radius: 4px;
  // box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);
  /* shadow-3 */
  background-color: $sec-color;
  transition: 0.1s;
  &.Small {
    min-height: 30px;
    min-width: 100px;
  }
  &:not(.isDisabled):hover {
    opacity: 0.9;
  }
  &:not(.isDisabled):active {
    opacity: 0.77;
    box-shadow: none !important;
  }
}
.isDisabled {
  position: relative;
  overflow: hidden;
  box-shadow: none !important;
  &:after {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    background-color: rgba(72, 72, 72, 0.8);
    letter-spacing: 1px;
    font-weight: bold;
    transition: 0.5s;
  }
}
</style>
