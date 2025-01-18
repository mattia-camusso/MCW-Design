<script setup>
defineProps({
  position: String,
});
</script>

<template>
  <nav class="header" :class="position ? [position, 'backdrop'] : 'sticky'">
    <div
      class="flex justify-between items-center p-4 lg:p-8 2xl:py-4vh 2xl:px-4vw"
    >
      <a href="/">
        <img
          class="xl:h-12 lg:h-10 md:h-6 h-6"
          src="../assets/MCW.svg"
          alt="MCW Design"
        />
      </a>
      <div class="flex items-center">
        <div
          class="mr-4 menu-text select-none collapse lg:visible font-semibold text-n-1"
        >
          Menu
        </div>
        <MenuSvg></MenuSvg>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.menu-text {
  font-size: 2rem;
}

.header {
  width: 100vw;
  z-index: 99;
}

.backdrop {
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}
</style>
