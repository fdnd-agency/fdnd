<script>
  let { title, subtitle = "" } = $props();
  let id = title ? title .replace(/[^\w\s]/gi, "") .replace(/\s+/g, "-") .toLowerCase() : "";
</script>

<h2>
  <span>
    {title}
  </span>
  {#if subtitle !== ""}
    <strong> {subtitle} </strong>
  {/if}
</h2>

<style>
  h2 {
    font-weight: bold;
    letter-spacing: -0.04em;
    margin: 0;
    font-weight: 600;
  }

  h2 > strong {
    display: block;
    white-space: nowrap;
  }
</style>
