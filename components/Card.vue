<template>
  <div class="card w-full xl:w-[30vmax] mb-[2vh] xl:mb-0">
    <div
      class="card-details flex flex-row xl:justify-start justify-evenly items-center xl:flex-col"
    >
      <slot />
      <div class="ml-[5vw] xl:ml-0">
        <p class="xl:text-center title font-bold mb-6">
          {{ title }}
        </p>
        <p class="xl:text-center description">
          {{ description }}
        </p>
      </div>
      <ButtonComponent
        class="card-button-2"
        :href="href"
        :target="target"
        bg="bg-color-1"
        >contattaci</ButtonComponent
      >
    </div>
    <ButtonComponent
      :href="href"
      :target="target"
      bg="bg-color-1"
      class="card-button self-baseline"
      >contattaci</ButtonComponent
    >
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  href: String,
  target: Boolean,
});
</script>

<style scoped>
.card {
  border-radius: 20px;
  position: relative;
  padding: clamp(1rem, 5vmax, 3rem);
  background: rgba(19, 21, 32, 0.5);
  border: none;
  transition: all 0.6s ease;
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(020px);
  box-shadow: 0px 0px 8px 3px rgba(237, 231, 244, 0.25);
}
@media screen and (min-width: 1280px) {
  /*Hover*/
  .card:hover {
    box-shadow: 0px 0px 8px 3px rgba(0, 170, 136, 0.25);
    /*   @apply bg-color-1;
    */
    transform: translateY(1rem);
  }
}
.card .text-center {
  transition: all 0.4s ease-in;
}
.card:hover .text-center {
  opacity: 1;
  @apply text-n-1;
}
.card:hover .text-center:nth-child(1) {
  @apply text-color-5;
}
.card-details {
  height: 100%;
}

@media screen and (max-width: 1279px) {
  .title {
    font-size: clamp(2rem, 5.5vw, 6rem);
    font-weight: 500;
  }
  .description {
    font-size: clamp(1rem, 2vw, 3rem);
  }
  .card-button {
    display: none;
  }
  .card-button-2 {
    margin-left: auto;
  }
}
@media screen and (min-width: 1280px) {
  .title {
    font-size: clamp(1.5rem, 3vw, 3rem);
  }
  .description {
    font-size: clamp(0.5rem, 1.5vw, 1.5rem);
  }
  .card-button-2 {
    display: none;
  }
  .card-button {
    transform: translate(-50%, 125%);
    position: absolute;
    left: 50%;
    bottom: 0;
    opacity: 0;
    transition: 0.6s var(--cubic-bezier);
  }

  .card:hover .card-button {
    transform: translate(-50%, 50%);
    opacity: 1;
  }
}
</style>
