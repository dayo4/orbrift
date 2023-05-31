<template>
  <div id="GBLMWrapper">
    <!-- At The very Top -->
    <h1 v-if="title" class="TitleGBL">
      <i></i>
      <slot name="WrapperTitle"></slot>
    </h1>

    <div class="InnerWrapper">
      <!-- Main Container (START) -->
      <article :class="rightPane ? 'xs11 md8' : 'xs11 md10 lg8'" class="mb-5">
        <!-- Main Container Header-->
        <section v-if="header" class="HeaderGBL">
          <slot name="WrapperHead"></slot>
        </section>

        <!-- Main Container Body-->
        <slot name="WrapperBody"></slot>
      </article>
      <!-- Main Container (END) -->

      <!-- Right Side Pane -->
      <article v-if="rightPane" class="RightPane xs11 md3">
        <slot name="RightPane"></slot>
      </article>
    </div>

    <!-- At The very Bottom -->
    <h1 v-if="footNote" class="FootNoteGBL">
      <i></i>
      <slot name="WrapperFootNote"></slot>
    </h1>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default {
  props: {
    title: { required: false, type: Boolean, default: true },
    footNote: { required: false, type: Boolean, default: false },
    header: { required: false, type: Boolean, default: true },
    rightPane: { required: false, type: Boolean, default: false },
  },
};
</script>

<style lang="scss">
#GBLMWrapper {
  padding-top: 60px;
}
.TitleGBL,
.FootNoteGBL {
  @include anim-title-bg;
}
.FootNoteGBL {
  font-size: 16px !important;
  padding: 8px 20px;
}
.InnerWrapper {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 50px;
}
.HeaderGBL {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  // background-color: rgb(45, 45, 45);
  @include bg-gradient-2;
  color: white;
  border-radius: 20px 20px 4px 4px;
  padding: 8px 12px 8px 12px;
  margin-bottom: 8px;
}
.RightPane {
  margin-left: 16px;
}

@include xs-only {
  .TitleGBL {
    font-size: 16px !important;
  }
  .HeaderGBL {
    justify-content: space-around;
    & > *:not(:only-child),
    & > *:not(:last-child) {
      margin-bottom: 4px;
    }
  }
  .RightPane {
    margin-left: 0;
  }
}

@keyframes xpand {
  0% {
    width: 70%;
    height: 70%;
    opacity: 0.7;
  }
  100% {
    width: 150%;
    height: 150%;
    opacity: 0;
  }
}
</style>
