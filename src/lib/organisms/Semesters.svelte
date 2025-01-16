<script>
  import Semester from "$lib/molecules/Semester.svelte";
  import { onMount } from "svelte";
  let { semesters, subtitle } = $props();
  let jsEnabled = $state(true);
  function toggleDates({ target }) { if (target.nodeName == "INPUT") { document.body.classList.toggle("expand"); } }
  onMount(() => { jsEnabled = true; document.body.classList.remove("expand"); });
</script>

<section class="semesters-sprints">
  <h2>{subtitle}</h2>

  {#if jsEnabled}
    <form class="agenda-container">
      <label for="show-hide-dates">
        <input type="checkbox" id="show-hide-dates" class="pacman" onchange={toggleDates}/>
        Show/hide full agenda
      </label>
    </form>
  {/if}

  <div class="semester-grid">
    {#each semesters as semester, i}
      <Semester {semester} {i} />
    {/each}
  </div>
</section>

<style>
  @keyframes waka_waka_waka { to { transform: translate(-50%, var(--translation)) rotate(var(--rotation)); } }

  section {
    position: relative;
    padding: 0;
    background: var(--grey);
    color: var(--blueberry);
  }

  h2 { margin: 0; padding: 3rem .1rem 1.5rem; }

  form {
    label{
      display: flex;
      flex-direction: column;
      color: var(--blueberry);
      font-size: 0.7rem;
      font-weight: 700;
      margin-left: 0.15rem;
    }
  

  .pacman {
    appearance: none;
    position: relative;
    font-size: 1.5em;
    width: 3.5em;
    margin-left: -0.15em;
    aspect-ratio: 3;
    border: max(1px, 0.05em) solid #fff;
    border-radius: 2em;
    box-sizing: content-box;
    cursor: pointer;
    background: linear-gradient(90deg, var(--lavender) 6em, #1230 0) -5.5em 0 / 9em 100%, radial-gradient(circle, #fff 0.075em, #fff0 0.08em) 50% 0 / 0.4em 100%, var(--lavender);
    transition: background-position calc(var(--speed) * 4) linear;
    --waka-speed: 0.4s;
    --speed: 0.5s;
  }

  .pacman::before, .pacman::after {
    --rotation: 30deg;
    --translation: -100%;
    content: "";
    position: absolute;
    width: 0.7em;
    height: 0.4em;
    background: yellow;
    border-radius: 50% / 100% 100% 0 0;
    top: 50%;
    left: 0.5em;
    transform-origin: 50% 100%;
    transform: translate(-50%, var(--translation)) rotate(0);
    transition: left calc(var(--speed)) linear;
    animation: waka_waka_waka var(--waka-speed) alternate infinite;
  }
  
  .pacman::after {
    --rotation: -30deg;
    --translation: 0;
    border-radius: 50% / 0 0 100% 100%;
    transform-origin: 50% 0;
  }
  
  .pacman:checked { background-position: 2.5em 0, 50% 0; }
  .pacman:checked::before, .pacman:checked::after { --rotation: -30deg; left: calc(100% - 0.5em); }
  .pacman:checked::after { --rotation: 30deg; }
  }

  .semester-grid {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    overflow: scroll;
    gap: 1.75em;
    scroll-snap-type: x mandatory;
    padding: 1rem 0 2rem 0;
  }

  @media (prefers-reduced-motion: reduce) { .pacman::before, .pacman::after { animation: none; } }
  @media (min-width: 1250px) { h2 { padding-left: 0rem; } }
</style>