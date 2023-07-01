<template>
  <div class="Wrapr">
    <div
      class="Main"
      v-for="(chunk, i) in 4"
      :key="i"
      :aria-hidden="i === 1 ? false : true"
    >
      <div v-for="(icon, i) in icons" :key="i" class="Item">
        <div class="SvgCont">
          <img
            class="SVG"
            :src="'/defaults/stk/svg/' + icon + '.svg'"
            draggable="false"
            type="image/svg+xml"
          />
        </div>
        <div class="Text">{{ icon }}</div>
      </div>
    </div>
    <!-- <div class="Deco Invis" ref="Deco" aria-hidden="true">
      <div v-for="(icon, i) in icons" :key="i" class="Item">
        <div class="SvgCont">
          <img
            class="SVG"
            :src="'/defaults/stk/svg/' + icon + '.svg'"
            draggable="false"
          />
        </div>
        <div class="Text">{{icon}}</div>
      </div>
    </div> -->
  </div>
</template>

<script lang="ts">
export default {
  setup() {
    let delayTimeout;

    const Deco: Ref<HTMLElement | null> = ref(null);

    const icons = [
      "javascript",
      "react",
      "typescript",
      "vue.js",
      "nuxt",
      "next",
      "nodejs",
      "g-Cloud",
      "gatsby",
      "graphql",
      // "jamstack",
      "firebase",
      "vercel",
      "wordpress",
      "mysql",
      // "ember",
    ];

    onMounted(() => {
      // delayTimeout = setTimeout(() => {
      //   Deco.value.classList.remove("Invis");
      // }, 10000);
    });

    onUnmounted(() => {
      clearTimeout(delayTimeout);
    });

    return {
      icons,
      Deco,
    };
  },
};
</script>

<style lang="scss" scoped>
.Wrapr {
  position: relative;
  display: flex;
  overflow: hidden !important;
  margin-bottom: 10px;
  width: 100vw;
}

.Main {
  display: flex;
  min-width: 224vw;
  animation: main 120s linear infinite;
}

.Item {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex: 0 0 14vw;
  height: 85px;
  padding: 5px 0;
  margin: 0 1vw;
}
.SvgCont {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
}
.Text {
  text-align: center;
  width: 100%;
  font-size: 16px;
  // font-weight: 500;
  text-transform: capitalize;
  color: $blue-grey--3;
}
.SVG {
  display: block;
  height: 100%;
  max-width: 100%;
}

@keyframes main {
  0% {
    transform: translateX(100vw);
    // transform: translateX(112vw);
  }

  100% {
    transform: translatex(-896vw);
    // transform: translatex(-336vw);
  }
}

@include xs-only {
  .Main {
  min-width: 308vw;
  // animation: main 10s linear infinite;
}

  .Item {
    flex: 0 0 18vw;
    margin: 0 2vw;
  }

  @keyframes main {
    0% {
      transform: translateX(100vw);
    }

    100% {
      transform: translatex(-1232vw);
    }
  }

}
</style>
