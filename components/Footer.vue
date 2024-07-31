<template>
  <footer
    class="footer-container h-[65vh] sm:h-[80vh] md:h-[100vh] flex flex-col justify-between"
  >
    <div></div>
    <div
      class="flex xl:items-baseline items-center xl:justify-center md:gap-8 flex-col xl:flex-row"
    >
      <p class="text-style-big font-medium">Hai un idea?</p>
      <p class="text-style-bigger font-bold text-color-5">Contattaci</p>
    </div>

    <div
      class="gradient-footer flex flex-wrap flex-col gap-16 justify-center items-center pb-0 md:pt-16"
    >
      <div class="mx-auto">
        <img
          src="../assets/MCW.svg"
          class="xl:h-24 lg:h-20 md:h-12 h-12"
          alt="MCW Web Design"
        />
      </div>
      <div class="flex flex-col gap-8 justify-center">
        <div class="flex items-baseline gap-16" v-for="contact in contacts">
          <h4 class="text-color-5 font-black text-lg">{{ contact.name }}</h4>
          <a
            :href="contact.link"
            target="_blank"
            class="hover:text-color-5 transition-all focus:text-color-5 text-style-3"
            >{{ contact.description }}</a
          >
        </div>
      </div>
      <SmallFooter></SmallFooter>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import { contacts } from "../constants";
</script>

<style scoped>
.footer-container {
  width: 100%;
  background: rgb(14, 12, 21);

  background-image: url("../assets/footer/footer.jpg");
  background-position: center 100%;
  background-size: cover;
  border-image: fill 1 linear-gradient(var(--color-overlay), var(--color));
}

.logo-style {
  height: clamp(1.5rem, 3vw, 4.5rem);
}

@media screen and (max-width: 640px) {
  /* .footer-container {
    background-image: none;
  } */
}
</style>
