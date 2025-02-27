<script lang="ts" setup>
import "animate.css";

import {reactive, Ref, ref} from "vue";
import {useIntersectionObserver} from "@vueuse/core";

const aboutSection = ref<HTMLElement | null>(null);
const webDeveloper = ref<HTMLElement | null>(null);
const solar = ref<HTMLElement | null>(null);
const design = ref<HTMLElement | null>(null);
const subscription = ref<HTMLElement | null>(null);
const marketing = ref<HTMLElement | null>(null);

const addIntersectionObserver = (
  element: Ref<HTMLElement | null>,
  animationClass: string,
  threshold: number
) => {
  useIntersectionObserver(
    element,
    ([entry], observer) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(animationClass);
        observer.disconnect();
      } else {
        entry.target.classList.remove(animationClass);
      }
    },
    { threshold }
  );
};

addIntersectionObserver(aboutSection, "animate__fadeInLeft", 0.5);
addIntersectionObserver(webDeveloper, "animate__fadeInLeft", 0.5);
addIntersectionObserver(solar, "animate__fadeInDown", 0.5);
addIntersectionObserver(design, "animate__fadeInUp", 0.2);
addIntersectionObserver(subscription, "animate__fadeInRight", 0.2);
addIntersectionObserver(marketing, "animate__fadeInRightBig", 0.5);

const cases = reactive([
  {
    title: "Tech Training",
    image: "/images/tech-training.png",
    description:
      " Rovel Tech Academy's comprehensive tech training programs, cover a range of in-demand skills, designed to advance your career and keep you at the forefront of technology. Join Rovel Tech Academy today",
  },
  {
    title: "Solar Solution and Installation",
    image: "/images/solar-solution.png",
    description:
      " In today's digital age, effective marketing is essential. Rovel Tech offers comprehensive digital marketing solutions to help you reach your target audience, drive traffic, and maximize conversions",
  },
  {
    title: "Data and Premium Subscriptions ",
    image: "/images/data-subscription.png",
    description:
      "Stay ahead of the curve with our data subscription services. Rovel Tech provides an all-inclusive subscription package that unlocks a world of premium tools and services, including  platforms like Netflix etc",
  },
  {
    title: "App/Web Design And Development",
    image: "/images/app-design.png",
    description:
      "Here at Rovel Tech, we specialize in bringing your digital vision to life with our expert web development services. Whether you're launching a brand-new website or revamping an existing one.",
  },
  {
    title: "Graphic Design/Branding",
    image: "/images/graphic-design.png",
    description:
      "Our branding and graphic design experts  provide a comprehensive range of services to elevate your brand presence.  From captivating logos and eye-catching flyers to engaging social media posts and elegant brochures.",
  },
  {
    title: "Digital Marketing",
    image: "/images/digital-marketing.png",
    description:
      " In today's digital age, effective marketing is essential. Rovel Tech offers comprehensive digital marketing solutions to help you reach your target audience, drive traffic, and maximize conversions",
  },
]);
</script>

