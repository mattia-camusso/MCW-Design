import { defineStore } from "pinia";
import { ref } from "vue";

export const useMainStore = defineStore("store", () => {
  const menuToggle = ref(false);
  const cardOpen = ref(false);

  function toggleMenu() {
    menuToggle.value = !menuToggle.value;
  }
  function openCard(value: boolean) {
    cardOpen.value = value;
  }

  return { menuToggle, toggleMenu, cardOpen, openCard };
});
