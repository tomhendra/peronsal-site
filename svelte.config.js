import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import autoprefixer from 'autoprefixer';
import {mdsvex} from 'mdsvex';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md', '.svelte.md'],
  // https://github.com/sveltejs/svelte-preprocess
  preprocess: [
    preprocess({
      postcss: {
        plugins: [autoprefixer],
      },
      /* Other sveltePreprocess options here, like SCSS */
      scss: {
        // Ensures Sass variables are always available inside component <style>
        // blocks e.g. breakpoints.$variableDefinedInFile
        prependData: `@use 'src/lib/styles/breakpoints';`,
      },
    }),
    /* Other preprocessors here, like mdsvex */
    mdsvex({
      extensions: ['.md', '.svx'],
      rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
    }),
  ],
  kit: {
    adapter: adapter(),
  },
};

export default config;
