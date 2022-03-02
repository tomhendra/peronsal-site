<!-- Page and layout components can have a load function, which runs before
 the component is created, making it perfect for fetching API data e,g. posts.
 Because it runs on the server, the load function is called from its own 
 distinct <script> tag, differentiated with a context="module" attribute -->
<script context="module">
  export const load = async ({fetch}) => {
    const postRes = await fetch(`/api/posts.json`);
    const {posts} = await postRes.json();

    const totalRes = await fetch(`/api/posts/count.json`);
    const {total} = await totalRes.json();

    return {
      props: {posts, total},
    };
  };
</script>

<script>
  import {PostGrid} from '$lib/components';
  import {siteDescription} from '$lib/config';
  export let posts;
  export let total;
</script>

<svelte:head>
  <title>All posts • Tom Hendra</title>
  <meta data-key="description" name="description" content={siteDescription} />
</svelte:head>

<h1>Blog</h1>
<p>{total} posts</p>
<PostGrid {posts} />
