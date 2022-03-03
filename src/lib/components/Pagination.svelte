<script lang="ts">
  export let currentPage: number;
  export let totalPosts: number;

  let pagesAvailable: number;
  $: pagesAvailable = Math.ceil(totalPosts / 10);

  const isCurrentPage = (page: number): boolean => page == currentPage;
</script>

<nav aria-label="Pagination navigation" class="pagination">
  <ul>
    {#each Array.from({length: pagesAvailable}, (_, i) => i + 1) as page}
      <li>
        <a href="/blog/page/{page}" aria-current={isCurrentPage(page)}>
          {#if isCurrentPage(page)}
            <span class="visually-hidden"> Current page </span>
          {:else}
            <span class="visually-hidden"> Go to page </span>
          {/if}
          {page}
        </a>
      </li>
    {/each}
  </ul>
</nav>

<style>
  .pagination {
    display: flex;
    justify-content: center;
  }

  .pagination ul {
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0;
  }

  .pagination a {
    color: var(--color-text);
    text-decoration: none;
    padding: var(--space-4);
  }

  .pagination a:hover {
    background-color: var(--color-muted-background);
    text-decoration: underline;
  }
</style>
