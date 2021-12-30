<script setup>
</script>

<template>
  <div class="textbox space-y-4">
    <h1 class="mx-auto text-4xl font-title font-bold underline underline-dashed underline-red-500">Alan Wu</h1>
    <p>
      Hey, I'm Alan Wu, a fanatical explorer of
      <span class="text-red-500 font-bold">{</span>
      AI, Data, Algo, Quant, Crypto, Generative Art, Competitions, ...
      <span class="text-red-500 font-bold">}</span>.
      Currently studying CS+Math @ Harvey Mudd College as a freshman.
    </p>
    <p>
      I love to meet and compete with the brightest minds. I'm active in
      <span class="text-red-500 font-bold">{</span>
      Programming, Math, Datascience
      <span class="text-red-500 font-bold">}</span>
      competitions. Check out my progress in
      <router-link class="textlink" to="/blog">Blog</router-link>
      and
      <router-link class="textlink" to="/projects">Projects</router-link>!
    </p>
    <p>
      I'm very optimistic about the future of AI. While learning more, I did some research on computer vision and autonomous driving. View my publication on
      <a href="https://ieeexplore.ieee.org/document/9342077" target="_blank" rel="noopener noreferrer" class="textlink">IEEE Xplore</a>.
    </p>
    <p>
      I'm also into blockchain technology, or "crypto". I'm investing in projects while building some myself.
      <router-link class="textlink" to="/contacts">Contact me</router-link> if you want to exchange ideas or just chat!
    </p>
    <p>
      If you like my passions and want to make friends, feel free to
      <router-link class="textlink" to="/contacts">reach out</router-link>!
    </p>
  </div>
</template>
