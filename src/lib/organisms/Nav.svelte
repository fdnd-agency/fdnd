<script>
  import { page } from "$app/stores";
  import { HvaLogo } from '$lib';
  
  let navItems = [
    {
      href: "/static-web/the-startup",
      sprintNr: 6,
      sprintName: "The Startup",
    },
    {
      href: "/workflow-tooling-frameworks/release-candidate",
      sprintNr: 18,
      sprintName: "Release Candidate",
    },
  ];
</script>

<header>
  <div class="top">
    <HvaLogo />
    <p>Frontend Design & Development</p>
  </div>
  <div class="left">
    <a href="/" class="fdnd-logo" aria-labelledby="Programma-overzicht-pagina">
      <h1>FDND</h1>
    </a>
  </div>
  <nav>
    <ul>
      {#each navItems as item}
        <li>
          <a
            class:active={$page.url.pathname === item.href}
            href={item.href}
            target="_self"
            class="nav-item"
            ><span>Sprint {item.sprintNr}</span>
            <strong> {item.sprintName} </strong></a
          >
        </li>
      {/each}
    </ul>
  </nav>
</header>

<style>
  header {
    display: grid;
    grid-template-areas:
      "top top"
      "left nav";
    padding: 1rem 0 0 0;

    .top {
      grid-area: top;
      max-width: 100%;
      min-height: 1.2rem;
      margin-bottom: 1rem;
      display: flex;
      justify-content: start;
      flex-direction: row;
      flex-wrap: wrap;

      p {
        position: relative;
        letter-spacing: -0.03em;
        font-size: 0.8rem;
        margin-left: 0.25em;
        display: none;
      }

      p::before {
        content: unset;
      }
    }

    .left {
      display: flex;
      margin: 0;
      padding-left: 1em;
      padding-bottom: 1em;
      align-items: center;
    }

    .fdnd-logo {
      position: relative;
      color: var(--blueberry);
      font-weight: 700;
      padding: 0.25em 0.5em;
      border: 1px solid var(--blueberry);
      border-radius: var(--rounded);
      text-decoration: none;
      background: var(--white);
      transition: all 0.4s ease-out;

      h1 {
        margin: 0;
        font-variation-settings:
          "wght" 800,
          "wdth" 90;
      }
    }

    .fdnd-logo:focus-visible,
    .fdnd-logo:hover {
      right: 3px;
      top: 3px;
      text-decoration: none;
    }

    .fdnd-logo::before {
      content: "";
      z-index: -1;
      position: absolute;
      width: 100%;
      height: 100%;
      border: 1px solid var(--attention);
      background-color: var(--grey);
      border-radius: var(--rounded);
      color: var(--attent);
      right: 3px;
      top: 2px;
    }

    .fdnd-logo:focus-visible::before,
    .fdnd-logo:hover::before {
      right: 1px;
      top: 1px;
    }

    a:hover:not(.fdnd-logo),
    a:focus:not(.fdnd-logo),
    a:focus-visible:not(.fdnd-logo) {
      color: var(--text-element-hover);

      text-decoration-color: var(--text-element-hover);
      outline: none;
    }
  }

  nav {
    display: flex;
    justify-content: flex-end;
    margin: 0 0 0 auto;
    box-shadow: 0 6px var(--grey);
    position: relative;
    z-index: 10;

    ul {
      position: relative;
      display: flex;
      flex-direction: row;
      gap: 0.75rem;
      border-radius: 1rem 0 0 0;
      margin: 0;
      padding: 0.75rem;
      list-style: none;
      background: var(--grey);
      color: var(--blueberry);
      max-width: calc(100% - var(--rounded) * 2.25);
      transform: translateY(100%);
      animation: up 0.4s 0.6s ease-out forwards;
      border-radius: 1rem 1rem 0 0;

      li {
        a {
          color: var(--blueberry);
          text-decoration: none;
        }
      }

      @media (min-width: 750px) {
        gap: 1.75rem;
        padding: 0.5rem 1.5rem;
      }
    }

    ul::before {
      content: "";
      position: absolute;
      width: 1.5rem;
      height: 1.5rem;
      left: -1.5em;
      border-radius: 0 0 1rem 0;
      bottom: 0;
      box-shadow: 0.5em 0.5em 0 0 var(--grey);
    }
  }

  ul li a {
    font-size: 0.6rem;
    display: flex;
    flex-direction: column;

    span {
      text-transform: uppercase;
    }

    strong {
      font-size: 0.8rem;
      white-space: nowrap;

      @media (min-width: 750px) {
        font-size: 1rem;
      }
    }
  }

  a:hover,
  a:focus {
    text-decoration: underline;
  }
  a:focus-visible {
    outline: none;
  }

  @media (760px <= width) {
    header {
      .top {
        p {
          margin-left: 1.5rem;

          display: block;
        }

        p::before {
          content: "";
          position: absolute;
          left: -0.5rem;
          width: 1px;
          height: 100%;
          background-color: currentColor;
        }
      }

      .left {
        margin: 0;
        padding-left: 2em;
      }

      nav {
        ul {
          align-items: center;
          padding: 0.75em 2.5em;
          gap: 3.5rem;

          li {
            a {
              font-weight: 200;
            }
          }
        }
      }
    }
  }

  @media (1025px <= width) {
    header {
      .top {
        p::before {
          content: "";
          position: absolute;
          left: -0.75rem;
          width: 1px;
          height: 100%;
          background-color: currentColor;
        }
      }
    }

    nav {
      ul {
        padding: 0.25em 3.5em;
        gap: 4rem;
        li {
          a {
            font-weight: 200;
          }
        }
      }
    }
  }

  @media (1600 <= width) {
  }
  @keyframes up {
    to {
      transform: translateY(0);
    }
  }
</style>
