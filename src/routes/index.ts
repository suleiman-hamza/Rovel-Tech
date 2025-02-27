import {createRouter, createWebHistory} from "vue-router";
import HeroSection from "../components/HeroSection.vue";
import FeaturesSection from "../components/FeaturesSection.vue";

const routes = [
  {
    path: "/",
    name: "HeroSection",
    component: HeroSection,
  },
  {
    path: "/aboutsection",
    name: "FeaturesSection",
    component: FeaturesSection,
  },
  {
    path: "/services",
    name: "ServiceSection",
    component: () => import("../components/CaseStudies.vue"),
  },
  {
    path: "/technology",
    name: "TechnologySection",
    component: () => import("../components/TechnologiesSection.vue"),
  },
  {
    path: "/howItWorks",
    name: "HowItWorksSection",
    component: () => import("../components/HowItWorks.vue"),
  },
  {
    path: "/whyChooseUs",
    name: "WhyChooseUsSection",
    component: () => import("../components/WhyChooseUs.vue"),
  },
  {
    path: "/testimonial",
    name: "TestimonialSection",
    component: () => import("../components/Testimonials.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),

  routes,
  // scrool behavior
  scrollBehavior(to, _from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, behavior: "smooth" };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
