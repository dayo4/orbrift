<template>
  <div class="Wrapr">
    <div class="Main" v-for="(chunk, i) in 4" :key="i" :aria-hidden="i === 1 ? false : true">
      <div v-for="(icon, i) in icons" :key="i" class="Item" :class="icon.t ? 'HasText' : ''">
        <div class="SvgCont">
          <img class="SVG" :src="'/defaults/stk/svg/' + icon.i + '.svg'" draggable="false" type="image/svg+xml" />
        </div>
        <div v-if="icon.t" class="Text">{{ icon.t }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  setup() {

    const Deco: Ref<HTMLElement | null> = ref(null);

    const icons = [
      { i: "vue" },
      { i: "typescript" },
      { i: "react", t: "ReactJs" },
      { i: "nuxt" },
      { i: "nodejs" },
      { i: "next" },
      { i: "docker_", t: "Docker" },
      // { i: "web3" },
      { i: "gcloud", t: "G-cloud" },
      // { i: "jamstack" },
      { i: "graphql", t: "Graphql" },
      { i: "mysql", t: "Mysql" },
      { i: "wordpress", t: "Wordpress" },
      // "firebase",
      // "vercel",
    ];

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
  // margin-bottom: 10px;
  width: 100vw;
  background-color: white;
}


.Main {
  display: flex;
  // min-width: 196vw;
  min-width: 166vw;
  // animation: main 120s linear infinite;
  animation: main 104s linear infinite;
}

.Item {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex: 0 0 14vw;
  height: 65px;
  padding: 5px 0;
  margin: 0 1vw;

  &.HasText .SvgCont {
    height: 35px;
  }

}

.SvgCont {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
}

.Text {
  text-align: center;
  width: 100%;
  font-size: 15px;
  // font-weight: bold;
  text-transform: capitalize;
  color: $blue-grey--3;
}

.SVG {
  display: block;
  height: 100%;
  width: 100%;
}

@keyframes main {
  0% {
    transform: translateX(100vw);
  }

  100% {
    transform: translatex(-742vw);
  }
}

@include sm-and-up {
  .Item.HasText {
    margin: 0;
  }
}

@include xs-only {
  .Main {
    // min-width: 286vw;
    min-width: 246vw;
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
      // transform: translatex(-1066vw);
      transform: translatex(-906vw);
    }
  }

}
</style>
