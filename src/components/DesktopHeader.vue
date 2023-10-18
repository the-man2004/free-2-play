<template>
  <!-- Big screen nav -->
  <nav class="hidden lg:flex flex-row">
    <div class="mr-7">
      <router-link to="/" class="text-xl font-semibold"
        >Free-2-Play</router-link
      >
    </div>
    <div class="md:flex flex-row">
      <div class="mr-7">
        <button @click="togglePCGames">
          PC Games <i class="fa-solid fa-sort-down relative -top-1 ml-px"></i>
        </button>
        <!-- PC Games dropdown -->
        <div v-if="isPCGamesOpen">
          <ul
            class="dropdown absolute top-12 w-48 px-3 py-3 my-3 rounded-md bg-gray-800"
          >
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
        </div>
      </div>
      <div>
        <button @click="toggleBrowserGames">
          Browser Games
          <i class="fa-solid fa-sort-down relative -top-1 ml-px"></i>
        </button>
        <!-- Browser Games dropdown -->
        <div v-if="isBrowserGamesOpen">
          <ul
            class="dropdown absolute top-12 w-48 px-3 py-3 my-3 rounded-md bg-gray-800"
          >
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
        </div>
      </div>
      <router-link to="/about" class="ml-7 font-semibold">About</router-link>
    </div>
    <div class="ml-auto flex flex-row">
      <div>
        <search-bar @click="closeDropdowns"></search-bar>
      </div>
      <button @click="handleSearch">
        <i class="fa-solid fa-magnifying-glass text-xl ml-2"></i>
      </button>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";

import SearchBar from "./SearchBar.vue";

const isPCGamesOpen = ref(false);
const isBrowserGamesOpen = ref(false);

// Dropdown functions
const closeDropdowns = () => {
  // Close the other dropdowns
  isPCGamesOpen.value = false;
  isBrowserGamesOpen.value = false;
};

const togglePCGames = () => {
  isPCGamesOpen.value = !isPCGamesOpen.value;
  // Close the other dropdown
  isBrowserGamesOpen.value = false;
};

const toggleBrowserGames = () => {
  isBrowserGamesOpen.value = !isBrowserGamesOpen.value;
  // Close the other dropdown
  isPCGamesOpen.value = false;
};
</script>

<style scoped>
.dropdown li:hover {
  color: white;
}
</style>
