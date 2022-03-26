<script context="module" lang="ts">
  import {getPosts} from '$lib/utils';

  export async function load({params}) {
    const {tag} = params;

    const posts = await getPosts({tag});

    return {
      props: {
        posts,
        tag,
      },
    };
  }
</script>

<script lang="ts">
  import type {PostData} from '$lib/types';
  import {PostGrid} from '$lib/components';

  export let posts: PostData[];
  export let tag: string;
</script>

<!-- TODO: site-image.png -->
<svelte:head>
  <title>Blog • Tag: {tag}</title>
  <meta
    property="og:image"
    content="https://tomhendra.dev/images/site-image.png"
  />
  <meta
    name="twitter:image"
    content="https://tomhendra.dev/images/site-image.png"
  />
</svelte:head>

<h1 class="h2">Tag: <b>{tag}</b></h1>
<PostGrid {posts} />