<template>
  <section
    id="services"
    class="py-20 bg-[url('/images/bg-pattern.png')] bg-cover bg-center"
  >
    <div class="container mx-auto px-4">
      <div class="flex justify-center">
        <div class="bg-[#FFA500] w-10 h-1 rounded-full mt-6 mr-2"></div>
        <h2 class="text-3xl md:text-4xl font-bold font-PtSansCaption text-center text-white mb-12">
          Our Services
        </h2>
        <div class="bg-[#FFA500] w-10 h-1 rounded-full mt-6 ml-2"></div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          id="fadeLeft"
          ref="aboutSection"
          class="bg-white rounded-lg shadow-lg p-6 animate__animated opacity-0 translate-y-10"
        >
          <figure class="grid place-content-center bg-[#052139]">
            <img
              :alt="cases[0].title"
              :src="cases[0].image"
              class="w-[250px]"
            />
          </figure>

          <div class="grid place-items-center">
            <h1 class="mt-5 text-2xl md:text-xl lg:text-2xl font-bold font-PtSansCaption">
              {{ cases[0].title }}
            </h1>
            <div class="bg-[#FFA500] w-10 h-1 rounded-full my-2.5 mr-2"></div>
            <p class="text-center leading-relaxed text-[#3A3A3A]">
              {{ cases[0].description }}
            </p>
          </div>
        </div>

        <div
          id="fadeDown"
          ref="solar"
          class="bg-white rounded-lg shadow-lg p-6 animate__animated opacity-0 translate-x-10"
        >
          <figure class="grid place-content-center">
            <img :alt="cases[1].title" :src="cases[1].image" />
          </figure>

          <div class="grid place-items-center">
            <h1 class="mt-5 text-2xl md:text-xl lg:text-2xl font-bold font-PtSansCaption">
              {{ cases[1].title }}
            </h1>
            <div class="bg-[#FFA500] w-10 h-1 rounded-full my-2.5 mr-2"></div>
            <p class="text-center leading-relaxed text-[#3A3A3A]">
              {{ cases[1].description }}
            </p>
          </div>
        </div>

        <div
          id="fadeRight"
          ref="subscription"
          class="bg-white rounded-lg shadow-lg p-6 animate__animated opacity-0 -translate-y-10"
        >
          <figure class="grid place-content-center">
            <img :alt="cases[2].title" :src="cases[2].image" />
          </figure>

          <div class="grid place-items-center">
            <h1 class="mt-5 text-2xl md:text-xl lg:text-2xl font-bold font-PtSansCaption">
              {{ cases[2].title }}
            </h1>
            <div class="bg-[#FFA500] w-10 h-1 rounded-full my-2.5 mr-2"></div>
            <p class="text-center leading-relaxed text-[#3A3A3A]">
              {{ cases[2].description }}
            </p>
          </div>
        </div>

        <div
          id="fadeInLeft"
          ref="webDeveloper"
          class="bg-white rounded-lg shadow-lg p-6 opacity-0 translate-y-10 animate__animated"
        >
          <figure class="grid place-content-center">
            <img :alt="cases[3].title" :src="cases[3].image" />
          </figure>

          <div class="grid place-items-center">
            <h1 class="mt-5 text-2xl md:text-lg lg:text-2xl font-bold font-PtSansCaption">
              {{ cases[3].title }}
            </h1>
            <div class="bg-[#FFA500] w-10 h-1 rounded-full my-2.5 mr-2"></div>
            <p class="text-center leading-relaxed text-[#3A3A3A]">
              {{ cases[3].description }}
            </p>
          </div>
        </div>

        <div
          id="fadeInUp"
          ref="design"
          class="bg-white rounded-lg shadow-lg p-6 animate__animated opacity-0 translate-y-10"
        >
          <figure class="grid place-content-center">
            <img :alt="cases[4].title" :src="cases[4].image" />
          </figure>

          <div class="grid place-items-center">
            <h1 class="mt-5 text-2xl md:text-xl lg:text-2xl font-bold font-PtSansCaption">
              {{ cases[4].title }}
            </h1>
            <div class="bg-[#FFA500] w-10 h-1 rounded-full my-2.5 mr-2"></div>
            <p class="text-center leading-relaxed text-[#3A3A3A]">
              {{ cases[4].description }}
            </p>
          </div>
        </div>

        <div
          id="fadeInRight"
          ref="marketing"
          class="bg-white rounded-lg shadow-lg p-6 animate__animated opacity-0 translate-x-10"
        >
          <figure class="grid place-content-center">
            <img :alt="cases[5].title" :src="cases[5].image" />
          </figure>

          <div class="grid place-items-center">
            <h1 class="mt-5 text-2xl md:text-xl lg:text-2xl font-bold font-PtSansCaption">
              {{ cases[5].title }}
            </h1>
            <div class="bg-[#FFA500] w-10 h-1 rounded-full my-2.5 mr-2"></div>
            <p class="text-center leading-relaxed text-[#3A3A3A]">
              {{ cases[5].description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/*
#fadeLeft{

  transition: transform 1s, opacity 1s;
}

#fadeLeft.animate__fadeInLeft{
  visibility: visible;
  opacity: 1;
  transform: translateY(0px);

#fadeInLeft{
  visibility: hidden;
  opacity: 0;
  transform: translateY(100px);
  transition: transform 1s, opacity 1s;
}

#fadeInLeft.animate__fadeInLeft{
  visibility: visible;
  opacity: 1;
  transform: translateY(0px);
}


#fadeDown{
  visibility: hidden;
  opacity: 0;
  transform: translateY(-200px);
  transition: transform 1s, opacity 1s;
}

#fadeDown.animate__fadeInDown{
  visibility: visible;
opacity: 1;
  transform: translateY(0px);
}

#fadeInUp{
  visibility: hidden;
  opacity: 0;
  transform: translateY(250px);
  transition: transform 1s, opacity 1s;
}
#fadeInUp.animate__fadeInUp{
  visibility: visible;
  opacity: 1;
  transform: translateY(0px);
}

#fadeRight {
  visibility: hidden;
  opacity: 0;
  transform: translateX(300px);
  transition: transform 1s, opacity 1s;
}
#fadeRight.animate__fadeInRight{
  visibility: visible;
  opacity: 1;
  transform: translateX(0px);
}

#fadeInRight{
  visibility: hidden;
  opacity: 0;
  transform: translateX(300px);
  transition: transform 1s, opacity 1s;
}

#fadeInRight.animate__fadeInRight{
  visibility: visible;
  opacity: 1;
  transform: translateX(0px);
}
}*/
</style>
