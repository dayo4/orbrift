<template>
  <TabsContainer @return="$emit('return', 'Home')">
    <div class="flex j-c-center text-center font-6">
      <div class="xs11 sm9 md8">
        <p>
          I am a software developer who loves fiddling with designs and exploring
          deeper the nature of things. Have deep knowledge of nodejs, databases,
          UI and APIs design principles.
        </p>
        <p>
          Among a series of other things, have demonstrated proficiency in creating modern websites, designs, SPAs and PWAs using such Javascript frameworks as VueJs and ReactJs with various Databases, E-commerce and CMS integrations. 
          Managed Google Cloud Platforms and common Linux based cloud hosting services.
        </p>
        <p>
          Casually enjoy engaging in intuitive conversations and visualization
          about the abstract design of nature and desire driving the
          architecture of things towards precision.
        </p>
        <hr>
        <p class="font-3">
          https://github.com/dayo4
        </p>
      </div>
    </div>
  </TabsContainer>
</template>
<script lang="ts">

import TabsContainer from "@/components/profile_tabs/TabsContainer.vue";

export default {
  components: {
    TabsContainer,
  },
};
</script>
<style lang="scss" 

</style>