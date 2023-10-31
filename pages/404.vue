<template>
  <GlobalWrapper :header="true">
    <template #Title> 404 </template>
    <template #SubText> <b>Page Not Found</b> </template>

    <template #WrapperBody>
      <div class="flex justify-center text-center text-blue-gray-600">
        <div class="font-bold">
          <!-- <h2 class="text-[40px]">404 - Page not found</h2> -->
          <p>The page you are looking for could not be located!</p>
          <p>It may have been removed, or is temporarily unavailable.</p>
          <div class="flex justify-center">
            <Button
              @clicked="$router.push({ path: '/' })"
              type="action"
              size="medium"
              icon="icon-home"
              class="m-3 mt-10"
            >
              Return Home
            </Button>
          </div>
        </div>
      </div>
    </template>
  </GlobalWrapper>
</template>
<script lang="ts">
export default {};
</script>
