<script context="module" lang="ts">
  import type {Post} from '$lib/types';
  import type {SvelteComponent} from 'svelte';

  export async function load({params}) {
    // Ensures we don't let the route be handled by this file and kick it over to the `/page` directory instead
    if (params.post == 'page') {
      return {
        status: 301,
        redirect: '/',
      };
    }
    try {
      const post: SvelteComponent = await import(
        `../../lib/content/${params.post}.md`
      );

      return {
        props: {
          PostContent: post.default,
          meta: {...post.metadata, slug: params.post},
        },
      };
    } catch (error) {
      return {
        status: 404,
        error: error.message,
      };
    }
  }
</script>

<script lang="ts">
  import {RenderedPost} from '$lib/components';

  export let PostContent: SvelteComponent;
  export let meta: Post;
</script>

<RenderedPost {PostContent} {meta} />
