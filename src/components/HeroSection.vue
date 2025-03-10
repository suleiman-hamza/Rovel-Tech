<script lang="ts" setup>
import Link from "../components/Link.vue";
import {onMounted, onUnmounted, type Ref, ref} from "vue";
import {useIntersectionObserver} from "@vueuse/core";
import HeroImage from "./HeroImage.vue";

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
    class="py-20 bg-[url('/images/HeroBg.png')] bg-cover bg-center "
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
        
<!--        heroimage-->
        <HeroImage/>
<!--        heroimage-->

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
.before-circle::before{
  content: "";
  position: absolute;
  width: 200px;
  height: 200px;
  background: #FFA500;
  border-radius: 50%;
  top: 0;
  left: 0;
}

.After-circle::after{
  content: "";
  position: absolute;
  width: 150px;
  height: 150px;
  background: #FFFFFF;
  border-radius: 50%;
inset: 1.5rem 1.5rem;
}

.white-cover {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(55, 275, 222, 0.8);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.circle {
  width: 50px;
  height: 50px;
  background: #FFFFFF;
  border-radius: 50%;
  margin: 10px;
}

.circle-1 {
  position: absolute;
  top: 20%;
  left: 20%;
}

.circle-2 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.circle-3 {
  position: absolute;
  top: 20%;
  right: 20%;
}


</style>
