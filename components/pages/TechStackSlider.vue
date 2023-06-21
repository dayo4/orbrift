<template>
<div class="marquee">
  <div class="marquee-content"> 
    <div v-for="(icon, i) in icons" :key="i" class="marquee-item">
      <img :src="icon" alt="">
    </div>
  </div>
</div>
    <!-- <Test/> -->
</template>

<script lang="ts">
export default {
    
  setup() {
const icons = [
      "/defaults/logo/orbrift-cy.png",
      "/defaults/logo/orbrift-cy.png",
      "/defaults/logo/orbrift-cy.png",
      "/defaults/logo/orbrift-cy.png",
      "/defaults/logo/orbrift-cy.png",
      "/defaults/logo/orbrift-cy.png",
      "/defaults/logo/orbrift-cy.png",
      "/defaults/logo/orbrift-cy.png",
      "/defaults/logo/orbrift-cy.png",
      "/defaults/logo/orbrift-cy.png",
      "/defaults/logo/orbrift-cy.png",
      "/defaults/logo/orbrift-cy.png",
      "/defaults/logo/orbrift-cy.png",
      "/defaults/logo/orbrift-cy.png",
      "/defaults/logo/orbrift-cy.png",
      "/defaults/logo/orbrift-cy.png",
      "/defaults/logo/orbrift-cy.png",
      "/defaults/logo/orbrift-cy.png",
      "/defaults/logo/orbrift-cy.png",
      "/defaults/logo/orbrift-cy.png",
      "/defaults/logo/orbrift-cy.png",
      "/defaults/logo/orbrift-cy.png",
      // "/defaults/logo/orbrift-cy.png",
      // "/defaults/logo/orbrift-cy.png",
      // "/defaults/logo/orbrift-cy.png",
      // "/defaults/logo/orbrift-cy.png",
      // "/defaults/logo/orbrift-cy.png",
    ];
    return {
      icons
    };
  },
};
</script>

<style lang="scss" scoped>
.marquee {
  overflow: hidden;
}

.marquee-content {
  display: flex;
  animation: scrolling 10s linear infinite;
}

.marquee-item {
  flex: 0 0 10vw;
  margin: 0 1vw;
/*   flex: 0 0 20vw; */
/*   margin: 0 2vw; */
}

.marquee-item img {
  display: block;
  width: 100%;
/*   padding: 0 20px; */
}

@keyframes scrolling {
  0% { transform: translateX(0); }
  100% { transform: translatex(-144vw); }
}

</style>
