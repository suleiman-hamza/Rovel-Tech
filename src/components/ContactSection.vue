<script lang="ts" setup>
import {h, reactive, type Ref, ref} from "vue";

interface ContactDetail {
  title: string;
  icon: () => ReturnType<typeof h>;
  text: string;
}

const details: Ref<ContactDetail[]> = ref([
  {
    title: "Number",
    icon: () =>
      h("i", {
        class:
          "fas fa-phone text-white text-2xl mb-4 bg-[#057CC3]  text-center p-3.5 rounded-full h-14 w-14",
      }),
    text: "+2349165486229",
  },
  {
    icon: () =>
      h("i", {
        class:
          "fas fa-envelope text-white text-2xl mb-4 bg-[#057CC3]  text-center p-3.5 rounded-full h-14 w-14",
      }),
    title: "Email",
    text: "Roveltechworld@gmail.com",
  },
  {
    icon: () =>
      h("i", {
        class:
          "fas fa-location-dot text-white text-2xl mb-4 bg-[#057CC3]  text-center p-3.5 rounded-full h-14 w-14",
      }),
    title: "Location",
    text: "10 Gynoscope Drive PH City, Rivers Nigeria.",
  },
]);

const form = reactive({
  name: "",
  phoneNumber: "",
  message: "",
});

const handleSubmit = () => {
  // Handle form submission
  console.log("Form submitted:", form);
};
</script>

<template>
  <section id="contact"
    class="py-20 bg-[#057CC3] bg-[url('/images/mappng.png')] bg-cover bg-center"
  >
    <section class="grid place-content-center text-center text-white mb-8">
      <div class="flex justify-center">
        <div class="bg-[#FFA500] w-10 h-1 rounded-full mt-6 mr-2"></div>
        <h1 class="font-bold text-5xl flex items-center justify-center font-PtSansCaption">
          Contact Us
        </h1>
        <div class="bg-[#FFA500] w-10 h-1 rounded-full mt-6 ml-2"></div>
      </div>
      <p class="font-Poppins text-lg mt-5 font-semi-bold">
        Ready to embark on a digital journey or have a question? Our team at
        <br />
        Rovel Tech is here to assist you
      </p>
    </section>

    <section class="max-w-5xl mx-auto px-5 lg:px-0">
      <section class="bg-white px-8 py-12 rounded-lg shadow-lg">
        <div class="flex flex-col md:flex-row justify-between gap-8">
          <section>
            <h3 class="mb-5 font-bold text-2xl font-PtSansCaption">Our Contacts</h3>
            <div
              v-for="(detail, index) in details"
              :key="index"
              class="flex items-center gap-5"
            >
              <component :is="detail.icon" />
              <div class="mb-10">
                <h4 class="text-#3A3A3A text-xl font-bold font-Poppins">
                  {{ detail.title }}
                </h4>
                <p class="text-[#111] text-lg font-Poppins">{{ detail.text }}</p>
              </div>
            </div>
          </section>

          <section>
            <section class="mb-5">
              <p class="text-[#3A3A3A ] mb-1.5 font-Poppins">
                LET HELP YOU WITH YOUR PROJECT
              </p>
              <h4 class="font-bold text-2xl text-[#3A3A3A] font-Poppins">
                What is Your Project About?
              </h4>
            </section>

            <!-- Select Project  -->
            <section>
              <label
                class="text-lg text-[#3A3A3A] font-semibold inline-block font-Poppins mb-3.5"
                for="project"
                >Select Project</label
              >
              <select
                id="project"
                class="border-2 border-[#6E7276] w-full rounded-md px-2 py-3 bg-transparent font-Poppins"
              >
                <option value="web">Web Development</option>
                <option value="mobile">Mobile Development</option>
                <option value="design">Design</option>
                <option value="other">Other</option>
              </select>
            </section>

            <form class="mt-5" @submit.prevent="handleSubmit">
              <!--label textarea-->
              <label
                class="text-lg text-[#3A3A3A] font-semibold inline-block mb-3.5 font-Poppins"
                for="message"
                >Message</label
              >
              <div>
                <textarea
                  id="message"
                  v-model="form.message"
                  class="border-2 border-[#6E7276] w-full resize-none rounded-md px-2 py-4 font-Poppins"
                  cols="30"
                  name="message"
                  placeholder="Describe your project"
                ></textarea>
              </div>
              <!--label textarea-->

              <section class="flex flex-col md:flex-row gap-5 mt-5 mb-10">
                <!-- label name -->
                <div>
                  <label
                    class="inline-block mb-3.5 text-lg text-[#3A3A3A] font-PtSansCaption font-semibold"
                    for="name"
                    >Name</label
                  >
                  <input
                    id="name"
                    v-model="form.name"
                    class="border-2 border-[#6E7276] w-full rounded-md px-2 py-1 font-Poppins"
                    placeholder="Enter your name"
                    type="text"
                  />
                </div>
                <!-- label name -->

                <!-- label phoneNumber -->
                <div>
                  <label
                    class="inline-block mb-3.5 text-lg text-[#3A3A3A] font-semibold font-Poppins"
                    for="phone"
                    >Phone Number</label
                  >
                  <input
                    id="name"
                    v-model="form.phoneNumber"
                    class="border-2 border-[#6E7276] w-full rounded-md px-2 py-1 font-Poppins"
                    placeholder="Enter your phone number"
                    type="text"
                  />
                </div>
                <!-- label phoneNumber -->
              </section>

              <button
                class="bg-[#FF9635] px-4 py-2 rounded-full text-white font-Poppins"
                type="submit"
              >
                Send Message
              </button>
            </form>
          </section>
        </div>
      </section>
    </section>
  </section>
</template>
