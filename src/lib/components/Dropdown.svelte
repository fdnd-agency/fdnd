<script lang="ts">
  export let items: any[]

  let selected = ''
</script>

<div class="dropdown">
  <div class="selected">
    <p>{!selected ? 'Selecteer Squad' : selected}</p>
    <div class="arrow" />
  </div>
  <div class="dropdown-items">
    <ul>
      {#each items as item}
        <li on:click={() => (selected = item.title)}><a href="#{item.title}">{item.title}</a></li>
      {/each}
    </ul>
  </div>
</div>

<style>
  .dropdown {
    position: relative;
    display: inline-block;
    cursor: pointer;
    z-index: 10;
    font-size: 1.2rem;
  }

  .dropdown-items:focus-within ul {
    opacity: 1;
  }

  .dropdown:hover .dropdown-items ul {
    opacity: 1;
  }

  .selected {
    display: inline-flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    padding-left: 1.5rem;
    border: 1px solid var(--lavender);
    color: var(--lavender);
    text-align: left;
    white-space: nowrap;
    position: relative;
    justify-content: space-between;
    width: 15rem;
    border-radius: var(--pilled);
  }

  p {
    margin: 0;
  }

  .arrow {
    border-left: 0.4rem solid transparent;
    border-right: 0.4rem solid transparent;
    border-top: 0.5rem solid var(--lavender);
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: inline-flex;
    flex-direction: column;
    position: absolute;
    width: 100%;
    opacity: 0;
    margin-top: 0.5rem;
    gap: 0.5rem;
  }

  li {
    text-align: left;
    width: 100%;
    padding: 1rem;
    background-color: var(--lavender);
    display: inline-block;
    color: var(--blueberry);
    border-radius: var(--pilled);
  }

  li:hover,
  li:focus-within {
    background-color: var(--turquoise);
  }

  a {
    text-decoration: none;
    color: inherit;
  }
</style>
