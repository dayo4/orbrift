<template>
    <section class="slider-container">
      <ul class="slider-list" ref="sliderListRef">
        <li v-for="(image, index) in images" :key="index">
          <img :src="image.src" :alt="image.alt" />
        </li>
      </ul>
    </section>
</template>

<script lang="ts">
export default {
    
  setup() {
    // Tech stack slider props
    const images = [
      { src: "/defaults/logo/orbrift-cy.png", alt: "Image 1" },
      { src: "/defaults/logo/orbrift-cy.png", alt: "Image 2" },
      { src: "/defaults/logo/orbrift-cy.png", alt: "Image 3" },
      // Add more images as needed
    ];

    const sliderListRef = ref(null);
    const listItemWidth = ref(0);
    let sliderInterval;

    const animateSlider = () => {
      if (sliderListRef.value) {
        sliderListRef.value.style.transform = `translateX(-${listItemWidth.value}px)`;
      }
    };


    onMounted(() => {
      // Icons slider
      if (sliderListRef.value) {
        listItemWidth.value = sliderListRef.value.firstElementChild.clientWidth;
      }

      const handleTransitionEnd = () => {
        if (sliderListRef.value) {
          sliderListRef.value.appendChild(
            sliderListRef.value.firstElementChild
          );
          sliderListRef.value.style.transition = "none";
          sliderListRef.value.style.transform = "translateX(0)";

          setTimeout(() => {
            sliderListRef.value.style.transition =
              "transform 10s linear infinite";
          });
        }
      };

      if (sliderListRef.value) {
        sliderListRef.value.addEventListener(
          "transitionend",
          handleTransitionEnd
        );
      }

      sliderInterval = setInterval(animateSlider, 10000); // Adjust the duration based on your preference

    });

    onUnmounted(() => {
      if (sliderInterval) {
        clearInterval(sliderInterval);
      }
    });

    return {
      images,
      sliderListRef,
    };
  },
};
</script>

<style lang="scss">
//icons slider
.slider-container {
  width: 100%;
  height: 100px;
  overflow: hidden;
  position: relative;
  // background-color: red;
  margin-bottom: 50px;
}

.slider-list {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  // background-color: yellow;
  animation: scroll 10s linear infinite;
}

.slider-list li {
  list-style: none;
  width: 70px;
  height: 70px;
  margin-right: 10px;
}

.slider-list li img {
  max-width: 100%;
  max-height: 100%;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}


</style>
