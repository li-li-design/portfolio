<script setup>
const heroImage = `${import.meta.env.BASE_URL}hero-lili.png`;

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
</script>

<template>
  <section id="top" class="hero-section" aria-labelledby="hero-title">
    <div class="hero-copy">
      <p class="intro">Hi! I am</p>
      <h1 id="hero-title">
        <span>LiLi</span>
        <span>Koerber</span>
      </h1>
      <p>
        As a UI/UX Designer, I'm passionate about crafting meaningful,
        intuitive experiences that solve complex challenges and drive business
        success. I believe in the power of design to connect people and
        communities.
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
</template>
