<template>
  <div>
    <section class="Top bg-img-masked noselect br1">
      <div class="Detail xs12 md8 noselect br1">
        <!-- Intro -->
        <div class="Intro text-center">
          <div class="Stitle">ORBRIFT</div>
          <div class="Sdesc">Innovative Digital Solutions</div>
          <div class="Targ">For Creative Brands</div>
        </div>

        <!-- image -->
        <div class="Img flex md5 j-c-center">
          <div class="xs10 sm7">
            <img
              src="/defaults/pgs/wpages.png"
              alt="apps-tiles-collage"
              draggable="false"
            />
          </div>
        </div>

        <!-- Summary -->
        <div ref="MoreInfoRef" class="More">
          <div>
            <!-- Unique websites tailored to your needs. -->
          </div>
          <ul>
            UI Designs
            <li>
              Have your website's UI professionally designed for the best user
              experience.
            </li>
          </ul>
          <ul>
            Single Page Applications(SPAs)
            <li>
              Give your website a mobile-app appearance and experience, with
              fast page navigation.
            </li>
          </ul>
          <ul>
            E-commerce, Online Stores
            <li>
              Render your products to the market with various e-commerce
              integrations.
            </li>
          </ul>
          <ul>
            Back-end Development
            <li>
              Deploy your apps with a fast back-end using powerful NodeJS
              frameworks hosted with amazing Cloud Platforms.
            </li>
          </ul>
          <ul>
            Blogs, Contents Marketing
            <li>
              Publish contents with great SEO using CMSs like Wordpress, Ghost,
              ...anyhow you want it.
            </li>
          </ul>
        </div>
      </div>

      <!-- logo -->
      <!-- <div
        v-html="$appLogo('white')"
        class="Logo flex j-c-center noselect"
      ></div> -->

      <!-- CTA Button -->
      <div class="flex j-c-center">
        <button
          @click="$router.push({ path: '/create' })"
          class="btn sec-gradient-btn shadow-5 font-5 br4 py-3"
        >
          START HERE
        </button>
      </div>
      <div class="flex j-c-center">
        <Button size="small" icon="icon-forward" :loading="true">
          testing
        </Button>
        </div>
    </section>

    <div class="Divider">
      <span></span>
    </div>

    <div class="Quote">
      A virtual online profile that makes your live simple. Just do it here.
    </div>

    <section class="Section_2">
      <h2 class="text-center t-blue-grey--1">
        <span class="icon-check-1 mr-2"></span>
        <span>What You Get.. </span>
      </h2>
      <div class="Tiles bg-img-masked flex wrap j-c-center py-4">
        <div class="xs11 sm10 md9 lg7 shadow-3" v-for="(L, i) in list" :key="i">
          <div class="noselect">
            <img
              :src="L.link ? L.link : '/defaults/pgs/icons/' + L.img + '.jpg'"
              :alt="L.text"
              draggable="false"
            />
          </div>
          <div>{{ L.text }}</div>
          <div>{{ L.detail }}</div>
        </div>
      </div>

      <div class="flex j-c-center">
        <button
          @click="$router.push({ name: 'about' })"
          class="btn pri-gradient-btn shadow-5 font-5 br4 mt-3"
        >
          <span class="icon-right mr-2"></span>
          <span>More About Orbrift</span>
        </button>
      </div>
    </section>

    <div class="Divider">
      <span></span>
    </div>

    <!--Designs Gallery -->
    <div class="Quote">Some Project Designs gallery</div>

    <section>
      <h2 class="text-center t-blue-grey--1"></h2>

      <div class="Gallery img-masked-00 flex wrap j-c-center">
        <transition name="slide-down-fade">
          <div v-if="showPc" class="Pc xs11 m-1">
            <img
              class="shadow-5"
              :src="'/defaults/gal/' + galImageList[activeGal].pc + '.jpg'"
              alt
              draggable="false"
            />

            <div v-if="showTablet" ref="Tablet" class="Tablet">
              <img
                class="shadow-5"
                :src="
                  '/defaults/gal/' + galImageList[activeGal].tablet + '.jpg'
                "
                alt
                draggable="false"
              />
            </div>

            <div v-if="showPhone" ref="Phone" class="Phone">
              <img
                class="shadow-5"
                :src="'/defaults/gal/' + galImageList[activeGal].phone + '.jpg'"
                alt
                draggable="false"
              />
            </div>
          </div>
        </transition>
      </div>
    </section>

    <div class="Divider">
      <span></span>
    </div>

    <!-- Developer profile -->
    <div class="Quote">Orbrift's developer</div>

    <section>
      <h2 class="text-center t-blue-grey--1">
        <span>Adedayo Adeniyi</span>
      </h2>

      <div class="flex j-c-center">
        <div class="LogoBorder logo-base logo-static img-logo-border noselect">
          <span class="img-masked-0">
            <img
              src="/defaults/usr/me.jpg"
              alt="Adedayo Adeniyi"
              draggable="false"
            />
          </span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div class="flex j-c-center">
        <button
          @click="
            $router.push({
              name: 'adedayo-adeniyi',
            })
          "
          class="btn pri-gradient-btn shadow-5 font-5 br4 mt-5"
        >
          <span class="icon-right mr-3"></span>
          <span>View My Profile</span>
        </button>
      </div>
    </section>

    <div class="Divider">
      <span></span>
    </div>

    <div class="Quote">A Few Feedbacks..</div>

    <section class="TSTSection bg-img-masked flex wrap j-c-center my-3">
      <div
        id="TestimonialContRef"
        ref="TestimonialContRef"
        class="TestimonialContRef flex sm11 md10 lg7"
      >
        <div class="Item" v-for="(item, i) in TSTList" :key="i">
          <h3>{{ item.name }}</h3>
          <h5>{{ item.info }}</h5>
          <p>
            {{ item.msg }}
          </p>
          <i class="TopHandle"></i>
          <i class="BottomHandle"></i>
        </div>
      </div>
      <i @click="TSTclickLeft" class="LeftBtn icon-left"></i>
      <i @click="TSTclickRight" class="RightBtn icon-right"></i>
      <!-- <div class="Smudges sm9 md10 lg7">
        <i class="LeftSmudge"></i>
        <i class="RightSmudge"></i>
      </div> -->
    </section>

    <!-- <div ref="contactCTA" class="Divider">
      <span></span>
    </div> -->
    <div class="Divider">
      <span></span>
    </div>

    <h2 class="text-center t-blue-grey--1">
      <span class="icon-mail mr-3"></span>
      <span>
        It's Time.
        <i class="font-3">Start Getting Things Done!</i>
      </span>
    </h2>
    <!-- Contact Component -->
    <div>
      <Contact></Contact>
    </div>
    <!-- Contact Component -->
  </div>
