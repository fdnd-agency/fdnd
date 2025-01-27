<script>
  let { prevSprint, nextSprint } = $props()
</script>

<nav>
  {#if prevSprint}
      <a data-sveltekit-reload href="/{prevSprint.semester.slug}/{prevSprint.slug}">
        <svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /><path d="M5 12l4 4" /><path d="M5 12l4 -4" /></svg>
        Vorige sprint
        <span>: {prevSprint.title}</span>
      </a>
  {/if}
  
  {#if nextSprint}
      <a data-sveltekit-reload href="/{nextSprint.semester.slug}/{nextSprint.slug}">
          Volgende sprint<span>: {nextSprint.title}</span>

          <svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /><path d="M15 16l4 -4" /><path d="M15 8l4 4" /></svg>
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
        gap:.25rem;
        cursor:pointer;

        &:hover,
        &:focus {
            outline-color: var(--blueberry);
            text-decoration: underline;
        }
    }

    a > span{
        display:none;
    }

    @media (min-width:47rem) {
      a > span {
          display: inline;
      } 
    }

    a:last-of-type {
        margin-left:auto;
    }

    svg {
      translate:0 1px;
    }
  }
</style>