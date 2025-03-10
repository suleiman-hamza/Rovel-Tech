<script lang="ts" setup>
import {onMounted, onUnmounted, type Ref, ref} from "vue";
import {useIntersectionObserver} from "@vueuse/core";

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
  "App Development",
  "Web Development",
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
  <section class="flex justify-evenly items-center h-full gap-10 mt-20">
    <div class="wrapper">
      <div class="app-circle">
        <transition mode="out-in" name="slide-vertical">
          <span :key="currentIndex" class="">
            {{ displayText[currentIndex] }}
          </span>
        </transition>
      </div>

      <!--  Curved Progress Arc-->
      <div class="progress-arc">
        <div class="arc-line"></div>
        <div class="circle small"></div>
        <div class="circle small"></div>
        <div class="circle small"></div>
        <div class="circle small"></div>
      </div>

      <!--  side label-->
      <div class="label-box">
        <div class="w-10 h-[0.1rem] bg-white absolute -left-10"></div>
        <div class="icon">📱💻</div>
        <span>DESIGN AND DEVELOPMENT</span>
      </div>

      <!-- Pagination Dots -->
      <div class="pagination">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot active"></span>
      </div>
    </div>

    <div class="overflow-hidden">
      <transition mode="out-in" name="slide-vertical">
        <img
          :key="currentIndex"
          ref="cleanStreet"
          :src="displayImages[currentIndex]"
          alt="Hero Image"
          class="md:h-[328px] md:w-[558px] object-cover"
        />
      </transition>
    </div>
  </section>
 

</template>

<style scoped>
.slide-vertical-enter-active,
.slide-vertical-leave-active {
  transition:
    transform 0.5s ease-in-out,
    opacity 0.5s ease-in-out;
}

.slide-vertical-enter-from {
  transform: translateY(100%);
  opacity: 0;
}

.slide-vertical-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
.wrapper {
  position: relative;
  width: 400px;
  height: 400px;
}

.app-circle {
  @apply w-40 h-40 bg-white rounded-full flex justify-center items-center text-center flex-col text-2xl font-bold text-[#0a4877] absolute left-5 top-24 p-2;
}

/* Curved Progress Arc */
.progress-arc {
 @apply absolute left-0 top-20 w-52 h-52 border-4 border-transparent border-l-white border-t-white rounded-full transform rotate-[135deg]
}

/* Small Circles on the Arc */
.circle {
 @apply w-4 h-4 bg-white rounded-full absolute
}

/* Positioning Small Circles */
/*
*/
.circle:nth-child(2) {
  left: 49px;
  top: 0px;
}
.circle:nth-child(3) {
  left: 0px;
  top: 46px;
}
.circle:nth-child(4) {
  left: -8px;
  top: 100px;
}
.circle:nth-child(5) {
  left: 130px;
  top: 0px;
}

@keyframes label-box-animation {
  0% {
    right: -80px;
    top: 75px;
    transition: all 1s;
  }
  25% {
    right: -110px;
    top: 120px;
    transition: all 1s;
  }
  50% {
    right: -107px;
    top: 188px;
    transition: all 1s;
  }
  75% {
    right: -51px;
    top: 244px;
    transition: all 1s;
  }
  100% {
    right: -80px;
    top: 75px;
  }
}

/* Side Label */
.label-box {
 @apply flex items-center bg-white p-2.5 rounded-2xl absolute right-[-80px] top-[75px] animate-[label-box-animation_20000ms_infinite]
}

.label-box .icon {
  font-size: 20px;
  margin-right: 10px;
  color: #0a4877;
}

.label-box span {
  font-size: 14px;
  font-weight: bold;
  color: #000;
}

/* Pagination Dots */
.pagination {
 @apply absolute bottom-[-40px] left-[28%] transform -translate-x-1/2 flex gap-2.5
}

.dot {
  width: 12px;
  height: 12px;
  background: black;
  border-radius: 50%;
  opacity: 0.5;
}

.dot.active {
  background: white;
  opacity: 1;
}
</style>
