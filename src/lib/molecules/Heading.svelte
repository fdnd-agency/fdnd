<script>
  let { title, subtitle = "" } = $props();
  let id = title ? title .replace(/[^\w\s]/gi, "") .replace(/\s+/g, "-") .toLowerCase() : "";
</script>

<h2> 
  {title}
  {#if subtitle !== ""}
    <strong> {subtitle} </strong>
  {/if}
</h2>

<style>
  h2 {
    font-weight: bold;
    letter-spacing: -0.04em;
    margin: 0;
    font-weight: 200;
    font-size: clamp(1.8rem, 2.25rem, 5vw);
    text-wrap: balance;

    strong {
      display: block;
      white-space: nowrap;
    }
  }
</style>
