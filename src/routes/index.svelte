<script context="module" lang="ts">
  // import {prefetch} from '$app/navigation';
  // prefetch('/about'); // Loads the about page in the background
  export async function load({fetch}) {
    const res = await fetch(`/api/posts.json`);
    const {posts} = await res.json();

    const count = await fetch(`/api/posts/count.json`);
    const {total} = await count.json();

    return {
      props: {
        posts,
        totalPosts: total,
      },
    };
  }
</script>

<script lang="ts">
  import type {PostData} from '$lib/types';
  import {PostGrid, Pagination} from '$lib/components';

  export let posts: PostData[] = [];
  export let totalPosts: number;
</script>

<svelte:head>
  <title>Tom Hendra • Blog</title>
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
      <span class="subtitle">
        A collection of discoveries from the world of web development.
      </span>
    </section>
    <section class="posts-section">
      <PostGrid {posts} />
    </section>
  </main>
  <Pagination currentPage={1} {totalPosts} />
</div>

<style lang="scss">
  .header-section {
    padding: var(--space-24) 0;

    @include tabletAndDown {
      padding: var(--space-20) 0;
    }

    @include mobileAndDown {
      padding: var(--space-16) 0;
    }
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
    font-size: var(--font-sixe-text-xl);
    line-height: var(--line-height-text-xl);

    @include mobileAndDown {
      font-size: var(--font-size-text-lg);
      line-height: var(--line-height-text-lg);
    }
  }

  .posts-section {
    padding-bottom: var(--space-16);
  }
</style>
