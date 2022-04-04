<script lang="ts">
  import {onMount} from 'svelte';
  import {prefetch} from '$app/navigation';
  import {checkPrefersReducedData} from '$lib/utils';
  import {PostPreview} from '$lib/components';
  import type {PostData} from '$lib/types';

  export let posts: PostData[];

  onMount(() => {
    if (!checkPrefersReducedData()) {
      // TODO: should maybe make this the posts on each page, and not just the most recent five.
      posts.forEach(post => {
        prefetch(`/posts/${post.slug}`);
      });
    }
  });
</script>

<div class="posts-grid">
  {#if posts.length}
    {#each posts as post}
      <PostPreview {post} />
    {/each}
  {:else}
    <p>No posts to display</p>
  {/if}
</div>

<style lang="scss">
  .posts-grid {
    display: grid;
    grid: auto-flow / 1fr 1fr;
    gap: var(--space-12) var(--space-8);

    @include mobileAndDown {
      grid-template-columns: 1fr;
    }
  }
</style>
