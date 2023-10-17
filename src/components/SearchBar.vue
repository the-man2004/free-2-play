<template>
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
</template>

<script setup>
import { ref } from "vue";

const searchValue = ref("");

// Search function
const handleSearch = () => {
  console.log(searchValue.value);

  searchValue.value = "";
};
</script>
