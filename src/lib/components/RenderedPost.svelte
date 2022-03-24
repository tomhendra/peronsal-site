<script lang="ts">
  import type {SvelteComponent} from 'svelte';
  import type {Post} from '$lib/types';
  import {getDate} from '$lib/utils';
  import {Image, TagList, Tag} from '$lib/components';
  import Spacer from './Spacer.svelte';

  export let PostContent: SvelteComponent;
  export let meta: Post;
</script>

<svelte:head>
  <title>{meta.title} • Tom Hendra blog</title>
  <meta data-key="description" name="description" content={meta.description} />
  <!--  essential meta tags for fb & twitter -->
  <meta property="og:type" content="article" />
  <meta property="og:title" content={meta.title} />
  <meta property="og:url" content="https://tomhendra.dev/posts/{meta.slug}/" />
  <!-- <meta property="og:image" content="https://tomhendra.dev{imagePath}" /> -->
  <meta name="twitter:card" content="summary_large_image" />
  <!--  non-essential, but recommended meta tags for fb & twitter -->
  <meta property="og:description" content={meta.description} />
  <meta property="og:site_name" content="Tom Hendra • Blog" />
  <meta property="og:image:alt" content={meta.alt} />
  <meta name="twitter:image:alt" content={meta.alt} />
  <!--  required for analytics -->
  <meta name="twitter:site" content="@tomhendra" />
  <!-- <meta property="fb:app_id" content="your_app_id" />  -->
</svelte:head>

<main class="max-width-container">
  <article>
    <section class="title-section">
      <div class="meta">
        <span class="date">
          {getDate(meta.date)}
          {#if meta.updated}
            • Updated on {getDate(meta.updated)}
          {/if}
        </span>
        <h1 class="title">{meta.title}</h1>
        <h2 class="subtitle">{meta.subtitle}</h2>
        <TagList>
          {#each meta.tags as tag}
            <Tag>{tag}</Tag>
          {/each}
        </TagList>
      </div>
      <div class="image-wrapper">
        <figure>
          <Image source={meta.coverImage} alt={meta.alt} ratio="5 / 7" />
        </figure>
      </div>
    </section>
    <Spacer size={96} />
    <section class="post-content">
      <p>{meta.description}</p>
      <Spacer size={32} />
      <hr />
      <Spacer size={48} />
      <svelte:component this={PostContent} />
    </section>
  </article>
</main>
<Spacer size={96} />

<style lang="scss">
  .title-section {
    display: grid;
    grid-template-columns: 1fr 1fr;

    @include tabletAndDown {
      grid-template-columns: 1fr;
    }
  }

  .meta {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: var(--space-20) 0;
    padding-right: var(--space-16);

    .date {
      color: var(--color-primary-heading);
      font-size: var(--font-size-md);
      font-weight: var(--font-weight-semibold);
      padding-bottom: var(--space-4);
    }

    .title {
      padding-bottom: var(--space-6);
    }

    .subtitle {
      font-size: var(--font-size-text-xl);
      font-weight: var(--font-weight-normal);
      color: var(--color-muted-text);
      padding-bottom: var(--space-12);
    }
  }

  .image-wrapper {
    background-color: var(--color-muted-background);
    padding: var(--space-20) var(--space-16);
    display: flex;
    justify-content: center;
    align-items: center;

    figure {
      max-width: var(--container-xs);
    }
  }

  .post-content {
    max-width: 720px;
    margin-left: auto;
    margin-right: auto;

    hr {
      border: none;
      height: 1px;
      background-color: var(--color-muted-border);
    }
  }
</style>
