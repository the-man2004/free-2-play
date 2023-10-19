<template>
  <li class="rounded-lg bg-gray-800">
    <router-link :to="`/game/${id}`">
      <img
        class="w-full rounded-t-lg"
        :src="img"
        alt="Game thumbnail"
        loading="lazy"
      />
      <div class="p-3">
        <div class="pb-3">
          <h2 class="text-lg font-semibold">{{ title }}</h2>
        </div>
        <div class="flex flex-row">
          <div class="my-auto">
            <span class="mr-2">{{ genre }}</span>
            <i v-if="platform === 'pc'" class="fa-brands fa-windows"></i>
            <i v-else class="fa-regular fa-window-maximize"></i>
          </div>
          <span
            class="ml-auto font-semibold py-1 px-4 rounded-full bg-gray-700 text-blue-500"
            >FREE</span
          >
        </div>
      </div>
    </router-link>
  </li>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  game: Object,
});

const id = computed(() => props.game.id);

const img = computed(() => props.game.thumbnail);
const title = computed(() => {
  const t = props.game.title;
  if (t.length > 20) {
    return t.slice(0, 20) + "...";
  } else {
    return t;
  }
});
// const description = computed(() => {
//   const desc = props.game.short_description;
//   if (desc.length > 30) {
//     return desc.slice(0, 30) + "...";
//   } else {
//     return desc;
//   }
// });
const genre = computed(() => props.game.genre);
const platform = computed(() =>
  props.game.platform === "PC (Windows)" ? "pc" : "browser"
);
</script>

<style scoped>
li:hover {
  transform: scale(1.01);
  transition: all 0.3s ease;
}
</style>
