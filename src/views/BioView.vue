<script setup>
import { ref } from "vue";

const windowWidth = ref(window.innerWidth);

const curriculum = [
  {
    period: "From 1999 to 2004",
    title: 'I.T.I.S. "A. Pacinotti", Fondi (LT)',
    details: ["Diploma of computer expert"],
  },
  {
    period: "From 2004 to 2012",
    title: "FORMIAUTO SNC",
    details: [
      "Order sending-receiving",
      "Warehouse stock clerk",
      "Retail sales and billing clerk",
      "Supplier / customer service",
      "Secretary's office",
    ],
  },
  {
    period: "From 2012 to 2019",
    title: "OTHER EXPERIENCES",
    details: [
      "Switchboard operator experience",
      "Data entry experience",
      "Web advertiser / web article editor experience",
    ],
  },
  {
    period: "From 2023 to 2025",
    title: "START2IMPACT UNIVERSITY",
    details: ["Master's degree in Full-Stack Development"],
  },
];
</script>

<template>
  <section class="bg-black text-white pt-12">
    <div class="max-w-6xl mx-auto">
      <!-- Hero section -->
      <div
        class="relative min-h-[240px] md:min-h-[450px] lg:h-screen xl:h-[600px] w-full overflow-hidden"
      >
        <!-- Background image -->
        <img
          src="/src/assets/img/my-pic.png"
          alt="Giorgio Messore picture"
          class="absolute top-0 -left-[61%] md:-left-[56%] lg:-left-[51.9%] h-full w-full object-contain opacity-0 animate-fade-slide-in"
        />

        <!-- Right side black gradient overlay -->
        <div
          class="absolute top-0 left-0 h-full w-1/3  bg-gradient-to-l from-black to-transparent"
        ></div>

        <!-- Text -->
        <h1
          class="absolute w-2/3 top-1/2 left-2/3 transform -translate-x-1/2 -translate-y-1/2 text-2xl md:text-5xl font-semibold text-end lg:text-center md:leading-relaxed pe-20 text-white rounded-lg animate-fade-slide-in"
        >
          Something
          <span class="animated-gradient text-3xl md:text-6xl"><br v-if="windowWidth <= 920">about me</span>.
        </h1>
      </div>
      <!--Bio section-->
      <div class="max-w-none space-y-4 my-10 px-4 md:px-10 md:py-4 xl:p-0">
        <p>
          I will try to briefly tell you my story without boring you too much...
        </p>
        <p>
          I was born in Rome, Italy in 1985 and now I live in Balsorano (AQ).
          Since I was a child I was attracted by technology, I was fascinated by
          automatisms, so in choosing which high school to attend, the most
          obvious decision for me was the technical institute with a
          specialization in computer science. I was thrilled by what I could
          create, by the automatisms and interactions triggered by simple
          inputs.
        </p>
        <p>
          Unfortunately, I already knew that after school, the family business
          awaited me (and it had nothing to do with computers). In order not to
          forget what I had learned, I started practicing on my own with my
          computer, I also developed a small management software for the family
          business for fun, but obviously my project could not replace a
          management software paid thousands of euros and that the staff already
          knew how to use. Seeing that my commitment was not appreciated and not
          knowing where to direct it, I stopped practicing and resigned myself
          to the idea that my future would lie in that company, until about
          eight years later when I decided to take other paths.
        </p>
        <p>
          By now what I had studied was obsolete, and in any case, even looking
          back at the books, I remembered almost nothing. It seemed to me that I
          had "missed the train", and I began to carry out the most disparate
          jobs, but inside of me I knew that I still had the passion and
          predisposition for technology, and that I was wasting time and energy
          on activities jobs that I didn't like and didn't reward me. Even those
          who know me well knew it, so they started encouraging me to go back to
          computer science.
        </p>
        <p>
          In 2023 I finally decided to upgrade with current web development
          technologies, and I chose Start2Impact University for that purpose.
          Today I am determined to put my knowledge at the service of others and
          to do what I like most.
        </p>
      </div>
    </div>
  </section>
  <!--Curriculum section-->
  <section class="pb-10 px-4">
    <h2 class="text-4xl font-bold text-center animated-gradient mb-12">
      Curriculum
    </h2>
    <div class="relative">

      <div
        v-if="windowWidth >= 768"
        class="absolute left-1/2 transform -translate-x-1/2 h-full border-l border-white-500"
      ></div>

      <div class="space-y-12">
        <div
          v-for="(item, index) in curriculum"
          :key="index"
          class="flex flex-col md:flex-row justify-center items-center"
        >

          <div v-if="index % 2 === 0" class="w-full md:w-1/2 md:pe-10">
            <div
              class="max-w-sm text-white bg-indigo-500/5 border border-white/10 rounded-xl p-6 ms-auto shadow-md transition-transform hover:scale-105 duration-300 hover:shadow-blue-500/50"
            >
              <h3 class="font-bold mb-2 text-blue-500">{{ item.period }}</h3>
              <p>{{ item.title }}</p>
              <ul
                v-if="item.details"
                class="list-disc list-inside text-sm mt-1"
              >
                <li v-for="(detail, i) in item.details" :key="i">
                  {{ detail }}
                </li>
              </ul>
            </div>
          </div>

          <div
            v-if="index % 2 === 0 && windowWidth >= 768"
            class="hidden md:flex w-5 h-5 bg-indigo-500 rounded-full me-auto -translate-x-2.5"
          ></div>
          <div
            v-else
            class="hidden md:flex w-5 h-5 bg-indigo-500 rounded-full ms-auto translate-x-2.5"
          ></div>

          <div v-if="index % 2 !== 0" class="w-full md:w-1/2 md:ps-10">
            <div
              class="max-w-sm text-white bg-indigo-500/5 border border-white/10 rounded-xl p-6 me-auto shadow-md transition-transform hover:scale-105 duration-300 hover:shadow-blue-500/50"
            >
              <h3 class="font-bold mb-2 text-blue-500">{{ item.period }}</h3>
              <p>{{ item.title }}</p>
              <ul
                v-if="item.details"
                class="list-disc list-inside text-sm mt-1"
              >
                <li v-for="(detail, i) in item.details" :key="i">
                  {{ detail }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes fade-slide-in {
  0% {
    transform: translateX(0);
  }
  100% {
    opacity: 0.9;
    transform: translateX(2.5rem);
  }
}

.animate-fade-slide-in {
  animation: fade-slide-in 1s ease-out 0.8s forwards;
}
</style>
