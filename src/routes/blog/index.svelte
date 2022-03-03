<script context="module" lang="ts">
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
  import type {Post} from '$lib/types';

  import {PostGrid, Pagination} from '$lib/components';

  export let posts: Post[] = [];
  export let totalPosts: number;
</script>

<svelte:head>
  <title>Josh Collinsworth | Blog</title>
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

<PostGrid {posts} />
<Pagination currentPage={1} {totalPosts} />
