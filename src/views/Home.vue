<template>
  <div>
    <h1>{{ gamesStore.selectedPlatform[0] }}</h1>
    <p>
      {{ gamesStore.numOfResults }} free-2-play
      <span>{{ gamesStore.selectedPlatform[1] }} found in our games list!</span>
    </p>
    <button>Filter</button>
  </div>
  <games-list></games-list>
</template>

<script setup>
import { useGamesStore } from "../stores/useGamesStore";
import GamesList from "../components/GamesList.vue";

const gamesStore = useGamesStore();
</script>
