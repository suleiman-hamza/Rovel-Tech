<script lang="ts" setup>
import { ref } from "vue";

const visibility = ref(false);
const toggleVisibility = () => (visibility.value = !visibility.value);
</script>

<template>
  <section class="container mx-auto px-5">
    <header class="lg:py-8 flex justify-between items-center">
      <figure>
        <img alt="Logo" src="/public/images/Logo.svg" width="100px" />
      </figure>

      <nav class="hidden lg:flex lg:items-center">
        <ul class="flex space-x-8 text-lg font-Poppins font-bold">
          <li>
            <a href="" class="text-[#FFA500]">Home</a>
          </li>
          <li>
            <a href="">About Us</a>
          </li>
          <li><a href="">Services</a></li>
          <li><a href="">How it works</a></li>
          <li><a href="">Why Choose Us</a></li>
          <li><a href="">Testimonial</a></li>
        </ul>
        <div class="ml-12">
          <button
            class="bg-[#FFA500] text-white px-8 py-2 rounded-full font-bold"
          >
            Contact Us
          </button>
        </div>
      </nav>

      <!-- icon -->
      <div @click="toggleVisibility" class="text-2xl lg:hidden">
        <i v-if="!visibility" class="fa-solid fa-bars"></i>
        <i v-else class="fa-solid fa-xmark"></i>
      </div>
    </header>

    <!-- mobile nav -->
    <transition name="slide-fade">
      <nav
        v-if="visibility"
        class="bg-white pt-2 px-8 py-5 absolute left-0 top-20 w-full lg:hidden"
      >
        <ul class="space-y-4 text-lg font-Poppins">
          <li>
            <a href="" class="text-[#FFA500]">Home</a>
          </li>
          <li>
            <a href="">About Us</a>
          </li>
          <li><a href="">Services</a></li>
          <li><a href="">How it works</a></li>
          <li><a href="">Why Choose Us</a></li>
          <li><a href="">Testimonial</a></li>
        </ul>
        <div class="mt-5">
          <button
            class="bg-[#FFA500] text-white px-8 py-2 rounded-full font-bold"
          >
            Contact Us
          </button>
        </div>
      </nav>
    </transition>
  </section>
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
