<template>
  <div class="min-h-screen bg-slate-900 text-gray-300">
    <div class="relative h-screen">
      <div class="absolute top-1/2 left-0 right-0 -translate-y-1/2">
        <h2
          class="text-center underline text-2xl font-semibold text-red-500 sm:text-4xl md:text-5xl"
        >
          {{ gamesStore.error }}
        </h2>
        <div>
          <button @click="tryAgain" class="block mt-4 mx-auto text-blue-500">
            Try Again
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useGamesStore } from "../../stores/useGamesStore";

const props = defineProps({
  mode: {
    type: String,
    default: "home",
    required: true,
  },
  id: {
    type: Number,
    required: false,
  },
});

const gamesStore = useGamesStore();

const tryAgain = () => {
  if (props.mode === "home") {
    gamesStore.fetchListOfGames();
  } else {
    gamesStore.fetchGame(props.id);
  }
};
</script>
