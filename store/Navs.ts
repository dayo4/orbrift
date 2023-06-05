import { defineStore } from "pinia";

interface Navs {
  container:
    | Window
    | HTMLElement
    | null /* This will be used to point to the MainContainer component from other components */;
  topNav: HTMLElement | null;
  bottomNav: HTMLElement | null;
  scrolled: boolean;

  scrollEventHandler: null;
}

export const useNavs = defineStore("navs", {
  state: (): Navs => ({
    container: null,
    topNav: null,
    bottomNav: null,

    scrolled: false,
    scrollEventHandler: null,
  }),

  getters: {},

  actions: {
    setScrollEvent() {
      let scrollPos = this.container?.pageYOffset;

      let _this = this;
      this.scrollEventHandler = handler;
      this.container?.addEventListener(
        "scroll",
        this.scrollEventHandler,
        false
      );
      
      if (scrollPos < 22) {
          this.topNav?.classList.add("FullTrans");
      }

      function handler(e) {
        if (e.isTrusted) {
          var subsequentScrollPos = _this.container?.pageYOffset;

          /* For monitoring the container scrolled status */
          if (subsequentScrollPos > 200) {
            _this.scrolled = true;
          } else {
            _this.scrolled = false;
          }

          /* For making the TopNav less transparent when scrolling downward*/
          if (subsequentScrollPos < 22) {
            scrollPos < subsequentScrollPos
              ? _this.topNav?.classList.remove("FullTrans")
              : _this.topNav?.classList.add("FullTrans");
            scrollPos = subsequentScrollPos;
          }

          /* For hiding the TopNav when scrolling downward*/
          if (subsequentScrollPos > 200) {
            scrollPos > subsequentScrollPos
              ? _this.topNav?.classList.remove("rotated")
              : _this.topNav?.classList.add("rotated");
            scrollPos = subsequentScrollPos;
          }
        }
      }
    },
    removeScrollEvent() {
      this.container?.removeEventListener(
        "scroll",
        this.scrollEventHandler,
        false
      );
    },
    setContainer(value) {
      this.container = value;
    },
    setTopNav(value) {
      this.topNav = value;
    },
    setBottomNav(value) {
      this.bottomNav = value;
    },
  },
});
