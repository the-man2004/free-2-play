<template>
  <div class="min-h-screen bg-slate-900 text-gray-300">
    <the-spinner v-if="gamesStore.isLoading === true"></the-spinner>
    <the-error v-else-if="gamesStore.error !== null" mode="game"></the-error>
    <div v-else class="container mx-auto max-w-6xl px-8 pb-16">
      <div class="pt-12 pb-8 md:pt-24">
        <!-- <transition name="slide"> -->
        <h1 class="mb-3 font-semibold text-4xl md:mb-6 md:text-5xl">
          {{ gamesStore.selectedPlatform[0] }}
        </h1>
        <!-- </transition> -->
        <p class="opacity-0 mb-3 md:mb-6 md:text-xl">
          {{ gamesStore.numOfResults }}
          <span>free to play </span>
          <span
            >{{ gamesStore.selectedPlatform[1] }} found in our games list!</span
          >
        </p>
        <div>
          <filter-sidebar></filter-sidebar>
        </div>
      </div>
      <div id="games-list-container" class="opacity-0">
        <games-list></games-list>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useGamesStore } from "../stores/useGamesStore";
import GamesList from "../components/GamesList.vue";
import FilterSidebar from "@/components/FilterSidebar.vue";
import TheSpinner from "../components/Spinner/TheSpinner.vue";
import TheError from "../components/ErrorComponents/TheError.vue";

const gamesStore = useGamesStore();

onMounted(() => {
  if (!gamesStore.allGamesData) {
    gamesStore.fetchListOfGames();
  }
});
</script>

<style scoped>
h1 {
  animation-iteration-count: 1;
  animation: slidein 0.5s normal forwards ease;
}

p {
  animation-iteration-count: 1;
  animation: fadein 0.5s normal forwards ease;
  animation-delay: 0.5s;
}

#games-list-container {
  animation-iteration-count: 1;
  animation: slidein 0.5s normal forwards ease;
  animation-delay: 1s;
}

/* Title animation styling */
@keyframes slidein {
  from {
    opacity: 0;
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Paragraph animation styling */
@keyframes fadein {
  from {
    opacity: 0;
    transform: translateY(100px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
