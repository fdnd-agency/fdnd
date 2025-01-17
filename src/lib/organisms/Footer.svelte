<script>
  import Logo from "$lib/atoms/HvaPayoff.svelte";
</script>

<div class="fixed-bar"></div>
<footer>
  <nav>
    <h2>FDND Microsites</h2>
    <p> FDND maakt gebruik van microsites. Microsites zijn kleine websites ter ondersteuning van een campagne, informatie over een product, dienst of voor een ander specifiek doel. </p>
    <ul>
      <li> <a href="https://fdnd.nl"> FDND.nl </a> </li>
      <li> <a href="https://contact.fdnd.nl"> Contact en routebeschrijving </a> </li>
      <li> <a href="https://programma.fdnd.nl"> Programma </a> </li>
      <li> <a href="https://partners.fdnd.nl"> Partners </a> </li>
      <li> <a href="https://niveaumatrix.fdnd.nl"> Niveaumatrix </a> </li>
      <li> <a href="https://docs.fdnd.nl"> Documenten </a> </li>
    </ul>
  </nav>
  <nav>
    <h2> Archief </h2>
    <p> Hier kun je het programma van voorgaande studiejaren bekijken. </p>
    <ul>
      <li> <a href="https://2223.programma.fdnd.nl"> Programma 2022-2023 </a> </li>
      <li> <a href="https://2324.programma.fdnd.nl"> Programma 2023-2024 </a> </li>
    </ul>
  </nav>
</footer>

<Logo />

<style>
  .fixed-bar {
    width: 100%;
    height: 0.75em;
    background: var(--lavender);
    position: sticky;
    bottom: 0;
  }

  .fixed-bar::before, .fixed-bar::after {
    content: "";
    position: absolute;
    width: 1.5em;
    aspect-ratio: 1;
    left: 0;
    border-radius: 0 0 50% 0;
    bottom: 0.75em;
    box-shadow: var(--rounded) var(--rounded) 0 var(--lavender);
    transform: rotate(90deg);
  }

  .fixed-bar::after {
    right: 0;
    left: unset;
    transform: unset;
  }

  footer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    font-size: 0.8em;
    padding: 0 0 2em 0;
    gap: 3em;

    h2 { margin: 0; }

    p {
      margin: 0 0 1em 0;
      max-width: 75ch;
    }

    ul {
      display: flex;
      flex-wrap: wrap;
      padding: 0;
      margin: 0;

      li { padding: 0.5em 0.25em;

        a {
          position: relative;
          color: var(--blueberry);
          font-weight: 700;
          padding: 0.25em 0.5em;
          border: 1px solid var(--blueberry);
          border-radius: var(--rounded);
          text-decoration: none;
          background: var(--white);
        }

        a:focus-visible, a:hover {
          background-color: var(--call-to-action);
          right: 1px;
          top: 1px;
          transition: all 0.4s ease-out;
        }

        a:focus-visible::before, a:hover::before {
          background-color: #b1b073;
          right: 1px;
          top: 1px;
        }

        a::before {
          content: "";
          z-index: -1;
          position: absolute;
          width: 100%;
          height: 100%;
          border: 1px solid var(--attention);
          background-color: var(--grey);
          border-radius: var(--rounded);
          color: var(--attent);
          right: 2px;
          top: 2px;
        }
      }
    }
  }

  @media (min-width: 720px) {
    footer { flex-wrap: nowrap;

      p {
        margin: 0 0 1em 0;
        max-width: 75ch;
      }

      ul { max-width: 30em;

        li { padding: 0.7em 0.2em;

          a { padding: 0.4em 0.6em; }
        }
      }
    }
  }

  @media (min-width: 1024px) {
    footer {
      justify-content: left;
      padding: 0 0 2em 2em;
    }
  }
</style>
