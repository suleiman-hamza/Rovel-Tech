<template>
  <section class="py-24">
    <div class="container mx-auto px-8">
      <div class="text-center">
        <h1 class="text-2xl md:text-3xl font-bold mb-5 text-[#211D1F] font-PtSansCaption">
          Industries We Empower
        </h1>
        <p class="font-poppins text-[#3A3A3A] text-lg">
          Discover the Diverse Sectors That Have Thrived with Rovel Tech's
          Digital Solutions
        </p>
      </div>

      <section class="grid grid-cols-2 md:grid-cols-6 gap-4 mt-12">
        <div v-for="(industry, index) in industries" :key="index" class="h-1/2">
          <figure
            :class="industry.bgClass"
            class="flex flex-col items-center p-5"
          >
            <img :alt="industry.title" :src="industry.icon" />

            <p
              class="mt-5 text-[#1D1C1C] font-semibold text-center font-Poppins"
            >
              {{ industry.title }}
            </p>
          </figure>
        </div>
      </section>
    </div>
  </section>
</template>

<script lang="ts" setup>
import {reactive} from "vue";

const industries = reactive([
  {
    icon: "/icons/iconoir_healthcare.svg",
    title: "Health",
    bgClass: "bg-[#F69E9E]",
  },
  {
    icon: "/icons/fa_television.svg",
    title: "E-commerce",
    bgClass: "bg-[#C6EEED]",
  },
  {
    icon: "/icons/material-symbols_finance-chip-outline.svg",
    title: "Finance & Banking",
    bgClass: "bg-[#DEFBDB]",
  },
  {
    icon: "/icons/grommet-icons_technology.svg",
    title: "Technology",
    bgClass: "bg-[#FFA0C6]",
  },
  {
    icon: "/icons/mdi_legal.svg",
    title: "Design",
    bgClass: "bg-[#D1EEF8]",
  },
  {
    icon: "/icons/mdi_legal2.svg",
    title: "Law",
    bgClass: "bg-[#F6E3C7]",
  },
  {
    icon: "/icons/mdi_public.svg",
    title: "Public",
    bgClass: "bg-[#B0CFFA]",
  },
  {
    icon: "/icons/material-symbols-light_computer-outline.svg",
    title: "Software Development",
    bgClass: "bg-[#FAB4EA]",
  },
  {
    icon: "/icons/simple-icons_justeat.svg",
    title: "Food",
    bgClass: "bg-[#EAE198]",
  },
  {
    icon: "/icons/ic_outline-real-estate-agent.svg",
    title: "Real Estate",
    bgClass: "bg-[#6CFFFA]",
  },
  {
    icon: "/icons/Group 38075.svg",
    title: "Tele-communication",
    bgClass: "bg-[#FFA0C6]",
  },
  {
    icon: "/icons/zondicons_travel-bus.svg",
    title: "Transportation",
    bgClass: "bg-[#FFDCE2]",
  },
  {
    icon: "/icons/eos-icons_software-outlined.svg",
    title: "Gaming & Sport",
    bgClass: "bg-[#C6F0CA]",
  },
  {
    icon: "/icons/Group 35803.svg",
    title: "Entreprenuer",
    bgClass: "bg-[#F6BEF4]",
  },
  {
    icon: "/icons/material-symbols_school-outline.svg",
    title: "Education",
    bgClass: "bg-[#939DF4]",
  },
  {
    icon: "/icons/fluent_building-government-16-regular.svg",
    title: "Government",
    bgClass: "bg-[#FAAFA1]",
  },
  {
    icon: "/icons/icon-park-outline_entertainment.svg",
    title: "Entertainment",
    bgClass: "bg-[#E187D8]",
  },
  {
    icon: "/icons/fluent_document-sass-16-regular.svg",
    title: "Software as a Service",
    bgClass: "bg-[#C09EEC]",
  },
]);
</script>

<style scoped></style>
