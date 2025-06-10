<script setup>
import { ref, onMounted } from "vue";
import { Icon } from "@iconify/vue";
import CanvasParticles from "@/components/CanvasParticles.vue";
import bgImage from "@/assets/img/bg-abstract.png";
import content from "@/assets/contents/homeContent.js";

const windowWidth = ref(window.innerWidth);
const softSkills = content.softSkills;
const hardSkills = content.hardSkills;
const titleVisible = ref(false);

onMounted(() => {
  setTimeout(() => {
    titleVisible.value = true;
  }, 100);
});
</script>

<template>
  <CanvasParticles />
  <div
    class="fixed top-0 left-0 h-screen w-full bg-cover bg-no-repeat bg-center -z-20"
    :style="{ backgroundImage: `url(${bgImage})` }"
  ></div>

  <!-- Hero Section -->
  <section class="relative flex h-screen mt-15 md:mt-40 lg:mt-20">
    <h1
      :class="[
        'absolute top-1/2 md:relative md:top-1/4 text-4xl md:text-6xl xl:text-7xl leading-normal font-semibold px-9 lg:text-end ms-auto transition-opacity duration-1000 ease-in-out z-10',
        titleVisible ? 'opacity-100' : 'opacity-0',
      ]"
    >
      Hi 👋 <br v-if="windowWidth <= 920" />
      I'm Giorgio. <br />Your
      <span
        class="animated-gradient bg-clip-text text-transparent text-6xl xl:text-8xl"
      >
        web developer</span
      >.
    </h1>
    <div class="relative h-[300px] md:h-[600px] lg:h-[400px] xl:h-[700px] w-2/3 md:w-full lg:w-1/3 mt-10 ms-auto rounded-es-full rounded-s-full shadow-md overflow-hidden hover:scale-105 hover:shadow-blue-500/50 transition-transform duration-500">
      <div
        class="absolute inset-0 bg-blue-800 opacity-10 z-50"
      ></div>
      <img
        class="absolute top-5 left-2 lg:left-0 h-[300px] md:h-[600px] lg:h-[400px] xl:h-[700px] object-cover z-10"
        src="/src/assets/img/my-pic.png"
        alt="developer"
      />
    </div>
  </section>

  <!-- Soft Skills -->
  <section
    class="flex justify-center items-center pb-16 bg-transparent text-white"
  >
    <div class="max-w-6xl text-center px-4">
      <h2
        class="text-4xl font-semibold mb-2 animated-gradient bg-clip-text text-transparent"
      >
        My soft skills
      </h2>
      <p class="mb-12 text-white/80">
        These are the values that define how I approach development and
        collaboration.
      </p>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="skill in softSkills"
          :key="skill.title"
          class="flex flex-col items-start backdrop-blur-sm bg-indigo-500/5 border border-white/10 rounded-xl p-6 shadow-md transition-transform hover:scale-105 duration-300 hover:shadow-blue-500/50"
        >
          <h3
            class="text-indigo-400 text-lg font-semibold mb-2 flex items-center mx-auto"
          >
            {{ skill.icon }} {{ skill.title }}
          </h3>
          <p class="text-sm text-white/90">{{ skill.description }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Hard Skills -->
  <section class="pt-16 pb-24 text-white backdrop-blur-xs">
    <div class="max-w-5xl mx-auto px-4 text-center">
      <h2
        class="text-4xl font-semibold mb-4 animated-gradient bg-clip-text text-transparent"
      >
        My hard skills
      </h2>
      <p class="mb-10">
        Languages and frameworks I use to build fast, responsive and modern web
        apps.
      </p>
      <div class="grid grid-cols-2 md:grid-cols-5 gap-8">
        <div
          v-for="skill in hardSkills"
          :key="skill.name"
          class="flex flex-col items-center hover:scale-105 transition-transform"
        >
          <Icon
            :icon="skill.icon"
            width="40"
            height="40"
            class="text-white/90 hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.7)]"
          />
          <span class="mt-2 text-sm font-medium">{{ skill.name }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
* {
  cursor: default;
}
</style>
