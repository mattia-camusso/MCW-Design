<template>
  <footer
    class="footer-container h-[60vh] sm:h-[75vh] md:h-[100vh] flex flex-col justify-between"
  >
    <div></div>
    <div class="flex items-baseline xl:gap-10 flex-col xl:flex-row p-4 md:p-8">
      <p class="text-style-big font-medium">Hai un idea?</p>
      <p class="text-style-bigger font-bold text-color-5">Contattaci</p>
    </div>
    <div class="bg-color-1 flex flex-wrap md:flex-row justify-between p-8 pb-0">
      <div class="hidden sm:flex flex-col gap-8">
        <a href="/" class="">
          <img class="logo-style" src="../assets/MCW.svg" alt="MCW Design" />
        </a>
        <a
          href="/services"
          class="hover:text-color-5 transition-all focus:text-color-5 text-style-2"
          >Servizi</a
        >
        <a
          href="/portfolio"
          class="hover:text-color-5 transition-all focus:text-color-5 text-style-2"
          >Progetti</a
        >
        <a
          href="/about"
          class="hover:text-color-5 transition-all focus:text-color-5 text-style-2"
          >About</a
        >
      </div>
      <div class="flex flex-col gap-8">
        <h5 class="text-style-1 font-semibold hidden sm:block">Contatti</h5>
        <a
          v-for="contact in contacts"
          :href="contact.link"
          target="_blank"
          class="hover:text-color-5 transition-all focus:text-color-5 text-style-2"
          >{{ contact.description }}</a
        >
      </div>
      <div class="flex flex-col gap-8">
        <h5 class="text-style-1 font-semibold hidden sm:block">Social</h5>

        <a
          v-for="social in socials"
          :href="social.link"
          target="_blank"
          class="hover:text-color-5 transition-all focus:text-color-5 text-style-2"
          >{{ social.name }}</a
        >
      </div>
      <SmallFooter class="bg-color-1 border-color-1"></SmallFooter>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import { socials } from "../constants";
import { contacts } from "../constants";
</script>

<style scoped>
.footer-container {
  width: 100%;
  background-image: url("../assets/footer/footer.jpg");
  background-position: center 100%;
  background-size: cover;
  border-image: fill 1
    linear-gradient(var(--color-overlay), var(--color-overlay));
}

.logo-style {
  height: clamp(1.5rem, 3vw, 4.5rem);
}

@media screen and (max-width: 1280px) {
}
</style>
