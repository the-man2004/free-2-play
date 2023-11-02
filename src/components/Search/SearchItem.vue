<template>
  <li @click="handleClick">
    <router-link
      :to="`/game/${id}`"
      class="flex flex-row py-3 border-t-2 border-gray-700"
    >
      <div>
        <img :src="thumbnail" alt="" class="h-16" />
      </div>
      <div class="mr-2 ml-2">
        <h3 class="font-bold">{{ title }}</h3>
        <div class="text-sm">
          <span class="mr-2">{{ genre }}</span>
          <i v-if="platform === 'pc'" class="fa-brands fa-windows"></i>
          <i v-else class="fa-regular fa-window-maximize"></i>
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
const emit = defineEmits(["clicked"]);

const title = computed(() => props.game.title);
const genre = computed(() => props.game.genre);
const id = computed(() => props.game.id);
const thumbnail = computed(() => props.game.thumbnail);
const platform = computed(() =>
  props.game.platform === "PC (Windows)" ? "pc" : "browser"
);

const handleClick = () => {
  scrollToTop();
  emit("clicked");
};

const scrollToTop = () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};
</script>
