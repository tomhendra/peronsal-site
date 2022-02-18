<script lang="ts">
  interface Post {
    path: string;
    meta: {
      title: string;
      date: string;
      description: string;
      categories: string[];
    };
  }

  export let post: Post;
</script>

<div class="post-preview-card">
  <a href={post.path}>
    <img src="https://via.placeholder.com/580x240.png" alt="placeholder" />
  </a>
  <div class="post-preview-content">
    <span class="post-date">
      {post.meta.date}
    </span>
    <a class="post-link" href={post.path}>
      <h2 class="post-title">
        {post.meta.title}
      </h2>
    </a>
    <p class="post-description">{post.meta.description}</p>
  </div>
  <div class="category-list">
    {#each post.meta.categories as category}
      <span class="post-category">
        {category}
      </span>
    {/each}
  </div>
</div>

<style lang="scss">
  .post-link {
    text-decoration: none;
    color: var(--color-heading);

    &:hover {
      text-decoration: underline;
    }
  }
  .post-preview-card {
    display: flex;
    flex-direction: column;
  }

  .post-preview-content {
    display: flex;
    flex-direction: column;
    gap: var(--space-3);
    margin-top: var(--space-8);
    margin-bottom: var(--space-6);
  }

  .post-date {
    font-size: var(--fs-text-sm);
    font-weight: var(--fw-semibold);
    color: var(--color-primary-text);
  }

  .post-title {
    font-size: var(--fs-display-xs);
    font-weight: var(--fw-semibold);
  }

  .post-description {
    color: var(--color-text);
  }

  .category-list {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-2);
  }

  .post-category {
    font-size: var(--fs-text-sm);
    font-weight: var(--fw-medium);
    color: var(--color-primary-text);
    background-color: var(--color-primary-background);
    padding: 2px var(--space-2);
    border-radius: var(--radius-full);
  }
</style>
