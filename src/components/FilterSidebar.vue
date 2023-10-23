<template>
  <!-- Filter button -->
  <button
    @click="toggleSidebar"
    class="font-semibold mt-12 py-1 px-8 rounded-full bg-blue-500 md:mt-16 md:text-xl"
  >
    <i class="fa-solid fa-sort"></i>
    Sort
  </button>
  <teleport to="body">
    <!-- Modal -->
    <div
      v-if="isSidebarOpen"
      class="z-40 w-3/4 max-w-2xl h-screen fixed top-0 right-0 flex flex-col bg-slate-900 text-gray-300 md:w-1/2"
    >
      <nav class="p-8 relative">
        <div class="">
          <div class="flex flex-row text-xl font-semibold mb-12 md:mb-24">
            <p>Filter and Sort</p>
            <button @click="toggleSidebar" class="ml-auto">
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
          <div>
            <figure>
              <figcaption class="mb-2 text-xl">
                <button @click="togglePlatform">
                  Platform
                  <i class="fa-solid fa-sort-down relative -top-1 ml-px"></i>
                </button>
              </figcaption>
              <ul v-if="isPlatformOpen" class="mt-4 p-4 rounded-lg bg-gray-800">
                <li><button>PC</button></li>
                <li><button>Browser</button></li>
                <li><button>All</button></li>
              </ul>
            </figure>
          </div>
          <div class="h-px my-2 bg-gray-800"></div>
          <div>
            <figure>
              <figcaption class="mb-2 text-xl">
                <button @click="toggleRelevance">
                  Relevance
                  <i class="fa-solid fa-sort-down relative -top-1 ml-px"></i>
                </button>
              </figcaption>
              <ul
                v-if="isRelevanceOpen"
                class="mt-4 p-4 rounded-lg bg-gray-800"
              >
                <li><button>Relevance</button></li>
                <li><button>Popularity</button></li>
                <li><button>Release Date</button></li>
                <li><button>Alphabetical</button></li>
              </ul>
            </figure>
          </div>
          <div class="h-px my-2 bg-gray-800"></div>
          <div class="mb-4">
            <figure>
              <figcaption class="mb-2 text-xl">
                <button @click="toggleGenre">
                  Genre
                  <i class="fa-solid fa-sort-down relative -top-1 ml-px"></i>
                </button>
              </figcaption>
              <ul
                v-if="isGenreOpen"
                class="max-h-64 overflow-y-auto mt-4 p-4 rounded-lg bg-gray-800 md:max-h-80"
              >
                <li><button>MMO</button></li>
                <li><button>MMORPG</button></li>
                <li><button>Shooter</button></li>
                <li><button>Strategy</button></li>
                <li><button>Battle Royale</button></li>
                <li><button>racing</button></li>
                <li><button>Sports</button></li>
                <li><button>Fighting</button></li>
                <p>Popular</p>
                <li><button>MMOFPS</button></li>
                <li><button>Action RPG</button></li>
                <li><button>Sandbox</button></li>
                <li><button>Open World</button></li>
                <li><button>Survival</button></li>
                <li><button>Battle Royale</button></li>
                <li><button>Anime</button></li>
                <li><button>PvP</button></li>
                <li><button>PvE</button></li>
                <li><button>Fantasy</button></li>
                <li><button>Sci-Fi</button></li>
                <li><button>Action</button></li>
                <li><button>Zombie</button></li>
                <li><button>Turn Based</button></li>
                <li><button>First Person View</button></li>
                <li><button>Third Person View</button></li>
                <li><button>Space</button></li>
              </ul>
            </figure>
          </div>
        </div>
      </nav>
      <div class="font-semibold mt-auto p-8">
        <button class="py-1 px-8 mr-2 rounded-full bg-blue-500 md:text-xl">
          APPLY
        </button>
      </div>
    </div>
    <!-- Backdrop -->
    <div
      v-if="isSidebarOpen"
      @click="toggleSidebar"
      class="z-20 absolute inset-0 bg-black opacity-40"
    ></div>
  </teleport>
</template>

<script setup>
import { ref } from "vue";

const isSidebarOpen = ref(false);

const isPlatformOpen = ref(false);
const isRelevanceOpen = ref(false);
const isGenreOpen = ref(false);

const closeDropdowns = () => {
  isPlatformOpen.value = false;
  isRelevanceOpen.value = false;
  isGenreOpen.value = false;
};

const toggleSidebar = () => {
  closeDropdowns();

  isSidebarOpen.value = !isSidebarOpen.value;
};

const togglePlatform = () => {
  isRelevanceOpen.value = false;
  isGenreOpen.value = false;

  isPlatformOpen.value = !isPlatformOpen.value;
};
const toggleRelevance = () => {
  isPlatformOpen.value = false;
  isGenreOpen.value = false;

  isRelevanceOpen.value = !isRelevanceOpen.value;
};
const toggleGenre = () => {
  isPlatformOpen.value = false;
  isRelevanceOpen.value = false;

  isGenreOpen.value = !isGenreOpen.value;
};
</script>

<style scoped>
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: rgb(31 41 55);
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
