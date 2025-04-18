// @ts-check
import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeTypst from '@myriaddreamin/rehype-typst';

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeTypst],
    shikiConfig: {
      theme: 'everforest-light',
      wrap: true,
    }
  },
  // site: "https://alanwu.xyz",
})
