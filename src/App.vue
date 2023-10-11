<template>
  <the-header></the-header>
  <router-view></router-view>
</template>

<script setup>
import { useGamesStore } from "./stores/useGamesStore";
import TheHeader from "./components/TheHeader.vue";
import { onMounted } from "vue";

const gamesStore = useGamesStore();

onMounted(() => {
  gamesStore.fetchListOfGames();
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
