<template>
  <div>
    <section class="flex min-h-[500px] w-full pt-[60px] pb-5 overflow-hidden relative select-none">
      <div ref="homeTopBgParallax" class="w-full h-full top-0 left-0 bg-my-sec-color bg-home-hero-bg-img bg-fixed absolute Masked-bg-img Mask-opacity-85"></div>
      <div class="flex flex-wrap basis-full md:basis-7/12 rounded-md z-[1]">
        <!-- Intro -->
        <div class="w-full text-center pt-1">
          <h2 class="text-white text-[26px] sm:text-4xl mb-0">ADEDAYO ADENIYI</h2>
          <h5 class="text-white text-xl mt-3 mb-0 z-0 relative after:content-[''] after:absolute after:-bottom-1 after:left-[50%] after:-ml-20 after:w-[160px] after:h-4 after:bg-my-pri-color after:bg-opacity-25 after:-z-[1]">Web Developer</h5>
          <h3 class="text-my-pri-color text-[28px] sm:text-[35px] mt-12 mb-2 py-0 px-12">Creating Modern Software Solutions</h3>
        </div>

        <!-- image -->
        <div class="flex w-[100%] md:w-5/12 h-[350px] mb-[80px] justify-center relative md:absolute right-0 top-10 md:top-[220px]">
          <div class="basis-10/12 sm:basis-8/12 md:basis-11/12 bg-home-hero-user-img overflow-hidden bg-center bg-no-repeat bg-cover Masked-bg-img rounded-3xl">
            <!-- <img
              src="/defaults/pgs/23acdf.jpeg"
              alt="apps-tiles-collage"
              draggable="false"
            /> -->
          </div>
        </div>

        <!-- Summary Accordion Component -->
        <Accordion />
      </div>

      <!-- logo -->
      <!-- <div
        v-html="$appLogo('white')"
        class="Logo flex j-c-center noselect"
      ></div> -->

      <!-- CTA Button -->
      <!-- <div class="flex j-c-center my-10">
        <Button
          @clicked="$router.push({ path: '/create' })"
          type="cta"
          size="large"
        >
          START HERE
        </Button>
      </div> -->
    </section>

    <!-- Tech Stack Icons Slider Component -->
    <h3 class="SectionSubHead">
      <span class="icon-check mr-2"></span>
      <span>Tech Stack </span>
    </h3>

    <!-- Tech Stack Icons Slider Component -->
    <ClientOnly>
      <TechStackSlider />
    </ClientOnly>

    <!-- <section class="SubText flex j-c-center">
      <div class="xs12 sm9 md4">
        Your Online Profile, Simplified and Elevated. Let's do it
      </div>
    </section> -->

    <section class="mb-12">
      <h3 class="SectionSubHead">
        <span class="icon-check mr-2"></span>
        <span>My Approach.. </span>
      </h3>
      <div class="bg-my-sec-color bg-home-tiles-bg-img bg-fixed Masked-bg-img Mask-opacity-85 flex flex-wrap justify-center py-4 select-none">
        <article
          v-aos="'fade-left'"
          class="w-11/12 sm:w-10/12 md:w-9/12 lg:w-7/12 bg-white z-[2] min-h-[330px] rounded-3xl mt-0 mr-2 mb-7 ml-2 md:m-[30px] md:mt-0"
          v-for="(L, i) in list"
          :key="i"
        >
          <div class="flex justify-center align-middle w-full h-[150px] pt-5">
            <img
            class="w-[90px] h-[90px]"
              :src="L.link ? L.link : '/defaults/pgs/icons/' + L.img + '.jpg'"
              :alt="L.text"
              draggable="false"
            />
          </div>
          <h2 class="py-3 px-1 text-center font-bold text-lg text-my-pri-color bg-my-sec-color">{{ L.text }}</h2>
          <p class="px-2 pt-2 pb-4 text-center font-bold text-base text-my-dark-text-color">{{ L.detail }}</p>
        </article>
      </div>

      <div class="flex justify-center mt-6">
        <Button
          @clicked="
            $router.push({
              name: 'about',
            })
          "
          size="medium"
          icon="icon-right"
          iconPos="right"
          type="cta"
        >
          More About Me
        </Button>
      </div>
    </section>

    <!--Designs Gallery -->
    <h3 class="SectionSubHead">
      <span class="icon-check mr-2"></span>
      <span> Some Designs gallery.. </span>
    </h3>

    <section class="bg-white p-2">
      <h2 class="text-center text-slate-700"></h2>

      <!-- Projects Gallery Component -->
      <ProjGallery />
      <!-- Projects Gallery Component -->

      <div class="flex justify-center mb-10">
        <Button
          @clicked="$router.push('/projects')"
          size="medium"
          icon="icon-right"
          iconPos="right"
        >
          Projects
        </Button>
      </div>
    </section>

    <h3 class="SectionSubHead">
      <span class="icon-check mr-2"></span>
      <span> Some Feedbacks.. </span>
    </h3>

    <!-- Testimonial Component -->
    <Testimonial />
    <!-- Testimonial Component -->

    <h3 class="SectionSubHead">
      <span class="icon-mail mr-3"></span>
      <span> Contact Me </span>
    </h3>
    <!-- Contact Component -->
    <div>
      <MainContact></MainContact>
    </div>

    <!-- FootNote   -->
    <section class="text-base text-center text-my-pri-color bg-my-sec-color bg-opacity-90 p-4 mt-10">
      <div v-aos="'zoom-in'" class="flex justify-center">
        <div class="w-full md:w-7/12 lg:w-6/12">
          If you would love to have a more streamlined project discussion with
          me on a potential job or to request a quote, use the button below
          <div class="flex justify-center my-5">
            <Button
              @clicked="$router.push({ path: '/create' })"
              type="cta"
              size="large"
            >
              Hire Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script lang="ts">
