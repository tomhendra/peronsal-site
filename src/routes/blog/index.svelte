<!--Page and layout components can have a load function, which runs before
 the component is created, making it perfect for fetching API data e,g. posts.
 Because it runs on the server, the load function is called from its own 
 distinct <script> tag, differentiated with a context="module" attribute: -->
<script context="module">
  export const load = async ({fetch}) => {
    const posts = await fetch('/api/posts.json');
    const allPosts = await posts.json();

    return {
      props: {
        posts: allPosts,
      },
    };
  };
</script>

<script>
  export let posts;
</script>

<svelte:head>
  <title>About Tom Hendra's blog index page</title>
</svelte:head>

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
  {:else}
    <p>No posts to display</p>
  {/if}
</ul>

<style lang="scss">
  li {
    list-style: none;
    color: var(--primary);
  }

  a {
    color: var(--primary);

    & :visited {
      color: var(--primary);
    }
  }
</style>
