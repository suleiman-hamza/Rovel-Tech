<script lang="ts" setup>
import { reactive, ref, Ref } from "vue";
import { useIntersectionObserver } from "@vueuse/core";

const explore = ref<HTMLElement | null>(null);
const contanctUs = ref<HTMLElement | null>(null);
const callUs = ref<HTMLElement | null>(null);

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

addIntersectionObserver(explore, "animate__fadeInDown", 0.1);
addIntersectionObserver(contanctUs, "animate__fadeInDown", 0.2);
addIntersectionObserver(callUs, "animate__fadeInDown", 0.5);

const steps = reactive([
  {
    icons: `<i class="fa fa-list-check text-[#FF6B58] text-2xl mb-4 bg-[#F8D3CE]  text-center p-3.5 rounded-full h-16 w-16"></i>`,
    title: "Explore Our Services",
    description:
      "Dive into a world of possibilities. Explore our services, from UI/UX design to app development. Discover the solutions that align with your vision.",
  },
  {
    icons: `<i class="fas fa-gears text-[#2B6F9C] text-2xl mb-4 bg-[#A9D4F1]  text-center p-3.5 rounded-full h-16 w-16"></i>`, // Example icon for consistency
    title: "Visit the Contact Us Section",
    description:
      "Ready to take the next step? Head to our Contact Us section. It's your gateway to seamless communication with our team.",
  },
  {
    icons: `<i class="fas fa-address-card text-[#05791E] text-2xl mb-4 bg-[#B3F0C0]  text-center p-3.5 rounded-full h-16 w-16"></i>`, // Example icon
    title: "Send a Message or Call Us",
    description:
      "Select the services you desire and reach out. Send us a quick message or give us a call. Your preferences matter, and we're here to shape your digital aspirations. Let's start building together!",
  },
]);
</script>

<template>
  <section class="py-24 bg-[#057CC3] text-white">
    <div class="container mx-auto px-8">
      <section
        class="flex flex-col items-center justify-between md:flex-row md:items-start"
      >
        <div
          class="mb-12 md:mb-0 flex flex-col items-center text-center md:w-1/2 md:text-start md:items-start"
        >
          <div class="flex justify-center">
            <div class="bg-[#FFA500] w-10 h-1 rounded-full mt-6 mr-2"></div>
            <h2 class="text-2xl lg:text-4xl font-bold">How It Works</h2>
            <div class="bg-[#FFA500] w-10 h-1 rounded-full mt-6 ml-2"></div>
          </div>
          <p
            class="font-poppins mt-4 md:max-w-sm leading-normal font-normal text-xl"
          >
            Welcome to the heart of our digital universe! Navigating through our
            seamless process is as easy as 1-2-3.
          </p>
          <p
            class="font-poppins mt-4 md:max-w-sm leading-normal font-bold text-xl"
          >
            Ready to Get Started? Your digital future awaits – explore our
            services now!
          </p>
          <button
            class="bg-[#FFA500] text-white px-8 py-3 rounded-full transition font-bold mt-8"
          >
            Explore Our Services
          </button>
        </div>
        <div class="grid grid-cols-1 gap-4 items-center">
          <!--          <div-->
          <!--            v-for="(step, index) in steps"-->
          <!--            :key="index"-->
          <!--            class="bg-white rounded-lg px-6 py-10 shadow-lg max-w-lg"-->
          <!--          >-->
          <!--            &lt;!&ndash; Render the icon using v-html &ndash;&gt;-->
          <!--            <section class="flex items-center gap-5">-->
          <!--              <div class="" v-html="step.icons"></div>-->
          <!--              <div>-->
          <!--                <h3 class="text-xl font-bold mb-2 text-[#565252] font-Poppins">-->
          <!--                  {{ step.title }}-->
          <!--                </h3>-->
          <!--                <p class="text-gray-600">{{ step.description }}</p>-->
          <!--              </div>-->
          <!--            </section>-->
          <!--          </div>-->

          <div
            id="explore-services"
            ref="explore"
            class="bg-white rounded-lg px-6 py-10 shadow-lg max-w-lg opacity-0 translate-y-10 animate__animated"
          >
            <!-- Render the icon using v-html -->
            <section class="flex flex-col md:flex-row items-center gap-5">
              <div class="" v-html="steps[0].icons"></div>
              <div>
                <h3 class="text-xl font-bold mb-2 text-[#565252] font-Poppins">
                  {{ steps[0].title }}
                </h3>
                <p class="text-gray-600">{{ steps[0].description }}</p>
              </div>
            </section>
          </div>

          <div
            id="explore-services"
            ref="contanctUs"
            class="bg-white rounded-lg px-6 py-10 shadow-lg max-w-lg opacity-0 translate-y-10 animate__animated"
          >
            <!-- Render the icon using v-html -->
            <section class="flex flex-col md:flex-row items-center gap-5">
              <div class="" v-html="steps[1].icons"></div>
              <div>
                <h3 class="text-xl font-bold mb-2 text-[#565252] font-Poppins">
                  {{ steps[1].title }}
                </h3>
                <p class="text-gray-600">{{ steps[1].description }}</p>
              </div>
            </section>
          </div>

          <div
            id="explore-services"
            ref="callUs"
            class="bg-white rounded-lg px-6 py-10 shadow-lg max-w-lg opacity-0 translate-y-10 animate__animated"
          >
            <!-- Render the icon using v-html -->
            <section class="flex flex-col md:flex-row items-center gap-5">
              <div class="" v-html="steps[2].icons"></div>
              <div>
                <h3 class="text-xl font-bold mb-2 text-[#565252] font-Poppins">
                  {{ steps[2].title }}
                </h3>
                <p class="text-gray-600">{{ steps[2].description }}</p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<style scoped></style>
