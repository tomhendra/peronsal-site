<script lang="ts">
  //https://github.com/cupcakearmy/svelte-cloudinary
  import {image, initialize} from 'svelte-cloudinary';
  import {CLOUDINARY_PLUBLIC_ID, CLOUDINARY_PROJECT_DIR} from '$lib/constants';

  export let filename = '';
  export let alt = '';
  export let caption = '';

  const src = `${CLOUDINARY_PROJECT_DIR}/${filename}`;

  initialize({cloud_name: CLOUDINARY_PLUBLIC_ID});
</script>

<figure>
  <img use:image={{src, bind: true, lazy: true}} class="img" {alt} />
  <figcaption>{caption}</figcaption>
</figure>

<style lang="scss">
  figure {
    display: flex;
    flex-direction: column;
    gap: var(--space-1);
  }

  img {
    height: 240px;
    width: 100%;
    display: block;
    object-fit: cover;
  }

  figcaption {
    font-size: var(--font-size-text-sm);
    color: var(--color-text);
    text-decoration: none;
  }

  @media (max-width: breakpoints.$sm) {
    img {
      height: 200px;
    }

    figcaption {
      font-size: var(--font-size-text-md);
    }
  }
</style>
