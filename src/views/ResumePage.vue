<script setup>
const experiences = [
  {
    title: "Product Designer",
    company: "Shapa Health & MyClearStep",
    dates: "December 2022 - June 2026",
    bullets: [
      "Collaborated with product managers, marketing team, and developers, to convert user needs and business goals into design solutions.",
      "Designed new features for web and mobile applications with a focus on enhancing user conversion and retention.",
      "Developed a consistent design system and style guide to ensure brand cohesion and streamline the design process.",
    ],
  },
  {
    title: "UI/UX Designer",
    company: "Fait Distribution",
    dates: "November 2021 - October 2022",
    bullets: [
      "Enhanced user experience of sales dashboard and increased business collaborations with regional optometry practices.",
      "Analyzed target users' behaviors, goals, and pain points to improve website usability and repurpose a project's initial approach through deeper understanding of the end users.",
    ],
  },
  {
    title: "UI/UX Designer",
    company: "Dementia Care Warriors",
    dates: "August - October 2021",
    bullets: [
      "Conceptualized the user interface for a newly, modernized redesign of the company website.",
      "Improved the website interface to build trust and increase engagement from users facing similar life challenges.",
      "Worked closely with a team of UX designers led by a project manager.",
    ],
  },
  {
    title: "User Experience Researcher",
    company: "Smart Charts",
    dates: "July - August 2021",
    bullets: [
      "Interviewed and surveyed target users to test usability of clinical charting tool.",
      "Collected research data on user goals, pain points, and behaviors to generate user personas.",
      "Mapped out the user's journey in interacting with product.",
      "Created high-fidelity mockups of new product features and design revisions based on user feedback.",
    ],
  },
];

const skills = [
  "Figma",
  "Sketch",
  "Adobe Creative Suite",
  "InVision",
  "Wireframing",
  "User Research",
  "Illustrator",
  "Usability Testing",
  "User Journey Map",
  "User Interviews",
  "Elementor",
  "Wix",
  "Basic HTML & CSS",
];

const languages = ["English", "Mandarin", "Cantonese"];
</script>

<template>
  <main class="resume-page" aria-labelledby="resume-title">
    <div class="resume-header">
      <div>
        <RouterLink
          class="resume-wordmark"
          :to="{ name: 'home' }"
          aria-label="LiLi Koerber home"
        >
          <span>LiLi</span>
          <span>Koerber</span>
        </RouterLink>
        <p id="resume-title" class="resume-role">UI/UX Designer</p>
      </div>

      <address class="resume-contact">
        <a href="tel:+16305187483">(630) 518-7483</a>
        <a href="mailto:lili.billee@gmail.com">lili.billee@gmail.com</a>
        <span>Chicago, IL</span>
      </address>
    </div>

    <div class="resume-layout">
      <section class="resume-main" aria-labelledby="experience-title">
        <h1 id="experience-title">Experience</h1>

        <article
          v-for="experience in experiences"
          :key="`${experience.title}-${experience.company}`"
          class="resume-entry"
        >
          <h2>{{ experience.title }}</h2>
          <p class="resume-company">{{ experience.company }}</p>
          <p class="resume-dates">{{ experience.dates }}</p>
          <ul>
            <li v-for="bullet in experience.bullets" :key="bullet">
              {{ bullet }}
            </li>
          </ul>
        </article>
      </section>

      <aside class="resume-sidebar">
        <section aria-labelledby="education-title">
          <h1 id="education-title">Education</h1>
          <div class="resume-entry">
            <h2>Bachelor's in Psychology</h2>
            <p class="resume-company">University of Pittsburgh</p>
            <p class="resume-dates">2012 - 2016</p>
          </div>
        </section>

        <section aria-labelledby="skills-title">
          <h1 id="skills-title">Skills</h1>
          <ul class="resume-list">
            <li v-for="skill in skills" :key="skill">{{ skill }}</li>
          </ul>
        </section>

        <section aria-labelledby="languages-title">
          <h1 id="languages-title">Languages</h1>
          <ul class="resume-list">
            <li v-for="language in languages" :key="language">
              {{ language }}
            </li>
          </ul>
        </section>
      </aside>
    </div>
  </main>
</template>
