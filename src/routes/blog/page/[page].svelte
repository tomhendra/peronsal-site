<!-- This file handles any /blog/page/x route for pagination -->
<script context="module">
  import {postsPerPage, siteDescription} from '$lib/config';
  import {getPostsData} from '$lib/utils';

  export const load = async ({fetch, params}) => {
    try {
      const page = params.page ? params.page : 1;

      // Keeps from duplicationg the blog index route as page 1
      if (page <= 1) {
        return {
          status: 301,
          redirect: '/blog',
        };
      }

      let offset = page * postsPerPage - postsPerPage;

      const totalPostsRes = await fetch('/api/posts/count.json');
      const {total} = await totalPostsRes.json();
      const {posts} = await getPostsData({offset, page});

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

<script>
  import {PostGrid, Pagination} from '$lib/components';

  export let page;
  export let totalPosts;
  export let posts = [];
</script>

<svelte:head>
  <title>Blog - page {page}</title>
  <meta data-key="description" name="description" content={siteDescription} />
</svelte:head>

<!-- TODO: this is duplicated in both `[page].svelte` files -->
{#if posts.length}
  <h1>Blog</h1>
  <PostGrid {posts} />

  <Pagination currentPage={page} {totalPosts} />
{:else}
  <h1>Oops!</h1>

  <p>Sorry, no posts to show here.</p>

  <a href="/blog">Back to blog</a>
{/if}
