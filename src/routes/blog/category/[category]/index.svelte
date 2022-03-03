<!-- TODO: add pagination to this route -->
<script context="module">
  import {getPostsData} from '$lib/utils';

  export const load = async ({params, fetch}) => {
    const category = params.category;
    const options = {category};
    const {posts} = await getPostsData(options);
    const res = await fetch(`/api/posts/category/${category}/count.json`);
    const {total} = await res.json();

    return {
      props: {
        posts,
        category,
        total,
      },
    };
  };
</script>

<script>
  import {PostGrid} from '$lib/components';

  export let posts;
  export let category;
  // export let total;
</script>

<!-- This dynamic page renders any page at /blog/category/* -->

<svelte:head>
  <title>Category: {category}</title>
</svelte:head>

<h1>Blog category: {category}</h1>

{#if posts.length}
  <PostGrid {posts} />
  <!-- <Pagination
    currentPage="1"
    totalPosts={total}
    path="/blog/category/{category}/page"
  /> -->
{:else}
  <p>
    <strong>Ope!</strong> Sorry, couldn't find any posts in the category "{category}".
  </p>

  <p><a href="/blog">Back to blog</a></p>
{/if}
