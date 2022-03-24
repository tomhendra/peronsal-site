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

<ul>
  <li><a href="/">Home</a></li>
</ul>
