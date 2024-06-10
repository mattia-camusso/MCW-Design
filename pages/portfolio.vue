<template>
  <div class="front">
    <h2
      class="text-style-bigger text-balance title text-center md:w-2/3 px-4 font-semibold"
    >
      Design del Sito Web Alessia Matti Wedding Planner
    </h2>
  </div>
  <div class="flex flex-col">
    <div
      v-for="(el, i) in photos"
      class="flex flex-col lg:items-top lg:flex-row"
    >
      <div :class="`box${i}`" class="box flex-1 mt-36 mx-4 lg:ml-8 xl:mr-24">
        <h4 class="text-style-1 text-balance font-semibold">
          {{ el.text }}
        </h4>
        <p class="text-style-3 text-pretty lg:text-pretty pt-8">
          {{ el.subtext }}
        </p>
      </div>
      <img
        :src="el.url"
        alt="Sito Web Alessia Matti Wedding Planner Valle d'Aosta"
        class="img lg:w-3/5 max-h-[85vh] self-end mt-12 ml-4 lg:mt-[10vh]"
      />
    </div>
    <div class="mt-8 lg:mt-[2vh]"></div>
  </div>
  <SmallFooter></SmallFooter>
</template>

<script setup>
definePageMeta({
  layout: "main",
});

const photos = [
  {
    text: "Eleganza e Raffinatezza",
    subtext:
      "Il sito web che abbiamo realizzato per la nostra cliente è un perfetto equilibrio tra eleganza e funzionalità. Il design è stato ispirato dalla raffinatezza e dal romanticismo del mondo dei matrimoni. Utilizzando una palette di colori delicati e sofisticati, immagini di alta qualità e una tipografia elegante, abbiamo creato un layout che cattura l'essenza delle celebrazioni di nozze e invita i visitatori a esplorare i servizi offerti.",
    alt: "Alessia Matti Portfolio Image",
    url: "/img/alematti1.png",
  },
  {
    text: "Funzionalità e User Experience",
    subtext:
      "Il sito è stato progettato con una navigazione semplice e chiara. Le sezioni principali sono facilmente accessibili dal menu principale, permettendo ai visitatori di trovare rapidamente le informazioni desiderate. Inoltre, il sito è completamente responsive, assicurando una visualizzazione impeccabile su tutti i dispositivi.",
    alt: "Alessia Matti Portfolio Image",
    url: "/img/alematti2.png",
  },
  {
    text: "Design ed Estetica",
    subtext:
      "Il design del sito è stato sviluppato per riflettere l'eleganza e la magia delle location montane. Utilizzando una palette di colori naturali e sofisticati, immagini ad alta risoluzione di paesaggi mozzafiato e una tipografia elegante, il sito cattura la bellezza serena e maestosa delle nozze in montagna. Ogni elemento visivo è stato scelto per evocare un senso di tranquillità e raffinatezza",
    alt: "Alessia Matti Portfolio Image",
    url: "/img/alematti3.png",
  },
];
</script>

<style scoped>
.front {
  height: 100vh;
  overflow: clip;
  background-size: cover;
  display: grid;
  justify-items: center;
  place-content: center;
  background-image: url("../assets/AleFront.png");

  @supports (animation-timeline: view()) {
    background-position: 50% 100%;
    animation: parallax linear;
    animation-timeline: view();
  }
}

@media screen and (max-width: 1024px) {
  .front {
    height: 100%;
    aspect-ratio: 4/5;
    background-size: 150%;

    @supports (animation-timeline: view()) {
      background-position: 50% 100%;
      animation: parallax linear;
      animation-timeline: view();
    }
  }

  .title {
    font-size: clamp(1.5rem, 4vw, 4rem);
    animation: fade-in 800ms var(--cubic-bezier) forwards;
  }
  .img {
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;

    @supports (animation-timeline: view()) {
      background-position: 50% 70%;
      animation: slide linear forwards;
      animation-timeline: view();
      animation-range-end: entry;
      animation-direction: normal;
    }
  }
}
.img {
  @supports (animation-timeline: view()) {
    background-position: 50% 70%;
    animation: slide linear forwards;
    animation-timeline: view();
    animation-range: entry -100px;
    animation-direction: normal;
  }
}

@keyframes parallax {
  50% {
    background-position: 50% 50%;
  }
  100% {
    background-position: 50% 0%;
  }
}

.title {
  animation: fade-in 800ms var(--cubic-bezier) forwards;
}

@keyframes slide {
  from {
    transform: translateX(60%);
    opacity: 0;
  }
  to {
    opacity: 1;
    transform: translateX(0);
    animation-play-state: paused;
  }
}

@media screen and (min-width: 1025px) {
  .img {
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
  }
  .box {
    @supports (animation-timeline: view()) {
      opacity: 0;
      animation: fade-in linear forwards;
      animation-timeline: view();
      animation-range: entry 250px;
      animation-direction: normal;
    }
  }
}
@keyframes fade-in {
  from {
    transform: translateY(15%);
    opacity: 0;
  }
  to {
    opacity: 1;
    transform: translateY(0%);
  }
}
</style>
