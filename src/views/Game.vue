<template>
  <div
    v-if="
      gamesStore.isLoading === false &&
      gamesStore.selectedGame !== undefined &&
      gamesStore.error === null
    "
  >
    <game-data></game-data>
  </div>
  <the-error
    v-else-if="gamesStore.error !== null"
    mode="game"
    :id="props.id"
  ></the-error>
  <the-spinner v-else></the-spinner>
</template>

<script setup>
import { onMounted } from "vue";
import { useGamesStore } from "../stores/useGamesStore";
import GameData from "../components/GameData.vue";
import TheSpinner from "../components/Spinner/TheSpinner.vue";
import TheError from "../components/ErrorComponents/TheError.vue";

const gamesStore = useGamesStore();

const props = defineProps(["id"]);

onMounted(() => {
  gamesStore.fetchGame(props.id);
});
</script>
