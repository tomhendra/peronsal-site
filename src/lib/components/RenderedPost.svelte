<script lang="ts">
  import type {Post} from '$lib/types';

  import {getReadableDate} from '$lib/utils';
  import type {SvelteComponent} from 'svelte';

  export let PostContent: SvelteComponent;
  export let meta: Post;

  let imagePath: string;
  $: imagePath = `/images/post_images/${meta.coverImage}`;
</script>

<svelte:head>
  <title>{meta.title} • Tom Hendra blog</title>
  <meta data-key="description" name="description" content={meta.excerpt} />
  <meta property="og:type" content="article" />
  <meta property="og:title" content={meta.title} />
  <meta name="twitter:title" content={meta.title} />
  <meta property="og:description" content={meta.excerpt} />
  <meta name="twitter:description" content={meta.excerpt} />
  <meta property="og:image" content="https://tomhendra.dev{imagePath}" />
  <meta property="og:image:width" content={String(meta.coverWidth)} />
  <meta property="og:image:height" content={String(meta.coverHeight)} />
  <meta name="twitter:image" content="https://tomhendra.dev{imagePath}" />
  <meta property="og:url" content="https://tomhendra.dev/blog/{meta.slug}/" />
</svelte:head>

<main>
  <article class="post compressed-content">
    <img
      class="cover-image"
      src={imagePath}
      alt=""
      style="aspect-ratio: {meta.coverWidth} / {meta.coverHeight}"
      width={meta.coverWidth}
      height={meta.coverHeight}
    />

    <h1>{meta.title}</h1>

    <div class="meta">
      <b>Published:</b>
      {getReadableDate(meta.date)}
      <br />
      <b>Updated:</b>
      {getReadableDate(meta.updated)}
    </div>

    <svelte:component this={PostContent} />
  </article>
  <aside>
    <!-- <Bio currentPage={meta.slug} /> -->

    <!-- {#if meta.categories}
    <h2>Posted in:</h2>
    <TagList>
      {#each meta.categories as category}
        <Tag to="/blog/category/{category}/">
          {category}
        </Tag>
      {/each}
    </TagList>
  {/if} -->
  </aside>
</main>

<style>
  main {
    max-width: 60ch;
    margin: 0 auto;
  }
</style>
