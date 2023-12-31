<template>
  <GlobalWrapper :header="true" :footNote="true" :useDefaultFootNote="true">
    <template #Title> ABOUT </template>
    <template #SubText>
      Get your business on the winning edge in the technology-driven world
    </template>

    <template #WrapperBody>
      <section class="AB_HeadImg flex justify-center">
        <div class="TopImg basis-4/12 sm:basis-3/12 md:basis-2/12 mb-5">
          <img src="/defaults/pgs/orbrift_ab2.jpg" draggable="false" />
        </div>
      </section>

      <section class="AB_MainHead">
        <div
          class="ContentCont flex justify-center items-center Masked-bg-img select-none"
        >
          <div class="Img">
            <!-- <img
              src="/defaults/usr/m1.png"
              alt="Samuel Adeniyi"
              draggable="false"
            /> -->
          </div>
          <div class="Content basis-11/12 sm:basis-9/12 md:basis-8/12 flex justify-center items-center">
            <h2 class="Text">Adedayo Adeniyi</h2>
          </div>
        </div>
      </section>
      <section class="AB_MainBody flex justify-center">
        <section class="basis-11/12 sm:basis-9/12 md:basis-8/12 bg-white mb-10 rounded-3xl">
          <section class="select-none">
            <h2 class="AB_Head pl-8 pr-2">About Me</h2>
            <p>
              A dedicated and result-oriented Front-end Developer with skills in
              designing robust Nodejs APIs, and a passion for creating, testing
              and deploying user-focused software solutions. Offering strong
              attention to detail and accuracy, excellent problem-solving
              skills, and the ability to thrive in fast-paced team environments.
              A reliable professional committed to delivering outstanding
              results.
            </p>
            <!--       <p>
              Throughout my journey, I've showcased my expertise by crafting
              modern, cutting-edge websites, stunning designs, and robust
              Single-Page Applications (SPAs) and Progressive Web Applications
              (PWAs). By leveraging JavaScript frameworks like Vue.js and
              React.js, I've developed innovative solutions that seamlessly
              integrate with modern E-commerce(Online Store) platforms and
              Content Management Systems (CMS). My proficiency extends to
              managing Google Cloud Platforms (GCP) and utilizing Linux-based
              cloud hosting services, ensuring high-performance applications.
            </p> -->
            <p>
              I believe in delivering more than just technical excellence; I
              strive to enhance user experiences, improve efficiency, and drive
              business growth. By applying my deep understanding of UI/UX
              principles and advanced JavaScript frameworks, I develop intuitive
              websites and applications optimized for top-notch performance. I
              empower businesses to streamline their operations, expand their
              reach, and achieve online success.
            </p>
            <p v-aos="'fade-up-left'">
              Beyond my technical endeavors, I find immense joy in engaging in
              intuitive conversations and exploring the abstract design of
              nature. I'm constantly inspired by how these principles shape the
              architecture of our digital world. It's this drive for precision
              that fuels my passion for every project I undertake.
            </p>
          </section>

          <section>
            <h2 class="AB_Head">My Expertise</h2>
            <p v-aos="'zoom-in'">
              As a web developer committed to providing great digital solutions,
              I possess a wide range of skills
            </p>

            <article>
              <h3 v-aos="'fade-right'" class="AB_SubHead">
                Front-end Development: Elevating User Engagement
              </h3>
              <p v-aos="'fade-up-left'">
                When it comes to front-end development, I utilize the power of
                JavaScript and TypeScript, combined with my expertise in Vue.js
                and React.js, to craft interactive and responsive websites that
                engage your audiences. I am focused on creating a user
                experience that leaves a lasting impression.
              </p>
            </article>

            <article>
              <h3 v-aos="'fade-right'" class="AB_SubHead">
                NodeJs Back-end Development
              </h3>
              <p v-aos="'fade-up-left'">
                Behind every great website lies a robust and scalable back-end
                infrastructure. With expertise in frameworks like Express.js and
                others, I architect and develop powerful web applications to
                achieve your desire goal. From complex database integrations to
                i designing and implementing complex API logic and
                functionality, I ensure that your website or application is not
                just aesthetically pleasing, but also highly functional and
                efficient.
              </p>
            </article>

            <article>
              <h3 v-aos="'fade-right'" class="AB_SubHead">
                Hosting and Serverless Deployment
              </h3>
              <p v-aos="'fade-up-left'">
                Your website deserves a reliable and secure home for your data.
                I am versed in managing and deploying containerized web apps and
                microservices on platforms such as Google App Engine and AWS
                Lambda. With an eye for performance optimization and scalable
                architecture, I ensure that your web apps delivers fast load
                times and operates seamlessly, even under heavy traffic.
              </p>
            </article>

            <!-- <article>
              <h3 v-aos="'fade-right'" class="AB_SubHead">Custom Web Design</h3>
              <p v-aos="'fade-up-left'">
                Imagine a website that seamlessly blends stunning aesthetics
                with effortless functionality. That's precisely what I bring to
                the table. While i do not actually specialize in UI designs, i
                use industry-leading design tools like Figma and Adobe Design
                tools when necessary to create visually appealing user
                interfaces that not only grab attention but also guide visitors
                through an immersive experience. Let's take your brand's story
                and turn it into a beautifully designed digital masterpiece.
              </p>
            </article> -->

            <!-- <article>
              <h3 v-aos="'fade-right'" class="AB_SubHead">
                Version Control and Collaboration
              </h3>
              <p v-aos="'fade-up-left'">
                To ensure efficient and collaborative development processes, I
                utilize systems like GitHub, Basecamp, Discord, Slack, etc. This
                allows for seamless code management, easy collaboration with
                team members, and efficient project tracking.
              </p>
            </article> -->

            <!-- <article>
              <h3 v-aos="'fade-right'" class="AB_SubHead">
                Blockchain Development: Embracing the Future
              </h3>
              <p v-aos="'fade-up-left'">
                The blockchain revolution is upon us, and I'm here to guide you
                through it. With hands-on experience in Web3.js and Solidity, I
                help businesses leverage the power of decentralized applications
                and smart contracts. Whether it's building a secure and
                transparent voting system or developing a unique
                blockchain-based solution, I have the expertise to bring your
                ideas to life on this transformative technology.
              </p>
            </article> -->
          </section>

          <section>
            <h2 v-aos="'fade-right'" class="AB_Head">Why Choose Me?</h2>
            <ul>
              <li v-aos="'fade-up-left'">
                <strong class="text-blue-gray-600"
                  >Advanced Technical Skills:</strong
                >
                I stay up to date with the latest industry trends and
                continuously expand my technical skill set. This allows me to
                implement modern solutions and deliver high-quality results that
                align with industry standards.
              </li>
              <li v-aos="'fade-up-left'">
                <strong class="text-blue-gray-600"
                  >Analytical and Divergent Thinking:
                </strong>
                I possess strong problem-solving skills, enabling me to approach
                challenges from different angles and provide solutions. I thrive
                on finding creative and efficient ways to achieve optimal
                outcomes.
              </li>
              <li v-aos="'fade-up-left'">
                <strong class="text-blue-gray-600"
                  >Effective Communication and Collaboration:</strong
                >
                When you choose to work with me, you're not just hiring a web
                developer; you're gaining a trusted partner who is dedicated to
                your success. I believe in effective communication,
                transparency, and collaboration throughout the entire
                development process. Your vision and goals are at the forefront
                of every decision I make, ensuring that the end result aligns
                with your expectations and possibly exceeds them.
              </li>
            </ul>
          </section>

          <!-- <section v-aos="'zoom-in'"> -->
            <!-- <h2 class="AB_Head">Let's Create Something Extraordinary</h2> -->
            <!-- <p> -->
              <!-- Are you ready to elevate your brand's digital presence? -->
              <!-- <NuxtLink to="/contact"> Get in touch</NuxtLink>, to discuss your web development goals. -->
              <!-- Together, we'll
              embark on a journey to create a great online experience that
              drives measurable success. -->
            <!-- </p> -->
          <!-- </section> -->
        </section>
      </section>
    </template>
  </GlobalWrapper>
