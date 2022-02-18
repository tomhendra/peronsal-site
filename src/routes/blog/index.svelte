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
  import {PostPreview} from '$lib/components';

  export let posts;
</script>

<svelte:head>
  <title>About Tom Hendra's blog index page</title>
</svelte:head>

<div class="posts-grid">
  {#if posts.length}
    {#each posts as post}
      <PostPreview {post} />
    {/each}
  {:else}
    <p>No posts to display</p>
  {/if}
</div>

<style lang="scss">
  @use '../../lib/styles/breakpoints' as *;

  .posts-grid {
    display: grid;
    grid-column-gap: var(--space-8);
    grid-row-gap: var(--space-12);
    grid: auto-flow / 1fr 1fr;
    margin-bottom: var(--space-16);

    @media (max-width: $breakpoint-sm) {
      grid-template-columns: 1fr;
    }
  }
</style>
