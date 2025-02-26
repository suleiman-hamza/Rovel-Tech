<script lang="ts">
export default {
  name: "HeroSection",
};
</script>

<template>
  <section
    class="py-20 bg-[url('/images/HeroBg.png')] bg-cover bg-center lg:h-screen"
  >
    <div class="container mx-auto px-4">
      <div class="">
        <div
          class="md:w-full mb-10 md:mb-0 text-white text-center flex flex-col justify-center items-center"
        >
          <h1 class="text-4xl lg:text-6xl font-bold mb-6">
            Innovation IT Solutions for <br />
            Your Business
          </h1>
          <p class="mb-8 font-Poppins font-medium md:text-2xl lg:text-4xl">
            Turning Ideas Into Solutions
          </p>
          <button
            class="bg-[#FFA500] text-white px-8 py-3 rounded-full transition font-bold"
          >
            Explore Our Services
          </button>
        </div>

        <figure class="flex justify-center items-center">
          <img
            alt="Technologies We Use"
            src="/Test-unscreen.gif"
            width="800px"
          />
        </figure>
      </div>
    </div>
  </section>
</template>
