<template>
  <div class="z-10" :class="classes">
    <ul @click="handleClick">
      <li>
        <router-link to="/"><button>Browser MMORPG</button></router-link>
      </li>
      <li>
        <router-link to="/"><button>Browser Shooter</button></router-link>
      </li>
      <li>
        <router-link to="/"><button>Browser Anime</button></router-link>
      </li>
      <li>
        <router-link to="/"><button>Browser Strategy</button></router-link>
      </li>
      <li>
        <router-link to="/"><button>Browser Fantasy</button></router-link>
      </li>
      <li>
        <router-link to="/"><button>Browser Sci-Fi</button></router-link>
      </li>
      <li>
        <router-link to="/"><button>Browser Racing</button></router-link>
      </li>
      <li>
        <router-link to="/"><button>Browser Social</button></router-link>
      </li>
      <li>
        <router-link to="/"><button>Browser Sports</button></router-link>
      </li>
    </ul>
    <div class="h-px my-2 bg-gray-900"></div>
    <button
      @click="handleAllGamesClick"
      class="text-blue-500 font-semibold hover:text-blue-600"
    >
      All Browser Games
    </button>
  </div>
</template>

<script setup>
import { useGamesStore } from "@/stores/useGamesStore";
import { computed } from "vue";

const gamesStore = useGamesStore();

const emit = defineEmits(["change"]);

const props = defineProps({
  mode: {
    type: String,
    default: "mobile",
  },
});

const handleClick = (event) => {
  const value = event.target.innerText;

  gamesStore.setFilters(
    "browser",
    "popularity",
    value.toLowerCase().split(" ")[1]
  );

  emit("change");
};
const handleAllGamesClick = () => {
  gamesStore.setFilters("browser", "popularity", null);

  emit("change");
};

const classes = computed(() => {
  if (props.mode === "desktop") {
    return {
      dropdown: true,
      absolute: true,
      "top-12": true,
      "w-48": true,
      "px-3": true,
      "py-3": true,
      "my-3": true,
      "rounded-md": true,
      "bg-gray-800": true,
    };
  } else {
    return {
      dropdown: true,
      absolute: false,
      "top-12": false,
      "w-48": false,
      "px-3": true,
      "py-3": true,
      "my-3": true,
      "rounded-md": true,
      "bg-gray-800": true,
    };
  }
});
</script>

<style scoped>
.dropdown li:hover {
  color: white;
}
</style>
