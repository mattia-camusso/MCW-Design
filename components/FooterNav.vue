<template>
  <div class="bg-color-1 mt-8">
    <ul class="nav-list bg-red-300">
      <li @click="setActive(1)" :class="active == 1 ? 'active' : ''">
        <Instagram class="" :size="72"></Instagram>
      </li>
      <li @click="setActive(2)" :class="active == 2 ? 'active' : ''">
        <Whatsapp class="" :size="72"></Whatsapp>
      </li>
      <li @click="setActive(3)" :class="active == 3 ? 'active' : ''">
        <Email class="" :size="72"></Email>
      </li>
    </ul>
    <div>
      <div
        class="grid-cont collapse self-center h-3/4 mt-14 lg:visible lg:w-full"
      >
        <div
          class="grid-item bg-color-1"
          :class="[`item-${i + 1}`, active == i + 1 ? 'active' : '']"
          v-for="(social, i) in socials"
        >
          <div class="overlay">{{ social.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Instagram from "./SvgComponents/Instagram.vue";
import Whatsapp from "./SvgComponents/Whatsapp.vue";
import Email from "./SvgComponents/Email.vue";

const active = ref(0);

const socials = [
  {
    name: "Email",
    description: "Email",
    size: 72,
  },
  {
    name: "Whatsapp",
    description: "Whatsapp",
    size: 72,
  },
  {
    name: "Instagram",
    description: "Instagram",
    size: 72,
  },
];

const setActive = (index) => {
  active.value === index ? (active.value = 0) : (active.value = index);
};
</script>

<style scoped>
.container {
  @apply bg-color-1;
}

.nav-list {
  display: flex;
  justify-content: space-around;
  width: 100%;
  @apply bg-color-1;
}

.nav-list li {
  list-style: none;
  padding: 1.5rem;
  border-radius: 100vmax;
  cursor: pointer;
  position: relative;
  transition: all 0.8s var(--cubic-bezier);
  border: 1rem solid;
  @apply border-color-1;
}

.nav-list li.active {
  @apply bg-color-1 !important;
  transform: translateY(-45%);
}
.nav-list li.active::before {
  content: "";
  width: 20px;
  height: 20px;
  position: absolute;
  top: 27%;
  left: -26%;
  border-bottom-right-radius: 100vmax;
  box-shadow: 6px 6px 0 3px #131520;
}
.nav-list li.active::after {
  content: "";
  width: 20px;
  height: 20px;
  position: absolute;
  top: 27%;
  right: -26%;
  border-bottom-left-radius: 100vmax;
  box-shadow: -6px 6px 0 3px #131520;
}

.grid-cont {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  transition: 800ms;
}

:where(.item-1, .item-2, .item-3) {
  transition: 800ms;
}

:where(.item-1, .item-2, .item-3).active .overlay {
  opacity: 1;
}
:where(.item-1, .item-2, .item-3).active {
  background-color: crimson;
}
:where(.item-1, .item-2, .item-3):not(.active) {
  visibility: collapse;
  opacity: 0;
  width: 0;
}

.grid-cont:has(.item-1.active) {
  grid-template-columns: 4fr 0fr 0fr;
}

.grid-cont:has(.item-2.active) {
  grid-template-columns: 0fr 4fr 0fr;
}

.grid-cont:has(.item-3.active) {
  grid-template-columns: 0fr 0fr 4fr;
}

::-moz-selection {
  /* Code for Firefox */
  @apply text-color-1;
  @apply bg-n-1;
}

::selection {
  /* Code for Firefox */
  @apply text-color-1;
  @apply bg-n-1;
}
</style>
