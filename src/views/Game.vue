<template>
  <div>
    <h2>Game</h2>
    <p>Game ID: {{ id }}</p>
  </div>
</template>

<script setup>
const props = defineProps(["id"]);
</script>
