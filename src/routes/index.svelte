<script>
  import Button from '$lib/components/Button.svelte';

  let string = `this string contains some <strong style="font-style: italic">HTML</strong>`;
  let count = 0;
  $: doubled = count * 2;

  function handleClick() {
    count += 1;
  }
</script>

<div class="wrapper">
  <div>
    <h1 class="count-header">
      The double of
      <span class="code">count</span> is {doubled}
    </h1>
    <p>{@html string}</p>
    <!-- https://svelte.dev/tutorial/event-forwarding -->
    <Button
      on:click={handleClick}
      on:message={e => console.log(e.detail)}
      size="lg"
      text="Clicked {count} {count === 1 ? 'time' : 'times'}"
    />
  </div>
  <div class="img-wrapper">
    <img
      class="img"
      alt="Pikachu flying with Baloons"
      src="https://i.pinimg.com/originals/fa/84/a1/fa84a1db06d09d951eb9841308606092.gif"
    />
  </div>
</div>

<style>
  .wrapper {
    font-family: -apple-system, sans-serif;
    display: flex;
    justify-content: space-between;
  }

  .count-header {
    font-size: 1.8rem;
    font-weight: 600;
  }

  .img-wrapper {
    padding: 24px;
    width: 120px;
  }

  .img {
    width: 100%;
  }

  .code {
    font-family: 'Courier New', Courier, monospace;
    color: gray;
  }
</style>
