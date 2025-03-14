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
  <section id="about" ref="aboutSectionRef" class="py-20 animate__animated">
    <div class="container mx-auto px-4">
      <div
        class="flex flex-col justify-between items-center md:flex-col lg:flex-row"
      >
        <div class="text-center md:text-left">
          <div class="flex justify-center">
            <div class="bg-[#FFA500] w-10 h-1 rounded-full mt-6 mr-2"></div>
            <h1 class="text-4xl md:text-5xl font-bold font-PtSansCaption mb-8 text-[#3A3A3A]">
              About Us
            </h1>
            <div class="bg-[#FFA500] w-10 h-1 rounded-full mt-6 ml-2"></div>
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

        <div class="hidden md:grid md:grid-cols-3 mt-10 gap-0">
          <div
            class="text-center md:col-start-2 flex justify-center items-center"
          >
            <div class="bg-[#057CC3] w-[65%] p-6 text-white text-center">
              <h3 class="text-2xl font-bold mt-4 font-Poppins">
                {{ features[0].title }}
              </h3>
              <p class="font-Poppins">{{ features[0].description }}</p>
            </div>
          </div>

          <div
            class="flex justify-end text-center items-center md:col-start-1 md:row-start-2"
          >
            <div
              class="bg-[#057CC3] w-[50%] h-40 p-6 flex flex-col justify-center text-white"
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
            class="flex justify-center items-center md:col-start-2 md:row-start-2 border-[42px] border-[#057CC3] w-full p-10"
          >
            <img alt="Logo" src="/images/Logo.svg" width="150px" />
          </div>

          <div
            class="flex items-center text-center text-white md:col-start-3 md:row-start-2"
          >
            <div
              class="bg-[#057CC3] w-[50%] h-40 p-6 flex flex-col justify-center"
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
            class="text-center md:col-start-2 md:row-start-3 flex justify-center items-center"
          >
            <div class="bg-[#057CC3] w-[65%] p-6 text-white text-center">
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
