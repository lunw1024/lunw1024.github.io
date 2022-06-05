<script setup>
import IconGithub from '~icons/fa-brands/github'
import IconLinkedin from '~icons/fa-brands/linkedin'
import favicon from '../assets/favicon.png'
</script>

<template>
  <div class="navbar border-2 border-black backdrop-filter backdrop-blur-sm bg-white bg-opacity-80 text-black rounded-2xl">
    <div class="navbar-begin">
      <div class="dropdown md:hidden">
        <label tabindex="0" class="btn btn-ghost btn-sm rounded-btn">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
        <ul tabindex="0" class="menu dropdown-content p-2 relative top-14 -left-2 border-2 border-black backdrop-filter backdrop-blur-sm bg-white bg-opacity-80 text-black rounded-2xl">
          <li><router-link class="btn btn-ghost" to="/blog">Blog</router-link></li>
          <li><router-link class="btn btn-ghost" to="/projects">Projects</router-link></li>
          <li><a class="btn btn-ghost ">Resume</a></li>
          <li><router-link class="btn btn-ghost" to="/contacts">Contact</router-link></li>
        </ul>
      </div>
      <router-link class="text-lg font-bold mx-4" to="/">
        <img :src="favicon" alt="AW" class="h-1/2 w-1/2">
      </router-link>
    </div>
    <div class="navbar-center flex-auto"></div>
    <div class="navbar-end">
      <div class="<md:hidden flex items-center content-center">
        <router-link class="btn btn-ghost btn-sm rounded-btn" to="/blog">Blog</router-link>
        <router-link class="btn btn-ghost btn-sm rounded-btn" to="/projects">Projects</router-link>
        <a class="btn btn-ghost btn-sm rounded-btn">Resume</a>
        <router-link class="btn btn-ghost btn-sm rounded-btn" to="/contacts">Contact</router-link>
        <a href="https://github.com/lunw1024" target="_blank" rel="noopener noreferrer" class="btn btn-ghost btn-circle btn-sm">
          <icon-github class=""/>
        </a>
        <a href="https://www.linkedin.com/in/lunw1024/" target="_blank" rel="noopener noreferrer" class="btn btn-ghost btn-circle btn-sm">
          <icon-linkedin class=""/>
        </a>
      </div>
    </div>
  </div>
</template>