</template>
<script lang="ts">
import Contact from "@/components/pages/Contact.vue";
import { $General /* , $Axios */ } from "@/addons";

useSeoMeta($General.metaInfo({}));

export default {
  name: "Home",
  components: {
    Contact,
  },
  setup() {
    /* Properties */
    const showPc = ref(false);
    const showTablet = ref(false);
    const showPhone = ref(false);
    const activeGal = ref(-1);

    const interval: Ref<TimerHandler | null> = ref(null); //holds the setInterval timer
    const topInfoInterval: Ref<TimerHandler | null> = ref(null);

    /* Element Refs */
    const TestimonialContRef: Ref<HTMLElement | null> = ref(null);
    const MoreInfoRef: Ref<HTMLElement | null> = ref(null);

    /* Other Static properties  */
    const list = [
      {
        img: "resp",
        text: "Pixel-perfect and Fully Responsive Webpages",
        detail:
          "My designs are expertly crafted with modern layouts, and you are delivered webpages that look and feel perfect on devices of various screen sizes.",
      },
      {
        img: "scale",
        text: "Performant and Easily Scalable Apps",
        detail:
          "A successful web application should be reliable, well-planned and seemlessly accommodate growth. With me, Web Apps are designed to welcome subsequent growths without friction. And I technically avoid anything that can get my apps stuck in a hole.",
      },
      {
        img: "",
        text: "Concise Designs and Smooth Navigation",
        link: "/defaults/pgs/icons/clean.png",
        detail:
          "Everything that makes up your webpages layouts, from designs to underlying frameworks are required to be well structured to improve your users experiences and engagement. With me you can be rest assured.",
      },
      {
        img: "",
        text: "Easy and Secure Project Management",
        link: "/defaults/pgs/icons/secure.png",
        detail:
          "It is my utmost priority to ensure that you get the right value for your input. Easy to use tools are employed to make the development, payment and communication process a breeze for your projects.",
      },
      // { img: 'flexb', text: 'Flexible Business Logic Implementation' },
      // {
      //   img: "effect",
      //   text: "Effective Development and Customer Service",
      //   detail:
      //     "It is orbrift's utmost priority to ensure that you get the right value for your input.",
      // },
      {
        img: "",
        text: "Genuine Design Customized To Your Need",
        link: "/defaults/logo/orbrift-cy.png",
        detail:
          "Some people desire minimalist designs and layouts while others want it outright customized. Regardless of your requirement, I am versed as presenting you with a design that simply shows the value of your products or services.",
      },
    ];

    const galImageList = [
      { pc: "1", tablet: "2", phone: "3" },
      { pc: "4", tablet: "5", phone: "6" },
      { pc: "7", tablet: "8", phone: "9" },
      { pc: "10", tablet: "11", phone: "12" },
      { pc: "13", tablet: "14", phone: "15" },
      { pc: "16", tablet: "17", phone: "18" },
    ];

    const TSTList = [
      {
        name: "Isaac Olajide",
        info: "ceo - Iradux Printing",
        msg: "It's such a great work you did on our website with amazing designs and simple pages setup. Our customers feedback on it is satisfactory. Keep up the good job.",
      },
      {
        name: "Mercy Oni",
        info: "Graphics designer",
        msg: "I really love the the impressive custom design of my porfolio and the user-friendliness. It has really made it easy for me to engage clients. I'm glad you were recommended to me.",
      },
      {
        name: "Timothy Williams",
        info: "Lead Software Developer",
        msg: "It was good to have you as part of our project team. You did a splendid work managing our NodeJs backend - all APIs and micro services were incredibly implemented.",
      },
      {
        name: "Tony Nathaniel",
        info: "ceo, ENK - product branding company",
        msg: "Just wanted to say you have been very helpful to my business with the recent pages redesign and new features implemented. Doing business has never been so easy and efficient.",
      },
    ];

    const loopGallery = () => {
      activeGal.value++;
      if (activeGal.value > 5) {
        activeGal.value = 0;
      }
      showPc.value = true;

      setTimeout(() => {
        showTablet.value = true;
      }, 2000);
      setTimeout(() => {
        showPhone.value = true;
      }, 3000);
      setTimeout(() => {
        showPc.value = showPhone.value = showTablet.value = false;
      }, 7500);
    };

    const TSTclickLeft = () => {
      TestimonialContRef.value?.scrollBy({
        left: -TestimonialContRef.value?.children[0].clientWidth,
        behavior: "smooth",
      });
    };

    const TSTclickRight = () => {
      TestimonialContRef.value?.scrollBy({
        left: TestimonialContRef.value.children[0].clientWidth,
        behavior: "smooth",
      });
    };

    onMounted(() => {
      loopGallery();
      interval.value = setInterval(() => {
        loopGallery();
      }, 8000);

      /* Animate Addition top info at intervals */
      let infoCount = 0;
      let loopInfo = () => {
        infoCount++;
        if (infoCount > 5) {
          infoCount = 1;
        }
        const elems = MoreInfoRef.value?.children;
        elems[infoCount].classList.add("Auto");

        setTimeout(() => {
          elems[infoCount].classList.remove("Auto");
        }, 2000);
      };
      topInfoInterval.value = setInterval(() => {
        loopInfo();
      }, 2200);
    });

    onUnmounted(() => {
      clearInterval(interval.value);
      clearInterval(topInfoInterval.value);
    });

    return {
      showPc,
      showTablet,
      showPhone,
      activeGal,
      interval,
      topInfoInterval,
      TestimonialContRef,
      MoreInfoRef,

      list,
      galImageList,
      TSTList,
      loopGallery,
      TSTclickLeft,
      TSTclickRight
    };
  },
};
</script>
<style lang="scss" scoped>
// Testimonial

