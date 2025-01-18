import { defineNuxtPlugin } from "nuxt/app";

export default defineNuxtPlugin((nuxtApp) => {
  const textAnimate = (title, currentService) => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let interval: any = null;
    let currentLetters = [];
    if (currentService.value == title) return;
    currentService.value = title;
    currentLetters = currentService.value.split("");
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
      currentService.value = currentService.value
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return currentLetters[index];
          }

          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= currentLetters.length) {
        clearInterval(interval);
      }

      iteration += 1 / 2;
    }, 30);
  };
});
