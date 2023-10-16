<template>
  <div class="bg-gray-900 text-gray-300">
    <div class="container mx-auto max-w-6xl py-3 px-8 leading-7">
      <!-- small screen nav -->
      <nav class="md:hidden">
        <div class="flex flex-row">
          <div>
            <router-link @click="closeMenu" to="/">Free-2-Play</router-link>
          </div>
          <div class="ml-auto cursor-pointer">
            <i @click="toggleMenu" class="fa-solid fa-bars"></i>
          </div>
        </div>
        <!-- small screen menu -->
        <div
          v-if="isMenuOpen"
          class="absolute pt-8 pb-4 px-8 left-0 right-0 bg-gray-900 md:hidden"
        >
          <ul>
            <li>
              <button @click="togglePCGames">
                PC Games <i class="fa-solid fa-sort-down"></i>
              </button>
              <ul
                v-if="isPCGamesOpen"
                class="px-3 py-3 my-3 rounded-md bg-gray-800"
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
                <button class="text-blue-500 font-semibold">
                  All PC Games
                </button>
              </ul>
            </li>
            <li>
              <button @click="toggleBrowserGames">
                Browser Games <i class="fa-solid fa-sort-down"></i>
              </button>
              <ul
                v-if="isBrowserGamesOpen"
                class="px-3 py-3 my-3 rounded-md bg-gray-800"
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
                <button class="text-blue-500 font-semibold">
                  All Browser Games
                </button>
              </ul>
            </li>
            <div class="h-px my-2 bg-gray-800"></div>
            <li>
              <router-link
                @click="closeMenu"
                class="text-blue-500 font-semibold"
                to="/about"
                >About</router-link
              >
            </li>
          </ul>
        </div>
      </nav>
      <!-- Big screen nav -->
      <nav class="hidden md:flex flex-row">
        <div>
          <router-link to="/">Free-2-Play</router-link>
        </div>
        <div>
          <button>PC Games <i class="fa-solid fa-sort-down"></i></button>
          <button>Browser Games <i class="fa-solid fa-sort-down"></i></button>
          <router-link to="/about">About</router-link>
        </div>
        <div>
          <i class="fa-solid fa-gear"></i>
        </div>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isMenuOpen = ref(false);
const isPCGamesOpen = ref(false);
const isBrowserGamesOpen = ref(false);

// const openMenu = () => {
//   isMenuOpen.value = true;
// };
const closeMenu = () => {
  isMenuOpen.value = false;

  // Close the other dropdown
  isPCGamesOpen.value = false;
  isBrowserGamesOpen.value = false;
};
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;

  // Close the other dropdown
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
