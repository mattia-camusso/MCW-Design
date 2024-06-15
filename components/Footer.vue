<template>
  <footer class="footer-container h-full md:h-[100vh] relative">
    <div class="footer-overlay md:grid md:grid-rows-5 absolute">
      <div class="flex-col px-4 md:p-8 pt-[5vh] md:pt-[15vh] md:row-span-2">
        <p class="text-style-big font-medium">Hai un idea?</p>
        <p class="text-style-bigger font-bold text-color-5">Contattaci</p>
      </div>
      <div class="hidden md:block"></div>
      <div
        class="md:bg-color-1 p-4 md:row-span-2 flex flex-wrap gap-12 md:flex-row justify-between lg:justify-around"
      >
        <div class="sm:py-4 md:p-4 lg:p-8 sh:py-4 hidden sm:flex flex-col">
          <a href="/" class="sm:pb-8">
            <img class="logo-style" src="../assets/MCW.svg" alt="MCW Design" />
          </a>
          <div class="flex flex-col md:gap-12 sm:gap-8 gap-4 min-h-40">
            <a
              href="/services"
              class="hover:text-color-5 transition-all focus:text-color-5 text-style-3"
              >Servizi</a
            >
            <a
              href="/portfolio"
              class="hover:text-color-5 transition-all focus:text-color-5 text-style-3"
              >Progetti</a
            >
            <a
              href="/about"
              class="hover:text-color-5 transition-all focus:text-color-5 text-style-3"
              >About</a
            >
          </div>
        </div>
        <div class="sm:py-4 md:p-4 lg:p-8 sh:py-4 flex flex-col">
          <h5 class="text-style-1 pb-4 sm:pb-8 font-semibold hidden md:block">
            Contatti
          </h5>
          <div class="flex flex-col md:gap-12 sm:gap-8 gap-6">
            <a
              v-for="contact in contacts"
              :href="contact.link"
              target="_blank"
              class="hover:text-color-5 transition-all focus:text-color-5 text-style-3"
              >{{ contact.description }}</a
            >
          </div>
        </div>
        <div class="sm:py-4 md:p-4 lg:p-8 sh:py-4 flex flex-col">
          <h5 class="text-style-1 pb-4 sm:pb-8 font-semibold hidden md:block">
            Social
          </h5>
          <div class="flex flex-col end content-end md:gap-12 sm:gap-8 gap-6">
            <a
              v-for="social in socials"
              :href="social.link"
              target="_blank"
              class="hover:text-color-5 transition-all focus:text-color-5 text-style-3"
              >{{ social.name }}</a
            >
          </div>
        </div>
      </div>
    </div>
  </footer>
  <SmallFooter class="bg-color-1 border-color-1"></SmallFooter>
</template>

<script lang="ts" setup>
import { socials } from "../constants";
import { contacts } from "../constants";
</script>

<style scoped>
.footer-container {
  background-image: url("../assets/footer/footer.jpg");
  background-position: center 100%;
  background-size: cover;
}

.footer-overlay {
  width: 100%;
  height: 100%;
  background: linear-gradient(
    rgba(19, 21, 32, 0.7) 0%,
    rgba(19, 21, 32, 1) 100%
  );
}

.logo-style {
  height: clamp(1.5rem, 3vw, 4.5rem);
}

@media screen and (max-width: 1280px) {
  .footer-overlay {
    width: 100%;
    height: 100%;
    background: linear-gradient(
      rgba(19, 21, 32, 0.7) 0%,
      rgba(19, 21, 32, 1) 100%
    );
  }
}
</style>
