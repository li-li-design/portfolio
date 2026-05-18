<script setup>
import {
  ArrowUp,
  Camera,
  Link2,
  Mail,
  Menu,
  MessageCircle,
  X,
} from "@lucide/vue";
import { onBeforeUnmount, onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const mobileNavOpen = ref(false);
const showBackToTop = ref(false);
const route = useRoute();

const navItems = [
  { label: "Work", to: { name: "home", hash: "#work" } },
  { label: "About", to: { name: "about" } },
  { label: "Resume", to: { name: "resume" } },
];

const socialLinks = [
  { label: "Email", href: "mailto:hello@liliKoerber.com", icon: Mail },
  { label: "LinkedIn", href: "https://www.linkedin.com", icon: Link2 },
  { label: "Instagram", href: "https://www.instagram.com", icon: Camera },
  { label: "Facebook", href: "https://www.facebook.com", icon: MessageCircle },
];

function closeMobileNav() {
  mobileNavOpen.value = false;
}

function updateBackToTopVisibility() {
  showBackToTop.value = window.scrollY > 320;
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

onMounted(() => {
  updateBackToTopVisibility();
  window.addEventListener("scroll", updateBackToTopVisibility, {
    passive: true,
  });
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", updateBackToTopVisibility);
});
</script>

<template>
  <v-app>
    <v-main>
      <div class="page-shell">
        <header class="site-header">
          <RouterLink
            class="monogram"
            :to="{ name: 'home' }"
            aria-label="LiLi Koerber home"
          >
            LK
          </RouterLink>

          <nav class="desktop-nav" aria-label="Primary">
            <template v-for="item in navItems" :key="item.label">
              <RouterLink v-if="item.to" :to="item.to">
                {{ item.label }}
              </RouterLink>
              <a v-else :href="item.href">{{ item.label }}</a>
            </template>
            <a class="contact-link" href="#contact">Contact</a>
          </nav>

          <button
            class="icon-button menu-button"
            type="button"
            :aria-expanded="mobileNavOpen"
            aria-controls="mobile-nav"
            aria-label="Toggle navigation"
            @click="mobileNavOpen = !mobileNavOpen"
          >
            <X v-if="mobileNavOpen" :size="20" stroke-width="2" />
            <Menu v-else :size="20" stroke-width="2" />
          </button>
        </header>

        <nav
          id="mobile-nav"
          class="mobile-nav"
          :class="{ 'mobile-nav-open': mobileNavOpen }"
          aria-label="Mobile primary"
        >
          <template v-for="item in navItems" :key="item.label">
            <RouterLink v-if="item.to" :to="item.to" @click="closeMobileNav">
              {{ item.label }}
            </RouterLink>
            <a v-else :href="item.href" @click="closeMobileNav">
              {{ item.label }}
            </a>
          </template>
          <a class="contact-link" href="#contact" @click="closeMobileNav">
            Contact
          </a>
        </nav>

        <RouterView />

        <footer id="contact" class="site-footer">
          <div class="footer-brand">
            <RouterLink
              class="wordmark"
              :to="{ name: 'home' }"
              aria-label="LiLi Koerber home"
            >
              <span>LiLi</span>
              <span>Koerber</span>
            </RouterLink>
            <div class="socials" aria-label="Social links">
              <a
                v-for="social in socialLinks"
                :key="social.label"
                :href="social.href"
                :aria-label="social.label"
              >
                <component :is="social.icon" :size="18" stroke-width="2" />
              </a>
            </div>
            <small>Recent update december 2024</small>
          </div>

          <nav class="footer-nav" aria-label="Footer">
            <RouterLink :to="{ name: 'home', hash: '#work' }">Work</RouterLink>
            <RouterLink :to="{ name: 'resume' }">Resume</RouterLink>
            <RouterLink :to="{ name: 'about' }">About</RouterLink>
            <a href="#contact">Contact</a>
          </nav>
        </footer>

        <button
          v-show="showBackToTop"
          class="back-to-top"
          type="button"
          aria-label="Back to top"
          @click="scrollToTop"
        >
          <ArrowUp :size="20" stroke-width="2" />
        </button>
      </div>
    </v-main>
  </v-app>
</template>
