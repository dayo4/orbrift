<template>
  <GlobalWrapper :header="true" :footNote="true" :useDefaultFootNote="true">
    <template #Title> ABOUT </template>
    <template #SubText>
      Get your business on the winning edge in the technology-driven world
    </template>

    <template #WrapperBody>
      <section class="AB_Cont flex j-c-center">
        <div class="xs5 sm4 md3 mb-5">
          <img src="/defaults/pgs/orbrift_ab2.jpg" draggable="false" />
        </div>
      </section>

      <section class="flex j-c-center">
        <section class="xs11 sm9 md8 mb-10">
          <section>
            <h2 class="AB_Head">About Orbrift</h2>
            <p>
              Welcome to Orbrift, a leading web development team committed to
              providing exceptional digital solutions for designers, businesses,
              and creative-minded individuals. Our mission is to empower brands
              that reach out to us with captivating web experiences that elevate their online
              presence and drive tangible results.
            </p>
          </section>

          <section>
            <h2 class="AB_Head">Our Expertise</h2>
            <p>A talented team of software developer, designer, and strategists, combining our expertise to offer a comprehensive range of services.</p>
            <article>
              <h3 class="AB_SubHead">Custom Web Design and Development</h3>
              <p>
                We craft stunning, bespoke websites that blend captivating
                design with seamless functionality. Our team meticulously
                translates your vision into a pixel-perfect digital reality,
                ensuring an immersive user experience and strong brand
                representation.
              </p>
            </article>

            <article>
              <h3 class="AB_SubHead">E-Commerce Solutions</h3>
              <p>
                Drive your online business forward with our robust and scalable
                e-commerce solutions. We leverage industry-leading platforms and
                technologies to build secure, user-friendly online stores that
                optimize conversions and enhance customer satisfaction.
              </p>
            </article>

            <article>
              <h3 class="AB_SubHead">Web Application Development</h3>
              <p>
                We excel in developing powerful web applications that streamline
                your business operations and deliver exceptional user
                experiences. From sophisticated enterprise solutions to
                innovative startups, our expertise spans across various
                industries and technologies.
              </p>
            </article>

            <article>
              <h3 class="AB_SubHead">Graphics and Product Design</h3>
              <p>
                From visually striking logos to compelling marketing collateral, our graphic design services help you create a cohesive and impactful brand identity. We specialize in designing engaging visuals that resonate with your target audience and leave a lasting impression.
              </p>
            </article>

            <article>
              <h3 class="AB_SubHead">Mobile-Friendly and Responsive Design</h3>
              <p>
                In today's mobile-centric world, we prioritize responsive design
                to ensure your website looks flawless and performs seamlessly
                across all devices. Our mobile-first approach guarantees an
                optimal user experience, driving engagement and conversions.
              </p>
            </article>

            <article>
              <h3 class="AB_SubHead">Search Engine Optimization (SEO)</h3>
              <p>
                Our SEO experts employ proven strategies to optimize your
                website for search engines, improving its visibility and driving
                organic traffic. We focus on technical optimizations, content
                strategies, and link building to enhance your online presence
                and boost rankings.
              </p>
            </article>
          </section>

          <section>
            <h2 class="AB_Head">Our Approach</h2>
            <ul>
              <li>
                <strong class="t-blue-grey--1">Strategic Collaboration:</strong>
                We believe in forging strong relationships with brands that reach out to us. We
                work closely with you, engaging in open communication and active
                collaboration throughout the entire development process.
              </li>
              <li>
                <strong class="t-blue-grey--1">Customized Solutions:</strong>
We understand that each client has unique requirements. That's why we take a tailored approach to deliver solutions that align with your specific goals and objectives.

              </li>
              <li>
                <strong class="t-blue-grey--1">Strategic Guidance:</strong> We
                offer objective guidance to address common challenges faced by
                websites and digital businesses. Our team brings valuable
                insights and expertise to the table, assisting you in making
                informed decisions to maximize your online success.
              </li>
              <li>
                <strong class="t-blue-grey--1"
                  >Innovation and Technology:</strong
                >
                We stay at the forefront of emerging technologies and industry
                trends, enabling us to deliver solutions that are future-proof
                and equipped with the latest advancements.
              </li>
              <li>
                <strong class="t-blue-grey--1">Quality Assurance:</strong> Our
                rigorous quality assurance processes ensure that every aspect of
                your website or application is thoroughly tested, resulting in a
                flawless user experience and optimal performance.
              </li>
            </ul>
          </section>

          <section>
            <h2 class="AB_Head">Let's Transform Your Online Presence</h2>
            <p>
              Are you ready to elevate your brand's digital presence? Contact
              our team today to discuss your web development goals. Together,
              we'll embark on a journey to create a captivating online
              experience that sets you apart from the competition and drives
              measurable success.
            </p>
          </section>
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

    return {};
  },
};
</script>
<style lang="scss" scoped>
.AB_Cont {
  & p {
    font-size: 16px;
  }
}
.AB_Head {
  color: $blue-grey--1
}
.AB_SubHead {
  padding: 10px;
  background-color: $sec-color-transparent;
  color: $pri-color;
  border-bottom: solid $sec-color-transparent-more 3px;
  border-radius: 10px;
}
</style>
