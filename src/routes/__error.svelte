<script lang="ts" context="module">
  import type {ErrorLoad} from '@sveltejs/kit';

  export const load: ErrorLoad = ({error, status}) => {
    return {props: {error, status}};
  };
</script>

<script lang="ts">
  export let status: number;
  export let error: Error;
</script>

<div class="max-width-container">
  <main>
    <section class="header-section">
      <span class="heading-prefix">{error.name} {status}</span>
      <h1>{error.message}</h1>
      <p class="subtitle">Oops! Something went wrong...</p>
      <a href="/">Go back home</a>
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
