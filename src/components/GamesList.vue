<template>
  <div>
    <ul class="grid grid-cols-1 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <game-item v-for="game in games" :key="game.id" :game="game"></game-item>
    </ul>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useGamesStore } from "../stores/useGamesStore";
import GameItem from "./GameItem.vue";

const gamesStore = useGamesStore();

const games = computed(() => gamesStore.allGamesData);
</script>
