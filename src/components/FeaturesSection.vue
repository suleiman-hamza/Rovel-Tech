<script lang="ts" setup>
import "animate.css";
import {useIntersectionObserver} from "@vueuse/core";

import {reactive, ref} from "vue";

const features = reactive([
  {
    title: "50+",
    description: "Team members",
  },
  {
    title: "11+",
    description: "Experience",
  },
  {
    title: "20+",
    description: "Project",
  },
  {
    title: "2000+",
    description: "Clients",
  },
]);

const aboutSectionRef = ref<HTMLElement | null>(null);

useIntersectionObserver(
  aboutSectionRef,
  ([entry], observer) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate__fadeInLeftBig");
      observer.disconnect();
    } else {
      entry.target.classList.remove("animate__fadeInLeftBig");
    }
  },
  {
    threshold: 0.5,
  }
);
</script>

<template>
  <section id="about" ref="aboutSectionRef" class="py-20 mx-4 sm:mx-12 md:mx-16 animate__animated">
    <div class="">
      <div
        class="flex flex-col md:justify-between items-center md:flex-row lg:flex-row"
      >
        <div class="text-center md:text-left p-4">
          <div class="flex items-center justify-center md:justify-start mb-4 md:mb-6">
            <span class="bg-[#FFA500] w-10 h-1 rounded-full"></span>
            <h1 class="text-4xl md:text-5xl font-bold font-PtSansCaption leading-none text-[#3A3A3A]">
              About Us
            </h1>
            <span class="bg-[#FFA500] w-10 h-1 rounded-full"></span>
          </div>
          <h3
            class="font-poppins font-bold text-xl md:text-2xl leading-relaxed text-[#333333]"
          >
            Empowering Your Digital Vision <br />
            With Innovative Solutions
          </h3>
          <p class="font-poppins text-[#323031] mt-4 max-w-md leading-normal">
            Welcome to Rovel Tech, where innovation meets excellence. We are a
            dedicated team of passionate professionals committed to transforming
            your digital aspirations into reality. In the ever-evolving
            landscape of technology, we stand as your trusted partner, offering
            a comprehensive suite of IT solutions that redefine the way you
            engage with your audience.
          </p>
        </div>

        <!--        Mobile View-->
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="mt-10 mb-0 md:hidden md:mt-0 md:mb-0"
        >
          <div
            class="flex flex-col justify-center items-center bg-[#057CC3] w-40 h-40 rounded text-white"
          >
            <h1 class="text-4xl font-bold">{{ feature.title }}</h1>
            <p class="text-[#323 031] text-center font-Poppins mt-4">
              {{ feature.description }}
            </p>
          </div>
        </div>

        <!--        Tablet and Desktop view-->

        <div class="hidden md:grid md:grid-cols-[120px_30px_120px_30px_120px] md:grid-rows-[120px_30px_120px_30px_120px] lg:grid-cols-[140px_40px_140px_40px_140px] lg:grid-rows-[140px_40px_140px_40px_140px] gap-0 border max-w-[60vw]">
          <div
            class="bg-[#057CC3] text-center md:col-start-3 md:col-end-4 flex justify-center items-center w-full h-full"
          >
            <div class="flex-col justify-center items-center text-white text-center">
              <h3 class="text-2xl font-bold font-Poppins">
                {{ features[0].title }}
              </h3>
              <p class="font-Poppins">{{ features[0].description }}</p>
            </div>
          </div>

          <div
            class="bg-[#057CC3] flex text-center justify-center items-center md:col-start-1 md:row-start-3 md:row-end-4"
          >
            <div
              class="flex-col justify-center items-center text-white text-center"
            >
              <h3 class="text-2xl font-bold mt-4 font-Poppins">
                {{ features[1].title }}
              </h3>
              <p class="font-Poppins uppercase">
                {{ features[1].description }}
              </p>
            </div>
          </div>

          <div
            class="bg-blue-400 flex justify-center items-center md:col-start-2 md:col-end-5 md:row-start-2 md:row-end-5 border-[#057CC3] w-full"
          >
            <img alt="Logo" src="/images/Logo.svg" width="150px" />
          </div>

          <div
            class="bg-[#057CC3] flex items-center justify-center text-center text-white md:col-start-5 md:row-start-3 md:row-end-4 md:col-end-6"
          >
            <div
              class="flex-col justify-center items-center text-white text-center"
            >
              <h3 class="text-2xl font-bold mt-4 font-Poppins">
                {{ features[2].title }}
              </h3>
              <p class="font-Poppins uppercase">
                {{ features[2].description }}
              </p>
            </div>
          </div>

          <div
            class="bg-[#057CC3] text-center md:col-start-3 md:col-end-4 md:row-start-5 flex justify-center items-center"
          >
            <div class="flex-col justify-center items-center text-white text-center">
              <h3 class="text-2xl font-bold mt-4 font-Poppins">
                {{ features[3].title }}
              </h3>
              <p class="font-Poppins">{{ features[3].description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#aboutSection {
  visibility: hidden;
  opacity: 0;
  transform: translateY(100px);
  transition: transform 1s, opacity 1s;
}

#aboutSection.animate__fadeInLeftBig {
  visibility: visible;
  opacity: 1;
  transform: translateY(0px);
}
</style>
