<template>
  <TabsContainer @return="$emit('return', 'Home')">
			<MainContact :topInfo="false" :target="'owner'" :action="'messageOwner'" class="my-7"></MainContact>
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
<style lang="scss">

</style>