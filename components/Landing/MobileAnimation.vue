<template>
  <div class="scroller">
    <div class="tag-list scroller-inner">
      <a v-for="el in elems" :href="el.url" class="scroll-item">{{
        el.title.replace(/\s/g, "&nbsp;")
      }}</a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import { elems } from "../../constants";
let scrollers;
onMounted(() => {
  scrollers = document.querySelectorAll(".scroller");
  addAnimation();
});

const addAnimation = () => {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);

    const scrollerInner = scroller.querySelector(".scroller-inner");
    const scrollerItems = Array.from(scrollerInner.children);

    scrollerItems.forEach((item: any) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", "true");
      scrollerInner.appendChild(duplicatedItem);
    });
  });
};
</script>

<style scoped>
.scroller {
  max-width: 100%;
  overflow: hidden;
  mask: linear-gradient(90deg, transparent, white 10%, white 90%, transparent);
  -webkit-mask: linear-gradient(
    90deg,
    transparent,
    white 10%,
    white 90%,
    transparent
  );
}

@keyframes inner-scroll {
  to {
    transform: translate(calc(-50% - 0.5rem));
  }
}
@-webkit-keyframes inner-scroll {
  to {
    transform: translate(calc(-50% - 0.5rem));
  }
}

.scroller-inner {
  padding-block: 2rem;
  flex-wrap: wrap;
  display: flex;
  gap: 1rem;
  width: max-content;
  flex-wrap: nowrap !important;
  animation: inner-scroll 20s linear infinite;
  -webkit-animation: inner-scroll 20s linear infinite;
}

.scroll-item {
  padding: 1rem 2rem;
  border-radius: 5px;
  font-size: 1.3rem;
  font-weight: 700;
  letter-spacing: -1%;
  line-height: 1.2;
  text-align: center;
  @apply bg-color-4;
}
</style>