.Divider {
  display: flex;
  justify-content: center;
  margin: 60px 0px;
  & span {
    width: 50%;
    border-top: solid 4px $sec-color;
    border-bottom: solid 4px $pri-color;
    box-shadow: $shadow-8;
    border-radius: 73%;
  }
}
.Quote {
  text-align: center;
  // font-family: "Itim", "Roboto", sans-serif;
  // font-family: "Itim", cursive;
  // font-family: "Sriracha", /* cursive */;
  // font-family: /* "Courgette", */ cursive;
  font-size: 30px;
  color: $pri-color;
  // color: $top-quotes-color;
  padding: 0 20px 10px 20px;
}

.Top {
  position: relative;
  min-height: 500px;
  width: 100%;
  padding-top: 60px;
  padding-bottom: 20px;
  background-color: $blue-grey--3;
  background-image: url("/defaults/pgs/orbrift_web_design_and_development.jpg");
  background-attachment: fixed;
  // filter: blur(3px);
  // -webkit-filter: blur(3px);
  // & .Logo {
  //   position: absolute;
  //   z-index: 2;
  //   top: 72px;
  //   width: 66.66%;
  // }
  // &::after {
    // background-color: rgba(72, 72, 72, 0.65);
  // }
  & .Detail {
    z-index: 1;
    & .Intro {
      padding: 5px 0 0 0;
      & > div {
        letter-spacing: 1px;
        font-weight: bold;
      }
      & > .Stitle {
        color: rgba(204, 235, 238, 0.7);
        font-size: 35px;
      }
      & > .Sdesc {
        // font-family: "Itim", "Roboto", sans-serif;
        color: $pri-color;
        // color: white;
        font-size: 35px;
        margin-top: 25px;
        padding: 0 10px;
      }
      & > .Targ {
        // font-family: "Itim", "Roboto", sans-serif;
        color: $light-color;
      }
    }

    & .Img {
      position: absolute;
      right: 0;
      top: 180px;
      height: 350px;
      & img {
        width: 100%;
        height: 100%;
      }
    }

    & .More {
      padding: 20px 0 0 0;
      letter-spacing: 1px;
      font-weight: bold;
      color: $light-color;
      font-size: 16px;
      margin-left: 80px;

      & > ul {
        list-style: none;
        margin: 3px 0;
        padding: 5px 3px;
        background-color: $sec-color-transparent;
        border-radius: 4px;
        transition: 1s cubic-bezier(0.4, -0.65, 0.265, 2);

        &.Auto {
          transform: translateX(20px);
        }

        & li {
          font-size: 13px;
          font-weight: normal;
          padding-left: 16px;
        }

        &::before {
          @include anim-list-style;
        }
      }
      & > div {
        font-family: "Courier New", Courier, monospace;
        color: $pri-color;
        margin-top: 18px;
        margin-left: -20px;
        padding-left: 10px;
        font-size: 28px;
        border-radius: 10px;
        border-left: solid 3px $top-quotes-color;
      }
    }
  }

  & button {
    margin-top: 40px;
    z-index: 2;
  }
}

