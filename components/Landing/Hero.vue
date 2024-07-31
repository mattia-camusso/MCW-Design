<script setup lang="ts">
import MobileAnimation from "./MobileAnimation.vue";
</script>

<template>
  <div
    class="flex hero-container flex-col lg:flex-row lg:items-start mx-4 lg:mx-8 overflow-x-clip"
  >
    <div>
      <div class="hero-text text-n-1 mb-8 mt-8 lg:pt-[10vh]">
        Design Digitale per il tuo
        <span class="hero-text-highlight text-color-5">Business</span>
      </div>
      <h1 class="hero-subtext text-center md:text-left text-balance mb-4">
        MCW Design è una Web Agency in Val d'Aosta. Ci occupiamo di Sviluppo e
        Realizzazione Siti Web e Internet ad Aosta, Canavese e tutta Italia.
      </h1>
    </div>
    <div class="hero-side collapse w-0 h-0 md:w-full md:h-full md:visible">
      <LandingAnimation></LandingAnimation>
    </div>
    <div
      class="hero-side hero-bg md:collapse md:w-0 md:h-0 w-full h-[50vh] visible"
    >
      <MobileAnimation></MobileAnimation>
    </div>
  </div>
</template>

<style scoped>
.hero-container {
  height: 100vh;
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
  font-size: clamp(1.3rem, 2.2vw, 5rem);
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
