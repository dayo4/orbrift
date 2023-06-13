<template>
  <div
    class="HPWrapper noselect bg-img-masked"
    :class="collapsed ? 'Collapsed' : ''"
  >
    <div class="Panel">
      <div class="Body flex wrap j-c-between p-2 mt-2">
        <div
          v-for="(icon, i) in pageIcons"
          :key="i"
          class="IconWrapper m-1 text-center"
          @click="click({ link: icon.link })"
        >
          <router-link :to="{ name: icon.link }" class="t-white">
            <span :class="icon.font" class="Icon"></span>
            <span class="IconText">{{ icon.text }}</span>
          </router-link>
        </div>
      </div>

      <div class="Body flex wrap j-c-between p-2">
        <div
          v-for="(icon, i) in socialLinks"
          :key="i"
          class="IconWrapper m-1 text-center"
        >
          <a :href="icon.link" target="_blank" class="t-white">
            <span :class="icon.font" class="Icon"></span>
            <span class="IconText">{{ icon.text }}</span>
          </a>
        </div>
      </div>
    </div>

    <!-- Handle -->
    <span
      @click="collapsed = !collapsed"
      class="Handle t-white shadow-3 flex a-i-center j-c-end br5"
    >
      <span
        class="icon-right-open-big"
        :class="collapsed ? '' : 'close'"
      ></span>
    </span>
  </div>
</template>
<script lang="ts">
export default {
  setup() {
    const collapsed = ref(true);

    const pageIcons = [
      { font: "icon-mail", text: "Mail", link: "contact" },
      { font: "icon-info", text: "About", link: "about" },
      { font: "icon-diamond", text: "Create", link: "create" },
      { font: "icon-doc", text: "Blog", link: "posts" },
    ];

    const socialLinks = [
      {
        font: "icon-whatsapp",
        text: "WhatsApp",
        link: "https://wa.me/message/25GPJOSG52QCO1",
      },
      {
        font: "icon-facebook",
        text: "Facebook",
        link: "https://facebook.com/",
      },
      {
        font: "icon-linkedin",
        text: "LinkedIn",
        link: "https://www.linkedin.com/in/dayo-adeniyi-761498244",
      },
    ];

    function click({ link, store, auth }) {
      if (link) {
        collapsed.value = !collapsed.value;
      }
    }

    function collapse() {
      function collapseHandler(e) {
        if (!e.target.closest(".HPWrapper")) {
          collapsed.value = true;
        }
      }

      onMounted(() => {
        window.addEventListener("click", collapseHandler, false);
      });
    }

    collapse();

    return {
      collapsed,
      socialLinks,
      pageIcons,
    };
  },
};
</script>

<style lang="scss" scoped>
.HPWrapper {
  position: fixed;
  left: 0;
  top: 0;
  width: 400px;
  height: 100%;
  z-index: 8;
  transition: width 0.2s;
  background-color: $sec-color-transparent-less;

  & .Panel {
    overflow-y: scroll;
    width: 100%;
    height: 100%;
  }
  & .Handle {
    cursor: pointer;
    position: absolute;
    right: -18px;
    top: 70%;
    width: 45px;
    height: 45px;
    background-color: $sec-color;
    color: $pri-color;
    transition: all 0.4s;
    box-shadow: $shadow-3;
    z-index: -1;
    &:hover {
      right: -22px;
    }
    & > span {
      position: absolute;
      font-size: 22px;
      top: calc(50% - 16px);
      right: -5px;
      transition: transform 0.3s;
      &.close {
        transform: rotateZ(180deg);
      }
    }
  }

  &.Collapsed {
    width: 0px !important;
  }
}
.Body {
  border-top: white solid 1.5px;
  border-radius: 10px;
  padding-right: 30px;
}

.IconWrapper {
  flex: 0 0 auto;
  min-width: 70px;
  border-radius: 20px 20px 4px 4px;
  transition: background-color 0.5s ease;

  &:not(.NoHover):hover {
    background-color: rgba(0, 187, 212, 0.353);
    cursor: pointer;
  }

  & span {
    display: block;
    margin: 5px;
  }
  & span:first-child {
    font-size: 30px;
    text-shadow: 0px 1px 1px white;
  }
  & span:last-child {
    font-size: 12px;
    color:$pri-color;
    font-weight: bold;
  }
  & a {
    text-decoration: none;
  }
}

@include xs-only {
  .HPWrapper {
    max-width: calc(100% - 45px);
  }
}
</style>
