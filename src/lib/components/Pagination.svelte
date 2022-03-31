<script lang="ts">
  export let currentPage: number;
  export let totalPosts: number;

  let pagesAvailable: number;
  $: pagesAvailable = Math.ceil(totalPosts / 8);
</script>

<nav aria-label="Pagination navigation">
  {#each Array.from({length: pagesAvailable}, (_, i) => i + 1) as page}
    <a
      href="/posts/page/{page}"
      aria-current={page == currentPage}
      class="pagination-link"
    >
      {#if page == currentPage}
        <span class="visually-hidden">Current page</span>
      {:else}
        <span class="visually-hidden">Go to page</span>
      {/if}
      {page}
    </a>
  {/each}
</nav>

<style lang="scss">
  nav {
    display: flex;
    gap: 2px;
  }

  .pagination-link {
    font-size: var(--font-size-text-sm);
    text-decoration: none;
    width: var(--space-10);
    height: var(--space-10);
    border-radius: var(--radius-default);
    display: grid;
    place-content: center;

    &[aria-current='true'] {
      background: var(--color-primary-background);
      color: var(--color-primary-text);
    }
  }

  @media (hover: hover) and (pointer: fine) {
    .pagination-link:hover {
      border: 1px solid var(--color-primary);
    }
  }
</style>
