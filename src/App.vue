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
import { ref } from "vue";

const mobileNavOpen = ref(false);
const heroImage = `${import.meta.env.BASE_URL}hero-lili.png`;

const navItems = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Resume", href: "#resume" },
];

const projects = [
  {
    title: "Food Ordering App",
    eyebrow: "Case Study",
    className: "project-food",
    wide: true,
  },
  {
    title: "Shapa",
    className: "project-shapa",
  },
  {
    title: "The Nitro Lounge",
    className: "project-nitro",
  },
  {
    title: "FAIT",
    subtitle: "DISTRIBUTION",
    className: "project-fait",
  },
  {
    title: "SMARTCharts",
    className: "project-smart",
  },
];

const socialLinks = [
  { label: "Email", href: "mailto:hello@lilikoeber.com", icon: Mail },
  { label: "LinkedIn", href: "https://www.linkedin.com", icon: Link2 },
  { label: "Instagram", href: "https://www.instagram.com", icon: Camera },
  { label: "Facebook", href: "https://www.facebook.com", icon: MessageCircle },
];

function closeMobileNav() {
  mobileNavOpen.value = false;
}
</script>

<template>
  <v-app>
    <v-main>
      <div class="page-shell">
        <header class="site-header">
          <a class="monogram" href="#top" aria-label="LiLi Koeber home">LK</a>

          <nav class="desktop-nav" aria-label="Primary">
            <a v-for="item in navItems" :key="item.label" :href="item.href">
              {{ item.label }}
            </a>
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
          <a
            v-for="item in navItems"
            :key="item.label"
            :href="item.href"
            @click="closeMobileNav"
          >
            {{ item.label }}
          </a>
          <a class="contact-link" href="#contact" @click="closeMobileNav">
            Contact
          </a>
        </nav>

        <section id="top" class="hero-section" aria-labelledby="hero-title">
          <div class="hero-copy">
            <p class="intro">Hi! I am</p>
            <h1 id="hero-title">
              <span>LiLi</span>
              <span>Koeber</span>
            </h1>
            <p>
              As a UI/UX Designer, I'm passionate about crafting meaningful,
              intuitive experiences that solve complex challenges and drive
              business success. I believe in the power of design to connect
              people and communities.
            </p>
          </div>

          <img
            class="hero-art"
            :src="heroImage"
            alt="Illustration of LiLi working at a desk with a laptop and small birds"
          />
        </section>

        <section id="work" class="work-section" aria-labelledby="work-title">
          <h2 id="work-title">Selected Work</h2>

          <div class="project-grid">
            <a
              v-for="project in projects"
              :key="project.title"
              href="#work"
              class="project-tile"
              :class="[project.className, { 'project-wide': project.wide }]"
            >
              <span class="project-title">{{ project.title }}</span>
              <span v-if="project.eyebrow" class="project-eyebrow">
                {{ project.eyebrow }}
              </span>
              <span v-if="project.subtitle" class="project-subtitle">
                {{ project.subtitle }}
              </span>

              <span v-if="project.className === 'project-smart'" class="mockup">
                <span class="tablet"></span>
                <span class="laptop"></span>
                <span class="phone"></span>
              </span>
            </a>
          </div>
        </section>

        <footer id="contact" class="site-footer">
          <div class="footer-brand">
            <a class="wordmark" href="#top" aria-label="LiLi Koeber home">
              <span>LiLi</span>
              <span>Koeber</span>
            </a>
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
            <a href="#work">Work</a>
            <a href="#resume">Resume</a>
            <a id="about" href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </footer>

        <a class="back-to-top" href="#top" aria-label="Back to top">
          <ArrowUp :size="20" stroke-width="2" />
        </a>
      </div>
    </v-main>
  </v-app>
</template>
