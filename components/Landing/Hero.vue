<script setup lang="ts">
import MobileAnimation from "./MobileAnimation.vue";
</script>

<template>
  <div
    class="flex hero-container flex-col lg:flex-row lg:items-center mx-4 lg:mx-8 overflow-x-clip"
  >
    <div>
      <div class="hero-text text-n-1 tall:mt-24 lg:mt-0 mb-8 mt-8">
        Design Digitale per il tuo
        <span class="hero-text-highlight text-color-5">Business</span>
      </div>
      <h1 class="hero-subtext text-pretty mb-4 tall:mb-16">
        Realizziamo Siti Web in Valle d'Aosta e Canavese.
      </h1>
    </div>
    <div class="hero-side collapse w-0 h-0 md:w-full md:h-full md:visible">
      <LandingAnimation></LandingAnimation>
    </div>
    <div
      class="hero-side hero-bg md:collapse py-[7.5vh] tall:py-[10vh] md:w-0 md:h-0 w-full h-50 visible"
    >
      <MobileAnimation></MobileAnimation>
    </div>
  </div>
</template>

<style scoped>
.hero-container {
  height: 90dvh;
  overflow-x: clip;
}

.hero-side {
  display: grid;
  place-items: center;
}

.hero-img {
  filter: invert(35%) sepia(85%) hue-rotate(179deg);
}

.hero-text {
  font-size: clamp(3rem, 8vw, 8rem);
  font-weight: 500;
  letter-spacing: -1px;
  line-height: 1.2;
}
.hero-text-highlight {
  font-weight: 700;
}

.hero-subtext {
  font-size: clamp(1.3rem, 2.2vw, 7rem);
  font-weight: 500;
  letter-spacing: -1%;
  line-height: 1.2;
}

.hero-bg {
  background-image: url("../../assets/landing/scroller-bg.png");

  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-position: center;
}
</style>
