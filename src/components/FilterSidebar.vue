<template>
  <!-- Filter button -->
  <button
    @click="toggleSidebar"
    id="filter-btn"
    class="opacity-0 font-semibold mt-12 py-1 px-8 rounded-full bg-blue-500 md:mt-16 md:text-xl"
  >
    <i class="fa-solid fa-sort"></i>
    Sort
  </button>
  <teleport to="body">
    <!-- Modal -->
    <transition name="slide-in">
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
                <figcaption class="mb-2 text-md md:text-xl">
                  <button @click="togglePlatform">
                    Platform
                    <i class="fa-solid fa-sort-down relative -top-1 ml-px"></i>
                  </button>
                </figcaption>
                <ul
                  v-if="isPlatformOpen"
                  @click="handlePlatformClick"
                  class="mt-4 p-4 rounded-lg bg-gray-800"
                >
                  <li><button>PC</button></li>
                  <li><button>Browser</button></li>
                  <li><button>All</button></li>
                </ul>
              </figure>
            </div>
            <div class="h-px my-2 bg-gray-800"></div>
            <div>
              <figure>
                <figcaption class="mb-2 text-md md:text-xl">
                  <button @click="toggleRelevance">
                    Sort By
                    <i class="fa-solid fa-sort-down relative -top-1 ml-px"></i>
                  </button>
                </figcaption>
                <ul
                  v-if="isSortByOpen"
                  @click="handleSortByClick"
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
                <figcaption class="mb-2 text-md md:text-xl">
                  <button @click="toggleGenre">
                    Genre
                    <i class="fa-solid fa-sort-down relative -top-1 ml-px"></i>
                  </button>
                </figcaption>
                <ul
                  v-if="isGenreOpen"
                  @click="handleGenreClick"
                  class="max-h-32 overflow-y-auto mt-4 p-4 rounded-lg bg-gray-800 md:max-h-80"
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
          <div>
            <figure>
              <figcaption class="text-xl mb-4">Selected Filters</figcaption>
              <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                <li>
                  Platform:
                  <span class="text-blue-500">{{ selectedPlatform }}</span>
                </li>
                <li>
                  Sort:
                  <span class="text-blue-500">{{ selectedSortBy }}</span>
                </li>
                <li>
                  Genre:
                  <span class="text-blue-500">{{
                    selectedGenre === null ? "none" : selectedGenre
                  }}</span>
                </li>
              </ul>
            </figure>
          </div>
          <button
            @click="applyChanges"
            class="mt-6 py-1 px-8 mr-2 rounded-full bg-blue-500 md:text-xl"
          >
            APPLY
          </button>
        </div>
      </div>
    </transition>
    <!-- Backdrop -->
    <transition name="fade">
      <div
        v-if="isSidebarOpen"
        @click="toggleSidebar"
        class="z-20 absolute inset-0 bg-black opacity-40"
      ></div>
    </transition>
  </teleport>
</template>

<script setup>
import { useGamesStore } from "@/stores/useGamesStore";
import { ref } from "vue";

const gamesStore = useGamesStore();

// Dropdowns and sidebar variables
const isSidebarOpen = ref(false);

const isPlatformOpen = ref(false);
const isSortByOpen = ref(false);
const isGenreOpen = ref(false);

// Filter and Sort variables
const selectedPlatform = ref("all");
const selectedSortBy = ref("popularity");
const selectedGenre = ref(null);

// Dropdowns and sidebar functions
const closeDropdowns = () => {
  isPlatformOpen.value = false;
  isSortByOpen.value = false;
  isGenreOpen.value = false;
};

const toggleSidebar = () => {
  closeDropdowns();

  isSidebarOpen.value = !isSidebarOpen.value;
};

const togglePlatform = () => {
  isSortByOpen.value = false;
  isGenreOpen.value = false;

  isPlatformOpen.value = !isPlatformOpen.value;
};
const toggleRelevance = () => {
  isPlatformOpen.value = false;
  isGenreOpen.value = false;

  isSortByOpen.value = !isSortByOpen.value;
};
const toggleGenre = () => {
  isPlatformOpen.value = false;
  isSortByOpen.value = false;

  isGenreOpen.value = !isGenreOpen.value;
};

// Helper functions
const checkValue = (event) => {
  const el = event.target;

  if (el.nodeName === "BUTTON") {
    return el.innerText.toLowerCase().split(" ").join("-");
  }
};

// Click handlers
const handlePlatformClick = (event) => {
  closeDropdowns();

  const value = checkValue(event);

  if (value !== undefined) {
    selectedPlatform.value = value;
  }
};

const handleSortByClick = (event) => {
  closeDropdowns();

  const value = checkValue(event);

  if (value !== undefined) {
    selectedSortBy.value = value;
  }
};

const handleGenreClick = (event) => {
  closeDropdowns();

  const value = checkValue(event);

  if (value !== undefined) {
    selectedGenre.value = value;
  }
};

// Apply changes
const applyChanges = () => {
  toggleSidebar();

  gamesStore.setFilters(
    selectedPlatform.value,
    selectedSortBy.value,
    selectedGenre.value
  );
};
</script>

<style scoped>
#filter-btn {
  animation-iteration-count: 1;
  animation: fadein 0.5s normal forwards ease;
  animation-delay: 1s;
}

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
  background: rgb(30 64 175);
}

/* Filter button animation styling */
@keyframes fadein {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  75% {
    transform: scale(1.1);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* //////////////////////// */
/* Slide transition styling */
.slide-in-enter-from {
  transform: translateX(672px);
}
.slide-in-enter-active {
  transition: all 0.5s ease-in;
}

.slide-in-leave-to {
  transform: translateX(672px);
}
.slide-in-leave-active {
  transition: all 0.3s ease-out;
}

/* /////////////// */
/* Fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
