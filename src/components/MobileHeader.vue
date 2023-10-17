<template>
  <!-- small screen nav -->
  <nav class="md:hidden">
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
      class="absolute pt-8 pb-4 px-8 left-0 right-0 bg-gray-900 md:hidden"
    >
      <div class="flex flex-col">
        <form @submit.prevent="handleSearch">
          <input
            v-model="searchValue"
            class="outline-none w-full bg-gray-900"
            type="text"
            placeholder="Search..."
          />
        </form>
      </div>
      <div class="h-px my-2 bg-gray-800"></div>
      <ul>
        <li>
          <button @click="togglePCGames">
            PC Games
            <i class="fa-solid fa-sort-down relative -top-1 ml-px"></i>
          </button>
          <ul
            v-if="isPCGamesOpen"
            class="dropdown px-3 py-3 my-3 rounded-md bg-gray-800"
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
        </li>
        <li>
          <button @click="toggleBrowserGames">
            Browser Games
            <i class="fa-solid fa-sort-down relative -top-1 ml-px"></i>
          </button>
          <ul
            v-if="isBrowserGamesOpen"
            class="dropdown px-3 py-3 my-3 rounded-md bg-gray-800"
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

const isMenuOpen = ref(false);
const isPCGamesOpen = ref(false);
const isBrowserGamesOpen = ref(false);

const searchValue = ref("");

// Search function
const handleSearch = () => {
  console.log(searchValue.value);

  searchValue.value = "";
};

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
  closeDropdowns();
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
