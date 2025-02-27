<script lang="ts" setup>
import {reactive} from "vue";
import Link from "./Link.vue";

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
    text: "Roveltechworld@gmail.com",
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
            <img alt="Logo" src="/images/logo.png" width="100px" />
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
            <ul class="space-y-8 text-[#565252] font-bold lg:w-[7rem]">
              <li>
              <Link to="#home">
                Home
              </Link>
              </li>
              <li>
                <Link to="#services">
                Services
                </Link>
              </li>
              <li>
                <Link to="#about">
                About Us
                </Link>
              </li>
              <li>
                <Link to="#howItWorks">
                How it Works
                </Link>
              </li>
              <li>
                <Link to="#contact">

                Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div class="flex flex-col">
            <h3 class="text-xl font-bold mb-4 text-[#656464]">Contact</h3>
            <div v-for="(item, index) in details" :key="index">
              <section class="flex gap-5 py-4">
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
                class="w-full p-4 rounded-full bg-[#EBF1F9] placeholder:[#999090] font-Poppins font-semibold"
                placeholder="Enter your email"
                type="text"
              />
              <button
                class="bg-[#FFA500] text-white p-4 rounded-full font-bold"
                type="submit"
              >
                Subscribe
              </button>
            </div>
            <div class="flex space-x-4 mt-5">
              <a
                v-for="(link, index) in socialLinks"
                :key="index"
                :aria-label="link.label"
                :href="link.url"
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
        <p>Copyright &copy; 2023 All right reserve Rovel Tech Limited. com</p>
      </div>
    </div>
  </footer>
</template>
