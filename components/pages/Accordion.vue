
<template>
  <div>
    <div v-for="(item, index) in accordionItems" :key="index" :class="{ 'active': item.expanded }">
      <div class="accordion-header" @click="toggleAccordion(index)">
        {{ item.title }}
        <div class="active-border" v-if="item.expanded"></div>
      </div>
      <div v-if="item.expanded" class="accordion-content">
        {{ item.content }}
      </div>
    </div>
  </div>
</template>

<script>

export default {
  setup() {
    const accordionItems = ref([
      { title: 'Item 1', content: 'Content for Item 1', expanded: false },
      { title: 'Item 2', content: 'Content for Item 2', expanded: false },
      { title: 'Item 3', content: 'Content for Item 3', expanded: false },
      { title: 'Item 4', content: 'Content for Item 4', expanded: false },
      { title: 'Item 5', content: 'Content for Item 5', expanded: false }
    ]);

    let intervalId;

    const toggleAccordion = (index) => {
      accordionItems.value.forEach((item, i) => {
        if (i === index) {
          item.expanded = !item.expanded;
        } else {
          item.expanded = false;
        }
      });
    };

    const expandAccordionAutomatically = () => {
      const currentIndex = accordionItems.value.findIndex((item) => item.expanded);

      const nextIndex = currentIndex === accordionItems.value.length - 1 ? 0 : currentIndex + 1;

      toggleAccordion(nextIndex);
    };

    onMounted(() => {
      accordionItems.value[0].expanded = true;
      intervalId = setInterval(expandAccordionAutomatically, 3000);
    });

    onUnmounted(() => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    });

    return {
      accordionItems,
      toggleAccordion
    };
  }
};
</script>

<style>
.accordion-header {
  background-color: #f0f0f0;
  padding: 10px;
  cursor: pointer;
  position: relative;
  transition: background-color 0.3s cubic-bezier(0.42, 0, 0.58, 1);
}

.active-border {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 0;
  background-color: yellow;
  transition: width 0.3s cubic-bezier(0.42, 0, 0.58, 1);
}

.active .active-border {
  width: 100%;
}

.accordion-content {
  background-color: #ffffff;
  padding: 10px;
  border: 1px solid #d9d9d9;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s cubic-bezier(0.42, 0, 0.58, 1);
}

.active .accordion-content {
  max-height: 1000px;
}
</style>