import { useNavs } from "@/store";

export default {
  name: "Home",

  setup() {
    const { $myMetaInfo } = useNuxtApp();

    useSeoMeta($myMetaInfo({}));

    const homeTopBgParallax = ref(null);

    const $Navs = useNavs();

    /* Element Refs */

    /* Other Static properties  */
    const list = [
      {
        img: "resp",
        text: "Responsive Pages for Modern Devices",
        detail:
          "Experience webpages designed to adapt easily to any screen size, making your apps will be appealing and provide an exceptional user experience.",
      },
      {
        img: "scale",
        text: "Performance-driven Applications",
        detail:
          "With a focus on reliability and smart planning, I develop applications that are not only fast but also able to scale effortlessly as your business grows. Say goodbye to bottlenecks.and hello to possibilities.",
      },
      {
        img: "",
        text: "Intuitive Designs and Fluid Navigation",
        link: "/defaults/pgs/icons/clean.png",
        detail:
          "From the layout and aesthetics to the underlying framework, your website or app is carefully crafted to ensure smooth navigation and enhance user engagement. ",
      },
      {
        img: "flexb",
        text: "Solutions that Capture Your Unique Identity",
        // link: "/defaults/logo/orbrift-cy.png",
        detail:
          "Your website and app should reflect your brand's personality. Whether you prefer a minimalist approach or a fully customized experience, I create solutions that showcase the value of your products or services effectively.",
      },
      // {
      //   img: "",
      //   text: "Agile Development Approach",
      //   link: "/defaults/pgs/icons/secure.png",
      //   detail:
      //     "Through an agile development methodology, I deliver iterative solutions that evolve with your requirements. This approach allows for flexibility and quick adaptations on your software development projects.",
      // },
      // {
      //   img: "",
      //   text: "Integration with Third-Party Services",
      //   link: "/defaults/pgs/icons/secure.png",
      //   detail:
      //     "Maximize the functionality of your apps by easily integrating it with third-party services. From e-commerce platforms to payment gateways and CRM systems, I ensure smooth integration to enhance your users experience and business operations.",
      // },
      {
        img: "effect",
        text: "Streamlined Project Workflow",
        // link: "/defaults/pgs/icons/secure.png",
        detail:
          "I employ user-friendly tools and streamlined processes to make communication hassle-free, ensuring a secure and efficient workflow.",
      },
      // {
      //   img: "",
      //   text: "Continuous Support and Maintenance",
      //   link: "/defaults/pgs/icons/secure.png",
      //   detail:
      //     "I provide ongoing support and maintenance services to keep your website or application running smoothly. From updates and security enhancements to performance optimizations, I ensure your digital presence remains robust and up-to-date.",
      // },
    ];

    // onMounted(() => {
    //         $Navs.setParallaxElemHome1(homeTopBgParallax.value)
    // });

    // onUnmounted(() => { });

    return {
      list,
      homeTopBgParallax,
    };
  },
};
</script>
<style lang="scss" scoped>
.SubText {
  text-align: center;
  font-size: 24px;
  color: $pri-color;
  background-color: $sec-color-trans;
  padding: 15px;
  margin-bottom: 40px;
}

