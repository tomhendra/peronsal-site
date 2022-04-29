import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import autoprefixer from 'autoprefixer';
import {mdsvex} from 'mdsvex';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md'],
  // https://github.com/sveltejs/svelte-preprocess
  preprocess: [
    preprocess({
      /* Other sveltePreprocess options here, like SCSS */
      scss: {
        // Ensures Sass mixins are always available inside component <style>
        // blocks e.g. @include laptopAndUp { /* laptop styles */ }
        prependData: `@import 'src/lib/styles/breakpoints.scss';`,
      },
      postcss: {
        plugins: [autoprefixer],
      },
    }),
    /* Other preprocessors here, like mdsvex */
    mdsvex({
      extensions: ['.md'],
      rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
    }),
  ],
  kit: {
    adapter: adapter(),
  },
};

export default config;
