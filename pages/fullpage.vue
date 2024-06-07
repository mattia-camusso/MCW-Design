<template>
  <div class="scrollable">
    <div class="scrollable_inner">
      <div class="box box_green">First slide - hover and scroll down</div>
      <div class="box box_blue">Middle slide</div>
      <div class="box box_red">Last slide -scroll up</div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  var scroll_blocked = false;
  var scrollable = document.querySelector(".scrollable");
  var scrollable_inner = document.querySelector(".scrollable_inner");

  scrollable.addEventListener("wheel", function (e) {
    if (!scroll_blocked) {
      console.log("scrolling...", e);
      var delta = e.deltaY || -e.detail || e.wheelDelta;

      if (delta < 0) {
        var new_pos = scrollable.scrollTop + scrollable.clientHeight;
        if (new_pos > scrollable_inner.clientHeight - scrollable.clientHeight)
          return false;
      } else if (delta > 0) {
        var new_pos = scrollable.scrollTop - scrollable.clientHeight;
        if (new_pos < 0) return false;
      }

      // Scroll to new position
      scrollable.scrollTo({
        top: new_pos,
        behavior: "smooth",
      });

      scroll_blocked = true;
      setTimeout(() => {
        scroll_blocked = false;
      }, 1200);
    }

    // Disable all other scroll
    e.preventDefault();
  });
});
</script>

<style scoped>
.scrollable {
  height: 100dvh;
  width: 100vw;
  overflow: hidden;
}

.scrollable_inner {
}

.box {
  height: 100vh;
  width: 100%;
}

.box_green {
  background-color: green;
}

.box_blue {
  background-color: blue;
}

.box_red {
  background-color: red;
}
</style>
