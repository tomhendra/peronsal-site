<!-- Page and layout components can have a load function, which runs before
 the component is created, making it perfect for fetching API data e,g. posts.
 Because it runs on the server, the load function is called from its own 
 distinct <script> tag, differentiated with a context="module" attribute -->
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
  import {PostGrid} from '$lib/components';

  export let posts;
</script>

<svelte:head>
  <title>All posts • Tom Hendra</title>
</svelte:head>

<PostGrid {posts} />
