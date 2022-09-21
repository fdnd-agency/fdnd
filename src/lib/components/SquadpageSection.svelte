<script lang="ts">
  import Hashtag from '$lib/components/Hashtag.svelte'

  export let year: number
</script>

<section>
  <div>
    <div>
      <Hashtag />
    </div>
    <h2>leerjaar-{year}</h2>
  </div>
  <div>
    <slot />
  </div>
</section>

<style>
  section {
    color: var(--color-white);
    position: relative;
  }

  div:last-child:after {
    content: '';
    background: linear-gradient(to left, var(--blueberry), transparent);
    height: 100%;
    width: 10rem;
    position: absolute;
    z-index: 1;
    right: 0;
  }

  div:first-child {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    position: relative;
  }

  div:first-child > div {
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.75rem;
    background-color: var(--turquoise);
    width: 1.25rem;
    height: 1.25rem;
    margin-right: 0.313rem;
  }

  div:last-child {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    overflow-y: auto;
    overscroll-behavior-x: contain;
    scroll-snap-type: x mandatory;
    padding-right: 6rem;
  }

  ::-webkit-scrollbar {
    height: 2px;
  }

  ::-webkit-scrollbar-track {
    background: var(--blueberry);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--turquoise);
  }
</style>
