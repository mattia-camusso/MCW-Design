<template>
  <div class="main px-4 lg:px-8">
    <article
      v-for="(el, index) in projects"
      :data-index="index"
      :data-status="index == 0 ? 'active' : 'inactive'"
    >
      <div class="article-image-section article-section"></div>
      <div class="article-description-section article-section">
        <p>
          {{ el.content }}
        </p>
      </div>
      <div class="article-title-section article-section">
        <h2>{{ el.title }}</h2>
        <i class="fa-light fa-plus-large"></i>
      </div>
      <div class="article-nav-section article-section">
        <button
          class="article-nav-button"
          type="button"
          @click="handleLeftClick()"
        >
          <i class="fa-light fa-arrow-left-long"></i>
        </button>
        <button
          class="article-nav-button"
          type="button"
          @click="handleRightClick()"
        >
          <i class="fa-light fa-arrow-right-long"></i>
        </button>
      </div>
    </article>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

definePageMeta({
  layout: "main",
});
let activeIndex = 0;
let slides;

const projects = [
  {
    title: "Recreation From Scratch",
    content:
      "his is a recreation (from scratch) of dylanbrouwer.design/work. See how I did it",
    img: "",
  },
  {
    title: "Wicked Cool Library Shelves",
    content:
      "A place where books hang out waiting to be grabbed. But don't be too grabby now, ya hear?",
    img: "",
  },
  {
    title: "Neato Toledo Lighthouse",
    content:
      "The neatest lighthouse you ever saw. Ehh, actually it's kind of messy. But that's why the pic is of the outside.",
    img: "",
  },
  {
    title: "Super Space Blob",
    content:
      "The blobiest of blobs nestled deep in the heart of outer space. Well, technically the universe is both infinite and homogeneous so there isn't really a heart, per se.",
    img: "",
  },
];
onMounted(() => {
  slides = document.getElementsByTagName("article");

  const nav = document.querySelector("nav");

  window.matchMedia("(max-width: 800px)").onchange = (e) => {
    nav.dataset.transitionable = "false";

    nav.dataset.toggled = "false";
  };
});

const handleRightClick = () => {
  const nextIndex = activeIndex + 1 <= slides.length - 1 ? activeIndex + 1 : 0;

  const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`),
    nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);

  currentSlide.dataset.status = "before";

  nextSlide.dataset.status = "becoming-active-from-after";

  setTimeout(() => {
    nextSlide.dataset.status = "active";
    activeIndex = nextIndex;
  });
};

const handleLeftClick = () => {
  const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : slides.length - 1;

  const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`),
    nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);

  currentSlide.dataset.status = "after";

  nextSlide.dataset.status = "becoming-active-from-before";

  setTimeout(() => {
    nextSlide.dataset.status = "active";
    activeIndex = nextIndex;
  });
};
</script>

<style scoped>
.main {
  flex-grow: 1;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 90dvh;
  margin: 0px;
}

.main > article {
  height: 100%;
  width: 100%;
  overflow-y: clip;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 2fr 1fr;
  position: absolute;
  left: 0px;
  top: 0px;
  transition: transform 400ms ease;
}

.main > article[data-status="inactive"] {
  transform: translateX(-100%);
  transition: none;
}

.main > article[data-status="active"] {
  transform: translateX(0%);
}

.main > article[data-status="before"] {
  transform: translateX(-100%);
}

.main > article[data-status="after"] {
  transform: translateX(100%);
}

.main > article[data-status="becoming-active-from-before"] {
  transform: translateX(-100%);
  transition: none;
}

.main > article[data-status="becoming-active-from-after"] {
  transform: translateX(100%);
  transition: none;
}

.main > article > .article-section {
  height: 100%;
  display: flex;
}

.main > article:first-child > .article-image-section {
  background-image: url("https://images.unsplash.com/photo-1565626424178-c699f6601afd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80");
}

.main > article:nth-child(2) > .article-image-section {
  background-image: url("https://images.unsplash.com/photo-1535905557558-afc4877a26fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80");
}

