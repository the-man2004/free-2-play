<template>
  <div class="min-h-screen p-8 bg-slate-900 text-gray-300">
    <div>
      <div class="mb-4">
        <img class="w-full mb-4" :src="thumbnail" alt="Game thumbnail" />
        <div class="py-1 px-2 bg-slate-800">
          <h2 class="text-xl pb-3">{{ title }}</h2>
          <div class="my-1">
            <span
              class="font-semibold py-1 px-4 mr-2 rounded-full bg-gray-700 text-blue-500"
              >FREE</span
            >
            <a
              class="py-1 px-4 rounded-full bg-blue-500 text-gray-300"
              :href="gameUrl"
              >MORE INFO <i class="fa-solid fa-arrow-right-from-bracket"></i
            ></a>
          </div>
        </div>
      </div>
    </div>
    <div class="mb-4 py-1 px-2 bg-slate-800">
      <h3 class="text-lg pb-2">About {{ title }}</h3>
      <p class="text-sm whitespace-pre-line">{{ description }}</p>
    </div>
    <div class="mb-4 py-1 px-2 bg-slate-800">
      <figure>
        <figcaption class="text-lg pb-1">Additional Information</figcaption>
        <p class="mb-4 text-sm text-gray-400">
          <i class="fa-solid fa-circle-exclamation"></i> Please note this
          free-2-play game may or may not offer optional in-game purchases.
        </p>
        <ul class="ml-2 text-sm">
          <li class="mb-1">
            <span class="block text-gray-400">Title </span>{{ title }}
          </li>
          <li class="mb-1">
            <span class="block text-gray-400">Developer </span>{{ developer }}
          </li>
          <li class="mb-1">
            <span class="block text-gray-400">Publisher </span>{{ publisher }}
          </li>
          <li class="mb-1">
            <span class="block text-gray-400">Realease Date </span
            >{{ release_date }}
          </li>
          <li class="mb-1">
            <span class="block text-gray-400">Genre </span>{{ genre }}
          </li>
          <li class="mb-1">
            <span class="block text-gray-400">Platform </span>{{ platform }}
          </li>
        </ul>
      </figure>
    </div>
    <div v-if="platform === 'Windows'" class="mb-4 py-1 px-2 bg-slate-800">
      <figure>
        <figcaption class="text-lg pb-2">
          Minimum System Requirements <span>(Windows)</span>
        </figcaption>
        <ul class="ml-2 text-sm">
          <li class="mb-1">
            <span class="block text-gray-400">OS</span>
            {{ gamesStore.selectedGame.minimum_system_requirements.os }}
          </li>
          <li class="mb-1">
            <span class="block text-gray-400">Processor</span>
            {{ gamesStore.selectedGame.minimum_system_requirements.processor }}
          </li>
          <li class="mb-1">
            <span class="block text-gray-400">Memory</span>
            {{ gamesStore.selectedGame.minimum_system_requirements.memory }}
          </li>
          <li class="mb-1">
            <span class="block text-gray-400">Graphics</span>
            {{ gamesStore.selectedGame.minimum_system_requirements.graphics }}
          </li>
          <li class="mb-1">
            <span class="block text-gray-400">Storage</span>
            {{ gamesStore.selectedGame.minimum_system_requirements.storage }}
          </li>
          <li class="mb-1">
            <span>Additional Notes</span>
            Specifications may change during development
          </li>
        </ul>
      </figure>
    </div>
  </div>
</template>

<script setup>
import { useGamesStore } from "../stores/useGamesStore";
import { computed } from "vue";

const gamesStore = useGamesStore();

const thumbnail = computed(() => gamesStore.selectedGame.thumbnail);
const title = computed(() => gamesStore.selectedGame.title);
const gameUrl = computed(() => gamesStore.selectedGame.game_url);
const description = computed(() => gamesStore.selectedGame.description);

const developer = computed(() => gamesStore.selectedGame.developer);
const publisher = computed(() => gamesStore.selectedGame.publisher);
const release_date = computed(() => gamesStore.selectedGame.release_date);
const genre = computed(() => gamesStore.selectedGame.genre);
const platform = computed(() => gamesStore.selectedGame.platform);
</script>
