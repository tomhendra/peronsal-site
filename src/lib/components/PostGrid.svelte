<script lang="ts">
  import {PostPreview} from '$lib/components';
  import type {Post} from '$lib/types';

  export let posts: Post[];
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
    grid-column-gap: var(--space-8);
    grid-row-gap: var(--space-12);
    grid: auto-flow / 1fr 1fr;
    margin-bottom: var(--space-16);

    @include mobileAndDown {
      grid-template-columns: 1fr;
    }
  }
</style>
