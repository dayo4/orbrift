export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("aos", {
    mounted(el, binding) {
      if (!process.server) {
        el.setAttribute("data-aos", binding.value);
      }
    },
  });
});
