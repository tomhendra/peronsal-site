<script context="module" lang="ts">
  interface Category {
    title: string;
    count: number;
  }

  export async function load({fetch}) {
    const res = await fetch(`/api/posts.json`);
    let {posts} = await res.json();

    let uniqueCategories = {};

    posts.forEach(post => {
      post.categories.forEach(category => {
        if (uniqueCategories.hasOwnProperty(category)) {
          uniqueCategories[category].count += 1;
        } else {
          uniqueCategories[category] = {
            title: category,
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
  export let uniqueCategories: Category[];
</script>

<svelte:head>
  <title>Blog • Categories</title>
  <meta
    property="og:image"
    content="https://tomhendra.dev/images/site-image.png"
  />
  <meta
    name="twitter:image"
    content="https://tomhendra.dev/images/site-image.png"
  />
</svelte:head>

<h1 class="h2">All blog categories</h1>

<ul>
  {#each uniqueCategories as category}
    <li>
      <a href="/blog/category/{category.title}">
        {category.title}
      </a>
      ({category.count})
    </li>
  {/each}
</ul>
