<template>
  <div
    id="wrapper"
    @mouseenter="hovering = true"
    @mouseleave="hovering = false"
    data-configuration="1"
    data-roundness="1"
  >
    <a
      :href="el.url"
      v-for="(el, index) in elems"
      :class="[el.class]"
      class="shape"
      tabindex="-1"
    >
      <h3 class="tooltip-1 tooltip">{{ el.title.replace(/\s/g, "&nbsp;") }}</h3>
    </a>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { combinations, elems } from "../../constants";
const hovering = ref(false);

onMounted(() => {
  const wrapper = document.getElementById("wrapper");

  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

  const uniqueRand = (min, max, prev) => {
    let next = prev;

    while (prev === next) next = rand(min, max);

    return next;
  };

  let prev = 0;

  setInterval(() => {
    if (!hovering.value) {
      const index = uniqueRand(0, combinations.length - 1, prev),
        combination = combinations[index];

      wrapper.dataset.configuration = combination.configuration;
      wrapper.dataset.roundness = combination.roundness;

      prev = index;
    }
  }, 2000);
});
</script>

<style scoped>
#wrapper {
  aspect-ratio: 1.618;
  width: 40vw;
  position: relative;
}

@media screen and (max-width: 1024px) {
  #wrapper {
    width: 60vw;
  }
}
#wrapper > .shape {
  height: 30vmin;
  width: 30vmin;
  position: absolute;

  transition: all 800ms var(--cubic-bezier);
  cursor: pointer;
  display: grid;
}

.shape-overlay {
  display: grid;
  place-content: center;
  border-radius: 8px;
  width: 0;
  height: 0;
  opacity: 0;
}

.shape::after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 1;
  transition: all 800ms var(--cubic-bezier);
}

.shape:hover::after {
  opacity: 0;
}

.shape:nth-child(1)::after {
  @apply bg-color-4;
}

#wrapper > .shape:nth-child(1) {
  background-image: url("../../assets/services-smaller/web-app.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 2;
}

.shape:nth-child(2)::after {
  @apply bg-color-3;
}

#wrapper > .shape:nth-child(2) {
  background-image: url("../../assets/services-smaller/ux-ui.jpg");
  z-index: 2;
  object-fit: scale-down;
  background-repeat: no-repeat;
}

#wrapper > .shape:nth-child(3) {
  background-image: url("../../assets/services-smaller/mobile-app.jpg");
  object-fit: contain;
  background-repeat: no-repeat;
  z-index: 1;
}

#wrapper > .shape:nth-child(3)::after {
  @apply bg-color-4;
}

#wrapper > .shape:nth-child(4) {
  background-image: url("../../assets/services-smaller/website-design.jpg");
  object-fit: contain;
  background-repeat: no-repeat;
  z-index: 2;
}

#wrapper > .shape:nth-child(4)::after {
  @apply bg-color-3;
}

#wrapper > .shape:nth-child(5)::after {
  @apply bg-color-5;
}

#wrapper > .shape:nth-child(5) {
  z-index: 2;
  background-image: url("../../assets/services-smaller/services.jpg");
  object-fit: contain;
  background-repeat: no-repeat;
}

#wrapper > .shape:nth-child(6) {
  background-image: url("../../assets/services-smaller/logo-design.jpg");
  object-fit: fill;
  background-repeat: no-repeat;
  object-position: center center;
  z-index: 2;
}

#wrapper > .shape:nth-child(6)::after {
  @apply bg-color-5;
}

#wrapper[data-configuration="1"] > .shape:nth-child(1) {
  left: 0%;
  top: 0%;
  height: 50%;
  width: 20%;
}

#wrapper[data-configuration="1"] > .shape:nth-child(2) {
  left: 20%;
  top: 0%;
  height: 50%;
  width: 30%;
}

#wrapper[data-configuration="1"] > .shape:nth-child(3) {
  left: 50%;
  top: 0%;
  height: 100%;
  width: 50%;
}

#wrapper[data-configuration="1"] > .shape:nth-child(4) {
  left: 0%;
  top: 50%;
  height: 50%;
  width: 30%;
}

#wrapper[data-configuration="1"] > .shape:nth-child(5) {
  left: 30%;
  top: 50%;
  height: 50%;
  width: 20%;
}

#wrapper[data-configuration="1"] > .shape:nth-child(6) {
  left: 70%;
  top: 50%;
  height: 50%;
  width: 30%;
}

