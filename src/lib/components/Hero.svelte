<script lang="ts">
  export let pageTitle: string
</script>

<section>
  <div>
    <span>FDND</span>
  </div>
  <div>
    <h1>
      {pageTitle}
    </h1>
  </div>
</section>

<style>
  section {
    height: 70vh;
    position: relative;
    background-image: url('../assets/images/hero-image.avif');
    background-size: cover;
    background-position: center 10%;
    border-radius: var(--pilled);
    margin: 1rem;
  }

  div:first-child {
    position: absolute;
    padding: 0 1rem calc(1rem + var(--shadow)) var(--shadow);
    top: 0;
    left: 0;
    width: fit-content;
    background: var(--blueberry);
    text-decoration: none;
    border-bottom-right-radius: var(--pilled);
    box-sizing: content-box;
  }

  div:last-child {
    display: block;
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 2rem 0 0 2rem;
    background: var(--blueberry);
    border-top-left-radius: 2rem;
    color: var(--lavender);
    line-height: calc(1.5rem + 1.5vw);
    text-decoration: none;
  }

  div:last-child > h1 {
    font-size: calc(1.5rem + 1vw);
    margin: 0;
    padding: .3rem;
    border: 2px solid var(--lavender);
  }

  span {
    display: block;
    padding: 0.5rem 1.2rem;
    border: 1px solid var(--turquoise);
    border-radius: var(--rounded);
    box-shadow: calc(-1 * var(--shadow)) var(--shadow) 0 0 var(--turquoise);
    color: var(--turquoise);
    font-size: 2.5rem;
    text-transform: lowercase;
    margin: 0;
  }

  span::before {
    content: '';
    position: absolute;
    top: 0;
    right: calc(-1 * var(--rounded));
    box-shadow: 0 calc(-1 * var(--rounded)) 0 0 var(--blueberry);
    background-color: transparent;
    width: var(--rounded);
    height: calc(2 * var(--rounded));
    border-top-left-radius: var(--rounded);
  }

  span::after {
    left: 0;
    bottom: calc(-2 * var(--rounded));
    box-shadow: 0 calc(-1 * var(--rounded)) 0 0 var(--blueberry);
    content: '';
    position: absolute;
    background-color: transparent;
    width: var(--rounded);
    height: calc(2 * var(--rounded));
    border-top-left-radius: var(--rounded);
  }
</style>
