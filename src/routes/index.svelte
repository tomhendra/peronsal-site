<script context="module" lang="ts">
  // import {prefetch} from '$app/navigation';
  // prefetch('/about'); // Loads the about page in the background
  export async function load({fetch}) {
    const res = await fetch(`/api/posts.json`);
    const {posts} = await res.json();

    const count = await fetch(`/api/posts/count.json`);
    const {total} = await count.json();

    return {
      props: {
        posts,
        totalPosts: total,
      },
    };
  }
</script>

<script lang="ts">
  import type {Post} from '$lib/types';

  import {PostGrid, Pagination} from '$lib/components';
  import Spacer from '$lib/components/Spacer.svelte';

  export let posts: Post[] = [];
  export let totalPosts: number;
</script>

<svelte:head>
  <title>Tom Hendra • Blog</title>
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

<main>
  <Spacer size={64} />
  <PostGrid {posts} />
</main>
<Pagination currentPage={1} {totalPosts} />

<!-- SvelteKit offers a slightly less greedy version of preloading, as one of 
  its anchor options - https://kit.svelte.dev/docs#anchor-options.

Anchor options are special, SvelteKit-specific attributes you can add to <a>
   anchor tags. There are three:

<a sveltekit:prefetch> causes the link to begin preloading as soon as the user 
  hovers, rather than waiting for a click, saving some milliseconds.

<a rel="external"> signals to SvelteKit that the link in question is not part 
  of our SvelteKit app, and the router shouldn’t try to handle it.

<a sveltekit:noscroll> prevents SvelteKit from resetting the scroll position 
  to the top of the new page. This is usually undesirable on websites, but may 
  be more intuitive in some app situations.
 -->
