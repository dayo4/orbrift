<template>
  <GlobalWrapper :header="false" :title="false">

    <template #WrapperBody>
      <div class="flex j-c-center text-center mt-10 t-blue-grey--2">
        <div class="notfound">

          <h2 class="font-16">404 - Page not found</h2>
          <p>The page you are looking for could not be located!</p>
          <p>
            It may have been removed, or is temporarily unavailable.
          </p>
          <div class="flex j-c-center">
            <button
              @click="$router.push({ path: '/' })"
              class="btn pri-gradient-btn m-3 font-7 p-3 br4"
            >
            <span class="icon-home mr-1"></span>
              Return Home!
            </button>
          </div>
        </div>
      </div>
    </template>
  </GlobalWrapper>
</template>
<script lang="ts">
export default {

}
</script>
