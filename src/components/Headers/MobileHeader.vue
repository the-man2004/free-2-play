<template>
  <!-- small screen nav -->
  <div
    class="lg:hidden bg-gray-900 text-gray-300 border-b-blue-800 border-t-0 border-x-0 border-b-2"
  >
    <div class="container mx-auto max-w-6xl px-8 leading-8">
      <nav class="">
        <div class="z-40 relative py-3 flex flex-row bg-gray-900">
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
        <transition name="slide-in">
          <div
            v-if="isMenuOpen"
            class="z-20 absolute pt-8 pb-4 px-8 left-0 right-0 border-b-blue-800 border-t-0 border-x-0 border-b-2 bg-gray-900 lg:hidden"
          >
            <search-bar @clicked="closeMenu"></search-bar>
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
                <BrowserDropdown
                  v-if="isBrowserGamesOpen"
                  @change="closeMenu"
                />
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
        </transition>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

import SearchBar from "../Search/SearchBar.vue";
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

/* Slide from top transition */
.slide-in-enter-from {
  opacity: 0;
  transform: translateY(-672px);
}
.slide-in-enter-active {
  transition: all 0.5s ease;
}

.slide-in-leave-to {
  opacity: 0;
  transform: translateY(-672px);
}
.slide-in-leave-active {
  transition: all 0.3s ease;
}
</style>
