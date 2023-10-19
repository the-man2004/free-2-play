<template>
  <div class="z-10" :class="classes">
    <ul @click="handleClick">
      <li><button>MMORPG</button></li>
      <li><button>Shooter</button></li>
      <li><button>MOBA</button></li>
      <li><button>Anime</button></li>
      <li><button>Battle Royale</button></li>
      <li><button>Strategy</button></li>
      <li><button>Sci-Fi</button></li>
      <li><button>Card Games</button></li>
      <li><button>Racing</button></li>
      <li><button>Fighting</button></li>
      <li><button>Social</button></li>
      <li><button>Sports</button></li>
    </ul>
    <div class="h-px my-2 bg-gray-900"></div>
    <button
      @click="handleAllGamesClick"
      class="text-blue-500 font-semibold hover:text-blue-600"
    >
      All PC Games
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

  gamesStore.setFilters("pc", value.toLowerCase().split(" ").join("-"));

  emit("change");
};

const handleAllGamesClick = () => {
  gamesStore.setFilters("pc", null);

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
