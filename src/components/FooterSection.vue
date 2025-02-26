<script setup lang="ts">
import { reactive } from "vue";

const socialLinks = reactive([
  {
    icon: `<i class="fa-brands fa-facebook text-white text-2xl mb-4 bg-[#057CC3]  text-center p-3.5 rounded-full h-14 w-14"></i>`,
    url: "#",
    label: "Facebook",
  },
  {
    icon: `<i class="fa-brands fa-twitter text-white text-2xl mb-4 bg-[#057CC3]  text-center p-3.5 rounded-full h-14 w-14"></i>`,
    url: "#",
    label: "LinkedIn",
  },
  {
    icon: `<i class="fa-brands fa-instagram text-white text-2xl mb-4 bg-[#057CC3]  text-center p-3.5 rounded-full h-14 w-14"></i>`,
    url: "#",
    label: "Instagram",
  },
]);

const details = reactive([
  {
    title: "Number",
    icon: `<i class="fas fa-phone text-white text-2xl mb-4 bg-[#057CC3]  text-center p-3.5 rounded-full h-14 w-14"></i>`,
    text: "+2349165486229",
  },
  {
    icon: `<i class="fas fa-envelope text-white text-2xl mb-4 bg-[#057CC3]  text-center p-3.5 rounded-full h-14 w-14"></i>`,
    title: "Email",
    text: "alogberachael@gmail.com",
  },
  {
    icon: `<i class="fas fa-location-dot text-white text-2xl mb-4 bg-[#057CC3]  text-center p-3.5 rounded-full h-14 w-14"></i>`,
    title: "Location",
    text: "10 Gynoscope Drive PH City, Rivers Nigeria.",
  },
]);
</script>

<template>
  <footer class="py-12">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap justify-between gap-8 lg:flex-nowrap">
        <div>
          <!-- <h3 class="text-xl font-bold mb-4">About Us</h3> -->
          <figure class="mb-4">
            <img alt="Logo" src="/images/Logo.svg" width="100px" />
          </figure>
          <p class="text-[#565252] max-w-sm">
            At Rovels’ Technology, we embark on a relentless pursuit of digital
            excellence, driven by innovation and fueled by a commitment to
            transforming ideas into impactful realities. As a beacon in the
            dynamic landscape of technology, we specialize in crafting bespoke
            solutions that elevate your digital experience.
          </p>
        </div>
        <section class="flex flex-wrap gap-10 lg:flex-nowrap">
          <div>
            <h3 class="text-xl font-bold mb-4 text-[#656464]">Company</h3>
            <ul class="space-y-2 text-[#565252] font-bold">
              <li>Home</li>
              <li>Services</li>
              <li>About Us</li>
              <li>How it Works</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h3 class="text-xl font-bold mb-4 text-[#656464]">Contact</h3>
            <div v-for="(item, index) in details" :key="index">
              <section class="flex gap-5 py-4 px-6">
                <div v-html="item.icon"></div>
                <div>
                  <h3 class="text-[#565252] font-bold mb-1.5 font-Poppins">
                    {{ item.title }}
                  </h3>
                  <p class="text-[#565252] font-Poppins">
                    {{ item.text }}
                  </p>
                </div>
              </section>
            </div>
          </div>
          <div>
            <h3 class="text-xl font-bold mb-4 text-[#3A3A3A]">
              Subscribe To Our News Letter
            </h3>
            <div class="flex items-center space-x-4 bg-[#EBF1F9] rounded-full">
              <input
                type="text"
                placeholder="Enter your email"
                class="w-full p-4 rounded-full bg-[#EBF1F9] placeholder:[#999090] font-Poppins font-semibold"
              />
              <button
                type="submit"
                class="bg-[#FFA500] text-white p-4 rounded-full font-bold"
              >
                Subscribe
              </button>
            </div>
            <div class="flex space-x-4 mt-5">
              <a
                v-for="(link, index) in socialLinks"
                :key="index"
                :href="link.url"
                :aria-label="link.label"
                class="text-2xl hover:text-gray-300"
              >
                <div v-html="link.icon"></div>
              </a>
            </div>
          </div>
        </section>
      </div>
      <div
        class="mt-8 pt-8 border-t border-gray-700 text-center text-[#3A3A3A]"
      >
        <p>Copyright &copy; 2023 All right reserve Digiwot.INC. com</p>
      </div>
    </div>
  </footer>
</template>
