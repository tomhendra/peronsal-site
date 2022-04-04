<script lang="ts">
  export let to: string;
</script>

<template>
  <li class="tag">
    <a href={to} class="tag-link">
      <slot />
    </a>
  </li>
</template>

<style lang="scss">
  li {
    margin: 0;
    list-style: none;

    &::marker {
      content: none;
    }
  }

  .tag-link {
    font-size: var(--font-size-text-sm);
    font-weight: var(--font-weight-medium);
    text-decoration: none;
    color: var(--color-primary-text);
    background-color: var(--color-primary-background);
    border-radius: var(--radius-full);
    line-height: 1;
    padding: 6px 10px;
    border: 1px solid var(--color-primary-background);
  }

  @media (hover: hover) and (pointer: fine) {
    .tag-link:hover {
      border-color: var(--color-primary);
    }
  }
</style>
