<template>
  <div class="flex j-c-center mt-10" style="margin-top: 50px;">
    <div class="text-center">
      <h1 class="font-16">401 - Unauthorized Access!</h1>
      <p>Sorry, You are not authorized to access this resource.</p>

      <div class="flex j-c-center">
        <button
          @click="$router.push({ path: '/' })"
          class="icon-home btn pri-gradient-btn m-3 font-7 p-5 br4"
        >
          Return Home!
        </button>
        <button
          @click="relogin"
          class="btn pri-gradient-btn icon-login my-3 font-7 p-5 br4"
        >
          {{ isUser ? "Login Again!" : "Login" }}
        </button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {

}
</script>