#wrapper[data-configuration="2"] > .shape:nth-child(1) {
  left: 25%;
  top: 20%;
  height: 80%;
  width: 15%;
}

#wrapper[data-configuration="2"] > .shape:nth-child(2) {
  left: 40%;
  top: 20%;
  height: 50%;
  width: 10%;
}

#wrapper[data-configuration="2"] > .shape:nth-child(3) {
  left: 50%;
  top: 0%;
  height: 100%;
  width: 25%;
}

#wrapper[data-configuration="2"] > .shape:nth-child(4) {
  left: 0%;
  top: 0%;
  height: 50%;
  width: 10%;
}

#wrapper[data-configuration="2"] > .shape:nth-child(5) {
  left: 10%;
  top: 0%;
  height: 70%;
  width: 15%;
}

#wrapper[data-configuration="2"] > .shape:nth-child(6) {
  left: 75%;
  top: 10%;
  height: 80%;
  width: 15%;
}

#wrapper[data-configuration="3"] > .shape:nth-child(1) {
  left: 0%;
  top: 16.5%;
  height: 32%;
  width: 20%;
}

#wrapper[data-configuration="3"] > .shape:nth-child(2) {
  left: 20%;
  top: 2.7%;
  height: 55%;
  width: 34%;
}

#wrapper[data-configuration="3"] > .shape:nth-child(3) {
  left: 38%;
  top: 0%;
  height: 100%;
  width: 62%;
}

#wrapper[data-configuration="3"] > .shape:nth-child(4) {
  left: 0%;
  top: 47.3%;
  height: 55%;
  width: 34%;
}

#wrapper[data-configuration="3"] > .shape:nth-child(5) {
  left: 34%;
  top: 56.4%;
  height: 32%;
  width: 20%;
}

#wrapper[data-configuration="3"] > .shape:nth-child(6) {
  left: 66%;
  top: 45%;
  height: 55%;
  width: 34%;
}

#wrapper[data-roundness="1"] > .shape {
  border-radius: 6rem;
}

#wrapper[data-roundness="1"] > .shape::after {
  border-radius: 6rem;
}

#wrapper[data-roundness="2"] > .shape,
.shape::after {
  border-radius: 0rem;
}

#wrapper[data-roundness="2"] > .shape::after {
  border-radius: 0rem;
}

#wrapper[data-roundness="3"] > .shape {
  border-radius: 30rem;
}
#wrapper[data-roundness="3"] > .shape::after {
  border-radius: 30rem;
}

#wrapper[data-roundness="4"] > .shape:nth-child(1) {
  border-bottom-left-radius: 10rem;
}
#wrapper[data-roundness="4"] > .shape:nth-child(1)::after {
  border-bottom-left-radius: 10rem;
}

#wrapper[data-roundness="4"] > .shape:nth-child(2) {
  border-radius: 20rem;
}

#wrapper[data-roundness="4"] > .shape:nth-child(2)::after {
  border-radius: 20rem;
}

#wrapper[data-roundness="4"] > .shape:nth-child(3) {
  border-top-right-radius: 12rem;
}

#wrapper[data-roundness="4"] > .shape:nth-child(3)::after {
  border-top-right-radius: 12rem;
}

#wrapper[data-roundness="4"] > .shape:nth-child(4) {
  border-top-right-radius: 10rem;
  border-bottom-right-radius: 10rem;
}

#wrapper[data-roundness="4"] > .shape:nth-child(4)::after {
  border-top-right-radius: 10rem;
  border-bottom-right-radius: 10rem;
}

#wrapper[data-roundness="4"] > .shape:nth-child(5) {
  border-bottom-left-radius: 10rem;
}

#wrapper[data-roundness="4"] > .shape:nth-child(5)::after {
  border-bottom-left-radius: 10rem;
}

#wrapper[data-roundness="4"] > .shape:nth-child(6) {
  border-top-left-radius: 16rem;
}

#wrapper[data-roundness="4"] > .shape:nth-child(6)::after {
  border-top-left-radius: 16rem;
}

.tooltip {
  position: absolute;
  transform: translateY(-50%);
  font-weight: 700;
  text-align: center;
  opacity: 0;
  transition: all 0.8s var(--cubic-bezier);
  top: 0%;
  left: 0%;
  z-index: 9999 !important;
}
.tooltip-1 {
  padding: 0.5rem 1rem;
  @apply text-n-1;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  width: fit-content;
}
.shape:hover > .tooltip {
  top: -2.5rem;
  opacity: 1;
  visibility: visible;
}
</style>
