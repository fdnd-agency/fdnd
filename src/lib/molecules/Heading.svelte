<script>
  let { title, subtitle = "" } = $props();
  let id = title
    ? title
        .replace(/[^\w\s]/gi, "")
        .replace(/\s+/g, "-")
        .toLowerCase()
    : "";
</script>

<h2>
  <span>{title}</span>
  {#if subtitle !== ""}
    <strong> {subtitle} </strong>
  {/if}
</h2>

<style>
  h2 {
    letter-spacing: -0.04em;
    text-wrap: balance;
    margin: 0;

    strong {
      display: block;
      white-space: nowrap;
    }
  }

  :global(section > h2),
  :global(article > h2) {
    font-size: clamp(1.8rem, 2.25rem, 5vw);
    font-weight: 200;
  }
</style>
