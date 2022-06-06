<template>
  <!-- <div class="flex flex-col bg-scroll bg-repeat bg-[#85DCB2] bg-cover min-h-screen -z-10"> -->
  <div class="flex flex-col min-h-screen">
    <Background />
    <Navbar class="m-2 z-10" />
    <NuxtPage class="z-0" />
  </div>
</template>

<script setup>
useHead({
  title: 'Alan Wu',
  meta: [
    { name: 'description', content: "Alan Wu's homepage" }
  ],
})
</script>