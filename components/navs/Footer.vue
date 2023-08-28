<template>
  <footer class="t-white text-center">
    <section class="LNKCont">
      <div>
        <span class="icon-copyright mr-2">2023 orbrift</span>
      </div>
      <div class="mt-3">
        <router-link class="Lnk no-deco" to="/privacy"
          >Privacy and Terms</router-link
        >
      </div>
    </section>
          <!-- Social Icons -->
      <section
        
        class="Social flex j-c-center text-center mb-5"
      >
        <a
          class="icon-github mr-3 br5 b4"
          href="https://github.com/dayo4"
          target="blank"
        ></a>
        <a
          class="icon-facebook mr-3 br5 b4"
          href="https://facebook.com/dayo999"
          target="blank"
        ></a>
        <a
          class="icon-whatsapp mr-3 br5 b4"
          href="https://wa.me/message/25GPJOSG52QCO1"
          target="blank"
        ></a>
        <a
          class="icon-linkedin mr-3 br5 b4"
          href="https://www.linkedin.com/in/adedayo-adeniyi-761498244"
          target="blank"
        ></a>
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
  background-color: $sec-color;

  & .LNKCont {
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
  
  & .Lnk {
    color: $pri-color;
  }
  
  & .Social {
    text-align: center;
  & a {
    width: 30px;
    height: 30px;
    font-size: 16px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    color: $pri-color;
    text-decoration: none;
  }
}
}
</style>
