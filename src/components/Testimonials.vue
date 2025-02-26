<template>
  <section class="py-24">
    <div class="container mx-auto px-8">
      <div class="flex justify-center">
        <div class="bg-[#FFA500] w-10 h-1 rounded-full mt-6 mr-2"></div>
        <h1
          class="font-bold text-3xl text-center md:text-4xl lg:text-start flex items-center justify-center"
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
          class="flex w-max animate-scroll"
          :class="{ 'animation-paused': isPaused }"
        >
          <div
            v-for="(testimonial, index) in testimonials"
            :key="index"
            class="testimonialCard p-5 rounded-md bg-[#EEF5F6] hover:bg-transparent w-[350px] flex-shrink-0 mx-4"
          >
            <div class="flex items-center gap-4 p-5">
              <figure>
                <img alt="Testimonial" :src="testimonial.image" />
              </figure>
              <div>
                <p class="text-lg font-bold">{{ testimonial.name }}</p>
                <p class="font-Poppins">{{ testimonial.position }}</p>
              </div>
            </div>
            <blockquote class="font-Poppins leading-relaxed">
              {{ testimonial.quote }}
            </blockquote>
          </div>

          <div
            v-for="(testimonial, index) in testimonials"
            :key="index + testimonials.length"
            class="testimonialCard p-5 rounded-md bg-[#EEF5F6] hover:bg-transparent w-[350px] flex-shrink-0 mx-4"
          >
            <div class="flex items-center gap-4 p-5">
              <figure>
                <img alt="Testimonial" :src="testimonial.image" />
              </figure>
              <div>
                <p class="text-lg font-bold">{{ testimonial.name }}</p>
                <p class="font-Poppins">{{ testimonial.position }}</p>
              </div>
            </div>
            <blockquote class="font-Poppins leading-relaxed">
              {{ testimonial.quote }}
            </blockquote>
          </div>
        </div>
      </div>

      <!-- Navigation Icons -->
      <div class="flex justify-center gap-20 mt-8">
        <i
          class="fas fa-chevron-left text-[#0B7A91] text-2xl px-3.5 py-2 bg-[#D7DFE0] rounded-full h-12 w-12 cursor-pointer"
          @click="scrollLeft"
        ></i>
        <i
          class="fas fa-chevron-right text-[#0B7A91] text-2xl px-3.5 py-2 bg-[#D7DFE0] rounded-full h-12 w-12 cursor-pointer"
          @click="scrollRight"
        ></i>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const testimonials = [
  {
    image: "/public/images/testimonial-1.png",
    name: "Floyd Miles",
    position: "Vice President, GoPro",
    quote:
      "Rovel Tech's expertise has truly revolutionized our online presence. From the initial consultation to the final implementation, their team demonstrated a deep understanding of our business needs and goals.",
  },
  {
    image: "/public/images/testimonial-1.png",
    name: "Floyd Miles",
    position: "Vice President, GoPro",
    quote:
      "Rovel Tech's expertise has truly revolutionized our online presence. From the initial consultation to the final implementation, their team demonstrated a deep understanding of our business needs and goals.",
  },
  {
    image: "/public/images/testimonial-1.png",
    name: "Floyd Miles",
    position: "Vice President, GoPro",
    quote:
      "Rovel Tech's expertise has truly revolutionized our online presence. From the initial consultation to the final implementation, their team demonstrated a deep understanding of our business needs and goals.",
  },
  {
    image: "/public/images/testimonial-1.png",
    name: "Floyd Miles",
    position: "Vice President, GoPro",
    quote:
      "Rovel Tech's expertise has truly revolutionized our online presence. From the initial consultation to the final implementation, their team demonstrated a deep understanding of our business needs and goals.",
  },
  {
    image: "/public/images/testimonial-1.png",
    name: "Floyd Miles",
    position: "Vice President, GoPro",
    quote:
      "Rovel Tech's expertise has truly revolutionized our online presence. From the initial consultation to the final implementation, their team demonstrated a deep understanding of our business needs and goals.",
  },
];

const isPaused = ref(false);

const pauseCarousel = () => {
  isPaused.value = true;
};

const resumeCarousel = () => {
  isPaused.value = false;
};

const scrollLeft = () => {
  const carousel = document.querySelector(".flex.w-max");
  if (carousel) {
    carousel.scrollBy({ left: -350, behavior: "smooth" });
  }
};

const scrollRight = () => {
  const carousel = document.querySelector(".flex.w-max");
  if (carousel) {
    carousel.scrollBy({ left: 350, behavior: "smooth" });
  }
};
</script>

<style scoped>
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
</style>
