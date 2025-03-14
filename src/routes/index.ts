import {createRouter, createWebHistory} from "vue-router";
import HeroSection from "../components/HeroSection.vue";

const routes = [
  {
    path: "/",
    name: "HeroSection",
    component: HeroSection,
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
