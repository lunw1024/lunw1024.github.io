<script setup>
import Navbar from './components/Navbar.vue'
import bgimg from './assets/bg-rhythm.png'
</script>

<template>
  <div
    class="flex flex-col bg-fixed w-screen h-screen bg-scroll bg-repeat bg-cover"
    :style="{ 'background-image': 'url(' + bgimg + ')' }"
  >
    <Navbar class="m-2 z-1" />
    <router-view class="z-0"/>
  </div>
</template>

