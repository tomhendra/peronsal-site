<script context="module" lang="ts">
  import {getPosts} from '$lib/utils';

  export async function load({params}) {
    const {category} = params;

    const posts = await getPosts({category});

    return {
      props: {
        posts,
        category,
      },
    };
  }
</script>

<script lang="ts">
  import type {Post} from '$lib/types';
  import {PostGrid} from '$lib/components';

  export let posts: Post[];
  export let category: string;
</script>

<!-- TODO: site-image.png -->
<svelte:head>
  <title>Blog • Category: {category}</title>
  <meta
    property="og:image"
    content="https://tomhendra.dev/images/site-image.png"
  />
  <meta
    name="twitter:image"
    content="https://tomhendra.dev/images/site-image.png"
  />
</svelte:head>

<h1 class="h2">Category: <b>{category}</b></h1>
<PostGrid {posts} />
