<script lang="ts">
  import ArrowUpRight from './icons/ArrowUpRight.svelte';
  import type {Post} from '$lib/types';
  import {Image} from '$lib/components';
  export let post: Post;
</script>

<article class="post-preview-wrapper">
  <a class="img-link" href="/blog/{post.slug}">
    <Image source={post.coverImage} alt={post.alt} ratio="3 / 2" />
  </a>
  <div class="post-preview-content">
    <span class="post-date">
      {post.date}
    </span>
    <a class="post-link" href="/blog/{post.slug}">
      <div class="post-title-container">
        <h2 class="post-title">
          {post.title}
        </h2>
        <div class="icon-container">
          <ArrowUpRight />
          <span class="visually-hidden">Decorative arrow</span>
        </div>
      </div>
    </a>
    <div>
      <!-- post excerpt is wrapped in a div to avoid buggy behaviour 
        (thin slices of truncated text below the ellipsis) caused by 
        -webkit-line-clamp when applied to a direct child of a flex/grid container. 
        
        Direct children inside a flexbox/grid parent will be stretched according 
        to the flex/grid layout algorithm. We need our clamped paragraphs to use 
        Flow layout. So by wrapping our paragraph in a div, we ensure that the
        correct layout mode is used. -->
      <p class="post-excerpt">{post.excerpt}</p>
    </div>
  </div>
  <ul class="post-category-list">
    {#each post.categories as category}
      <li class="post-category">
        {category}
      </li>
    {/each}
  </ul>
</article>

<style lang="scss">
  :global(.img) {
    object-fit: cover;
  }

  .img-link {
    flex-grow: 0;
  }

  .post-link {
    text-decoration: none;
    color: var(--color-heading);

    &:hover {
      text-decoration: underline;
    }
  }
  .post-preview-wrapper {
    display: flex;
    flex-direction: column;
    max-width: var(--container-sm);
  }

  .post-preview-content {
    display: flex;
    flex-direction: column;
    gap: var(--space-3);
    margin-top: var(--space-8);
    margin-bottom: var(--space-6);
  }

  .post-date {
    font-size: var(--font-size-text-sm);
    font-weight: var(--font-weight-semibold);
    color: var(--color-primary-text);
  }

  .post-title-container {
    display: flex;
    justify-content: space-between;
    gap: var(--space-6);
  }

  .post-title {
    font-size: var(--font-size-display-xs);
    font-weight: var(--font-weight-semibold);

    @media (max-width: breakpoints.$sm) {
      font-size: var(--font-size-text-xl);
    }
  }

  .icon-container {
    flex-shrink: 0;
    padding-top: var(--space-1);
  }

  .post-excerpt {
    color: var(--color-text);
    /* line-clamp will replace this ceremony once it becomes spec */
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }

  .post-category-list {
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-2);
  }

  .post-category {
    list-style: none;
    font-size: var(--font-size-text-sm);
    font-weight: var(--font-weight-medium);
    color: var(--color-primary-text);
    background-color: var(--color-primary-background);
    padding: 2px var(--space-2);
    border-radius: var(--radius-full);
  }
</style>
