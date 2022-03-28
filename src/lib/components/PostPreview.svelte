<script lang="ts">
  import ArrowUpRight from './icons/ArrowUpRight.svelte';
  import type {PostData} from '$lib/types';
  import {Image, TagList, Tag} from '$lib/components';
  import Spacer from './Spacer.svelte';
  import {formatDate} from '$lib/utils';
  export let post: PostData;
</script>

<article>
  <a href="/posts/{post.slug}">
    <Image source={post.coverImage} alt={post.alt} ratio="3 / 2" />
  </a>
  <Spacer size={32} />
  <span class="date">{formatDate(post.date)}</span>
  <Spacer size={12} />
  <a class="title-link" href="/posts/{post.slug}">
    <h2 class="title">{post.title}</h2>
    <div class="icon-wrapper">
      <ArrowUpRight />
      <span class="visually-hidden">Decorative arrow</span>
    </div>
  </a>
  <p class="description">{post.description}</p>
  <TagList>
    {#each post.tags as tag}
      <Tag>
        {tag}
      </Tag>
    {/each}
  </TagList>
</article>

<style lang="scss">
  .date {
    font-size: var(--font-size-text-sm);
    font-weight: var(--font-weight-semibold);
    color: var(--color-primary-text);
  }

  .title-link {
    text-decoration: none;
    color: var(--color-heading);
    display: flex;
    justify-content: space-between;
    gap: var(--space-4);

    &:hover {
      text-decoration: underline;
    }

    .icon-wrapper {
      flex-shrink: 0;
      align-self: flex-start;
      padding-top: var(--space-1);
    }
  }
  .title {
    font-size: var(--font-size-display-xs);
    margin: 0;
    margin-bottom: var(--space-3);

    @include mobileAndDown {
      font-size: var(--font-size-text-xl);
    }
  }

  .description {
    color: var(--color-text);
    /* line-clamp will replace this ceremony once it becomes spec */
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    margin-bottom: var(--space-6);
  }
</style>
