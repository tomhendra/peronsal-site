import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import {mdsvex} from 'mdsvex';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import autoprefixer from 'autoprefixer';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
  },
  extensions: ['.svelte', '.md'],
  // https://github.com/sveltejs/svelte-preprocess
  preprocess: [
    preprocess({
      postcss: {
        plugins: [autoprefixer],
      },
      /* Other sveltePreprocess options here, like SCSS */
    }),
    /* Other preprocessors here, like mdsvex */
    mdsvex({
      extensions: ['.md'],
      rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
      layout: {
        blog: 'src/routes/blog/_post.svelte',
      },
    }),
  ],
};

export default config;
