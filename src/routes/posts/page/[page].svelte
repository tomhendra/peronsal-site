<script context="module" lang="ts">
  import {getPosts} from '$lib/utils';

  export const load = async ({fetch, params}) => {
    try {
      const page = params.page ? params.page : 1;

      if (page <= 1) {
        return {
          status: 301,
          redirect: '/',
        };
      }

      let offset = page * 8 - 8;

      const posts = await getPosts({offset, limit: 8});

      const count = await fetch(`/api/posts/count.json`);
      const {total} = await count.json();

      return {
        status: 200,
        props: {
          posts,
          page,
          totalPosts: total,
        },
      };
    } catch (error) {
      return {
        status: 404,
        error: error.message,
      };
    }
  };
</script>

<script lang="ts">
  import type {PostData} from '$lib/types';
  import {PostGrid, Pagination} from '$lib/components';

  export let posts: PostData[];
  export let page: number = 1;
  export let totalPosts: number;

  $: lowerBound = page * 8 - 7 || 1;
  $: upperBound = Math.min(page * 8, totalPosts);
</script>

<svelte:head>
  <title>Tom Hendra • Posts page {page}</title>
  <meta
    data-key="description"
    name="description"
    content="Blog posts about discoveries in web development."
  />
  <meta
    property="og:image"
    content="https://tomhendra.dev/images/site-image.png"
  />
  <meta
    name="twitter:image"
    content="https://tomhendra.dev/images/site-image.png"
  />
</svelte:head>

<div class="max-width-container">
  <main>
    <section class="header-section">
      <span class="heading-prefix">{totalPosts} Articles</span>
      <h1>Blog</h1>
      <span class="subtitle">Article {lowerBound}–{upperBound}</span>
    </section>
    <section class="posts-section">
      <PostGrid {posts} />
    </section>
  </main>
  <div class="pagination-wrapper">
    <Pagination currentPage={page} {totalPosts} />
  </div>
</div>

<style lang="scss">
  main {
    padding-top: var(--space-24);
    padding-bottom: var(--space-16);

    @include tabletAndDown {
      padding-top: var(--space-20);
    }

    @include mobileAndDown {
      padding-top: var(--space-16);
      padding-bottom: var(--space-12);
    }
  }

  .header-section {
    padding-bottom: var(--space-16);
  }

  .heading-prefix {
    font-size: var(--font-size-md);
    line-height: var(--line-height-md);
    font-weight: var(--font-weight-semibold);
    color: var(--color-primary-heading);
  }

  h1 {
    margin-top: var(--space-3);
  }

  .subtitle {
    font-size: var(--font-size-text-xl);
    line-height: var(--line-height-text-xl);

    @include mobileAndDown {
      font-size: var(--font-size-text-lg);
      line-height: var(--line-height-text-lg);
    }
  }

  .pagination-wrapper {
    display: flex;
    justify-content: center;
    border-top: 1px solid var(--color-muted-separator);
    padding-top: var(--space-5);

    @include mobileAndDown {
      padding-top: var(--space-4);
    }
  }

  .max-width-container {
    padding-bottom: var(--space-24);

    @include mobileAndDown {
      padding-bottom: var(--space-16);
    }
  }
</style>
