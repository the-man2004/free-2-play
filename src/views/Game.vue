<template>
  <div
    v-if="
      gamesStore.isLoading === false && gamesStore.selectedGame !== undefined
    "
  >
    <game-data></game-data>
  </div>
  <the-spinner v-else></the-spinner>
</template>

<script setup>
import { onMounted } from "vue";
import { useGamesStore } from "../stores/useGamesStore";
import GameData from "../components/GameData.vue";
import TheSpinner from "../components/Spinner/TheSpinner.vue";

const gamesStore = useGamesStore();

const props = defineProps(["id"]);

onMounted(() => {
  gamesStore.fetchGame(props.id);
});
</script>
