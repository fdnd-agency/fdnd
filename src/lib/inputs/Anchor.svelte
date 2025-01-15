<script>

  let {
    link = "#",
    text = "Button text",
    label = "Enter Aria-Label",
    backgroundColor = "white",
    padding = ".75rem",
  } = $props();
</script>

<a
  href={link}
  aria-label={label}
  style="--anchor-bg-color: {backgroundColor}; --anchor-padding: {padding}"
>
  {text}
</a>

<style>
  a {
    position: relative;
    z-index: 1;
    border: 1px solid var(--blue);
    padding: var(--anchor-padding);
    background-color: var(--anchor-bg-color);
    border-radius: 10px;
    color: var(--blue);
    font-weight: 700;
    text-decoration: none;
  }

  a:hover {
    right: 1px;
    top: 1px;
  }

  a::after {
    content: "";
    z-index: -1;
    position: absolute;
    width: 100%;
    height: 100%;
    border: 1px solid var(--blue);
    background-color: var(--anchor-bg-color);
    border-radius: 10px;
    color: var(--blue);
    right: 2px;
    top: 2px;
  }

  a:hover::after {
    right: 1px;
    top: 1px;
  }
</style>
