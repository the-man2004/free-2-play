<template>
  <div
    v-if="
      gamesStore.isLoading === false && gamesStore.selectedGame !== undefined
    "
  >
    <game-data></game-data>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useGamesStore } from "../stores/useGamesStore";
import GameData from "../components/GameData.vue";

const gamesStore = useGamesStore();

const props = defineProps(["id"]);

onMounted(() => {
  gamesStore.fetchGame(props.id);
});
</script>