.main > article:nth-child(3) > .article-image-section {
  background-image: url("https://images.unsplash.com/photo-1660580554695-d2ca5008f1f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80");
}

.main > article:nth-child(4) > .article-image-section {
  background-image: url("https://images.unsplash.com/photo-1660766877755-4cac24f6cf21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80");
}

.main > article > .article-image-section {
  background-position: center;
  background-size: cover;
}

.main > article > .article-description-section {
  flex-direction: column;
  justify-content: flex-end;
  padding: 4rem;
}

.main > article > .article-description-section > p {
  font-size: 1.25em;
}

.main > article > .article-description-section > p > a:hover {
  text-decoration: underline;
}

.main > article > .article-title-section {
  align-items: center;
  justify-content: space-between;
  padding: 2rem 4rem;
}

.main > article > .article-title-section * {
  @apply text-n-1;
}

.main > article > .article-title-section > h2 {
  flex-basis: 50%;
  font-size: 3.5rem;
  line-height: 3rem;
  margin: 0px;
  text-transform: uppercase;
}

.main > article > .article-title-section > i {
  color: rgba(255, 255, 255, 0.75);
  font-size: 4rem;
}

.main > article > .article-nav-section > .article-nav-button {
  background-color: transparent;
  flex-grow: 1;
  border: none;
  outline: none;
  color: rgba(255, 255, 255, 0.75);
  font-size: 3rem;
  cursor: pointer;
}

.main > article > .article-nav-section > .article-nav-button:hover {
  background-color: rgba(255, 255, 255, 0.02);
}

@media (max-width: 1200px) {
  #nav-mobile-section {
    flex-basis: calc(100% * 0.75);
  }

  #nav-logo-section {
    flex-basis: calc(100% * 0.25);
  }

  #nav-link-section {
    flex-basis: calc(100% / 3);
    gap: 3rem;
  }

  .main > article {
    grid-template-columns: none;
    grid-template-rows: 1.5fr repeat(3, 0.75fr) 0.25fr;
    height: max(900px, 100%);
  }

  .main > article > .article-title-section > h2 {
    font-size: 3rem;
    line-height: 2.6rem;
  }

  .main > article > .article-title-section > i {
    font-size: 3rem;
  }

  .main > article > .article-image-section {
    order: 1;
  }

  .main > article > .article-title-section {
    order: 2;
  }

  .main > article > .article-description-section {
    justify-content: center;
    order: 3;
  }

  .main > article > .article-nav-section {
    order: 4;
  }
}

@media (max-width: 800px) {
  nav {
    justify-content: space-between;
  }

  nav[data-toggled="true"] > #nav-mobile-section {
    transform: translateY(0%);
  }

  nav[data-toggled="true"] > #nav-toggle-button {
    border-left: none;
  }

  nav[data-transitionable="true"] > #nav-mobile-section {
    transition: transform 400ms ease;
  }

  nav .nav-section {
    border-left: none;
    padding: 1.5rem 1rem;
  }

  #nav-logo-section > a > i {
    font-size: 1.5rem;
    margin-left: 1rem;
  }

  #nav-mobile-section {
    @apply bg-color-1;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    position: fixed;
    transform: translateY(-100%);
  }

  #nav-toggle-button {
    display: flex;
  }

  #nav-link-section {
    flex-basis: 60%;
    flex-direction: column;
    gap: 4rem;
  }

  #nav-link-section > a {
    font-size: 3rem;
  }

  #nav-social-section > a {
    font-size: 2rem;
  }

  #nav-contact-section {
    padding-bottom: 4rem;
  }

  .main > article {
    grid-template-rows: 1fr repeat(4, 0.5fr);
    height: max(700px, 100%);
  }

  .main > article > .article-title-section {
    padding: 2rem;
  }

  .main > article > .article-title-section > h2 {
    flex-basis: 70%;
    font-size: 1.75em;
    line-height: 1.5rem;
  }

  .main > article > .article-title-section > i {
    font-size: 2rem;
  }

  .main > article > .article-description-section {
    padding: 2rem;
  }

  .main > article > .article-description-section > p {
    font-size: 1rem;
  }
}
</style>