</template>
<script lang="ts">
export default {
  setup() {
    const { $myMetaInfo, $aos } = useNuxtApp();

    useSeoMeta($myMetaInfo({ title: "About | orbrift" }));

    return {};
  },
};
</script>
<style lang="scss" scoped>
.TopImg {
  min-height: 80px;
}
.AB_HeadImg {
  & p {
    font-size: 16px;
  }
}
.AB_Head {
  color: $blue-grey--1;
}
.AB_SubHead {
  padding: 10px;
  background-color: $sec-color-trans-1;
  color: $pri-color;
  border-bottom: solid $sec-color-trans-2 3px;
  border-radius: 4px;
}

.AB_MainHead {
  position: relative;
  height: 180px;
  & .ContentCont {
    position: absolute;
    bottom: -40px;
    left: 0;
    height: 180px;
    width: 100%;
    background-color: $sec-color-trans-1;
    // background-image: url("/defaults/pgs/orbrift_pfbg.jpg");
    background-image: url("/defaults/pgs/orbrift_web_developer2.jpg");
    &::after {
      background-color: rgba(72, 72, 72, 0.80);
    }
    background-blend-mode: overlay;
    background-attachment: fixed;
    overflow: hidden;
    z-index: 0;

    & .Img {
      position: absolute;
      left: -10px;
      bottom: -10px;
      height: 200px;
      width: 200px;
      // &::after {
      //   content: "";
      //   position: absolute;
      //   top: 0;
      //   bottom: 0;
      //   right: 0;
      //   left: 0;
      //   z-index: 1;
      //   background-color: transparent;
      // }
    }
  }
  & .Content {
    position: relative;
    padding: 0 20px;
    & .Text {
      text-align: center;
      padding-bottom: 70px;
      font-size: 30px;
      font-weight: bold;
      color: $pri-color;
    }
  }
}
.AB_MainBody {
  position: relative;
  z-index: 1;
}

@include xs-only {
  .ContentCont {
    & .Text {
      max-width: 180px !important;
    }
  }
}
</style>
