<template>
  <div class="MainCont">
    <div>
      <section class="Header bg-img-masked- br1">
        <h2 class="Title">
          {{ topInfo.header }}
        </h2>
        <section class="SubText flex j-c-center">
          <div class="xs12 md6">
            {{ topInfo.title }}
          </div>
        </section>
      </section>

      <section class="CompCont flex j-c-center a-i-center">
          <transition name="slide-fade" mode="in-out">
        <keep-alive>
          
          <component
            @tabClicked="switchTab"
            @return="switchTab"
            :is="currentTab"
          ></component>

        </keep-alive>
          </transition>
      </section>

      <!-- Skills -->
      <section
        
        class="SkillsInfo flex j-c-center"
      >
        <div ref="SkillsInfo" class="xs12 sm11 md10 lg8">
          <div class="Heading">
            <!-- Major Skills -->
          </div>
          <ul>
            Designs
            <li>Figma, Adobe Design Tools</li>
          </ul>
          <ul>
            Coding
            <li>JavaScript, TypeScript, NodeJs, HTML, CSS</li>
          </ul>
          <ul>
            Front-end frameworks
            <li>VueJs, ReactJs, Ember, Svelte</li>
          </ul>
          <ul>
            Back-end frameworks
            <li>ExpressJs, Fastify, Koa, e.t.c</li>
          </ul>

          <ul>
            UI Libraries
            <li>Bootstrap, Material UI, TailwindCSS, Vuetify, JQuery, e.t.c</li>
          </ul>
          <ul>
            Servers and Hosting
            <li>
              Google Cloud Platforms(GCP), Amazon Web Services(AWS), Gigital
              Oceans, Control Panels(Plesk, e.t.c)
            </li>
          </ul>
          <ul>
            Version Control
            <li>GitHub, Bitbucket</li>
          </ul>
          <ul>
            Databases
            <li>Mysql, MongoDB, Google Firestore, e.t.c</li>
          </ul>
          <ul>
            Data Management
            <li>Data Analysis, Microsoft Office tools</li>
          </ul>
        </div>
      </section>
<!--  -->
      <!-- Social Icons -->
      <section
        
        class="Social flex j-c-center text-center mt-10 mb-3"
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
          href="https://www.linkedin.com/in/dayo-adeniyi-761498244"
          target="blank"
        ></a>
      </section>

      <!-- Quest -->
      <section v-show="currentTab === 'Home'" class="ShortTxt flex j-c-center">
        <div class="xs9 sm6 md3">
          <p>Aim towards making everything as simple as possible.</p>
        </div>
      </section>
    </div>
  </div>
</template>
<script lang="ts">
export default {

  setup(props, { emit }) {
    const SkillsInfo: Ref<HTMLElement | null> = ref(null);

    let SkillsInfoInterval;
    let currentTab = ref(resolveComponent('Home'))
    const topInfo = ref({
      header: "Samuel Adeniyi",
      title: "Fullstack Developer",
    });

    // const Home = resolveComponent('Home')
    // const Contact = resolveComponent('Contact')
    // const About = resolveComponent('About')

    const switchTab = (tab_name: string) => {
      if (tab_name === "Home") {
        setTimeout(() => {
          currentTab.value = resolveComponent('Home');
        }, 500);
      }
      else if(tab_name === "Contact") {
        currentTab.value = resolveComponent('Contact');
      }
      else if (tab_name === "About"){
        currentTab.value = resolveComponent('About');
      }

      switch (tab_name) {
        case "About":
          topInfo.value.title = "About Me";
          break;
        case "Contact":
          topInfo.value.title = "Send Me a Message";
          break;
        default:
          topInfo.value.header = "Samuel Adeniyi";
          topInfo.value.title = "Fullstack Developer";
      }
    };

    onMounted(() => {
      // window.scrollTo({ top: 150, left: 0 });

      /* Animate Skills info at intervals */
      let skillCount = 0;
      let loopInfo = () => {
        skillCount++;
        if (skillCount > 9) {
          skillCount = 1;
        }
        const elems = SkillsInfo.value?.children;
        elems[skillCount].classList.add("Auto");

        setTimeout(() => {
          elems[skillCount].classList.remove("Auto");
        }, 2000);
      };

      SkillsInfoInterval = setInterval(() => {
        loopInfo();
      }, 2200);
    });

    onBeforeUnmount(() => {
      clearInterval(SkillsInfoInterval.value);
    });

    return {
      currentTab,
      topInfo,
      switchTab,
      SkillsInfo,
    };
  },
};
</script>
<style lang="scss" scoped>
.MainCont {
  min-height: 100vh;
  // padding-top: 60px;
  padding-bottom: 40px;
}

.Header {
  position: relative;
  min-height: 200px;
  width: 100%;
  padding-top: 60px;
  // padding-bottom: 10px;
  margin-bottom: 50px;
  // background-color: $sec-color;
  // background-image: url("/defaults/pgs/orbrift_web_design_and_development.jpg");
  background-attachment: fixed;
  background-position: center;
  & .Title {
    position: relative;
    text-align: center;
    font-size: 30px;
    margin-bottom: 35px;
    // color: $light-color;
    letter-spacing: 1px;
    color: rgba(204, 235, 238, 0.7);
    &::after {
      content: "";
      height: 3px;
      width: 70px;
      position: absolute;
      bottom: -2px;
      left: calc(50% - 35px);
      background-color: $pri-color;
      @media (prefers-color-scheme: dark) {
        background-color: $pri-color;
      }
    }
  }
  & .SubText {
    text-align: center;
    font-size: 24px;
    width: 100%;
    color: $pri-color;
    background-color: $sec-color-transparent-alot;
    padding: 15px;
  }
}
.CompCont {
  position: relative;
  min-height: 380px;
}
.ShortTxt,
.Social {
  text-align: center;
  font-style: italic;
  color: #c4dfe6;
}

.SkillsInfo {
  padding: 20px 0 0 0;
  letter-spacing: 1px;
  font-weight: bold;
  color: white;
  font-size: 16px;
  margin-left: 80px;
  font-family: "Courier New", Courier, monospace;

  & ul {
    list-style: none;
    margin: 7px 0;
    padding: 5px 3px;
    @include anim-list-gradient;
    border-radius: 4px;
    transition: 1s cubic-bezier(0.4, -0.65, 0.265, 2);

    &.Auto {
      transform: translateX(20px);
    }

    & li {
      font-size: 16px;
      font-weight: normal;
      padding-left: 16px;
    }

    &::before {
      @include anim-list-style;
    }
  }
  & .Heading {
    // font-family: "Courier New", Courier, monospace;
    color: $top-quotes-color;
    margin-top: 18px;
    margin-left: -20px;
    padding-left: 10px;
    font-size: 28px;
    border-radius: 10px;
    border-left: solid 3px $top-quotes-color;
  }
}

.Social {
  & a {
    width: 40px;
    height: 40px;
    font-size: 20px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    color: $pri-color;
    text-decoration: none;
  }
}
@include xs-only {
  .Title {
    font-size: 20px;
  }
  .SkillsInfo {
    margin-left: 40px;
  }
}
@include xxs-only {
  .SkillsInfo {
    margin-left: 20px;
    & > div:nth-child(1) {
      margin-top: 3px;
      font-size: 18px !important;
    }
  }
}
</style>
