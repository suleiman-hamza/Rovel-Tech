<script lang="ts" setup>
import { h, reactive, type Ref, ref } from "vue";

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
    text: "alogberachael@gmail.com",
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
  <section
    class="py-20 bg-[#057CC3] bg-[url('/images/mappng.png')] bg-cover bg-center"
  >
    <section class="grid place-content-center text-center text-white mb-8">
      <div class="flex justify-center">
        <div class="bg-[#FFA500] w-10 h-1 rounded-full mt-6 mr-2"></div>
        <h1 class="font-bold text-5xl flex items-center justify-center">
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
            <h3 class="mb-5 font-bold text-2xl">Our Contacts</h3>
            <div
              v-for="(detail, index) in details"
              :key="index"
              class="flex items-center gap-5"
            >
              <component :is="detail.icon" />
              <div class="mb-10">
                <h4 class="text-#3A3A3A text-xl font-bold">
                  {{ detail.title }}
                </h4>
                <p class="text-[#111] text-lg">{{ detail.text }}</p>
              </div>
            </div>
          </section>

          <section>
            <section class="mb-5">
              <p class="text-[#3A3A3A ] mb-1.5">
                LET HELP YOU WITH YOUR PROJECT
              </p>
              <h4 class="font-bold text-2xl text-[#3A3A3A]">
                What is Your Project About?
              </h4>
            </section>

            <!-- Select Project  -->
            <section>
              <label
                for="project"
                class="text-lg text-[#3A3A3A] font-semibold inline-block mb-3.5"
                >Select Project</label
              >
              <select
                id="project"
                class="border-2 border-[#6E7276] w-full rounded-md px-2 py-3 bg-transparent"
              >
                <option value="web">Web Development</option>
                <option value="mobile">Mobile Development</option>
                <option value="design">Design</option>
                <option value="other">Other</option>
              </select>
            </section>

            <form @submit.prevent="handleSubmit" class="mt-5">
              <!--label textarea-->
              <label
                for="message"
                class="text-lg text-[#3A3A3A] font-semibold inline-block mb-3.5"
                >Message</label
              >
              <div>
                <textarea
                  id="message"
                  class="border-2 border-[#6E7276] w-full resize-none rounded-md px-2 py-4"
                  cols="30"
                  name="message"
                  placeholder="Describe your project"
                  v-model="form.message"
                ></textarea>
              </div>
              <!--label textarea-->

              <section class="flex flex-col md:flex-row gap-5 mt-5 mb-10">
                <!-- label name -->
                <div>
                  <label
                    for="name"
                    class="inline-block mb-3.5 text-lg text-[#3A3A3A] font-semibold"
                    >Name</label
                  >
                  <input
                    type="text"
                    id="name"
                    v-model="form.name"
                    class="border-2 border-[#6E7276] w-full rounded-md px-2 py-1"
                    placeholder="Enter your name"
                  />
                </div>
                <!-- label name -->

                <!-- label phoneNumber -->
                <div>
                  <label
                    for="phone"
                    class="inline-block mb-3.5 text-lg text-[#3A3A3A] font-semibold"
                    >Phone Number</label
                  >
                  <input
                    type="text"
                    id="name"
                    v-model="form.phoneNumber"
                    class="border-2 border-[#6E7276] w-full rounded-md px-2 py-1"
                    placeholder="Enter your phone number"
                  />
                </div>
                <!-- label phoneNumber -->
              </section>

              <button
                type="submit"
                class="bg-[#FF9635] px-4 py-2 rounded-full text-white"
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
