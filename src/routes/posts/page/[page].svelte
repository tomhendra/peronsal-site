<script context="module" lang="ts">
  import {getPosts} from '$lib/utils';

  export const load = async ({fetch, params}) => {
    try {
      const page = params.page ? params.page : 1;

      if (page <= 1) {
        return {
          status: 301,
          redirect: '/blog',
        };
      }

      let offset = page * 10 - 10;

      const posts = await getPosts({offset, limit: 10});

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

  $: lowerBound = page * 10 - 9 || 1;
  $: upperBound = Math.min(page * 10, totalPosts);
</script>

<svelte:head>
  <title>Tom Hendra • Blog page {page}</title>
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

<h1 class="h2">Posts {lowerBound}–{upperBound} of {totalPosts}</h1>
<PostGrid {posts} />
<Pagination currentPage={page} {totalPosts} />
