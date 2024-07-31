<template>
  <div class="px-4 lg:px-8 md:pb-[15vh] pb-[10vh]">

    <div class="flex justify-center md:pb-[15vh] pb-[10vh]">
      
      <h2 class="text-style-bigger text-center text-pretty md:w-1/2 font-semibold">
        Inizia con noi il Tuo Viaggio Verso il Futuro
      </h2>
    </div>
    <div class>
      <div class="flex flex-col md:flex-row md:justify-evenly gap-6">
        <di class="flex flex-col md:gap-6 gap-2 md:w-1/4">
          <h3 class="text-style-1 font-bold text-color-5">Web e App</h3>
          <p class="text-style-2 md:font-semibold font-bold">
            Di addio a siti web fatti con lo stampino.
          </p>
          <p class="lg:text-xl md:text-lg text-sm pt-2 md:pt-4 text-pretty leading-relaxed">
          Realizziamo soluzioni su misura per le tue esigenze specifiche con
          un'occhio di riguardo per un design unico e innovativo.
        </p>
      </di justify-betweenv>
      <di class="flex flex-col md:gap-6 gap-2 md:w-1/4">
        <h3 class="text-style-1 font-bold text-color-5">SEO e Positioning</h3>
        <p class="text-style-2 md:font-semibold font-bold">
          Smetti di preoccuparti della visibilità del tuo sito.
        </p>
        <p class="lg:text-xl md:text-lg text-sm pt-2 md:pt-4 text-pretty leading-relaxed">
          Affidati alla nostra esperienza nel posizionarti in cima ai risultati
          dei principali motori di ricerca.
        </p>
      </di justify-betweenv>
      <div class="flex flex-col md:gap-6 gap-2 md:w-1/4">
        <h3 class="text-style-1 font-bold text-color-5">
          Branding e Logo Design
        </h3>
        <p class="text-style-2 md:font-semibold font-bold">
          Un'identità visiva forte è essenziale per il successo.
        </p>
        <p class="lg:text-xl md:text-lg text-sm pt-2 md:pt-4 text-pretty leading-relaxed">
          Mettiamo il tuo brand al centro di tutto. Creiamo un'identità visiva
          memorabile per distinguerti dalla concorrenza.
        </p>
      </div>
    </div>
  </div>
</div>
<!-- <div>PLAN</div>
<div>PROOF</div> -->
  <!--  <div class="fullpage-container overflow-x-clip">
    <div class="fullpage section">
      <div class="overlay">
        <p class="hide0 fit lg:w-[60vw] text-pretty text-style-big">
          Inizia tutto con un'idea...
        </p>
        <p
        class="text-style-3 lg:w-[33vw] text-pretty backdrop-blur-md p-4 rounded-xl"
        >
          Partiamo dalla tua visione per progettare siti web e app su misura per
          le tue esigenze specifiche
        </p>
      </div>
    </div>
    <div class="fullpage section">
      <div class="overlay place-items-center">
        <p class="hide1 text-center text-pretty text-style-big">
          La necessità di dare
          <span class="text0">vita</span> a qualcosa di nuovo
        </p>
        <div>
          <p
            class="text-style-3 text-balance backdrop-blur-md max-w-[75vw] p-4 rounded-xl"
          >
            Lavoriamo con le tecnologie più moderne per realizzare prodotti
            sempre al passo coi tempi
          </p>
        </div>
      </div>
    </div>
    <div class="fullpage section">
      <div class="overlay place-items-center">
        <p class="hide2 text-pretty text-style-big">
          per raccontare
          <span class="stretch text-pretty text-style-big"></span>
          la tua Storia
        </p>
        <p
          class="text-style-3 text-center backdrop-blur-md max-w-[75vw] p-4 rounded-xl"
        >
          Il nostro focus è trasformare la tua visione in realtà
        </p>
      </div>
    </div>
  </div> -->
</template>

<script setup>
/* onMounted(() => {
  let options = {
    rootMargin: "0px",
    threshold: 0.5,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.classList[0] === "hide0") {
          entry.target.classList.add("show0");
        }

        if (entry.target.classList[0] === "hide1") {
          entry.target.classList.add("show1");
          entry.target.firstElementChild.classList.add("text-animation0");
        }

        if (entry.target.classList[0] === "hide2") {
          entry.target.classList.add("show2");
          entry.target.firstElementChild.classList.add("stretch-animation");
        }

        if (entry.target.classList[0] === "hide3") {
          entry.target.classList.add("show3");
          entry.target.firstElementChild.classList.add("text-animation1");
        }

        if (entry.target.classList[0] === "hide4") {
          entry.target.classList.add("show4");
        }
      }
    });
  }, options);
  const hiddenElements = [];
  hiddenElements.push(document.querySelector(".hide0"));
  hiddenElements.push(document.querySelector(".hide1"));
  hiddenElements.push(document.querySelector(".hide2"));
  hiddenElements.push(document.querySelector(".hide3"));
  hiddenElements.push(document.querySelector(".hide4"));
  hiddenElements.forEach((element) => observer.observe(element));
}); */
</script>