.Section_2 {
  & .Tiles {
    background-color: $pri-color;
    background-attachment: fixed;
    background-image: url("/defaults/pgs/orbrift_pfbg.jpg");
    & > div {
      z-index: 2;
      min-height: 330px;
      background-color: white;
      border-radius: 28px;
      margin: 0px 30px 30px 20px;
      border-top: solid 3px $pri-color-alt;
      border-bottom: solid 3px $pri-color-alt;
      & img {
        width: 90px;
        height: 90px;
      }

      & > div:first-child {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 150px;
      }

      & > div:nth-child(2) {
        padding: 12px 5px;
        text-align: center;
        font-weight: bold;
        font-size: 18px;
        // color: white;
        color: $pri-color;
        background-color: $sec-color;
        // background-color: #0A2647;
        // @include bg-gradient-2;
      }
      & > div:last-child {
        padding: 10px 10px 15px 10px;
        text-align: center;
        font-weight: bold;
        font-size: 16px;
        // color: $blue-grey-2;
        color: $dark-text-color;
      }
    }
  }
}

/* Developer image */
.LogoBorder {
  height: 150px;
  width: 150px;
  & > span:nth-child(1) {
    top: 5%;
    left: 5%;
    width: 90%;
    height: 90%;
    & img {
      width: 100%;
      height: 100%;
    }
  }
}

