<template>
  <the-header></the-header>
  <router-view></router-view>
</template>

<script setup>
import TheHeader from "./components/Headers/TheHeader.vue";
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
