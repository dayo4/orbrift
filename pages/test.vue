<template>
  <div class="TestTop">
    <div>
      <h1>Testing ground</h1>
      <div>
        <ul>
          <li v-for="item in items" :key="item">{{ item }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
// import { usePosts } from "@/store";

export default {
  setup() {
    const items = ref(["item1", "item2", "item3", "item4"]);
    let interval;

    const rotateItems = () => {
      items.value.push(items.value.shift());
    };

    onMounted(() => {
      interval = setInterval(rotateItems, 2000);
    });

    onUnmounted(() => {
      clearInterval(interval);
    });

    return {
      items,
    };
  },
};
</script>

<style lang="scss" scoped>
.FFT {
  max-width: 100%;
  overflow: scroll !important;
}
</style>
