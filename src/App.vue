<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import Navbar from "@/components/Navbar.vue";
import { RouterView } from "vue-router";

const backgroundPosition = ref(0);

const handleScroll = () => {
  backgroundPosition.value = window.scrollY * 0.3;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <div
    class="parallax-page text-white relative"
    :style="{ backgroundPosition: `center ${backgroundPosition}px` }"
  >
    <header><Navbar /></header>
    <RouterView />
  </div>
</template>

<style scoped>
.parallax-page {
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: scroll;
  min-height: 100vh;
}
</style>
