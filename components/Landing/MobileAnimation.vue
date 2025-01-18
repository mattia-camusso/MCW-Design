<template>
  <section class="scroller">
    <div class="marquee marquee--fit-content">
      <ul class="marquee__content">
        <li v-for="el in elems">
          <a :href="el.url">
            <h2 class="text-style-3 font-medium">
              {{ el.title }}
            </h2>
          </a>
        </li>
      </ul>

      <ul aria-hidden="true" class="marquee__content">
        <li v-for="el in elems">
          <a :href="el.url">
            <h2 class="text-style-3 font-medium">
              {{ el.title }}
            </h2>
          </a>
        </li>
      </ul>
    </div>
  </section>
  <!--   <div class="scroller">
    <div class="tag-list scroller-inner">
      <a v-for="el in elems" :href="el.url" class="scroll-item">
        <h2>
          {{ el.title.replace(/\s/g, "&nbsp;") }}
        </h2>
      </a>
    </div>
  </div> -->
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

/* Marquee styles */
.marquee {
  --gap: 1rem;
  position: relative;
  display: flex;
  overflow: hidden;
  user-select: none;
  gap: var(--gap);
}

.marquee__content {
  flex-shrink: 0;
  display: flex;
  justify-content: space-around;
  gap: var(--gap);
  animation: scroll 15s linear infinite;
  -webkit-animation: scroll 15s linear infinite;
}

@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-100% - var(--gap)));
  }
}
@-webkit-keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-100% - var(--gap)));
  }
}

/* Pause animation when reduced-motion is set */
@media (prefers-reduced-motion: reduce) {
  .marquee__content {
    animation-play-state: paused !important;
  }
}

/* Pause on hover */
.marquee:hover .marquee__content {
  animation-play-state: paused;
}

/* Attempt to size parent based on content. Keep in mind that the parent width is equal to both content containers that stretch to fill the parent. */
.marquee--fit-content {
  max-width: fit-content;
}

/* Other page demo styles */
.marquee__content > * {
  flex: 0 0 auto;
  @apply bg-n-1;
  @apply bg-color-4;
  margin: 2px;
  padding: 1rem 2rem;
  border-radius: 0.25rem;
  text-align: center;
}
</style>
