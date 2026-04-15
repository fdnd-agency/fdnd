<script>
  import { Semester } from '$lib';
  import { onMount } from "svelte";

  let { semesters, subtitle } = $props();
  let jsEnabled = $state(true);
  let isAgendaVisible = $state(false); // Correcte declaratie voor reactiviteit

  function toggleDates() {
    isAgendaVisible = !isAgendaVisible;
    document.body.classList.toggle("expand", isAgendaVisible);
  }

  function handleKeydown(event) {
    if (event.key === 'Enter' || event.key === ' ') {
      toggleDates();
    }
  }

  onMount(() => {
    jsEnabled = true;
    document.body.classList.remove("expand");
  });
</script>

<section class="semesters-sprints">
  <h2 class="sr-only">{subtitle}</h2>

  {#if jsEnabled}
    <form class="agenda-container">
      <label for="show-hide-dates" class="switch-label">
        <button
          type="button"
          id="show-hide-dates"
          class="switch"
          aria-pressed={isAgendaVisible}
          aria-label={isAgendaVisible ? "Verberg gehele agenda" : "Toon gehele agenda"}
          onclick={toggleDates}
          onkeydown={handleKeydown}
        >
          <span class="switch-circle {isAgendaVisible ? 'on' : ''}"></span>
        </button>
        <span>{isAgendaVisible ? 'Verberg gehele agenda' : 'Toon gehele agenda'}</span>
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
  section {
    position: relative;
    padding: 0;
    background: var(--grey);
    color: var(--blueberry);
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    gap: 1rem;
  }

  h2 {
    margin: 0;
    font-weight: normal;
    font-size: 1.25rem;

    @media (min-width: 750px) {
      font-size: 1.5rem;
    }
  }

  form {
    padding-top: 1em;
  }

  .switch-label {
    display: flex;
    align-items: center;
    gap: 0.5em;
    font-size: 0.875rem;
    color: var(--blueberry);
    font-weight: 700;
    cursor: pointer;
  }

  /* 🔹 Toggle switch */
  .switch {
    width: 2.5em;
    height: 1.5em;
    background-color: var(--grey);
    border-radius: 1.5em;
    border: 2px solid var(--blueberry);
    display: flex;
    align-items: center;
    padding: 0px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    position: relative;
    outline: none;
  }

  .switch-circle {
    width: 1.2em;
    height: 1.2em;
    background-color: var(--blueberry);
    border-radius: 50%;
    transition: transform 0.3s ease;
  }

  .switch[aria-pressed="true"] {
    background-color: var(--blueberry);
  }

  .switch[aria-pressed="true"] .switch-circle {
    transform: translateX(1em);
    background-color: var(--grey);
  }

  .switch:focus-visible {
    outline: 2px solid var(--blueberry);
  }

  .semester-grid {
    --_breathing-space: 4px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: start;
    overflow: scroll;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-padding: var(--_breathing-space);
    gap: 1rem;
    padding: var(--_breathing-space);
    margin: 0 calc(-1 * var(--_breathing-space));
    position: relative;

    @media (min-width: 750px) {
      gap: 2rem;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .switch-circle {
      transition: none;
    }
  }
</style>
