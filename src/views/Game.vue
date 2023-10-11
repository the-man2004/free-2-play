<template>
  <div>
    <h2>Game</h2>
    <p>Game ID: {{ id }}</p>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useGamesStore } from "../stores/useGamesStore";

const gamesStore = useGamesStore();

const props = defineProps(["id"]);

onMounted(() => {
  gamesStore.fetchGame(props.id);
});
</script>
