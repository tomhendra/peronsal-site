<script>
  import {image, initialize} from 'svelte-cloudinary';

  // https://res.cloudinary.com/tomhendra/image/upload/v1646152015/tomhendra/bizarre-platypus-2400.png

  const CLOUDINARY_PLUBLIC_ID = 'tomhendra';
  const src = 'tomhendra/bizarre-platypus-2400.png';
  let alt = 'Bizarre Platypus';

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
