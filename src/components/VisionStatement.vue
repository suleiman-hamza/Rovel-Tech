<template>
  <section
    class="py-20 bg-[#057CC3] bg-[url('/images/bg-pattern.png')] bg-cover bg-center lg:h-screen bg-blend-screen"
  >
    <div class="container mx-auto px-4">
      <div
        class="flex justify-between items-center text-white flex-wrap md:flex-nowrap"
      >
        <div>
          <h1 class="font-bold font-PtSansCaption text-3xl lg:text-5xl mb-5">
            Our solution cut across the world
          </h1>
          <p class="text-lg font-Poppins max-w-xl">
            Discover the inclusive reach of Rovel Tech's solutions, designed for
            every corner of the world. From bustling metropolises to serene
            landscapes, our digital innovations are tailored for diverse
            profiles globally. Contact us today, and let's craft a unique
            solution for your business, wherever you are.
          </p>
          <div class="flex flex-col md:flex-row gap-4 mt-8">
            <button
              class="bg-white text-[#FFA500] px-8 py-3 rounded-full transition font-bold font-Poppins"
            >
              <Link to="#services">
              Explore Our Services
              </Link>
            </button>
            <button
              class="bg-[#FFA500] text-white px-8 py-3 rounded-full transition font-bold font-Poppins"
            >
              <Link to="#contact">
              Contact Us
              </Link>
            </button>
          </div>
        </div>

        <figure>
          <img alt="World Map" class="mt-8" src="/Test-2.gif" />
        </figure>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import Link from "./Link.vue";
</script>

<style scoped></style>
