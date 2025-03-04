<script lang="ts" setup>
import Link from "../components/Link.vue";
import { onMounted, onUnmounted, type Ref, ref } from "vue";
import { useIntersectionObserver } from "@vueuse/core";

const cleanStreet: Ref<HTMLElement | null> = ref(null);
const isCleanStreet = ref(false);
const imageSrc = ref("");

useIntersectionObserver(cleanStreet, ([entry]) => {
  if (entry.isIntersecting) {
    isCleanStreet.value = true;
    imageSrc.value = displayImages[currentIndex.value];
  }
});

const displayText = [
  "Learn A Tech Skill",
  "Go Solar",
  "Subscribe Easily",
  "Go Digital",
  "App",
  "Website",
];
const displayImages = [
  "/images/academy.png",
  "/images/solar.png",
  "/images/subcribe.png",
  "/images/go-digital.png",
  "/images/app.png",
  "/images/website.png",
];
const currentIndex = ref(0);
let interval: number | undefined;

const cycleContent = () => {
  currentIndex.value = (currentIndex.value + 1) % displayText.length;
  if (isCleanStreet.value) {
    imageSrc.value = displayImages[currentIndex.value];
  }
};

onMounted(() => {
  interval = window.setInterval(cycleContent, 5000);
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>

<template>
  <section
    id="home"
    class="py-20 bg-[url('/images/HeroBg.png')] bg-cover bg-center"
  >
    <div class="container mx-auto px-4">
      <div class="">
        <div
          class="md:w-full mb-10 md:mb-0 text-white text-center flex flex-col justify-center items-center"
        >
          <h1 class="text-4xl lg:text-6xl font-bold mb-6 font-PtSansCaption">
            Innovative IT Solutions for <br />
            Your Business
          </h1>
          <p class="mb-8 font-Poppins font-medium md:text-2xl lg:text-4xl">
            Turning Ideas Into Solutions
          </p>
          <button
            class="bg-[#FFA500] text-white px-8 py-3 rounded-full transition font-bold"
          >
            <Link class="font-Poppins" to="#services">
              Explore Our Services
            </Link>
          </button>
        </div>

        <!-- heroImage -->
        <section
          class="flex flex-col md:flex-row justify-between items-center mt-12"
        >
          <div
            class="text-container overflow-hidden h-48 w-48 md:h-64 md:w-64 bg-white rounded-full mb-4"
          >
            <transition mode="out-in" name="slide-vertical">
              <h1
                :key="currentIndex"
                class="flex items-center text-center justify-center pt-20 text-2xl md:text-5xl font-bold font-Poppins text-[#057CC3]"
              >
                {{ displayText[currentIndex] }}
              </h1>
            </transition>
          </div>
          <div class="overflow-hidden">
            <transition mode="out-in" name="slide-vertical">
              <img
                ref="cleanStreet"
                :key="currentIndex"
                :src="displayImages[currentIndex]"
                alt="Hero Image"
                class="md:h-[328px] md:w-[558px] object-cover"
              />
            </transition>
          </div>
        </section>
        <!-- heroImage -->
      </div>
    </div>
  </section>
</template>

<style scoped>
.slide-vertical-enter-active,
.slide-vertical-leave-active {
  transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
}

.slide-vertical-enter-from {
  transform: translateY(100%);
  opacity: 0;
}

.slide-vertical-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
</style>
