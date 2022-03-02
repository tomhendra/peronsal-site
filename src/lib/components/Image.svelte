<script>
  import {image, initialize} from 'svelte-cloudinary';
  import {CLOUDINARY_PLUBLIC_ID, CLOUDINARY_PROJECT_DIR} from '$lib/constants';

  export let filename = null;
  export let alt = null;

  const src = `${CLOUDINARY_PROJECT_DIR}/${filename}`;

  initialize({cloud_name: CLOUDINARY_PLUBLIC_ID});
</script>

<img use:image={{src, bind: true, lazy: true}} class="img" {alt} />

<style>
  .img {
    width: 50vw;
    height: 50vh;
    object-fit: cover;
  }
</style>
