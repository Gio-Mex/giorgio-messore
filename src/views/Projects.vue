<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import CanvasParticles from "../components/CanvasParticles.vue";
import { Icon } from "@iconify/vue";
import pcImage from "../assets/img/pc.webp";
import projectsContent from "../assets/contents/projectsContent.js";

const projects = projectsContent.projects;
const activeThumbnail = ref(projects[0].thumbnail);
const cardRefs = [];
const windowWidth = ref(window.innerWidth);

// IntersectionObserver for cards
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const idx = cardRefs.indexOf(entry.target);
      if (idx === -1) return;
      if (entry.isIntersecting) {
        entry.target.classList.add("opacity-100");
        if (windowWidth.value >= 1024) {
          activeThumbnail.value = projects[idx].thumbnail;
        }
      } else {
        entry.target.classList.remove("opacity-100");
      }
    });
  },
  { threshold: 0.5 } // 50% visible
);

onMounted(() => {
  cardRefs.forEach((card) => {
    if (card) observer.observe(card);
  });

  window.addEventListener("resize", () => {
    windowWidth.value = window.innerWidth;
  });
});

onBeforeUnmount(() => {
  cardRefs.forEach((card) => {
    if (card) observer.unobserve(card);
  });
});
</script>

<template>
  <CanvasParticles />
  <!-- Hero section -->
  <section class="h-screen flex items-center justify-center">
    <h1
      class="text-5xl xl:text-7xl font-semibold p-8 text-end transition-opacity duration-1000 ease-in-out z-10"
    >
      Some of my
      <span
        class="animated-gradient bg-clip-text text-transparent text-6xl xl:text-8xl"
      >
        projects </span
      >.
    </h1>
  </section>

  <section class="relative min-h-screen text-white">
    <div class="flex flex-row min-h-screen justify-center">
      <!-- Left column: project cards -->
      <div class="lg:w-1/2 md:px-20 lg:px-3 my-10 flex flex-col items-center">
        <div
          v-for="(project, index) in projects"
          :key="index"
          :ref="(el) => (cardRefs[index] = el)"
          class="h-screen flex items-center mb-28 opacity-0 transition-opacity duration-700 fade-card"
        >
          <div
            class="relative max-w-3xl bg-blue-500/5 border border-white/10 rounded-xl p-7 md:px-12 md:py-10 mx-2 lg:mb-0 shadow-md backdrop-blur-sm"
          >
            <span class="absolute flex top-4 right-3 p-2">
              <Icon
                v-for="(bedge, i) in project.bedges"
                :key="i"
                :icon="project.bedges[i]"
                width="38"
                height="38"
                class="bg-black rounded-full border-s border-indigo-400 py-2 mr-1"
              />
            </span>

            <h3
              class="animated-gradient text-2xl font-semibold mb-3"
              :class="windowWidth < 768 ? 'w-3/4 overflow-hidden' : ''"
            >
              {{ project.title }}
            </h3>

            <img
              v-if="windowWidth < 1024"
              :src="project.thumbnail"
              alt="Project thumbnail"
              class="mb-3"
              loading="eager"
            />

            <p class="whitespace-pre-line mb-6">{{ project.description }}</p>

            <p class="text-blue-500 font-bold mb-2">Project features:</p>
            <ul class="list-disc list-inside text-indigo-200 text-sm space-y-3">
              <li v-for="(req, i) in project.features" :key="i">
                {{ req }}
              </li>
            </ul>

            <div class="flex flex-col md:flex-row gap-5 md:gap-8 mt-8">
              <div
                v-if="project.siteLink"
                class="btn text-black bg-indigo-500 shadow-md hover:shadow-indigo-500/50 active:shadow-none transition-all duration-300"
                @click="openLink(project.siteLink)"
              >
                Website
              </div>
              <div
                v-if="project.repoLink"
                class="btn text-indigo-500 border-1 border-indigo-500 shadow-md hover:shadow-indigo-500/50 active:shadow-none transition-all duration-300"
                @click="openLink(project.repoLink)"
              >
                GitHub Repo
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Right column: PC preview (sticky on desktop) -->
      <div
        v-if="windowWidth >= 1024"
        class="w-1/2 h-screen sticky top-0 flex items-center justify-center px-3"
      >
        <div class="relative w-[500px] h-[400px] xl:scale-150 rounded-lg">
          <!-- PC frame -->
          <img
            :src="pcImage"
            class="w-full h-full object-cover rounded-xl"
            alt="PC frame"
            loading="eager"
          />

          <!-- Thumbnail inside frame -->
          <div
            class="absolute top-[10%] left-[12.5%] w-[73.8%] h-[58%] overflow-hidden rounded-t"
          >
            <transition name="fade-slide" mode="out-in">
              <img
                :key="activeThumbnail"
                :src="activeThumbnail"
                class="w-full h-full object-cover"
                alt="Project thumbnail"
              />
            </transition>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.fade-card {
  transition: opacity 0.6s ease-in-out;
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.5s ease-in-out;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
}

/* Optimize animations on GPU */
.relative > img,
.relative > div > img {
  will-change: opacity, transform;
  backface-visibility: hidden;
}

.btn {
  width: 100%;
  text-align: center;
  font-size: small;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;
}

.btn:hover {
  scale: 1.05;
}

.btn:active {
  scale: 1;
}
</style>