.Gallery {
  position: relative;
  overflow: hidden;

  & .Thumb {
    min-height: 50px;
  }
  & .Pc {
    min-height: 400px;
    position: relative;
    top: 0;
    max-width: 1000px;
    max-height: 600px;
    overflow: hidden;
    animation: pc 1s;
  }
  .Pc,
  .Tablet,
  .Phone {
    & img {
      width: 100%;
      min-height: 100%;
    }
    border-radius: 6px;
    border: solid $pri-color-alt 4px;
    border-bottom: solid $pri-color-alt 15px;
  }
  .Tablet,
  .Phone {
    position: absolute;
    top: 20px;
    max-height: 90%;
    overflow: hidden;
    animation: mobiles 2s;
  }

  .Tablet {
    left: 5%;
    width: 30%;
  }
  .Phone {
    left: 45%;
    width: 19%;
  }
}

.TSTSection {
  position: relative;
  max-width: 100vw;
  overflow-y: hidden;
  background-color: #003b46;
  background-attachment: fixed;
  background-image: url("/defaults/pgs/orbrift_pfbg.jpg");

  & .LeftBtn,
  .RightBtn {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 45%;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    font-size: 20px;
    font-weight: bolder;
    color: white;
    background-color: rgba(53, 51, 51, 0.507);
  }
  & .LeftBtn:active,
  .RightBtn:active {
    background-color: rgba(53, 51, 51, 0.253);
  }
  & .LeftBtn {
    left: 3%;
  }
  & .RightBtn {
    right: 5%;
  }
}
.TestimonialContRef {
  position: relative;
  padding: 10px 50px 40px 50px;
  // border-left: solid 2px $cyan;
  border-radius: 12px;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  scroll-snap-stop: always;
  overscroll-behavior-x: contain;
  transform: translateY(20px);

  & .Item {
    position: relative;
    min-width: 400px;
    padding: 5px 20px;
    text-align: center;
    margin: 20px;
    border-radius: 12px;
    border-top: solid 2px $pri-color-alt;
    border-bottom: solid 2px $pri-color-alt;
    scroll-snap-align: center;
    background-color: white;

    & .TopHandle,
    .BottomHandle {
      position: absolute;
      left: 50%;
      margin-left: -60px;
      width: 120px;
      height: 20px;
      background-color: white;
      border-left: solid 2px $pri-color-alt;
      border-right: solid 2px $pri-color-alt;
    }
    & .TopHandle {
      top: -20px;
      border-radius: 28px 28px 0px 0px;
      border-top: solid 2px $pri-color-alt;
      border-left: solid 2px $pri-color-alt;
      border-right: solid 2px $pri-color-alt;
    }
    & .BottomHandle {
      bottom: -20px;
      border-radius: 0px 0px 28px 28px;
      border-bottom: solid 2px $pri-color-alt;
      border-left: solid 2px $pri-color-alt;
      border-right: solid 2px $pri-color-alt;
    }
  }
}

@include sm-and-down {
  .Top {
    & .Logo {
      width: 100%;
    }
    & .Detail {
      & .Img {
        position: relative;
        top: 40px;
      }
    }
  }
  .Gallery {
    & .Pc {
      min-height: 300px;
    }
  }

  .TestimonialContRef {
    & .Item {
      min-width: 300px;
    }
  }
}

@include xs-only {
  .Divider {
    & span {
      width: 70%;
    }
  }
  .Top {
    .Detail {
      & .Intro {
        & > .Stitle {
          font-size: 26px;
        }
        & > .Sdesc {
          font-size: 28px;
        }
      }
      & .More {
        margin-left: 40px;
      }
    }
  }

  .Section_2 {
    & .Tiles {
      & > div {
        margin: 0px 8px 30px 8px;
      }
    }
  }

  .Gallery {
    & .Pc {
      min-height: 190px;
    }
  }

  .TestimonialContRef {
    & .Item {
      min-width: 220px;
    }
  }
}
@include xxs-only {
  .Top {
    .Detail {
      & .More {
        margin-left: 20px;
        & > div:nth-child(1) {
          margin-top: 3px;
          font-size: 18px !important;
        }
      }
    }
  }
  .Section_2 {
    & .Tiles {
      & > div {
        flex: 0 0 91.66%;
        max-width: 91.66%;
      }
    }
  }
  .Gallery {
    & .Pc {
      min-height: 150px;
    }
  }
}

@keyframes pc {
  from {
    top: 600px;
  }
  to {
    top: 0;
  }
}
@keyframes mobiles {
  from {
    top: 600px;
  }
  to {
    top: 20px;
  }
}
</style>