<script setup>
import { onMounted } from "vue";

const store = useMainStore();
onMounted(() => {});
</script>

<template>
  <div class="menu-button">
    <svg
      class="overflow-visible z-40 xl:h-12 lg:h-10 md:h-8 h-6 cubic-bezier(0.8, 0.12, 0.05, 0.88)"
      width="40"
      height="24"
      viewBox="0 0 40 24"
      @click="store.toggleMenu()"
    >
      <rect
        class="transition-all origin-center cubic-bezier(0.8, 0.12, 0.05, 0.88)"
        :y="store.menuToggle ? '10' : '0'"
        width="40"
        height="4"
        rx="1"
        fill="#d5dad5"
        :transform="`rotate(${store.menuToggle ? '45' : '0'})`"
      />
      <rect
        class="transition-all origin-center cubic-bezier(0.8, 0.12, 0.05, 0.88)"
        y="10"
        width="40"
        height="4"
        rx="1"
        fill="#d5dad5"
        :transform="`scale(${store.menuToggle ? '0' : '1'})`"
      />
      <rect
        class="transition-all origin-center"
        :y="store.menuToggle ? '10' : '20'"
        width="40"
        height="4"
        rx="1"
        fill="#d5dad5"
        :transform="`rotate(${store.menuToggle ? '-45' : '0'})`"
      />
    </svg>
  </div>
</template>

<style scoped>
.menu-button {
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
</style>