.SectionSubHead {
  position: relative;
  color: $blue-grey;
  text-align: center;
  &::after {
    content: "";
    height: 3px;
    width: 70px;
    position: absolute;
    bottom: -5px;
    left: calc(50% - 35px);
    background-color: $pri-color;
  }
}

.Top {
  position: relative;
  overflow: hidden;
  min-height: 500px;
  width: 100%;
  padding-top: 60px;
  padding-bottom: 20px;
  // margin-bottom: 50px;
  // background-color: $sec-color;
  // background-image: url("/defaults/pgs/orbrift_web_design_and_development.jpg");
  // background-attachment: fixed;
  & .Parall {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: $sec-color;
    background-image: url("/defaults/pgs/orbrift_web_developer.jpg");
    background-attachment: fixed;
    &::after {
      background-color: rgba(72, 72, 72, 0.85);
    }
  }
  & .Detail {
    // position: relative;
    z-index: 1;
    & .Intro {
      padding: 5px 0 0 0;
      & > div {
        letter-spacing: 1px;
        font-weight: bold;
      }
      & > .MyName {
        position: relative;
        // color: rgba(204, 235, 238, 0.7);
        color: white;
        font-size: 35px;
        margin-bottom: 0;
      }
      & > .MyRole {
        position: relative;
        color: white;
        font-size: 20px;
        margin-top: 10px;
        margin-bottom: 0;
        z-index: 0;
        &::after {
          position: absolute;
          content: "";
          bottom: -2px;
          left: 50%;
          margin-left: -80px;
          width: 160px;
          height: 15px; 
          background-color: $pri-color-trans-3;
          z-index: -1;
        }
      }
      & > .Sdesc {
        position: relative;
        color: $pri-color;
        font-size: 35px;
        margin-top: 50px;
        margin-bottom: 8px;
        padding: 0 50px;
      }
      & > .Targ {
        position: relative;
        font-size: 15px;
        margin-top: 0px;
        color: $light-color;
      }
    }

    & .Img {
      position: absolute;
      right: 0;
      top: 220px;
      height: 350px;
      width: 100%;
      margin-bottom: 80px;
      & > div {
        position: relative;
        border-radius: 16px;
        overflow: hidden;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        background-image: url("/defaults/pgs/dev.jpg");
        &::after {
          background-color: rgba(72, 72, 72, 0.4);
        }
      }
      // & img {
      //   // width: 100%;
      //   height: 100%;
      // }
    }
  }

  & button {
    margin-top: 40px;
    z-index: 2;
  }
}

.Section_2 {
  margin-bottom: 50px;
  & .Tiles {
    background-color: $sec-color;
    background-attachment: fixed;
    background-image: url("/defaults/pgs/orbrift_web_developer2.jpg");
        &::after {
      background-color: rgba(72, 72, 72, 0.85);
    }
    & > article {
      z-index: 2;
      min-height: 330px;
      background-color: $light-color;
      border-radius: 28px;
      margin: 0px 30px 30px 20px;
      //      border-top: solid 3px $pri-color;
      //      border-bottom: solid 3px $pri-color;
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

      & > h2 {
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
      & > p {
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

.HomeFootNote {
  font-size: 16px;
  text-align: center;
  color: $pri-color;
  background-color: $sec-color-trans;
  padding: 15px;
  & a {
    // color:$pri-color;
    color: lightblue;
  }
}

@include sm-and-down {
  .Top {
    & .Detail {
      & .Img {
        position: relative;
        top: 40px;
      }
    }
  }
}

@include xs-only {
  .Top {
    .Detail {
      & .Intro {
        & > .MyName {
          font-size: 26px;
        }
        & > .Sdesc {
          font-size: 28px;
        }
      }
    }
  }

  .Section_2 {
    & .Tiles {
      & > article {
        margin: 0px 8px 30px 8px;
      }
    }
  }
}
@include xxs-only {
  .Section_2 {
    & .Tiles {
      & > article {
        flex: 0 0 91.66%;
        max-width: 91.66%;
      }
    }
  }
}
</style>
