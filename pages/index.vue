<script setup>
import { useMainStore } from "../stores/myStore";

definePageMeta({
  layout: "home",
});

await preloadComponents(["LandingHero", "LandingStory"]);
</script>

<template>
  <LandingHero />
  <LandingStory />
  <Footer></Footer>
</template>

<style></style>
