<script lang="ts">
  import ArrowUpRight from './icons/ArrowUpRight.svelte';
  import type {Post} from '$lib/types';
  export let post: Post;
  import Image from 'svelte-image';
</script>

<div class="post-preview-card">
  <a class="img-link" href={post.path}>
    <Image
      class="img"
      src="images/{post.meta.coverImage}"
      alt={post.meta.alt}
    />
  </a>
  <div class="post-preview-content">
    <span class="post-date">
      {post.meta.date}
    </span>
    <a class="post-link" href={post.path}>
      <div class="post-title-container">
        <h2 class="post-title">
          {post.meta.title}
        </h2>
        <div class="icon-container">
          <ArrowUpRight />
        </div>
      </div>
    </a>
    <p class="post-description">{post.meta.description}</p>
  </div>
  <ul class="post-category-list">
    {#each post.meta.categories as category}
      <li class="post-category">
        {category}
      </li>
    {/each}
  </ul>
</div>

<style lang="scss">
  @use '../styles/breakpoints' as *;

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
  .post-preview-card {
    display: flex;
    flex-direction: column;
  }

  .post-preview-content {
    display: flex;
    flex-direction: column;
    gap: var(--space-3);
    margin-top: var(--space-8);
    margin-bottom: var(--space-6);
  }

  .post-date {
    font-size: var(--fs-text-sm);
    font-weight: var(--fw-semibold);
    color: var(--color-primary-text);
  }

  .post-title-container {
    display: flex;
    justify-content: space-between;
    gap: var(--space-6);
  }

  .post-title {
    font-size: var(--fs-display-xs);
    font-weight: var(--fw-semibold);

    @media (max-width: $breakpoint-sm) {
      font-size: var(--fs-text-xl);
    }
  }

  .icon-container {
    flex-shrink: 0;
    padding-top: var(--space-1);
  }

  .post-description {
    color: var(--color-text);
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
    font-size: var(--fs-text-sm);
    font-weight: var(--fw-medium);
    color: var(--color-primary-text);
    background-color: var(--color-primary-background);
    padding: 2px var(--space-2);
    border-radius: var(--radius-full);
  }
</style>
