<script>
  let { prevSprint, nextSprint } = $props();
  import Arrow from "../atoms/Arrow.svelte";
</script>

<nav>
  {#if prevSprint}
    <a
      data-sveltekit-reload
      href="/{prevSprint.semester.slug}/{prevSprint.slug}"
    >
      <Arrow />

      Vorige sprint
      <span>: {prevSprint.title}</span>
    </a>
  {/if}

  {#if nextSprint}
    <a
      data-sveltekit-reload
      href="/{nextSprint.semester.slug}/{nextSprint.slug}"
    >
      Volgende sprint<span>: {nextSprint.title}</span>

      <Arrow rightArrow="right-arrow" />
      
    </a>
  {/if}
</nav>

<style>
  nav {
    font-size: 1rem;
    font-weight: 600;
    display: flex;
    justify-content: space-between;
    margin: 2rem 0 0;

    a {
      text-decoration: none;
      color: var(--blueberry);
      display: flex;
      align-items: center;
      gap: 0.25rem;
      cursor: pointer;

      &:hover,
      &:focus,
      &:focus-visible {
        color: var(--text-element-hover);
        text-decoration: underline;
        outline: none;
        outline-offset: none;
        text-decoration-color: var(--text-element-hover);
      }
    }

    a > span {
      display: none;
    }

    @media (min-width: 47rem) {
      a > span {
        display: inline;
      }
    }

    a:last-of-type {
      margin-left: auto;
    }
  }
</style>
