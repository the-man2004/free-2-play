<template>
  <ul :class="classes">
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
    <div class="h-px my-2 bg-gray-900"></div>
    <button class="text-blue-500 font-semibold hover:text-blue-600">
      All PC Games
    </button>
  </ul>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  mode: {
    type: String,
    default: "mobile",
  },
});

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
