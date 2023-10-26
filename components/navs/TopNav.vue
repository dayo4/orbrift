<template>
  <nav ref="topNav" id="TopNav" class="flex items-center select-none">
    <div class="flex items-center justify-between shadow-lg">
      <router-link to="/" class="Logo flex items-center px-2 mr-2">
        <div v-html="$appLogo('white', 'logo-x-small mr-2')"></div>
        orbrift
      </router-link>

      <!-- SEARCH ICON FOR MOBILE SCREEN -->
      <div @click="$emit('search')" class="SearchIcon sm:hidden">
        <i class="icon-search"></i>
      </div>
      <!-- SEARCH ICON FOR MOBILE SCREEN -->

      <div class="MainNavLinks flex items-center justify-center">
        <!-- LINKS FOR VERY SMALL SCREENS  -->
        <a @click="openDropdown('mobile')" class="MenuDropBtn sm:hidden">
          <span class="BtnIcon icon-list-nested"></span>
          <div
            v-show="dropdowns.mobileDropdown"
            ref="mobileDropdownRef"
            class="DropdownMenu text-white bg-opacity-0 p-2 rounded-lg"
          >
            <a
              class="Hidden flex shadow-sm"
              v-for="(link, i) in mobileNavLinks"
              :key="i"
              @click.prevent="changeRoute(link.a)"
            >
              <div class="Icon" :class="link.icon"></div>
              <div class="name">{{ link.name }}</div>
            </a>
          </div>
        </a>
        <!-- LINKS FOR VERY SMALL SCREENS  -->

        <!-- LINKS FOR WIDE SCREENS  -->
        <ClientOnly>
          <router-link
            :class="`hide-xs ${
              link.subLinks ? 'MenuDropBtn NoLowerBorder' : ''
            }`"
            :to="{ name: link.a }"
            v-for="(link, i) in navLinks"
            :key="i"
          >
            <a v-if="link.subLinks" @click="openDropdown(link.dropdownType)">
              <span class="Icon" :class="link.icon"></span>
              <span class="Name" :class="`${link.subLinks ? 'DdArrow' : ''}`">{{
                link.name
              }}</span>
              <div
                v-show="dropdowns.infoDropdown"
                :ref="link.dropdownType + 'DropdownRef'"
                class="DropdownMenu text-white bg-opacity-0 p-2 rounded-lg"
              >
                <a
                  class="Hidden flex shadow-sm"
                  v-for="(subLink, i) in link.subLinks"
                  :key="i"
                  @click.prevent="changeRoute(subLink.a)"
                >
                  <div class="Icon" :class="subLink.icon"></div>
                  <div class="name">{{ subLink.name }}</div>
                </a>
              </div>
            </a>
            <a v-else>
              <span class="Icon" :class="link.icon"></span>
              <span class="Name">{{ link.name }}</span>
            </a>
          </router-link>
        </ClientOnly>
        <!-- LINKS FOR WIDE SCREENS  -->
      </div>

      <!-- SEARCH ICON FOR WIDE SCREEN -->
      <div @click="$emit('search')" class="SearchIcon flex items-center justify-center xs:hidden sm:flex">
        <i class="icon-search"></i>
      </div>
      <!-- SEARCH ICON FOR WIDE SCREEN -->

      <div class="ExtraLink flex items-center justify-center xs:hidden sm:flex">
        <router-link :to="{ name: 'create' }">
          <span class="Icon icon-diamond"></span>
          <span class="Name">Hire me</span>
        </router-link>
      </div>
    </div>
  </nav>
</template>
<script lang="ts">
import { useNavs } from "@/store";

export default {
  setup() {
    const $Navs = useNavs();
    const router = useRouter();

    /* Do not rename these */
    const dropdowns = ref({
      mobileDropdown: false,
      infoDropdown: false,
    });

    const menuAnimOn = ref(false);

    /* Element Refs */
    const topNav: Ref<HTMLElement | null> = ref(null);
    const mobileDropdownRef: Ref<HTMLElement | null> = ref(null);
    const infoDropdownRef: Ref<HTMLElement | null> = ref(null);

    const navLinks = [
      { a: "index", name: "home", icon: "icon-home" },
      {
        a: "",
        name: "info",
        icon: "icon-info",
        dropdownType: "info",
        subLinks: [
          { a: "contact", name: "contact", icon: "icon-mail" },
          { a: "about", name: "about", icon: "icon-info" },
          { a: "projects", name: "projects", icon: "icon-star-empty" },
        ],
      },
      { a: "posts", name: "blog", icon: "icon-doc" },
    ];

    const mobileNavLinks = [
      { a: "index", name: "home", icon: "icon-home" },
      { a: "contact", name: "contact", icon: "icon-mail" },
      { a: "about", name: "about", icon: "icon-info" },
      { a: "posts", name: "blog", icon: "icon-doc" },
      { a: "projects", name: "projects", icon: "icon-star-empty" },
      { a: "create", name: "Hire Me", icon: "icon-diamond" },
    ];

    const identifyDropdownType = (type: string) => {
      if (type === "mobile") {
        return mobileDropdownRef.value;
      } else {
        return infoDropdownRef.value;
      }
    };

    const openDropdown = (type: string) => {
      if (!dropdowns.value[type + "Dropdown"]) {
        const dropdown = identifyDropdownType(type);

        if (!dropdown) return;

        const menu = dropdown?.children || dropdown[0].children;

        if (!menu) return;

        dropdowns.value[type + "Dropdown"] = true;

        for (let i = 0; i < menu.length; i++) {
          setTimeout(() => {
            menu[i].classList.remove("Hidden");
            menu[i].classList.add("Shown");
          }, i * 200);
        }
      } else {
        closeDropdown();
      }
    };

    const closeDropdown = () => {
      const handler = (type: string) => {
        const dropdown = identifyDropdownType(type);
        if (!dropdown) return;

        const menu = dropdown?.children || dropdown[0].children;

        if (!menu) return;

        menuAnimOn.value = true;

        for (let i = menu.length - 1; i >= 0; i--) {
          setTimeout(() => {
            menu[i].classList.remove("Shown");
            menu[i].classList.add("Hidden");
          }, i * 160);
          if (i === 0) {
            setTimeout(() => {
              dropdowns.value[type + "Dropdown"] = false;
              menuAnimOn.value = false;
            }, menu.length * 190);
          }
        }
      };

      if (dropdowns.value.mobileDropdown && !menuAnimOn.value) {
        handler("mobile");
      }
      if (dropdowns.value.infoDropdown && !menuAnimOn.value) {
        handler("info");
      }
    };

    const changeRoute = (link) => {
      router.push({ name: link });

      if (router.currentRoute.value.name === link) {
        closeDropdown();
      }
    };

    watch(router.currentRoute, () => {
      topNav.value?.classList.remove("rotated");
      closeDropdown();
    });

    onMounted(() => {
      $Navs.setTopNav(topNav.value);
    });

    return {
      dropdowns,
      menuAnimOn,
      navLinks,
      mobileNavLinks,
      openDropdown,
      closeDropdown,
      changeRoute,

      /* Expose template refs */
      topNav,
      mobileDropdownRef,
      infoDropdownRef,
    };
  },
};
</script>
<style lang="scss" scoped>
nav {
  position: fixed;
  top: 0;
  background-color: transparent;
  height: 52px;
  width: 100%;
  z-index: 7;
  transition: ease 0.5s;
  &.rotated {
    transform: rotateX(90deg);
    visibility: hidden;
  }
  &.FullTrans > div {
    background-color: transparent !important;
    box-shadow: none !important;
  }
  & a:not(.MenuDropBtn) {
    position: relative;
    overflow: hidden;
    border-radius: 28px;
  }

  & > div {
    background-color: $sec-color-trans-1;
    width: 100%;
    height: 100%;
    border-radius: 3px;
    position: relative;
    transition: 0.5s;
    & a {
      cursor: pointer;
      color: $pri-color;
      text-decoration: none;
    }
    & .Logo {
      letter-spacing: 0.7px;
      color: $pri-color;
      font-weight: bold;
    }
  }
}

.SearchIcon {
  text-align: center;
  border-radius: 28px;
  border: $pri-color 1.5px solid;
  width: 40px;
  padding-top: 1px;
  color: $pri-color;
  cursor: pointer;
}

.MainNavLinks,
.ExtraLink {
  height: 100%;
  & a {
    padding: 5px;
    margin-right: 13px;
    white-space: nowrap;
    transition: 0.3s;
    &:not(.MenuDropBtn):hover {
      transform: scale(1.1);
    }
    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      width: 0;
      left: 50%;
      border-bottom: 3px solid transparent;
      transition: ease-in-out 0.6s;
    }
    &:not(.NoLowerBorder).router-link-exact-active::before {
      border-bottom: 3px solid $pri-color;
      left: 0px;
      width: 100%;
    }
    & .Icon {
      font-weight: thin !important;
      margin-left: 5px;
      margin-right: 8px;
    }
    & .Name {
      text-transform: capitalize;
      margin-right: 4px;
    }
  }
}

.ExtraLink {
  font-size: 18px ;
  margin-right: 8px;
  // & a {
    // border: solid $pri-color 1.5px;
  // }
  & .Name {
      font-size: 18px !important;
  }
}

.MainNavLinks {
  & .MenuDropBtn {
    position: relative;
    margin-right: 10px;
    & .BtnIcon {
      font-size: 25px;
    }
    & .Name.DdArrow::before {
      font-family: "fontello";
      font-style: normal;
      font-weight: normal;
      content: "\e858";
      position: absolute;
      right: -10px;
      top: 3px;
      font-size: 14px;
    }
  }

  & .DropdownMenu {
    position: absolute;
    right: 0;
    top: 35px;
    font-size: 20px;
    cursor: default;
    & a {
      margin-bottom: 5px;
      padding: 5px 20px 5px 10px;
      // font-weight: bold;
      cursor: pointer;
      text-transform: capitalize;
      background-color: $sec-color-trans;
    }
    & a.Hidden {
      transform: translateX(100px);
      opacity: 0;
      transition: 0.5s;
    }
    & a.Shown {
      transform: translateX(0px);
      opacity: 1;
      transition: 0.5s;
    }
  }
}

@include sm-and-down {
  nav {
    height: 48px;
  }
  .MainNavLinks,
  .ExtraLink {
    & a {
      padding: 5px;
      margin-right: 3px;
    }
    & > a > .Name {
      font-size: 14px;
    }
  }
}
</style>
