<template>
  <div class="TestTop">
    <div>
      <h1>Testing ground</h1>

      <!-- <div class="logo-carousel">
        <div class="carousel-container" ref="container">
          <div class="carousel-track" ref="track">
            <div v-for="(logo, index) in logos" :key="index" class="logo-item">
              <img :src="logo" alt="Logo" />
            </div>
          </div>
        </div>
      </div> -->
      

      <Test />
    </div>
  </div>
</template>
<script lang="ts">

export default {
  setup() {

    onMounted(() => {
      
    });

    return {
    
    };
  },
};
</script>

<style lang="scss" scoped>
.FFT {
  max-width: 100%;
  overflow: scroll !important;
}

</style>
