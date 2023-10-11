<template>
  <div>
    <ul>
      <game-item v-for="game in games" :key="game.id" :game="game"></game-item>
    </ul>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useGamesStore } from "../stores/useGamesStore";
import GameItem from "./GameItem.vue";

const gamesStore = useGamesStore();

const games = computed(() => gamesStore.gameData);
</script>
