<template>
  <footer class="t-white text-center bg-gradient-2">
    <section>
      <div>
        <span class="icon-copyright mr-2">2023 orbrift</span>
      </div>
      <div class="mt-3">
        <router-link class="t-blue-4 no-deco" to="/privacy"
          >Privacy and Terms</router-link
        >
      </div>
    </section>
  </footer>
</template>
<script lang="ts">

export default {

};
</script>
<style lang="scss">
footer {
  display: table-row;
  width: 100%;

  & > section {
    padding: 60px 0;
    position: relative;

    &::before,
    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: auto;
      top: 0;
      right: 0;
      background-repeat: repeat-x;
    }
    &::before {
      height: 10px;
      background-size: 20px 20px;
      background-image: radial-gradient(
        circle at 10px 15px,
        transparent 12px,
        white 13px
      );
    }

    &::after {
      height: 15px;
      background-size: 40px 20px;
      background-image: radial-gradient(
        circle at 10px 0,
        white 12px,
        transparent 13px
      );
    }
  }
}
</style>
