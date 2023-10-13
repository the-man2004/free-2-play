<template>
  <div>
    <figure>
      <img :src="thumbnail" alt="Game thumbnail" />
      <figcaption>{{ title }}</figcaption>
    </figure>
  </div>
  <div>
    <h3>About {{ title }}</h3>
    <p>{{ description }}</p>
  </div>
  <div>
    <figure>
      <figcaption>Additional Information</figcaption>
      <ul>
        <li><span>Title</span> {{ title }}</li>
        <li><span>Developer</span> {{ developer }}</li>
        <li><span>Publisher</span> {{ publisher }}</li>
        <li><span>Realease Date</span> {{ release_date }}</li>
        <li><span>Genre</span> {{ genre }}</li>
        <li><span>Platform</span> {{ platform }}</li>
      </ul>
    </figure>
  </div>
  <div v-if="platform === 'Windows'">
    <figure>
      <figcaption>
        Minimum System Requirements <span>(Windows)</span>
      </figcaption>
      <ul>
        <li>
          <span>OS</span>
          {{ gamesStore.selectedGame.minimum_system_requirements.os }}
        </li>
        <li>
          <span>Processor</span>
          {{ gamesStore.selectedGame.minimum_system_requirements.processor }}
        </li>
        <li>
          <span>Memory</span>
          {{ gamesStore.selectedGame.minimum_system_requirements.memory }}
        </li>
        <li>
          <span>Graphics</span>
          {{ gamesStore.selectedGame.minimum_system_requirements.graphics }}
        </li>
        <li>
          <span>Storage</span>
          {{ gamesStore.selectedGame.minimum_system_requirements.storage }}
        </li>
        <li>
          <span>Additional Notes</span>
          Specifications may change during development
        </li>
      </ul>
    </figure>
  </div>
  <div v-else></div>
</template>

<script setup>
import { useGamesStore } from "../stores/useGamesStore";
import { computed } from "vue";

const gamesStore = useGamesStore();

const thumbnail = computed(() => gamesStore.selectedGame.thumbnail);
const title = computed(() => gamesStore.selectedGame.title);
const description = computed(() => gamesStore.selectedGame.description);

const developer = computed(() => gamesStore.selectedGame.developer);
const publisher = computed(() => gamesStore.selectedGame.publisher);
const release_date = computed(() => gamesStore.selectedGame.release_date);
const genre = computed(() => gamesStore.selectedGame.genre);
const platform = computed(() => gamesStore.selectedGame.platform);
</script>
