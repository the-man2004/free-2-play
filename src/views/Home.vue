<template>
  <div class="min-h-screen bg-slate-900 text-gray-300">
    <div class="container mx-auto max-w-6xl px-8 pb-16">
      <div class="pt-12 pb-8 md:pt-24">
        <h1 class="mb-3 font-semibold text-4xl md:mb-6 md:text-5xl">
          {{ gamesStore.selectedPlatform[0] }}
        </h1>
        <p class="mb-3 md:mb-6 md:text-xl">
          {{ gamesStore.numOfResults }}
          <span>free to play </span>
          <span
            >{{ gamesStore.selectedPlatform[1] }} found in our games list!</span
          >
        </p>
        <button
          class="font-semibold mt-12 py-1 px-4 rounded-full bg-blue-500 md:mt-16 md:text-xl"
        >
          Filter
        </button>
      </div>
      <games-list></games-list>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useGamesStore } from "../stores/useGamesStore";
import GamesList from "../components/GamesList.vue";

const gamesStore = useGamesStore();

onMounted(() => {
  if (!gamesStore.allGamesData) {
    gamesStore.fetchListOfGames();
  }
});
</script>
