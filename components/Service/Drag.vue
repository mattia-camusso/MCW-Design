<template>
  <div class="content">
    <div
      class="absolute top-[12vh] right-[1rem] md:right-[2rem] font-medium helper"
    >
      <svg
        width="52"
        height="20"
        viewBox="0 0 72 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="5" y="13" width="62" height="4" fill="#d5dad5" />
        <rect
          x="0.707153"
          y="14.1426"
          width="20"
          height="4"
          transform="rotate(-45 0.707153 14.1426)"
          fill="#d5dad5"
        />
        <rect
          x="2.82837"
          y="12.0205"
          width="21"
          height="4"
          transform="rotate(45 2.82837 12.0205)"
          fill="#d5dad5"
        />
        <rect
          width="20"
          height="4"
          transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 70.9913 14.1426)"
          fill="#d5dad5"
        />
        <rect
          width="21"
          height="4"
          transform="matrix(-0.707107 0.707107 0.707107 0.707107 68.8701 12.0205)"
          fill="#d5dad5"
        />
      </svg>
      <span class="select-none font-semibold"> Trascina per Esplorare </span>
    </div>
    <div id="image-track" data-mouse-down-at="0" data-prev-percentage="0">
      <div v-for="service in services" class="img-container contento">
        <img class="image" :src="service.url" draggable="false" />
        <div class="content-overlay"></div>
        <div class="content-details fadeIn-right">
          <h3 class="text-style-1 font-medium mb-8">{{ service.title }}</h3>
          <p class="text-style-2 text-pretty mb-8">{{ service.subtitle }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { services } from "../../constants";

onMounted(() => {
  document.querySelector(".helper").classList.add("helper-animate");

  var scrollable = document.querySelector(".content");
  const scrollLock = false;

  scrollable.addEventListener("wheel", function (e) {
    if (!scrollLock) {
      var delta = e.deltaY / 2;
      const maxDelta = window.innerWidth / 2;

      const percentage = (delta / maxDelta) * -100,
        nextPercentageUnconstrained =
          parseFloat(track.dataset.prevPercentage) + percentage,
        nextPercentage = Math.max(
          Math.min(nextPercentageUnconstrained, 0),
          -100
        );

      track.dataset.percentage = nextPercentage;

      track.animate(
        {
          transform: `translate(${nextPercentage}%, -50%)`,
        },
        { duration: 1200, fill: "forwards" }
      );

      for (const image of track.getElementsByClassName("image")) {
        image.animate(
          {
            objectPosition: `${100 + nextPercentage}% center`,
          },
          { duration: 1200, fill: "forwards" }
        );
        track.dataset.mouseDownAt = "0";
        track.dataset.prevPercentage = track.dataset.percentage;
      }

      scrollLock = true;
      setTimeout(() => {
        scrollLock = false;
      }, 600);
    }
    e.preventDefault();
  });

  const track = document.getElementById("image-track");

  const handleOnDown = (e) => (track.dataset.mouseDownAt = e.clientX);

  const handleOnUp = () => {
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage;
  };

  const handleOnMove = (e) => {
    if (track.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
      maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100,
      nextPercentageUnconstrained =
        parseFloat(track.dataset.prevPercentage) + percentage,
      nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

    track.dataset.percentage = nextPercentage;

    track.animate(
      {
        transform: `translate(${nextPercentage}%, -50%)`,
      },
      { duration: 1200, fill: "forwards" }
    );

    for (const image of track.getElementsByClassName("image")) {
      image.animate(
        {
          objectPosition: `${100 + nextPercentage}% center`,
        },
        { duration: 1200, fill: "forwards" }
      );
    }
  };

  window.onmousedown = (e) => handleOnDown(e);

  window.ontouchstart = (e) => handleOnDown(e.touches[0]);

  window.onmouseup = (e) => handleOnUp(e);

  window.ontouchend = (e) => handleOnUp(e.touches[0]);

  window.onmousemove = (e) => handleOnMove(e);

  window.ontouchmove = (e) => handleOnMove(e.touches[0]);
});
</script>

<style scoped>
.content {
  height: 100%;
  width: 100vw;
}

#image-track {
  display: flex;
  gap: 4vmin;
  position: absolute;
  left: 40%;
  top: 55%;
  transform: translate(0%, -50%);
  user-select: none;
}

.img-container {
  width: 30vw;
}

.image {
  width: 100%;
  height: 70vmin;
  object-fit: cover;
  object-position: 100% center;
}

.helper {
  font-size: 1.3rem;
  transform: translateX(130%);
  filter: blur(5px);
  transition: all 800ms var(--cubic-bezier);
  transition-delay: 400ms;
  display: flex;
  align-items: center;
  width: 17rem;
  justify-content: space-between;
}

.helper-animate {
  transform: translateX(0%);
  filter: blur(0);
}

.text-animate {
  font-weight: 500;
  font-size: clamp(2rem, 3vw, 3rem);
  line-height: normal;
}

.contento {
  position: relative;
  margin: auto;
  overflow: hidden;
}

.contento .content-overlay {
  background: rgba(0, 0, 0, 0.7);
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
  -webkit-transition: all 0.6s var(--cubic-bezier) 0s;
  -moz-transition: all 0.6s var(--cubic-bezier) 0s;
  transition: all 0.6s var(--cubic-bezier) 0s;
}

.contento:hover .content-overlay {
  opacity: 1;
}

.content-details {
  position: absolute;
  text-align: center;
  padding-left: 1em;
  padding-right: 1em;
  width: 100%;
  top: 50%;
  left: 50%;
  opacity: 0;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  -webkit-transition: all 0.4s ease-in-out 0s;
  -moz-transition: all 0.4s ease-in-out 0s;
  transition: all 0.4s ease-in-out 0s;
}

.contento:hover .content-details {
  top: 50%;
  left: 50%;
  opacity: 1;
}

.fadeIn-right {
  left: 80%;
}
</style>
