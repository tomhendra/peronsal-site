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

<h2>{status}</h2>
<p>{error.message}</p>

<p><strong>Oops!</strong> Maybe try these links?</p>
<ul>
  <li><a href="/">Home</a></li>
  <li><a href="/blog">Blog</a></li>
</ul>
