<script setup>
defineProps({
  href: String,
  bg: String,
  blank: Boolean,
});
</script>

<template>
  <a :href="href ? href : '/'" :target="blank ? '_blank' : '_self'">
    <button
      :class="bg ? bg : 'bg-transparent'"
      class="button-transition relative py-2 px-8 text-n-1 border-n-1 border-2 text-base uppercase font-bold nded-full overflow-hidden rounded-full transition-all duration-400 shadow-md hover:scale-105 hover:text-n-1 hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-color-4 before:to-color-5 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0"
    >
      <slot />
    </button>
  </a>
</template>

<style scoped>
.button-transition {
  transition: var(--cubic-bezier);
}
.button-transition:not(:hover) {
  transition: all var(--cubic-bezier);
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y))
    rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
    scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
</style>
