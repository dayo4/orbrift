<template>
  <div
    ref="dropBtn"
    @click="autoPositioning"
    :style="
      pos
        ? {
            position: pos.type,
            top: pos.top + 'px',
            bottom: pos.bottom + 'px',
            left: pos.left + 'px',
            right: pos.right + 'px'
          }
        : ''
    "
    :class="'DropBtnId-' + ownID"
    class="GlobalDropBtn t-white br1 p-1"
  >
    <slot name="labels"></slot>
    <transition name="slide-down-fade">
      <button
        :ref="'dropDown' + ownID"
        v-show="dropdown === true"
        class="GlobalDropdown shadow-5 bg-grey--3 font-3 br1 t-white px-3"
        :style="
          optPos
            ? {
                top: optPos.top + 'px',
                bottom: optPos.bottom + 'px',
                left: optPos.left + 'px',
                right: optPos.right + 'px'
              }
            : ''
        "
      >
        <slot></slot>
      </button>
    </transition>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default  {
  props: {
    ownID: { required: true, type: [String, Number] },
    text: { required: false, type: String },
    pos: {
      required: false,
      type: Object /* { type?, top?, bottom?, right?, left?} */
    },
    optPos: {
      required: false,
      type: Object /* { type?, top?, bottom?, right?, left?} */
    }
  },
  data() {
    return {
      dropdown: false
    };
  },

  methods: {
    dropdownHandler() {
      const dropdown = e => {
        if (!e.target.closest(".DropBtnId-" + this.ownID)) {
          this.dropdown = false;
        }
      };
      window.addEventListener("click", dropdown, false);
    },
    autoPositioning(e: Event) {
      this.dropdown = !this.dropdown;
      const dropBtn = e.target as HTMLElement;
      const dropDown = this.$refs["dropDown" + this.ownID];
      const dropBtnRect = dropBtn.getBoundingClientRect();
      const dropDownRect = dropDown.getBoundingClientRect();

      const Xcoord = window.innerWidth;
      const Ycoord = window.innerHeight;
      function position() {
        if (dropBtnRect.top > Ycoord / 2) {
          dropDown.style.top = "-" + dropDownRect.height + "px";
        } else {
          dropDown.style.top = dropBtnRect.height + "px";
        }

        if (dropBtnRect.left > Xcoord / 2) {
          dropDown.style.right = `${0}px`;
        } else dropDown.style.left = `${0}px`;
      }
      position();
    }
  },
  mounted() {
    this.dropdownHandler();
  }
};
</script>
<style lang="scss">
.GlobalDropBtn {
  position: relative;
  height: 33px;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
  font-weight: bold;
  box-shadow: rgb(54, 54, 54) 0px 3px 4px;
  transition: 0.1s;
  &:active {
    box-shadow: none;
  }
}
.GlobalDropdown {
  position: absolute;
  & a {
    text-decoration: none;
    color: white;
  }
  & > * {
    border-bottom: solid 1px grey;
    display: flex;
    flex-wrap: nowrap;
    padding: 5px 7px 5px 5px;
    margin: 5px 3px;
    border-radius: 8px;
    transition: all 0.3s;

    &:hover {
      background-color: rgba(228, 227, 227, 0.26);
    }

    & span:first-child {
      margin-right: 8px !important;
    }
    & span:only-child {
      margin-right: 0px !important;
    }
  }
}
</style>
