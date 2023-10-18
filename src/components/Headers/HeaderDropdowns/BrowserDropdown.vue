<template>
  <ul :class="classes">
    <li><button>Browser MMORPG</button></li>
    <li><button>Browser Shooter</button></li>
    <li><button>Browser Anime</button></li>
    <li><button>Browser Strategy</button></li>
    <li><button>Browser Fantasy</button></li>
    <li><button>Browser Sci-Fi</button></li>
    <li><button>Browser Racing</button></li>
    <li><button>Browser Social</button></li>
    <li><button>Browser Sports</button></li>
    <div class="h-px my-2 bg-gray-900"></div>
    <button class="text-blue-500 font-semibold hover:text-blue-600">
      All Browser Games
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
