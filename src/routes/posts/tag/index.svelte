<script context="module" lang="ts">
  interface TagMeta {
    title: string;
    count: number;
  }

  export async function load({fetch}) {
    const res = await fetch(`/api/posts.json`);
    let {posts} = await res.json();

    let uniqueCategories = {};

    posts.forEach(post => {
      post.tags.forEach(tag => {
        if (uniqueCategories.hasOwnProperty(tag)) {
          uniqueCategories[tag].count += 1;
        } else {
          uniqueCategories[tag] = {
            title: tag,
            count: 1,
          };
        }
      });
    });

    const sortedUniqueCategories = Object.values(uniqueCategories).sort(
      // @ts-ignore
      (a, b) => a.title > b.title,
    );

    return {
      props: {
        uniqueCategories: sortedUniqueCategories,
      },
    };
  }
</script>

<script lang="ts">
  import {TagList, Tag} from '$lib/components';

  export let uniqueCategories: TagMeta[];
</script>

<svelte:head>
  <title>Blog • tags</title>
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
        >{uniqueCategories.length}
        {uniqueCategories.length === 1 ? 'Category' : 'Categories'}</span
      >
      <h1>All Tags</h1>
      <span class="subtitle"> All unique tags. </span>
    </section>
    <section class="tags-section">
      <TagList>
        {#each uniqueCategories as tag}
          <Tag to="/posts/tag/{tag.title}">
            {tag.title} ({tag.count})
          </Tag>
        {/each}
      </TagList>
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
