<template>
  <the-header></the-header>
  <router-view> </router-view>
  <the-footer></the-footer>
</template>

<script setup>
import TheHeader from "./components/Headers/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
</script>

<style>
html {
  scroll-behavior: smooth;
}

body {
  position: relative;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

img {
  aspect-ratio: 16 / 9;
}

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: rgb(15 23 42);
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(30 64 175);
}
</style>
