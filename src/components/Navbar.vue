<script setup>
import IconGithub from '~icons/fa-brands/github'
import IconLinkedin from '~icons/fa-brands/linkedin'
import favicon from '../assets/favicon.png'
</script>

<template>
  <div class="navbar border-2 border-black backdrop-filter backdrop-blur-sm bg-white bg-opacity-80 text-black rounded-2xl">
    <div class="navbar-begin px-2 mx-2">
      <router-link class="text-lg font-bold" to="/">
        <img :src="favicon" alt="AW" class="h-1/2 w-1/2">
      </router-link>
    </div>
    <div class="navbar-center flex-auto"></div>
    <div class="navbar-end px-2 mx-2">
      <router-link class="btn btn-ghost btn-sm rounded-btn" to="/blog">Blog</router-link>
      <router-link class="btn btn-ghost btn-sm rounded-btn" to="/projects">Projects</router-link>
      <a class="btn btn-ghost btn-sm rounded-btn">Resume</a>
      <router-link class="btn btn-ghost btn-sm rounded-btn" to="/contacts">Contact</router-link>
      <a href="https://github.com/lunw1024" target="_blank" rel="noopener noreferrer" class="btn btn-ghost btn-circle btn-sm">
        <icon-github class="mx-1"/>
      </a>
      <a href="https://www.linkedin.com/in/lunw1024/" target="_blank" rel="noopener noreferrer" class="btn btn-ghost btn-circle btn-sm">
        <icon-linkedin class="mx-1"/>
      </a>
    </div>
  </div>
</template>