<template>
  <svg
    :width="size ? size : 48"
    :height="size ? size : 48"
    viewBox="0 0 169 114"
    fill="none"
  >
    <path
      d="M16.5066 22.0423L69.2479 54.6889C78.322 60.3056 90.7979 60.3056 99.8719 54.6889L152.613 22.042"
      :stroke="fill ? fill : '#131520'"
      stroke-width="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M144.107 8H25.0133C15.6171 8 8 14.2867 8 22.0417V92.2501C8 100.005 15.6171 106.292 25.0133 106.292H144.107C153.503 106.292 161.12 100.005 161.12 92.2501V22.0417C161.12 14.2867 153.503 8 144.107 8Z"
      :stroke="fill ? fill : '#131520'"
      stroke-width="10"
      stroke-linecap="round"
    />
  </svg>
</template>

<script lang="ts" setup>
defineProps({
  size: Number,
  fill: String,
});
</script>

<style></style>
