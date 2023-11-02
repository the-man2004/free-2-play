<template>
  <div>
    <button @click="openSearch">
      <i class="fa-solid fa-magnifying-glass text-xl my-auto"></i>
    </button>
  </div>
  <teleport to="body">
    <!-- Search Modal -->
    <transition name="grow">
      <div
        v-if="isSearchOpen"
        @keydown.esc="closeSearch"
        class="z-50 fixed inset-8 max-w-3xl max-h-[800px] mx-auto flex flex-col rounded-2xl text-gray-300 bg-gray-800"
      >
        <div class="flex flex-row p-4">
          <form @submit.prevent="handleSearch" class="flex flex-row w-full">
            <i class="fa-solid fa-magnifying-glass text-xl mr-4"></i>
            <input
              v-model="searchValue"
              class="outline-none w-full mr-4 bg-inherit placeholder-gray-300"
              type="text"
              placeholder="Search for a game..."
            />
          </form>
          <button
            @click="closeSearch"
            class="ml-auto my-auto py-1 px-2 text-center rounded-lg text-xs bg-gray-600"
          >
            ESC
          </button>
        </div>

        <div class="h-px w-full bg-blue-500"></div>

        <div class="px-4 mt-6 mb-6">
          <h3 class="text-lg font-semibold">Recommended</h3>
        </div>

        <div class="px-4 mb-8 overflow-y-auto">
          <div>
            <div>
              <ul>
                <search-item
                  v-for="(game, i) in gamesStore.defaultSearchResults"
                  :key="i"
                  :game="game"
                  @clicked="closeSearch"
                ></search-item>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <!-- Backdrop -->
    <transition name="fade">
      <div
        @click="closeSearch"
        v-if="isSearchOpen"
        class="z-40 absolute inset-0 backdrop-blur-sm"
      ></div>
    </transition>
  </teleport>
</template>

<script setup>
import { ref } from "vue";
import { useGamesStore } from "../../stores/useGamesStore";
import SearchItem from "./SearchItem.vue";

const emit = defineEmits(["clicked"]);

const gamesStore = useGamesStore();

const isSearchOpen = ref(false);
const searchValue = ref("");

// Handle opening and closing search
const openSearch = () => {
  isSearchOpen.value = true;
};

const closeSearch = () => {
  isSearchOpen.value = false;
  emit("clicked");
};
// Search function
const handleSearch = () => {
  console.log(searchValue.value);

  searchValue.value = "";
};
</script>

<style scoped>
/* Track */
::-webkit-scrollbar-track {
  background: rgb(31 41 55);
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(59 130 246);
}

/* //////////////////////// */
/* grow transition styling */
.grow-enter-from {
  opacity: 0;
  transform: scale(0.8);
}
.grow-enter-active {
  transition: all 0.3s ease-in;
}

.grow-leave-to {
  opacity: 0;
  transform: scaleY(0);
}
.grow-leave-active {
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
