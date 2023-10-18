<template>
  <div class="bg-gray-900 text-gray-300">
    <div class="container mx-auto max-w-6xl py-3 px-8 leading-8">
      <mobile-header></mobile-header>
      <desktop-header></desktop-header>
    </div>
  </div>
</template>

<script setup>
import MobileHeader from "./MobileHeader.vue";
import DesktopHeader from "./DesktopHeader.vue";
</script>
