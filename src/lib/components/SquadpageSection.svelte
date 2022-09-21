<script lang="ts">
  import Hashtag from '$lib/components/Hashtag.svelte'
  import * as prismicH from '@prismicio/helpers'

  export let squad: []
</script>

<section>
  <div>
    <div>
      <Hashtag />
    </div>
    {@html prismicH.asHTML(squad)}
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
  
  @media(max-width: 35rem) {
    div:last-child:after {
      display: none;
    }
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
