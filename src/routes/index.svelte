<script>
  import {Button} from '$lib/components';

  // import {prefetch} from '$app/navigation';
  // prefetch('/blog'); // Loads the blog page in the background
  // prefetch('/about'); // Loads the about page in the background
  // prefetchRoutes(); // Loads ALL routes in the background
</script>

<svelte:head>
  <title>Home • Tom Hendra's blog</title>
</svelte:head>

<h1>Hi, I'm Tom!</h1>
<p>
  Welcome to my blog, a space to share disoveries and insights into web
  development with the world.
</p>

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
