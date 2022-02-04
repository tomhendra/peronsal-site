<!-- You could think of a dynamic page as a wildcard route. Essentially, it's 
  a template that processes a route as an argument. 

  Dynamic pages are useful because we might want one template file to handle 
  any number of potential routes. In our case, we’ll have one file to handle 
  any /blog/category/* route, no matter what the * might be.
-->
<script context="module">
  export const load = async ({params, fetch}) => {
    const queriedCategory = params.category;
    const response = await fetch('/api/posts.json');

    try {
      const posts = await response.json();
      const matchingPosts = posts.filter(post =>
        post.meta.categories.includes(queriedCategory),
      );

      return {
        props: {
          category: queriedCategory,
          posts: matchingPosts,
        },
      };
    } catch (error) {
      return {
        props: {
          error,
        },
      };
    }
  };
</script>

<script>
  export let category;
  export let posts;
  export let error;
</script>

<ul>
  {#if posts.length}
    {#each posts as post}
      <li>
        <h2>
          <a href={post.path}>
            {post.meta.title}
          </a>
        </h2>
        Published {post.meta.date}
      </li>
    {/each}
  {:else if posts.length}
    <p>There are no posts for the category: {category}</p>
  {:else}
    <p>Oops, there has been an error: {error}</p>
  {/if}
</ul>
