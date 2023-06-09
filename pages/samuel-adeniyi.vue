<template>
  <div class="MainCont">
    <div>
      <div class="Header text-center t-white bold-4 font-9 px-3 py-4 mb-2">
        {{ topInfo.header }}
      </div>
      <div class="Title">
        {{ topInfo.title }}
        <i></i>
      </div>

      <section class="CompCont flex j-c-center a-i-center">
        <keep-alive>
          <component
            @tabClicked="switchTab"
            @return="switchTab"
            :is="currentTab"
          ></component>
        </keep-alive>
      </section>

      <!-- Skills -->
      <section
        v-show="currentTab === 'Home'"
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

      <!-- Social Icons -->
      <section
        v-show="currentTab === 'Home'"
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
import Vue from "vue";

import ProfileBottomNav from "@/components/profile_tabs/ProfileBottomNav.vue";
import Home from "@/components/profile_tabs/mainTabs/Home.vue";
import Message from "@/components/profile_tabs/mainTabs/Contact.vue";
import About from "@/components/profile_tabs/mainTabs/About.vue";

export default Vue.extend({
  components: {
    ProfileBottomNav,
    Message,
    Home,
    About,
  },

  data() {
    return {
      currentTab: "Home",
      topInfo: {
        header: "Adedayo Adeniyi",
        title: "Web Developer",
      },
    };
  },
  methods: {
    switchTab(tab_name: string) {
      if (tab_name === "Home") {
        setTimeout(() => {
          this.currentTab = tab_name;
        }, 500);
      } else {
        this.currentTab = tab_name;
      }

      switch (tab_name) {
        case "About":
          this.topInfo.title = "Little About Me";
          break;
        case "Message":
          this.topInfo.title = "Send Me a Message";
          break;
        default:
          this.topInfo.header = "Adedayo Adeniyi";
          this.topInfo.title = "Web Developer";
      }
    },
  },

  mounted() {
    window.scrollTo({ top: 150, left: 0 });

    /* Animate Skills info at intervals */
    let skillCount = 0;
    let loopInfo = () => {
      skillCount++;
      if (skillCount > 9) {
        skillCount = 1;
      }
      const elems = this.$refs.SkillsInfo.children;
      elems[skillCount].classList.add("Auto");

      setTimeout(() => {
        elems[skillCount].classList.remove("Auto");
      }, 2000);
    };
    this.SkillsInfoInterval = setInterval(() => {
      loopInfo();
    }, 2200);
  },

  beforeDestroy() {
    clearInterval(this.SkillsInfoInterval);
  },
});
</script>
<style lang="scss" scoped>
.MainCont {
  min-height: 100vh;
  padding-top: 60px;
  padding-bottom: 40px;
}

.Header {
  letter-spacing: 1px;
}

.Title {
  font-weight: bold;
  color: $pri-color-alt;
}

.Title {
  position: relative;
  font-family: "Itim", "Roboto", sans-serif;
  letter-spacing: 1px;
  text-align: center;
  margin-bottom: 20px;
  padding: 16px;
  font-size: 30px;
  background-color: rgba(2, 28, 30, 0.8);
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.7) 10%,
    rgba(255, 255, 255, 0.9),
    rgba(255, 255, 255, 0.7) 90%,
    rgba(255, 255, 255, 0) 100%
  );

  & i {
    position: absolute;
    top: calc(50% - 40px);
    left: calc(50% - 40px);
    height: 80px;
    width: 80px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: -1;
    background-color: white;

    &::after {
      content: "";
      position: absolute;
      background-color: white;
      border-radius: 100%;
      animation: xpand 2s linear infinite forwards;
    }
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
    color: $pink-4;
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
