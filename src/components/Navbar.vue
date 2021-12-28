<script setup>
import IconGithub from '~icons/fa-brands/github'
import IconLinkedin from '~icons/fa-brands/linkedin'
import favicon from '../assets/favicon.png'
</script>

<template>
  <div class="navbar mb-2 border-2 border-black backdrop-filter backdrop-blur-sm bg-white bg-opacity-80 text-black rounded-box">
    <div class="navbar-begin px-2 mx-2">
      <router-link class="text-lg font-bold" to="/">
        <img :src="favicon" alt="AW" class="h-1/2 w-1/2">
      </router-link>
    </div>
    <div class="navbar-center flex-auto"></div>
    <div class="navbar-end px-2 mx-2">
      <router-link class="btn btn-ghost btn-sm rounded-btn" to="/projects">Projects</router-link>
      <a class="btn btn-ghost btn-sm rounded-btn">Resume</a>
      <router-link class="btn btn-ghost btn-sm rounded-btn" to="/contacts">Contact</router-link>
      <div class="btn btn-ghost btn-circle btn-sm">
        <icon-github class="mx-1"/>
      </div>
      <div class="btn btn-ghost btn-circle btn-sm">
        <icon-linkedin class="mx=1"/>
      </div>
    </div>
  </div>
</template>