import { createRouter, createWebHashHistory } from "vue-router";
import AboutPage from "./views/AboutPage.vue";
import ContactPage from "./views/ContactPage.vue";
import HomePage from "./views/HomePage.vue";
import ResumePage from "./views/ResumePage.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/about",
      name: "about",
      component: AboutPage,
    },
    {
      path: "/resume",
      name: "resume",
      component: ResumePage,
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactPage,
    },
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }

    return {
      top: 0,
      behavior: "smooth",
    };
  },
});

export default router;
