<template>
  <!-- small screen nav -->
  <nav class="lg:hidden">
    <div class="flex flex-row">
      <div>
        <router-link @click="closeMenu" to="/" class="text-lg font-semibold"
          >Free-2-Play</router-link
        >
      </div>
      <div class="ml-auto cursor-pointer">
        <i @click="toggleMenu" class="fa-solid fa-bars text-xl"></i>
      </div>
    </div>
    <!-- small screen menu -->
    <div
      v-if="isMenuOpen"
      class="absolute pt-8 pb-4 px-8 left-0 right-0 bg-gray-900 lg:hidden"
    >
      <search-bar></search-bar>
      <div class="h-px my-2 bg-gray-800"></div>
      <ul>
        <li>
          <button @click="togglePCGames">
            PC Games
            <i class="fa-solid fa-sort-down relative -top-1 ml-px"></i>
          </button>
          <PCDropdown v-if="isPCGamesOpen" @change="closeMenu" />
        </li>
        <li>
          <button @click="toggleBrowserGames">
            Browser Games
            <i class="fa-solid fa-sort-down relative -top-1 ml-px"></i>
          </button>
          <BrowserDropdown v-if="isBrowserGamesOpen" @change="closeMenu" />
        </li>
        <div class="h-px my-2 bg-gray-800"></div>
        <li>
          <router-link
            @click="closeMenu"
            class="text-blue-500 font-semibold hover:text-blue-600"
            to="/about"
            >About</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";

import SearchBar from "../SearchBar.vue";
import PCDropdown from "./HeaderDropdowns/PCDropdown.vue";
import BrowserDropdown from "./HeaderDropdowns/BrowserDropdown.vue";

const isMenuOpen = ref(false);
const isPCGamesOpen = ref(false);
const isBrowserGamesOpen = ref(false);

// Dropdown functions
const closeDropdowns = () => {
  // Close the other dropdowns
  isPCGamesOpen.value = false;
  isBrowserGamesOpen.value = false;
};

const closeMenu = () => {
  isMenuOpen.value = false;
  closeDropdowns();
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  // closeDropdowns();
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
