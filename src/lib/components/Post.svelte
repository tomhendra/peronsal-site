<script lang="ts">
  import type {SvelteComponent} from 'svelte';
  import type {PostData} from '$lib/types';
  import {formatDate} from '$lib/utils';
  import {Image, TagList, Tag} from '$lib/components';
  import Spacer from './Spacer.svelte';

  export let PostContent: SvelteComponent;
  export let meta: PostData;
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

<main>
  <article class="max-width-container">
    <section class="title-section">
      <div class="meta">
        <span class="date">
          {formatDate(meta.date)}
          {#if meta.updated}
            • Updated {formatDate(meta.updated)}
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
      <figure class="image-wrapper">
        <Image source={meta.coverImage} alt={meta.alt} ratio="5 / 7" />
        <figcaption>{meta.caption}</figcaption>
      </figure>
    </section>
    <section class="post-content">
      <p class="description">{meta.description}</p>
      <hr />
      <svelte:component this={PostContent} />
    </section>
  </article>
</main>
<Spacer size={96} />

<style lang="scss">
  .title-section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-top: var(--space-20);
    padding-bottom: var(--space-20);

    @include tabletAndDown {
      grid-template-columns: 1fr;
      gap: var(--space-16);
    }

    @include mobileAndDown {
      padding-top: var(--space-16);
      padding-bottom: var(--space-16);
    }
  }

  .meta {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-right: var(--space-16);

    @include tabletAndDown {
      padding-right: 0;
      justify-content: flex-start;
    }
  }

  .date {
    color: var(--color-primary-heading);
    font-size: var(--font-size-text-md);
    font-weight: var(--font-weight-semibold);

    @include mobileAndDown {
      font-size: var(--font-size-text-sm);
    }
  }

  .title {
    margin-top: var(--space-4);

    @include mobileAndDown {
      margin-top: var(--space-3);
    }
  }
  /* 
    TODO: check whether font-size/weight matches any other global typography
    styles and if so apple class globally for consistency. 
    consider global subtitle styles if this situation occurs again.
  */
  .subtitle {
    font-size: var(--font-size-text-xl);
    line-height: var(--line-height-text-xl);
    font-weight: var(--font-weight-normal);
    color: var(--color-muted-text);
    margin-top: 0;
    margin-bottom: var(--space-12);

    @include mobileAndDown {
      font-size: var(--font-size-text-lg);
      line-height: var(--line-height-text-lg);
      margin-bottom: var(--space-8);
    }
  }

  .image-wrapper {
    background-color: var(--color-muted-background);
    padding: var(--space-20) var(--space-16);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: var(--space-4);

    @include mobileAndDown {
      background-color: revert;
      padding: 0;
      gap: var(--space-3);
    }

    figcaption {
      align-self: flex-start;
    }
  }

  .post-content {
    margin-left: auto;
    margin-right: auto;
    max-width: var(--container-md);

    hr {
      border: none;
      height: 1px;
      background-color: var(--color-muted-border);
    }
  }

  .description {
    font-size: var(--font-size-text-xl);
  }
</style>
