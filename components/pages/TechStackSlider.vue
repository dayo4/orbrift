<template>
  <div class="Wrapr">
    <div class="Main">
      <div v-for="(icon, i) in icons" :key="i" class="Item">
        <div class="SvgCont">
          <img
            class="SVG"
            :src="'/defaults/stk/svg/' + icon + '.svg'"
            draggable="false"
            type="image/svg+xml"
          />
        </div>
        <div class="Text">{{icon}}</div>
      </div>
    </div>
    <div class="Deco Invis" ref="Deco" aria-hidden="true">
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
    </div>
  </div>
  <!-- <Test/> -->
</template>

<script lang="ts">
export default {
  setup() {
    let delayTimeout;

    const Deco: Ref<HTMLElement | null> = ref(null);

    const icons = [
      "javascript",
      "react-native",
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
      delayTimeout = setTimeout(() => {
        Deco.value.classList.remove("Invis");
      }, 10000);
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
  overflow: hidden !important;
  position: relative;
  min-height: 70px;
  margin-bottom: 10px;
  max-width: 100vw;
}

.Main {
  display: flex;
  animation: main 40s linear infinite;
}
.Deco {
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  animation: deco 40s linear infinite;
  animation-delay: 10s;
  &.Invis {
    visibility: hidden;
    // display: none;
  }
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
.SvgCont{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
}
.Text {
  text-align: center;
  width: 100%;
  font-size: 16px;
  font-weight: bold;
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
    transform: translateX(112vw);
    // transform: translateX(112vw);
  }

  100% {
    transform: translatex(-336vw);
    // transform: translatex(-336vw);
  }
}

@keyframes deco {
  0% {
    transform: translateX(224vw);
    // transform: translateX(224vw);
  }

  100% {
    transform: translatex(-224vw);
    // transform: translatex(-224vw);
  }
}

@include xs-only {
  .Item {
    flex: 0 0 18vw;
    margin: 0 2vw;
  }

  @keyframes main {
    0% {
      transform: translateX(154vw);
    }

    100% {
      transform: translatex(-462vw);
    }
  }

  @keyframes deco {
    0% {
      transform: translateX(308vw);
    }

    100% {
      transform: translatex(-308vw);
    }
  }
}
</style>
