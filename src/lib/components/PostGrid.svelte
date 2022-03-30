<script lang="ts">
  import {PostPreview} from '$lib/components';
  import type {PostData} from '$lib/types';

  export let posts: PostData[];
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
