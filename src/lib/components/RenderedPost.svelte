<script lang="ts">
  import type {Post} from '$lib/types';

  import {getDate} from '$lib/utils';
  import type {SvelteComponent} from 'svelte';

  export let PostContent: SvelteComponent;
  export let meta: Post;

  let imagePath: string;
  $: imagePath = `/images/${meta.coverImage}`;
</script>

<svelte:head>
  <title>{meta.title} • Tom Hendra blog</title>
  <meta data-key="description" name="description" content={meta.description} />
  <!-- https://css-tricks.com/essential-meta-tags-social-media/ -->
  <!--  essential meta tags for fb & twitter -->
  <meta property="og:type" content="article" />
  <meta property="og:title" content={meta.title} />
  <meta property="og:url" content="https://tomhendra.dev/posts/{meta.slug}/" />
  <meta property="og:image" content="https://tomhendra.dev{imagePath}" />
  <meta name="twitter:card" content="summary_large_image" />
  <!--  non-essential, but recommended meta tags for fb & twitter -->
  <meta property="og:description" content={meta.description} />
  <meta property="og:site_name" content="Tom Hendra • Blog" />
  <meta name="twitter:image:alt" content={meta.alt} />
  <!-- structured properties -->
  <meta property="og:image:width" content={String(meta.coverImageWidth)} />
  <meta property="og:image:height" content={String(meta.coverImageHeight)} />
  <!--  required for analytics -->
  <meta name="twitter:site" content="@tomhendra" />
  <!-- <meta property="fb:app_id" content="your_app_id" />  -->
</svelte:head>

<div class="max-width-wrapper">
  <main>
    <article>
      <img
        src={imagePath}
        alt=""
        style="aspect-ratio: {meta.coverImageWidth} / {meta.coverImageHeight}"
        width={meta.coverImageWidth}
        height={meta.coverImageHeight}
      />

      <h1>{meta.title}</h1>

      <div class="meta">
        <b>Published:</b>
        {getDate(meta.date)}
        <br />
        {#if meta.updated}
          <b>Updated:</b>
          {getDate(meta.updated)}
        {/if}
      </div>

      <svelte:component this={PostContent} />
    </article>
    <aside>
      <!-- <Bio currentPage={meta.slug} /> -->

      <!-- {#if meta.categories}
    <h2>Posted in:</h2>
    <TagList>
      {#each meta.categories as category}
        <Tag to="/posts/category/{category}/">
          {category}
        </Tag>
      {/each}
    </TagList>
  {/if} -->
    </aside>
  </main>
</div>
