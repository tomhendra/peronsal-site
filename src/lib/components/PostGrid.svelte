<script lang="ts">
  import {PostPreview} from '$lib/components';

  export let posts;
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

    @media (max-width: breakpoints.$sm) {
      grid-template-columns: 1fr;
    }
  }
</style>
