<template>
  <div class="grid-cont self-center h-full lg:w-full gap-2">
    <div
      class="grid-item border-2 border-n-1"
      :class="`item-${i + 1}`"
      v-for="(service, i) in services"
    >
      <div class="overlay flex justify-center w-full">
        <h4 class="pt-4 text-style-1">
          {{ service.title }}
        </h4>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  direction: String,
  items: Number,
});
import { services } from "../../constants";
</script>
<style scoped>
.grid-cont {
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  transition: 800ms;
  height: 80vh;
}

.overlay {
  width: 100%;
  display: flex;
  align-items: center;
}

:where(.item-1, .item-2, .item-3, .item-4, .item-5) {
  transition: 800ms;
}

:where(.item-1, .item-2, .item-3, .item-4, .item-5):hover .overlay {
  opacity: 1;
}
:where(.item-1, .item-2, .item-3, .item-4, .item-5):hover {
  background-color: crimson;
}
:where(.item-1, .item-2, .item-3, .item-4, .item-5):hover > .overlay > h4 {
  padding-top: 0 !important;
}

.grid-cont:has(.item-1:hover) {
  grid-template-rows: 4fr 0.5fr 0.5fr 0.5fr 0.5fr;
}

.grid-cont:has(.item-2:hover) {
  grid-template-rows: 0.5fr 4fr 0.5fr 0.5fr 0.5fr;
}

.grid-cont:has(.item-3:hover) {
  grid-template-rows: 0.5fr 0.5fr 4fr 0.5fr 0.5fr;
}

.grid-cont:has(.item-4:hover) {
  grid-template-rows: 0.5fr 0.5fr 0.5fr 4fr 0.5fr;
}

.grid-cont:has(.item-5:hover) {
  grid-template-rows: 0.5fr 0.5fr 0.5fr 0.5fr 4fr;
}
</style>
