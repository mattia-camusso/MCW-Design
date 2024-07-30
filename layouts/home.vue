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
.header-element {
  --_animationStartsAfter: 700px;
  --_animationRange: 250px;

  animation: stickyNav linear forwards;
  animation-timeline: view();
  animation-range-start: calc(100vh + var(--_animationStartsAfter));
  animation-range-end: calc(
    100vh + var(--_animationStartsAfter) + var(--_animationRange)
  );

  top: -10rem;
}

@keyframes stickyNav {
  100% {
    top: 0;
    background-color: var(--color-overlay);
  }
}
@-webkit-keyframes stickyNav {
  100% {
    top: 0;
    background-color: var(--color-overlay);
  }
}
</style>
