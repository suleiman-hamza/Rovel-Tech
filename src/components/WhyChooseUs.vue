<script lang="ts" setup>
import { reactive, ref, Ref } from "vue";
import { useIntersectionObserver } from "@vueuse/core";

const aboutSection = ref<HTMLElement | null>(null);
const approach = ref<HTMLElement | null>(null);
const support = ref<HTMLElement | null>(null);

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

addIntersectionObserver(aboutSection, "animate__fadeInDown", 0.1);
addIntersectionObserver(approach, "animate__fadeInDown", 0.2);
addIntersectionObserver(support, "animate__fadeInDown", 0.5);

const stats = reactive([
  {
    title: "Innovative Solutions",
    decsription:
      "Rovel Tech offers innovative and cutting-edge solutions tailored to meet the unique needs of our clients, ensuring they stay ahead of the curve in today's rapidly evolving digital landscape.",
  },
  {
    title: "Personalized Approach",
    decsription:
      "At Rovel Tech, we understand that every business is different, which is why we take a personalized approach to each project, tailoring our solutions to align with our clients' unique goals, preferences, and budgetary constraints.",
  },
  {
    title: "Exceptional Quality",
    decsription:
      "We pride ourselves on delivering exceptional quality in everything we do, from website development and graphic design to digital marketing strategies, guaranteeing the utmost satisfaction for our clients.",
  },
  {
    title: "Customer-Centric Philosophy",
    decsription:
      "We prioritize our clients' needs and satisfaction above all else, going above and beyond to exceed their expectations and ensure a seamless and enjoyable experience throughout the entire collaboration process.",
  },
  {
    title: "Experienced Team",
    decsription:
      "Our team consists of highly skilled professionals with years of experience in their respective fields, providing unparalleled expertise and insights to drive success for our clients' projects.",
  },
  {
    title: "Continuous Support",
    decsription:
      "Our commitment to our clients extends beyond project completion, as we provide ongoing support and assistance to address any questions, concerns, or issues that may arise, ensuring their long-term success and satisfaction.",
  },
]);
</script>

<template>
  <section class="py-20">
    <div class="container mx-auto px-4">
      <div class="flex justify-center">
        <div class="bg-[#FFA500] w-10 h-1 rounded-full mt-6 mr-2"></div>
        <h2 class="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div class="bg-[#FFA500] w-10 h-1 rounded-full mt-6 ml-2"></div>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-2 gap-10"></div>

      <section
        ref="aboutSection"
        class="mb-10 animate__animated opacity-0 translate-y-10 grid grid-cols-1 md:grid-cols-2 gap-10"
      >
        <div>
          <h3 class="text-2xl font-bold text-[#565252] font-Poppins mb-5">
            {{ stats[0].title }}
          </h3>
          <p class="text-[#565252]">{{ stats[0].decsription }}</p>
        </div>

        <div>
          <h3 class="text-2xl font-bold text-[#565252] font-Poppins mb-5">
            {{ stats[1].title }}
          </h3>
          <p class="text-[#565252]">{{ stats[1].decsription }}</p>
        </div>
      </section>

      <section
        ref="approach"
        class="mb-10 animate__animated opacity-0 translate-y-10 grid grid-cols-1 md:grid-cols-2 gap-10"
      >
        <div>
          <h3 class="text-2xl font-bold text-[#565252] font-Poppins mb-5">
            {{ stats[2].title }}
          </h3>
          <p class="text-[#565252]">{{ stats[2].decsription }}</p>
        </div>

        <div>
          <h3 class="text-2xl font-bold text-[#565252] font-Poppins mb-5">
            {{ stats[3].title }}
          </h3>
          <p class="text-[#565252]">{{ stats[3].decsription }}</p>
        </div>
      </section>

      <section
        ref="support"
        class="mb-10 animate__animated opacity-0 translate-y-10 grid grid-cols-1 md:grid-cols-2 gap-10"
      >
        <div>
          <h3 class="text-2xl font-bold text-[#565252] font-Poppins mb-5">
            {{ stats[4].title }}
          </h3>
          <p class="text-[#565252]">{{ stats[4].decsription }}</p>
        </div>

        <div>
          <h3 class="text-2xl font-bold text-[#565252] font-Poppins mb-5">
            {{ stats[5].title }}
          </h3>
          <p class="text-[#565252]">{{ stats[5].decsription }}</p>
        </div>
      </section>
    </div>
  </section>
</template>
