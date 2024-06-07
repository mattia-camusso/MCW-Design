<template>
  <Menu></Menu>
  <Header class="header-element" :position="'sticky'"></Header>
  <slot></slot>
</template>
<script setup>
const store = useMainStore();

useHead({
  bodyAttrs: {
    class: computed(() => {
      if (store.menuToggle) return "overflow-y-hidden";

      return "overflow-y-visible";
    }),
  },
});
</script>
<style scoped>
.header {
  --_animationStartsAfter: 700px;
  --_animationRange: 250px;

  animation: stickyNav linear forwards;
  animation-timeline: view();
  animation-range-start: calc(100vh + var(--_animationStartsAfter));
  animation-range-end: calc(
    100vh + var(--_animationStartsAfter) + var(--_animationRange)
  );

  top: -5rem;
}

@keyframes stickyNav {
  100% {
    top: 0;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }
}
@-webkit-keyframes stickyNav {
  100% {
    top: 0;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }
}
</style>
