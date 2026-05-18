<script setup>
const aboutImage = (fileName) => `${import.meta.env.BASE_URL}about/${fileName}`;

const aboutImages = {
  portrait: aboutImage("Portrat.png"),
  birds: aboutImage("BilleePoki.jpg"),
  chongqing: aboutImage("ChongQing.jpg"),
  devilsLake: aboutImage("DevilsLake.png"),
  japan: aboutImage("JapanBuilding.png"),
  tower: aboutImage("GZTower.png"),
};
</script>

<template>
  <section id="top" class="about-section about-page" aria-labelledby="about-title">
    <h1 id="about-title">
      As a designer, I believe the foundation to building a successful design
      stems from being fully aware of the users' unique goals and challenges.
    </h1>

    <div class="about-divider"></div>

    <div class="about-content">
      <div class="about-stack" aria-label="Personal photos">
        <img
          class="about-photo about-portrait"
          :src="aboutImages.portrait"
          alt="Portrait of LiLi Koerber"
        />
        <img
          class="about-photo about-birds"
          :src="aboutImages.birds"
          alt="Two parrotlets resting together"
        />
        <img
          class="about-photo about-chongqing"
          :src="aboutImages.chongqing"
          alt="Chongqing skyline at night"
        />
      </div>

      <div class="about-body">
        <div class="about-copy">
          <p>
            In my most recent role as product designer, I collaborate with the
            product manager, marketing team, and developers. We plan, repurpose,
            and innovate our company's digital products and web applications.
          </p>
          <p>
            I believe that the foundation to building a successful design stems
            from being fully aware of the users' unique goals and challenges, as
            well as making product usability accessible for everyone. My
            experience in the industry prepares me to design with intention:
            conducting thorough user research and designing solutions that meet
            evolving customer expectations.
          </p>
          <p>
            When I'm not designing, I enjoy hiking, reading, cooking, exploring
            new cultures, and being a bird parent (I have two very pampered
            parrots).
          </p>
        </div>

        <div class="about-travel" aria-label="Travel photos">
          <img
            class="about-photo about-devils-lake"
            :src="aboutImages.devilsLake"
            alt="LiLi hiking at Devil's Lake"
          />
          <img
            class="about-photo about-japan"
            :src="aboutImages.japan"
            alt="A castle in Japan on a clear day"
          />
          <img
            class="about-photo about-tower"
            :src="aboutImages.tower"
            alt="A colorful illuminated tower at night"
          />
        </div>
      </div>
    </div>
  </section>
</template>
