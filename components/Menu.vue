<template>
  <div id="menu" :class="store.menuToggle ? 'w-full' : 'w-0'">
    <div id="menu-items" ref="menuItems">
      <div
        class="menu-item text-style-bigger"
        :class="store.menuToggle ? '' : 'translate-x-[-60rem]'"
      >
        <a href="/">Home</a>
      </div>
      <div
        class="menu-item text-style-bigger"
        :class="store.menuToggle ? '' : 'translate-x-[-60rem]'"
      >
        <a href="/services">Servizi</a>
      </div>
      <div
        class="menu-item text-style-bigger"
        :class="store.menuToggle ? '' : 'translate-x-[-60rem]'"
      >
        <a href="/portfolio">Progetti</a>
      </div>
      <div
        class="menu-item text-style-bigger"
        :class="store.menuToggle ? '' : 'translate-x-[-60rem]'"
      >
        <a href="/about">About</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useMainStore } from "../stores/myStore";

const store = useMainStore();
</script>

<style lang="scss" scoped>
#menu {
  height: 100vh;
  position: fixed;
  z-index: 40;
  top: 0;
  left: 0;

  margin: 0;
  @apply bg-n-8;
  display: flex;
  align-items: center;
  overflow: clip;
  transition: all 1000ms var(--cubic-bezier);
  transform-origin: left;
}

#menu-items {
  margin-top: 6rem;
  margin-left: clamp(4rem, 20vw, 48rem);
  z-index: 2;
}

#menu-items .menu-item:nth-child(1) {
  transition-delay: 100ms;
}
#menu-items .menu-item:nth-child(2) {
  transition-delay: 150ms;
}
#menu-items .menu-item:nth-child(3) {
  transition-delay: 200ms;
}
#menu-items .menu-item:nth-child(4) {
  transition-delay: 250ms;
}

.menu-item {
  cursor: pointer;
  @apply text-n-1;
  width: fit-content;
  display: block;
  text-decoration: none;
  transition: translate 400ms var(--cubic-bezier);
}

.menu-item::after {
  content: "";
  display: block;
  width: 0%;
  height: clamp(0.2rem, 0.5vh, 0.5rem);
  @apply bg-n-1;
  margin-top: 0.6rem;
  margin-bottom: clamp(1rem, 3vh, 3rem);
}

#menu-items:hover > .menu-item {
  opacity: 0.3;
}

#menu-items:not(:hover) > .menu-item::after {
  width: 0%;
  transition: width 800ms var(--cubic-bezier);
}

.menu-item:not(:hover) {
  transition: all 800ms ease;
}

#menu-items:hover > .menu-item:hover {
  opacity: 1;
  translate: 2rem;
  transition: all 800ms ease;
}

#menu-items:hover > .menu-item:hover::after {
  width: 100%;
  transition: width 800ms var(--cubic-bezier);
}

#menu-items:hover > .menu-item:not(:hover)::after {
  width: 0%;
  transition: width 800ms var(--cubic-bezier);
}
</style>
