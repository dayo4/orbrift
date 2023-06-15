<template>

<div class="TestTop"></div>

<Accordion />
      <!-- Skills -->
      <!-- <section
        
        class="SkillsInfo flex j-c-center"
      >
        <div ref="SkillsInfo" class="xs12 sm11 md10 lg8">
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
      </section> -->
<!--  -->
</template>
<script lang="ts">
export default {

};
</script>
<style lang="scss" scoped>
.TestTop {
  margin-top: 100px;
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
}

@include xs-only {
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
