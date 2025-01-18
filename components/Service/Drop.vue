<template>
  <div class="container-1 pt-[7vh] sm:pt-[10vh]">
    <div
      v-for="service in services"
      class="border-n-1 m-4 sm:m-8 relative rounded-lg overflow-clip"
    >
      <img :src="service.url" class="service-img" :alt="service.title" />
      <div class="glass w-full p-6 grid place-content-center">
        <div class="text-style-1 text-center font-semibold">
          {{ service.title }}
        </div>

        <div
          class="text-xl font-medium text-balance sm:mb-8 mt-4 sm:mt-8 text-center"
        >
          {{ service.subtitle }}
        </div>
        <!--    <div class="w-full flex justify-center">
          <ButtonComponent class="">scopri di più</ButtonComponent>
        </div> -->
      </div>
    </div>
    <SmallFooter></SmallFooter>
  </div>
</template>

<script lang="ts" setup>
import { services } from "../../constants";
</script>

<style scoped>
body {
  overflow-x: hidden;
}
.container-1 {
  height: fit-content;
}

.service-img {
  object-fit: cover;
  object-position: top center;
}

.glass {
  position: absolute;
  bottom: 0%;
  height: 100%;
  background: rgba(19, 21, 32, 0.7);
}

@media screen and (min-width: 640px) {
  .glass {
    height: fit-content;
    width: 100% /* calc(100% - 16px) */;
    /*     border-top-left-radius: 30px;
    border-top-right-radius: 30px; */
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    background: rgba(19, 21, 32, 0.5);
    -webkit-backdrop-filter: blur(15px);
    backdrop-filter: blur(15px);
    /* border: 1px solid rgba(213, 218, 213, 0.4); */
    border-top: none;
  }
}
@media screen and (max-width: 640px) {
  .glass {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>
