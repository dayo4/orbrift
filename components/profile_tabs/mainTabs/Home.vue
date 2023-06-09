<template>
  <section class="MgFrameCont flex j-c-center a-i-center">
    <div ref="MgFrame" class="MgFrame noselect">
      <span class="img-masked-0">
        <img
          src="/defaults/usr/me.jpg"
          alt="Adedayo Adeniyi"
          draggable="false"
        />
      </span>
      <div
        :class="'nav_link_chunk_' + chunk.id"
        v-for="chunk in chunklist"
        :key="chunk.id"
      >
        <span>
          <span @click="$emit('tabClicked', chunk.name)">
            <span class="link_text">{{ chunk.name }}</span>
          </span>
        </span>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
export default {
  setup() {
    const currentTab = ref("Home");
        
    const chunklist = [
      // { id: 1, name: "Portfolio" },
      { id: 2, name: 'About' },
      { id: 3, name: 'Contact' },
    ];
    const switchTab = (tab_id) => {
      currentTab.value = "Tab_" + tab_id;
    };

    return {
      currentTab,
      chunklist,
      switchTab
    };
  },
};
</script>
<style lang="scss" scoped>
.MgFrameCont {
  height: 380px;
  margin-top: 40px;
  position: absolute;
  top: 0;
  left: calc(50% - 100px);
}

/* Owner image */
.MgFrame {
  position: relative;
  height: 200px;
  width: 200px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.2);

  & > span:nth-child(1) {
    position: absolute;
    top: 5%;
    left: 5%;
    overflow: hidden;
    z-index: 2;
    border-radius: 50%;
    width: 90%;
    height: 90%;
    background-color: $blue-grey-2;

    & img {
      width: 100%;
      height: 100%;
    }
  }

  & [class*="nav_link_chunk_"] {
    position: absolute;
    top: 0;
    left: 0;
    height: 200px;
    width: 200px;
    display: flex;
    align-items: center;
    overflow: hidden;
    border-radius: 50%;

    & > span {
      position: relative;
      left: 0;
      width: 50%;
      height: 65%;

      & > span {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        overflow: hidden;
        width: 65%;
        height: 100%;
        color: white;
        text-transform: capitalize;
        font-weight: bold;
        letter-spacing: 1px;
        font-size: 17px;
        cursor: pointer;
        border-bottom-right-radius: 30%;
        border-top-right-radius: 30%;
        transition: 0.3s;

        &:hover {
          background-color: rgba(255, 255, 255, 0.2);
          background: linear-gradient(
            to right,
            rgba(255, 255, 255, 0.4),
            rgba(255, 255, 255, 0) 95%
          );
        }

        &,
        &:active {
          background-color: rgba(255, 255, 255, 0.3);
          background: linear-gradient(
            to right,
            rgba(255, 255, 255, 0.6),
            rgba(255, 255, 255, 0) 95%
          );
        }

        & .link_text {
          transform: rotateZ(-90deg);
        }

        &::after {
          content: "";
          position: absolute;
          right: -137%;
          top: -25%;
          border: 0.5px white solid;
          border-radius: 50%;
          width: 150%;
          height: 150%;
        }
      }
    }
  }

  & .nav_link_chunk_2 {
    animation: nav_link_chunk_2 1.5s forwards;
    transform: rotateZ(65deg) translateX(-100px);
  }
  & .nav_link_chunk_3 {
    animation: nav_link_chunk_3 2s forwards;
    transform: rotateZ(115deg) translateX(-100px);
  }
}

@keyframes nav_link_chunk_2 {
  0% {
    transform: rotateZ(15deg);
  }
  50% {
    transform: rotateZ(60deg);
    animation-timing-function: cubic-bezier(0.4, -0.65, 0.265, 2);
  }
  100% {
    transform: rotateZ(60deg) translateX(-100px);
  }
}

@keyframes nav_link_chunk_3 {
  0% {
    transform: rotateZ(15deg);
  }
  50% {
    transform: rotateZ(120deg);
    animation-timing-function: cubic-bezier(0.4, -0.65, 0.265, 2);
  }
  100% {
    transform: rotateZ(120deg) translateX(-100px);
  }
}
</style>
