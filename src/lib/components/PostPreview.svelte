<script lang="ts">
  import ArrowUpRight from './icons/ArrowUpRight.svelte';
  import type {PostData} from '$lib/types';
  import {Image, TagList, Tag} from '$lib/components';
  import Spacer from './Spacer.svelte';
  import {formatDate} from '$lib/utils';
  export let post: PostData;
</script>

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

<article>
  <a sveltekit:prefetch href="/posts/{post.slug}">
    <Image source={post.coverImage} alt={post.alt} ratio="3 / 2" />
  </a>
  <span class="date">{formatDate(post.date)}</span>
  <Spacer size={12} />
  <a sveltekit:prefetch class="title-link" href="/posts/{post.slug}">
    <h2 class="title">{post.title}</h2>
    <div class="icon-wrapper">
      <ArrowUpRight />
      <span class="visually-hidden">Decorative arrow</span>
    </div>
  </a>
  <h3 class="subtitle">{post.subtitle}</h3>
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
    display: inline-block;
    font-size: var(--font-size-text-sm);
    line-height: var(--line-height-text-sm);
    font-weight: var(--font-weight-semibold);
    color: var(--color-primary-text);
    margin-top: var(--space-8);
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
    line-height: var(--line-height-display-xs);
    margin: 0;
    margin-bottom: var(--space-3);

    @include mobileAndDown {
      font-size: var(--font-size-text-xl);
      line-height: var(--line-height-text-xl);
    }
  }

  .subtitle {
    color: var(--color-text);
    font-size: var(--font-size-text-md);
    line-height: var(--line-height-text-md);
    font-weight: var(--font-weight-normal);
    margin-top: 0;
    /* line-clamp will replace this ceremony once it becomes spec */
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    margin-bottom: var(--space-6);
  }
</style>
