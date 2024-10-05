<script setup>
import Background from "./background/Background.vue";
</script>

<template>
  <v-app>
    <v-main>
      <div class="main">
        <h1>Li Li</h1>
        <!-- <v-card>
          <v-card-title>Contact Li Li</v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field label="Name" />
              <v-text-field label="Email" />
              <v-textarea label="Message" />
              <v-btn>Submit</v-btn>
            </v-form>
          </v-card-text>
        </v-card> -->
      </div>
      <Background />
    </v-main>
  </v-app>
</template>

<style scoped>
.main {
  z-index: 1;
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
