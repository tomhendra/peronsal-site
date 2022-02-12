<script>
  function toggle() {
    window.document.body.dataset.theme =
      window.document.body.dataset.theme === 'dark' ? 'light' : 'dark';
  }
</script>

<button on:click={toggle}>Theme</button>
