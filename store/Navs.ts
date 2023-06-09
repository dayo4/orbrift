import { defineStore } from "pinia";

interface Navs {
  container:
    | Window
    | HTMLElement
    | null /* This will be used to point to the MainContainer component from other components */;
  topNav: HTMLElement | null;
  bottomNav: HTMLElement | null;
  scrolled: boolean;
  prevScrollPos: Number | null;

  scrollEventHandler: null;
}

export const useNavs = defineStore("navs", {
  state: () => ({
    container: null,
    topNav: null,
    bottomNav: null,
    scrolled: false,
    scrollEventHandler: null,

    prevScrollPos: null,
  }),

  actions: {
    setScrollEvent() {
      this.prevScrollPos = this.container?.pageYOffset;
      this.scrollEventHandler = this.handler.bind(this);
      this.container?.addEventListener(
        "scroll",
        this.scrollEventHandler,
        false
      );

      if (this.prevScrollPos < 22) {
        this.topNav?.classList.add("FullTrans");
      } else {
        this.topNav?.classList.remove("FullTrans");
      }
    },

    handler(e) {
      if (e.isTrusted) {
        var subsequentScrollPos = this.container?.pageYOffset;

        if (subsequentScrollPos > 1000) {
          this.scrolled = true;
        } else {
          this.scrolled = false;
        }

        if (subsequentScrollPos > 200) {
          const diff = subsequentScrollPos - this.prevScrollPos;
          if (subsequentScrollPos > this.prevScrollPos) {
            if (diff > 50) {
              this.topNav?.classList.add("rotated");
              this.prevScrollPos = subsequentScrollPos;
            }
          } else {
            this.topNav?.classList.remove("rotated");
            this.prevScrollPos = subsequentScrollPos;
          }
        } else {
          if (subsequentScrollPos < 22) {
            this.topNav?.classList.add("FullTrans");
          } else {
            this.topNav?.classList.remove("FullTrans");
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
