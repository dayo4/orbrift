<template>
  <div>
    <section class="Top bg-img-masked noselect br1">
      <div class="Detail xs12 md8 noselect br1">
        <!-- Intro -->
        <div class="Intro text-center">
          <h2 class="MyName">SAMUEL ADENIYI</h2>
          <h5 class="MyRole">Fullstack Developer</h5>
          <h3 class="Sdesc">Innovative Digital Solutions</h3>
          <h5 class="Targ">For Creative Brands</h5>
        </div>

        <!-- image -->
        <div class="Img flex md6 j-c-center mb-9">
          <div class="xs10 sm7">
            <img
              src="/defaults/pgs/wpages.png"
              alt="apps-tiles-collage"
              draggable="false"
            />
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
      <div class="flex j-c-center my-10">
        <Button
          @clicked="$router.push({ path: '/create' })"
          type="cta"
          size="large"
        >
          START HERE
        </Button>
      </div>
    </section>

    <!-- Tech Stack Icons Slider Component -->
    <TechStackSlider />
    <!-- Tech Stack Icons Slider Component -->

    <section class="SubText flex j-c-center">
      <div class="xs12 sm9 md4">
        Your Online Profile, Simplified and Elevated. Let's do it
      </div>
    </section>

    <section class="Section_2">
      <h3 class="SectionSubHead">
        <span class="icon-check mr-2"></span>
        <span>My Approach.. </span>
      </h3>
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

      <div class="flex j-c-center mt-6">
        <Button
          @clicked="
            $router.push({
              name: 'about',
            })
          "
          size="medium"
          icon="icon-right"
          iconPos="right"
        >
          About Me
        </Button>
      </div>
    </section>

    <!--Designs Gallery -->
    <h3 class="SectionSubHead">
      <span class="icon-check mr-2"></span>
      <span> Some Designs gallery.. </span>
    </h3>

    <section>
      <h2 class="text-center t-blue-grey--1"></h2>

      <!-- Projects Gallery Component -->
      <ProjGallery />
      <!-- Projects Gallery Component -->

      <div class="flex j-c-center mb-10">
        <Button size="medium" icon="icon-right" iconPos="right">
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
      <span> Talk To Me </span>
    </h3>
    <!-- Contact Component -->
    <div>
      <MainContact></MainContact>
    </div>

    <!-- FootNote   -->
    <section class="HomeFootNote mt-10">
      <div data-aos="zoom-in" data-aos-once="true" class="flex j-c-center">
        <div class="xs12 md7 lg6">
          If you would love to have a more streamlined project discussion with
          me to request an estimate, use the button below
          <div class="flex j-c-center my-5">
            <Button
              @clicked="$router.push({ path: '/create' })"
              type="cta"
              size="large"
            >
              Get A Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script lang="ts">
export default {
  name: "Home",

  setup() {
    const { $myMetaInfo } = useNuxtApp();

    useSeoMeta($myMetaInfo({}));

    /* Element Refs */

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
          "A successful web application should be reliable, well-planned and seamlessly accommodate growth. With me, Web Apps are designed to welcome subsequent growths without friction. And I technically avoid anything that can get my apps stuck in a hole.",
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

    // onMounted(() => {});

    // onUnmounted(() => { });

    return {
      list,
    };
  },
};
</script>
<style lang="scss" scoped>
.SubText {
  text-align: center;
  font-size: 24px;
  color: $pri-color;
  background-color: $sec-color-trans-1;
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
  min-height: 500px;
  width: 100%;
  padding-top: 60px;
  padding-bottom: 20px;
  // margin-bottom: 50px;
  background-color: $sec-color;
  background-image: url("/defaults/pgs/orbrift_web_design_and_development.jpg");
  background-attachment: fixed;
  & .Detail {
    z-index: 1;
    & .Intro {
      padding: 5px 0 0 0;
      & > div {
        letter-spacing: 1px;
        font-weight: bold;
      }
      & > .MyName {
        color: rgba(204, 235, 238, 0.7);
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
          margin-left: -95px;
          width: 190px;
          height: 15px;
          background-color: $pri-color-trans-3;
          z-index: -1;
        }
      }
      & > .Sdesc {
        // font-family: "Itim", "Roboto", sans-serif;
        color: $pri-color;
        // color: white;
        font-size: 35px;
        margin-top: 50px;
        margin-bottom: 8px;
        padding: 0 10px;
      }
      & > .Targ {
        font-size: 15px;
        margin-top: 0px;
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
    background-image: url("/defaults/pgs/orbrift_pfbg.jpg");
    & > div {
      z-index: 2;
      min-height: 330px;
      background-color: $light-color;
      border-radius: 28px;
      margin: 0px 30px 30px 20px;
      border-top: solid 3px $sec-color;
      border-bottom: solid 3px $sec-color;
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

.HomeFootNote {
  font-size: 16px;
  text-align: center;
  color: $pri-color;
  background-color: $sec-color-trans-1;
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
}
</style>
