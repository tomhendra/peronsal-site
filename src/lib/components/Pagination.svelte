<script>
  import {postsPerPage} from '$lib/config';

  export let currentPage;
  export let totalPosts;
  export let path = '/blog/page';

  let pagesAvailable;
  $: pagesAvailable = Math.ceil(totalPosts / postsPerPage);

  const isCurrentPage = page => page == currentPage;
</script>

<!-- For some reason, the pagination wasn't re-rendering properly during navigation without the #key block -->
{#key currentPage}
  {#if pagesAvailable > 1}
    <nav aria-label="Pagination navigation" class="pagination">
      <ul>
        {#each Array.from({length: pagesAvailable}, (_, i) => i + 1) as page}
          <li>
            <a href="{path}/{page}" aria-current={isCurrentPage(page)}>
              <span class="visually-hidden">
                {#if isCurrentPage(page)}
                  Current page:
                {:else}
                  Go to page
                {/if}
              </span>
              {page}
            </a>
          </li>
        {/each}
      </ul>
    </nav>
  {/if}
{/key}

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
