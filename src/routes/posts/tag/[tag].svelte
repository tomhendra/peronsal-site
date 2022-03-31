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

<div class="max-width-container">
  <main>
    <section class="header-section">
      <span class="heading-prefix"
        >{posts.length} {posts.length === 1 ? 'Article' : 'Articles'}</span
      >
      <h1>Blog</h1>
      <span class="subtitle">
        All posts about {tag}.
      </span>
    </section>
    <section class="posts-section">
      <PostGrid {posts} />
    </section>
  </main>
</div>

<style lang="scss">
  main {
    padding-top: var(--space-24);
    padding-bottom: var(--space-16);

    @include tabletAndDown {
      padding-top: var(--space-20);
    }

    @include mobileAndDown {
      padding-top: var(--space-16);
      padding-bottom: var(--space-12);
    }
  }

  .header-section {
    padding-bottom: var(--space-16);
  }

  .heading-prefix {
    font-size: var(--font-size-md);
    line-height: var(--line-height-md);
    font-weight: var(--font-weight-semibold);
    color: var(--color-primary-heading);
  }

  h1 {
    margin-top: var(--space-3);
  }

  .subtitle {
    font-size: var(--font-size-text-xl);
    line-height: var(--line-height-text-xl);

    @include mobileAndDown {
      font-size: var(--font-size-text-lg);
      line-height: var(--line-height-text-lg);
    }
  }

  .max-width-container {
    padding-bottom: var(--space-24);

    @include mobileAndDown {
      padding-bottom: var(--space-16);
    }
  }
</style>
