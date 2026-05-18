<script setup>
import { computed, reactive } from "vue";

const recipientEmail = "lili.billee@gmail.com";

const form = reactive({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const mailtoHref = computed(() => {
  const subject = form.subject.trim() || `Portfolio inquiry from ${form.name || "your website"}`;
  const body = [
    `Name: ${form.name}`,
    `Email: ${form.email}`,
    "",
    form.message,
  ].join("\n");

  return `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
</script>

<template>
  <main class="contact-page" aria-labelledby="contact-title">
    <section class="contact-intro">
      <p class="intro">Contact</p>
      <h1 id="contact-title">Let's build something thoughtful together.</h1>
      <p>
        Send a note about a project, role, collaboration, or anything design
        related. This form opens your email app for now.
      </p>
    </section>

    <form class="contact-form" :action="mailtoHref" method="post" enctype="text/plain">
      <label>
        <span>Name</span>
        <input v-model="form.name" name="name" type="text" autocomplete="name" required />
      </label>

      <label>
        <span>Email</span>
        <input
          v-model="form.email"
          name="email"
          type="email"
          autocomplete="email"
          required
        />
      </label>

      <label class="contact-full">
        <span>Subject</span>
        <input v-model="form.subject" name="subject" type="text" required />
      </label>

      <label class="contact-full">
        <span>Message</span>
        <textarea v-model="form.message" name="message" rows="8" required></textarea>
      </label>

      <div class="contact-actions">
        <button class="contact-submit" type="submit">Open Email</button>
        <a :href="`mailto:${recipientEmail}`">{{ recipientEmail }}</a>
      </div>
    </form>
  </main>
</template>
