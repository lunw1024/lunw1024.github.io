<script setup>
import favicon from '../assets/favicon.png'
import { Icon } from '@iconify/vue'

</script>

<template>
  <div class="navbar border-1 border-black rounded-2xl w-auto">
    <div class="navbar-start">
      <div class="dropdown md:hidden">
        <label tabindex="0" class="btn btn-ghost btn-square rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
        <ul tabindex="0" class="menu dropdown-content p-2 border-2 border-black rounded-2xl">
          <li><NuxtLink class="btn btn-ghost btn-sm" to="/blog">Blog</NuxtLink></li>
          <li><NuxtLink class="btn btn-ghost btn-sm" to="/projects">Projects</NuxtLink></li>
          <li><a class="btn btn-ghost btn-sm">Resume</a></li>
          <li><NuxtLink class="btn btn-ghost btn-sm" to="/contacts">Contact</NuxtLink></li>
        </ul>
      </div>
      <NuxtLink class="btn btn-ghost btn-circle text-lg font-bold mx-4 p-2" to="/">
        <img :src="favicon" alt="AW" class="object-contain">
      </NuxtLink>
    </div>
    <div class="navbar-center"> </div>
    <div class="navbar-end">
      <div class="flex hidden md:inline items-center ">
        <NuxtLink class="btn btn-ghost btn-sm rounded-lg align-middle" to="/blog">Blog</NuxtLink>
        <NuxtLink class="btn btn-ghost btn-sm rounded-lg align-middle" to="/projects">Projects</NuxtLink>
        <a class="btn btn-ghost btn-sm rounded-lg align-middle">Resume</a>
        <NuxtLink class="btn btn-ghost  btn-sm rounded-lg align-middle" to="/contacts">Contact</NuxtLink>
        <a href="https://github.com/lunw1024" target="_blank" rel="noopener noreferrer" class="btn btn-ghost btn-sm btn-circle align-middle">
          <Icon icon="fa6-brands:github" class="h-5 w-5"/>
        </a>
        <a href="https://www.linkedin.com/in/lunw1024/" target="_blank" rel="noopener noreferrer" class="inline-flex btn btn-ghost btn-sm btn-circle align-middle">
          <Icon icon="fa6-brands:linkedin" class="h-5 w-5"/>
        </a>
      </div>
    </div>
  </div>
</template>