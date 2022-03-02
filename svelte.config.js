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
  kit: {
    adapter: adapter(),
  },
  preprocess: [
    preprocess({
      postcss: {
        plugins: [autoprefixer],
      },
      /* Other sveltePreprocess options here, like SCSS */
    }),
    /* Other preprocessors here, like mdsvex */
    mdsvex({
      extensions: ['.svx', '.md'],
      rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
    }),
  ],
};

export default config;
