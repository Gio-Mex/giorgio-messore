<script setup>
import { reactive, ref } from "vue";
import { Icon } from "@iconify/vue";
import bgImage from "@/assets/img/bg-abstract.png";
import socials from "@/assets/contents/contactsContent.js";

const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

const form = reactive({
  name: "",
  email: "",
  message: "",
});

const acceptedPrivacy = ref(false);
const isLoading = ref(false);
const status = ref(null);

const handleSubmit = async () => {
  if (!acceptedPrivacy.value) return;

  isLoading.value = true;
  status.value = null;

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      status.value = "success";
      form.name = form.email = form.message = "";
      acceptedPrivacy.value = false;
    } else {
      throw new Error();
    }
  } catch (error) {
    status.value = "error";
  } finally {
    isLoading.value = false;
  }
};
</script>
<template>
  <div
    class="fixed top-0 left-0 h-screen w-full bg-cover bg-no-repeat bg-center -z-20"
    :style="{ backgroundImage: `url(${bgImage})` }"
  ></div>
  <div class="mt-4 mb-6 pt-20">
    <h2 class="text-4xl font-semibold text-center">
      Get <span class="animated-gradient">in touch</span>.
    </h2>
  </div>

  <div
    class="max-w-xl mt-4 mx-2 p-6 flex justify-self-center rounded-lg shadow-lg shadow-blue-500 border border-indigo-300 backdrop-blur-md"
  >
    <form @submit.prevent="handleSubmit" class="space-y-5">
      <input
        type="text"
        v-model="form.name"
        required
        placeholder="Your Name"
        class="w-full p-2 border border-indigo-300 rounded"
      />

      <input
        type="email"
        v-model="form.email"
        required
        placeholder="Your Email"
        class="w-full p-2 border border-indigo-300 rounded"
      />

      <textarea
        v-model="form.message"
        required
        placeholder="Your Message"
        class="w-full p-2 border border-indigo-300 rounded h-32"
      ></textarea>

      <div class="flex items-start justify-center gap-2 text-sm">
        <input
          type="checkbox"
          v-model="acceptedPrivacy"
          id="privacy"
          required
          class="mt-1"
        />
        <label for="privacy">
          I have read and accept the
          <span
            href="/privacy-policy"
            target="_blank"
            class="text-indigo-500 underline hover:text-blue-600 cursor-pointer"
            @click="$router.push('/privacy-policy')"
          >
            Privacy Policy</span
          >.
        </label>
      </div>

      <button
        type="submit"
        :disabled="isLoading || !acceptedPrivacy"
        class="flex bg-blue-600 text-white text-sm px-4 py-2 mx-auto rounded hover:scale-105 shadow-md hover:shadow-blue-500/50 focus:scale-100 focus:shadow-none transition duration-300 disabled:opacity-50"
      >
        {{ isLoading ? "Sending..." : "Send Message" }}
      </button>

      <p v-if="status === 'success'" class="text-green-500 text-center">
        Message sent successfully!
      </p>
      <p v-if="status === 'error'" class="text-red-600 text-center">
        Oops! Something went wrong.
      </p>
      <p class="text-xs text-gray-500 text-center mt-2">
        Your data will not be stored. It will only be used to reply to your
        message, in accordance with the Privacy Policy.
      </p>
    </form>
  </div>

  <section class="flex justify-center">
    <div class="max-w-xl mt-12 mb-6 mx-2 flex space-x-12">
      <a
        v-for="social in socials"
        :key="social.name"
        :href="social.link"
        target="_blank"
      >
        <Icon
          :icon="social.icon"
          width="40"
          height="40"
          class="text-blue-500 hover:scale-110 transition hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.7)]"
        />
      </a>
    </div>
  </section>
</template>
