<template>
  <div>
    <transition-group
      appear
      tag="ul"
      @before-enter="beforeEnter"
      @enter="enter"
      class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
    >
      <game-item
        v-for="(game, index) in games"
        :data-index="index"
        :key="game.id"
        :game="game"
      ></game-item>
    </transition-group>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useGamesStore } from "../stores/useGamesStore";
import gsap from "gsap";
import GameItem from "./GameItem.vue";

const gamesStore = useGamesStore();

const games = computed(() => gamesStore.allGamesData);

const beforeEnter = (el) => {
  el.style.opacity = 0;
  el.style.transform = "translateY(250px)";
};
const enter = (el, done) => {
  gsap.to(el, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    onComplete: done,
    delay: el.dataset.index * 0.1,
  });
};
</script>
