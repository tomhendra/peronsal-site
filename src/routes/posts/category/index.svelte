<script context="module" lang="ts">
  interface Tag {
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
  export let uniqueCategories: Tag[];
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

<h1 class="h2">All blog tags</h1>

<ul>
  {#each uniqueCategories as tag}
    <li>
      <a href="/posts/tag/{tag.title}">
        {tag.title}
      </a>
      ({tag.count})
    </li>
  {/each}
</ul>
