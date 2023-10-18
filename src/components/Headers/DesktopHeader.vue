<template>
  <!-- Big screen nav -->
  <nav class="hidden lg:flex flex-row">
    <div class="mr-7">
      <router-link @click="closeDropdowns" to="/" class="text-xl font-semibold"
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
          <PCDropdown mode="desktop" @change="closeDropdowns" />
        </div>
      </div>
      <div>
        <button @click="toggleBrowserGames">
          Browser Games
          <i class="fa-solid fa-sort-down relative -top-1 ml-px"></i>
        </button>
        <!-- Browser Games dropdown -->
        <div v-if="isBrowserGamesOpen">
          <BrowserDropdown mode="desktop" @change="closeDropdowns" />
        </div>
      </div>
      <router-link
        @click="closeDropdowns"
        to="/about"
        class="ml-7 font-semibold"
        >About</router-link
      >
    </div>
    <div class="ml-auto flex flex-row">
      <div>
        <search-bar @click="closeDropdowns"></search-bar>
      </div>
      <i class="fa-solid fa-magnifying-glass text-xl ml-2 my-auto"></i>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";

import SearchBar from "../SearchBar.vue";
import PCDropdown from "./HeaderDropdowns/PCDropdown.vue";
import BrowserDropdown from "./HeaderDropdowns/BrowserDropdown.vue";

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
