<template>
  <TabsContainer @return="$emit('return', 'Home')">
			<MainContact :topInfo="false" :target="'owner'" :action="'messageOwner'" class="my-7"></MainContact>
  </TabsContainer>
</template>

<script lang="ts">

export default {
  
};
</script>
<style lang="scss">

</style>