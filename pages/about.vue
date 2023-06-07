<template>
  <GlobalWrapper :header="true" :footNote="true" :useDefaultFootNote="true">
    <template #Title> ABOUT </template>
    <template #SubText>
      Get your business on the winning edge in the technology-driven world
    </template>

    <template #WrapperBody>
      <section class="flex j-c-center">
        <div class="xs5 sm4 md3 mb-5">
          <img src="/defaults/pgs/orbrift_ab2.jpg" draggable="false" />
        </div>
      </section>

      <section class="flex j-c-center wrap">
        <section
          v-for="(QA, i) in QueAns"
          :key="i"
          class="xs12 sm10 md10 mb-10"
        >
          <!-- Question -->
          <div class="Ques br2 noselect">
            <div class="Body pl-10 br3">
              <div class="bold-4 p-2">{{ QA.Q }}</div>
              <span class="Img br5">
                <img class="br5" src="/defaults/usr/a.jpg" draggable="false" />
              </span>
            </div>
          </div>

          <!-- Answer -->
          <div class="Ans br2 noselect" v-for="(ans, i) in QA.A" :key="i">
            <div class="Body bg-grey-5 br3">
              <div v-html="ans" class="p-2 pl-2"></div>
            </div>
          </div>
        </section>
      </section>
    </template>

  </GlobalWrapper>
</template>
<script lang="ts">
export default {
  setup() {
    const { $myMetaInfo } = useNuxtApp();

    useSeoMeta($myMetaInfo({ title: "About | orbrift" }));

    const QueAns = [
      {
        Q: "About Orbrift!",
        A: [
          `<p>Hello! With orbrift you get unique UI designs, web applications development and other web solutions specifically targeted at helping designers and other creative minded setups likewise in profitably presenting their crafts to their target markets. You are delivered professional, custom and result-oriented web development services while also getting access to objective guidance in solving common websites-related business challenges.</p>
          <p>For more details <a href="/adedayo-adeniyi" class="t-blue bg-grey-3 cursor-pointer br2 p-2 no-deco" target="_blank">Check out my profile.</a></p>`,
        ],
      },
      {
        Q: "About the products and services!",
        A: [
          `<p>You see, it is a dynamic and fast-changing world, everyone here and there is looking to create a customized virtual identity either for themselves or their businesses to boost their reach beyond their local environment. And when they do, they need someone who would do it to a high standard, engineered to their taste. This is where I come in!</p>
          <p>Everyone and every business deserves a virtual online profile that not only stands out but also fulfills its intended purpose, and I specialize in providing that.</p>
          <p class="mb-1">From creating regular SEO responsive webpages to implementing complex business and functional ui logic for web technologies. I am versed in presenting a genuine design and overall development services. In my time doing this, I've worked physically and remotely with a number of people building their projects.</p>
          <p><b>What kind of website or web application do you need now?</b> Personal, for a hobby? for your business or vocation?. Or just need someone to work with you in building your next big project. I'll be happy to get onboard in bringing your ideas to live.</p> 
          <p>We can discuss the detail <a href="/contact" class="t-blue bg-grey-3 cursor-pointer br2 p-2 no-deco" target="_blank">here. Send a message.</a></p>`,
        ],
      },
      // {
      //   Q: "Single Page web Applications(SPAs) and Progressive web Applications(PWAs)",
      //   A: [
      //     `<p>SPAs/PWAs are web apps that give you a similar mobile apps experience on the web without the need to download and install on your device. Progressive, faster navigation, fully customized, and no boring loadings between pages...</p>

      //     <p>Among others built, a good example is <span class="t-blue bg-grey-3 cursor-pointer br2 p-2 no-deco">orbrift.com</span>.</p>
      //     <p>Unlike most traditional websites setup on wordpress and the likes, SPAs are most often more custom built for your specific purpose and will have better overall user experience, without requiring much more resources.<p>
      //     <p>Likewise I also create wordpress websites if it's what you need, and there are ways to still take advantage of it's CMS functionalities in SPAs. Whether personal or ecommerce websites.<p>
      //     `,
      //   ],
      // },
      //..
    ];

    return {
      QueAns,
    };
  },
};
</script>
<style lang="scss" scoped>
/* Question & Answer Styling*/
.Ques,
.Ans {
  position: relative;

  & .Img {
    position: absolute;
    top: -18px;
    height: 50px;
    width: 50px;
    & img {
      width: 100%;
      height: 100%;
    }
  }
}

.Ques {
  margin: 25px 50px 10px 5px;
  & .Img {
    background-color: $sec-color;
    border: solid 3px $sec-color-transparent-more;
  }
  & .Body {
        background-color: $sec-color-transparent;
        color:$pri-color;
    border-bottom: solid $sec-color-transparent-more 3px;
  }
  & .Img {
    left: -2px;
  }
}

.Ans {
  margin: 5px;
  & .Body {
    font-size: 20px;
    letter-spacing: 0.2px;
    border-bottom: solid $sec-color-transparent-more 3px;
  }
}

@include xs-only {
  .Ques {
    margin-right: 35px;
  }
}
</style>
