<template>
  <div class="Wrapr">
    <div class="Main">
      <div v-for="(icon, i) in icons" :key="i" class="Item">
        <object class="SVG" :data="'/defaults/stk/svg/' + icon + '.svg'" type="image/svg+xml"></object>
      </div>
    </div>
    <div class="Deco" aria-hidden="true">
      <div v-for="(icon, i) in icons" :key="i" class="Item">
        <object class="SVG" :data="'/defaults/stk/svg/' + icon + '.svg'" type="image/svg+xml"></object>
      </div>
    </div>
  </div>
  <!-- <Test/> -->
</template>
  
<script lang="ts">
export default {

  setup() {
    const icons = [
      "javascript",
      "react-native",
      "typescript",
      "vue",
      "nuxt",
      "next",
      "nodejs",
      "google-cloud",
      "graphql",
      "firebase",
      "vercel",
      "wordpress",
      "mysql",
      "ember",
    ];
    return {
      icons
    };
  },
};
</script>
  
<style lang="scss" scoped>
.Wrapr {
  overflow: hidden;
  position: relative;
}

.Main {
  display: flex;
  animation: main 20s linear infinite;
}
.Deco {
  position: absolute;
  top: 0;
  right:0;
  display: flex;
  animation: deco 20s linear infinite;
  animation-delay: 5s;
}

.Item {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 0 14vw;
  height: 70px;
  padding: 5px 0;
  margin: 0 1vw;
}

.SVG {
  display: block;
  height: 100%;
  max-width: 100%;
}

@keyframes main {
  0% {
    transform: translateX(112vw);
  }

  100% {
    transform: translatex(-336vw);
  }
}

@keyframes deco {
  0% {
    transform: translateX(224vw);
  }

  100% {
    transform: translatex(-224vw);
  }
}

@include xs-only {
.Item {
  flex: 0 0 18vw ;
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
  