<template>
  <div>
    <button @click="openSearch">
      <i class="fa-solid fa-magnifying-glass text-xl my-auto"></i>
    </button>
  </div>
  <teleport to="body">
    <!-- Search Modal -->
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

      <div class="p-4 mt-8">
        <div>
          <h3 class="text-lg font-semibold">Recommended</h3>
        </div>
      </div>
    </div>
    <!-- Backdrop -->
    <div
      @click="closeSearch"
      v-if="isSearchOpen"
      class="z-40 absolute inset-0 backdrop-blur-sm"
    ></div>
  </teleport>
</template>

<script setup>
import { ref } from "vue";

const isSearchOpen = ref(false);
const searchValue = ref("");

// Handle opening and closing search
const openSearch = () => {
  isSearchOpen.value = true;
};

const closeSearch = () => {
  isSearchOpen.value = false;
};
// Search function
const handleSearch = () => {
  console.log(searchValue.value);

  searchValue.value = "";
};
</script>