<style scoped>
.fullpage {
  height: 100vh;
  width: 100vw;
  background-size: cover;
  overflow: clip;

  background-position: center;

  @supports (animation-timeline: view()) {
    background-position: 50% 80%;
    animation: parallax linear;
    animation-timeline: view();
  }
}

@keyframes parallax {
  50% {
    background-position: 50% 50%;
  }
  100% {
    background-position: 50% 20%;
  }
}

.overlay {
  display: grid;
  padding: clamp(0.5rem, 2vw, 3rem);
  position: relative; /* Sit on top of the page content */
  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  background-color: rgba(0, 0, 0, 0.5); /* Black background with opacity */
  z-index: 20; /* Specify a stack order in case you're using a different order for other elements */
  cursor: pointer; /* Add a pointer on hover */
}
.overlay > * {
  line-height: normal;
}

.fit {
  height: fit-content;
  margin-top: 15vh;
}

.hide0 {
  opacity: 0;
  filter: blur(5px);
  transform: translateY(60%);
  transition: all 800ms var(--cubic-bezier);
}

.hide1 {
  opacity: 0;
  filter: blur(5px);
  transform: translateY(60%);
  transition: all 800ms var(--cubic-bezier);
}

.hide2 {
  opacity: 0;
  filter: blur(5px);
  transform: translateX(-30%);
  transition: all 800ms var(--cubic-bezier);
}

@media screen and (max-width: 1024px) {
  .hide2 {
    text-align: center;
  }
}
.hide3 {
  opacity: 0;
  filter: blur(5px);
  transform: translateX(30%);
  transition: all 800ms var(--cubic-bezier);
}

.hide4 {
  opacity: 0;
  filter: blur(5px);
  letter-spacing: clamp(2rem, 4vw, 4rem);
  transition: all 1000ms var(--cubic-bezier);
}

.show0 {
  opacity: 1;
  filter: blur(0);
  transform: translateY(0);
}

.show1 {
  opacity: 1;
  filter: blur(0);
  transform: translateY(0%);
}

.show2 {
  opacity: 1;
  filter: blur(0);
  transform: translateX(0%);
}

.show3 {
  opacity: 1;
  filter: blur(0);
  transform: translateX(0%);
}

.show4 {
  opacity: 1;
  letter-spacing: normal;
  filter: blur(0);
}
.stretch-animation {
  margin: 0 clamp(1rem, 5vw, 5rem);
}
@media screen and (max-width: 1024px) {
  .stretch-animation {
    margin: 0;
  }
}
.stretch {
  transition: all 800ms var(--cubic-bezier);
  transition-delay: 800ms;
}
.text0 {
  font-weight: 500;
  font-size: clamp(2rem, 6vw, 6rem);
  opacity: 1;
  filter: blur(5px);
  transition: all 800ms var(--cubic-bezier);
  transition-delay: 400ms;
}
.text1 {
  letter-spacing: 0.3rem;
  font-size: clamp(1rem, 3.5vw, 3.5rem);
  transition: all 800ms var(--cubic-bezier);
  transition-delay: 800ms;
}

.text-animation0 {
  filter: blur(0);
  @apply text-color-5;
  opacity: 1;
}

.text-animation1 {
  font-weight: 700;
  font-size: clamp(3rem, 7.5vw, 7.5rem);
  padding: 0;
}

.fullpage:nth-child(1) {
  background-image: url("../../assets/landing/story1.jpg");
  background-size: cover;
}
.fullpage:nth-child(2) {
  background-image: url("../../assets/landing/story2.jpg");
  background-size: cover;
}
.fullpage:nth-child(3) {
  background-image: url("../../assets/landing/story3.jpg");
  background-size: cover;
}
.fullpage:nth-child(4) {
  background-image: url("../../assets/landing/story4.jpg");
  background-size: cover;
  place-items: center;
}
.fullpage:nth-child(5) {
  background-image: url("../../assets/landing/story5.jpg");
  background-size: cover;
}
</style>
