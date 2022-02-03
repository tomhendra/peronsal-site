<script context="module">
  export const load = async ({params, fetch}) => {
    const currentCategory = params.category;
    const response = await fetch('/api/posts.json');
    const posts = await response.json();

    const matchingPosts = posts.filter(post =>
      post.meta.categories.includes(currentCategory),
    );

    return {
      props: {
        posts: matchingPosts,
      },
    };
  };
</script>

<!-- I won’t go into how to render the matching content, but it’s pretty 
  much the same as our blog index page. (In fact, you could easily create a 
  component to handle listing posts, and reuse it in both places!)

It’s probably a good idea to wrap that code in a try/catch block—and for that 
matter, to anticipate situations where no posts will match the given category, 
and handle that properly in the UI. (An {#if posts.length} block with an 
{:else} should do the trick.) -->
