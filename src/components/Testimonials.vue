<script lang="ts" setup>
import {ref} from "vue";

const testimonials = [
  {
    image: "/images/testimonial-1.png",
    name: "Floyd Miles",
    position: "Vice President, GoPro",
    quote:
      "Rovel Tech's expertise has truly revolutionized our online presence. From the initial consultation to the final implementation, their team demonstrated a deep understanding of our business needs and goals.",
  },
  {
    image: "/images/testimonial-1.png",
    name: "Floyd Miles",
    position: "Vice President, GoPro",
    quote:
      "Rovel Tech's expertise has truly revolutionized our online presence. From the initial consultation to the final implementation, their team demonstrated a deep understanding of our business needs and goals.",
  },
  {
    image: "/images/testimonial-1.png",
    name: "Floyd Miles",
    position: "Vice President, GoPro",
    quote:
      "Rovel Tech's expertise has truly revolutionized our online presence. From the initial consultation to the final implementation, their team demonstrated a deep understanding of our business needs and goals.",
  },
  {
    image: "/images/testimonial-1.png",
    name: "Floyd Miles",
    position: "Vice President, GoPro",
    quote:
      "Rovel Tech's expertise has truly revolutionized our online presence. From the initial consultation to the final implementation, their team demonstrated a deep understanding of our business needs and goals.",
  },
  {
    image: "/images/testimonial-1.png",
    name: "Floyd Miles",
    position: "Vice President, GoPro",
    quote:
      "Rovel Tech's expertise has truly revolutionized our online presence. From the initial consultation to the final implementation, their team demonstrated a deep understanding of our business needs and goals.",
  },
];

const isPaused = ref(false);
const carousel = ref<HTMLElement | null>(null);
let currentSlide = ref<number>(0);
let translationX = ref<number>(0);
const moveX = 20;
const pauseCarousel = () => {
  isPaused.value = true;
};

const resumeCarousel = () => {
  isPaused.value = false;
};

const nextBtn = () => {
  if (currentSlide.value < testimonials.length - 1) {
    currentSlide.value += 1;
    translationX.value += moveX;
  }
  if (currentSlide.value == testimonials.length - 1) {
    currentSlide.value = 0;
    translationX.value = 0;
  }
};

const prevBtn = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--;
    translationX.value -= moveX;
    console.log(translationX.value);
  }
  if (translationX.value <= 0) {
    currentSlide.value = testimonials.length - 1;
    translationX.value = (moveX / 2) * testimonials.length - 1;
  }
};
</script>

<template>
  <section id="testimonial" class="py-24">
    <div class="container mx-auto px-8">
      <div class="flex justify-center">
        <div class="bg-[#FFA500] w-10 h-1 rounded-full mt-6 mr-2"></div>
        <h1
          class="font-bold font-PtSansCaption text-3xl text-center text-[#333333] md:text-4xl lg:text-start flex items-center justify-center"
        >
          What Our Client Say
        </h1>
        <div class="bg-[#FFA500] w-10 h-1 rounded-full mt-6 ml-2"></div>
      </div>

      <div
        class="mt-8 overflow-hidden relative"
        @mouseenter="pauseCarousel"
        @mouseleave="resumeCarousel"
      >
        <div
          ref="carousel"
          :class="{ 'animation-paused': isPaused }"
          :style="{
            transform: `translateX(-${translationX}%)`,
            transition: 'all 2s',
          }"
          class="flex w-max animate-scroll"
        >
          <div
            v-for="(testimonial, index) in testimonials"
            :key="index"
            class="testimonialCard p-5 rounded-md bg-[#EEF5F6] hover:bg-transparent w-[350px] flex-shrink-0 mx-4 cursor-pointer"
          >
            <div class="flex items-center gap-4 p-5">
              <figure>
                <img :src="testimonial.image" alt="Testimonial" />
              </figure>
              <div>
                <h4 class="text-lg font-bold font-Poppins text-[#1E1E1E]">
                  {{ testimonial.name }}
                </h4>
                <p class="font-Poppins text-[#3A3A3A]">
                  {{ testimonial.position }}
                </p>
              </div>
            </div>
            <blockquote class="font-Poppins leading-relaxed text-[#3A3A3A]">
              {{ testimonial.quote }}
            </blockquote>
          </div>

<!--                              <div-->
<!--                                v-for="(testimonial, index) in testimonials"-->
<!--                                :key="index + testimonials.length"-->
<!--                                class="testimonialCard p-5 rounded-md bg-[#EEF5F6] hover:bg-transparent w-[350px] flex-shrink-0 mx-4 "-->
<!--                              >-->
<!--                                <div class="flex items-center gap-4 p-5">-->
<!--                                  <figure>-->
<!--                                    <img-->
<!--                                      :src="testimonial.image"-->
<!--                                      alt="Testimonial"-->
<!--                                      loading="lazy"-->
<!--                                    />-->
<!--                                  </figure>-->
<!--                                  <div>-->
<!--                                    <h4 class="text-lg font-bold text-[#1E1E1E]">{{ testimonial.name }}</h4>-->
<!--                                    <p class="font-Poppins text-[#3A3A3A]">{{ testimonial.position }}</p>-->
<!--                                  </div>-->
<!--                                </div>-->
<!--                                <blockquote class="font-Poppins leading-relaxed text-[#3A3A3A]">-->
<!--                                  {{ testimonial.quote }}-->
<!--                                </blockquote>-->
<!--                              </div>-->
        </div>
      </div>

      <!-- Navigation Icons -->
      <div class="flex justify-center gap-20 mt-8">
        <i
          class="fas fa-chevron-left text-[#0B7A91] text-2xl px-3.5 py-2 bg-[#D7DFE0] rounded-full h-12 w-12 cursor-pointer"
          @click="prevBtn"
        ></i>
        <i
          class="fas fa-chevron-right text-[#0B7A91] text-2xl px-3.5 py-2 bg-[#D7DFE0] rounded-full h-12 w-12 cursor-pointer"
          @click="nextBtn"
        ></i>
      </div>
    </div>
  </section>
</template>

<style scoped>
/*
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-scroll {
  animation: scroll 20s linear infinite;
}

.animation-paused {
  animation-play-state: paused;
}

.testimonialCard:hover {
  border: 2px solid #0b7a91;
  transition: 1s ease-in-out;
}

 */
</style>
