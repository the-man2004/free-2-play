<template>
  <li>
    <router-link :to="`/game/${id}`">
      <img :src="img" alt="Game thumbnail" loading="lazy" />
      <div>
        <h2>{{ title }}</h2>
        <span>FREE</span>
      </div>
      <div>
        <p>{{ description }}</p>
      </div>
      <div>
        <span>{{ genre }}</span>
        <svg
          v-if="platform === 'pc'"
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 448 512"
        >
          <path
            d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"
          />
        </svg>
        <svg
          v-if="platform === 'browser'"
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 512 512"
        >
          <path
            d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM96 96H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32s14.3-32 32-32z"
          />
        </svg>
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
const description = computed(() => {
  const desc = props.game.short_description;
  if (desc.length > 30) {
    return desc.slice(0, 30) + "...";
  } else {
    return desc;
  }
});
const genre = computed(() => props.game.genre);
const platform = computed(() =>
  props.game.platform === "PC (Windows)" ? "pc" : "browser"
);
</script>
