<script lang="ts" setup>
import {useIntersectionObserver} from "@vueuse/core";
import {ref, shallowRef, useTemplateRef} from "vue";
import Link from "./Link.vue";

const target = useTemplateRef<HTMLDivElement>("target");
const targetIsVisible = shallowRef(false);

useIntersectionObserver(target, ([entry]) => {
  targetIsVisible.value = entry?.isIntersecting || false;
});

const visibility = ref(false);
const toggleVisibility = () => (visibility.value = !visibility.value);

const ActiveLink = ref("Home");
const updateActive = (to: string) => {
  ActiveLink.value = to;
};
const isActive = (to: string) => {
  return ActiveLink.value === to
    ? "text-[#FFA500] font-bold"
    : "text-[#1D1C1C]/80";
};
</script>

<template>
  <div ref="target" class="container mx-auto px-5">
    <header
      :class="{
        'fixed top-0 left-0 w-full bg-white shadow-lg z-[999] px-5':
          !targetIsVisible,
        'lg:py-8 lg:px-5': targetIsVisible,
      }"
      class="lg:py-3.5 flex justify-between items-center"
    >
      <figure>
        <Link to="/">
          <img alt="Logo" src="/images/logo.png" width="100px" />
        </Link>
      </figure>

      <nav class="hidden lg:flex lg:items-center">
        <ul class="flex space-x-8 text-lg font-Poppins text-[#1D1C1C]">
          <li>
            <Link
              :class="isActive('Home')"
              class="cursor-pointer"
              to="#home"
              @click="updateActive('Home')"
              >Home</Link
            >
          </li>
          <li>
            <Link
              :class="isActive('AboutSection')"
              class="cursor-pointer"
              to="#about"
              @click="updateActive('AboutSection')"
              >About Us</Link
            >
          </li>
          <li>
            <Link
              :class="isActive('Services')"
              class="cursor-pointer"
              to="#services"
              @click="updateActive('Services')"
              >Services</Link
            >
          </li>
          <li>
            <Link
              :class="isActive('HowItWorks')"
              class="cursor-pointer"
              to="#howItWorks"
              @click="updateActive('HowItWorks')"
              >How it works</Link
            >
          </li>
          <li>
            <Link
              :class="isActive('WhyChooseUs')"
              class="cursor-pointer"
              to="#whyChooseUs"
              @click="updateActive('WhyChooseUs')"
              >Why Choose Us</Link
            >
          </li>
          <li>
            <Link
              :class="isActive('Testimonial')"
              class="cursor-pointer"
              to="#testimonial"
              @click="updateActive('Testimonial')"
              >Testimonial</Link
            >
          </li>
        </ul>
        <div class="ml-12">
          <button
            class="bg-[#FFA500] text-white px-8 py-2 rounded-full font-bold"
          >
            <Link to="#contact"> Contact Us </Link>
          </button>
        </div>
      </nav>

      <!-- icon -->
      <div class="text-2xl lg:hidden cursor-pointer text-black" @click="toggleVisibility">
        <i v-if="!visibility" class="fa-solid fa-bars"></i>
        <i v-else class="fa-solid fa-xmark"></i>
      </div>
    </header>

    <!-- mobile nav -->
    <transition name="slide-fade">
      <nav
        v-if="visibility"
        class="bg-white pt-2 px-8 py-5 fixed left-0 top-20 w-full lg:hidden z-[999]"
      >
        <ul class="space-y-4 text-lg font-Poppins">
          <li>
            <Link
              :class="isActive('Home')"
              class="cursor-pointer text-[#1e1e1e]"
              to="#home"
              @click="updateActive('Home')"
              >Home</Link
            >
          </li>
          <li>
            <Link
              :class="isActive('AboutSection')"
              class="cursor-pointer text-[#1e1e1e]"
              to="#about"
              @click="updateActive('AboutSection')"
              >About Us</Link
            >
          </li>
          <li>
            <Link
              :class="isActive('Services')"
              class="cursor-pointer text-[#1e1e1e]"
              to="#services"
              @click="updateActive('Services')"
              >Services</Link
            >
          </li>
          <li>
            <Link
              :class="isActive('HowItWorks')"
              class="cursor-pointer text-[#1e1e1e]"
              to="#howItWorks"
              @click="updateActive('HowItWorks')"
              >How it works</Link
            >
          </li>
          <li>
            <Link
              :class="isActive('WhyChooseUs')"
              class="cursor-pointer text-[#1e1e1e]"
              to="#whyChooseUs"
              @click="updateActive('WhyChooseUs')"
              >Why Choose Us</Link
            >
          </li>
          <li>
            <Link
              :class="isActive('Testimonial')"
              class="cursor-pointer text-[#1e1e1e]"
              to="#testimonial"
              @click="updateActive('Testimonial')"
              >Testimonial</Link
            >
          </li>
        </ul>
        <div class="mt-5">
          <button
            class="bg-[#FFA500] text-white px-8 py-2 rounded-full font-bold"
          >
            <Link to="#contact"> Contact Us </Link>
          </button>
        </div>
      </nav>
    </transition>
  </div>
</template>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
