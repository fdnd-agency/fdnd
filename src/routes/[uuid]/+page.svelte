<script>
  import { Svg } from "$lib";

  export let data;

  let details = data.details;

  const formatDateTime = (dateTime) => {
      const date = new Date(dateTime);

      const rawDayName = new Intl.DateTimeFormat("nl-NL", {
          weekday: "long",
      }).format(date);
      const dayName =
          rawDayName.charAt(0).toUpperCase() +
          rawDayName.slice(1).toLowerCase();

      const day = date.getDate();
      const monthName = new Intl.DateTimeFormat("nl-NL", {
          month: "long",
      }).format(date);
      const year = date.getFullYear();

      const time = date.toLocaleTimeString("nl-NL", {
          hour: "2-digit",
          minute: "2-digit",
      });

      return { dayName, day, monthName, year, time };
  };

  $: formattedDateTime = formatDateTime(details.date_time);
</script>

<header>
  <article>
      <h1>{details.title}</h1>
      <small>
          {formattedDateTime.dayName}
          {formattedDateTime.day}
          {formattedDateTime.monthName}
          {formattedDateTime.year}
          <span class="red-circle">·</span>
          {formattedDateTime.time}
      </small>
  </article>

  <a href="/">Terug</a>
</header>

<img
  src={`https://fdnd-agency.directus.app/assets/${details.image}`}
  alt="Foto van de spreker"
/>
<section>
  <article>
      <h2>{details.speaker}</h2>
      <h3>{details.job_title}</h3>
      <p>
          {details.description ||
              "Er is op dit moment geen specifieke beschrijving beschikbaar voor dit item. Mogelijk is de informatie nog niet toegevoegd of niet beschikbaar."}
      </p>
  </article>

  <aside>
      <div>
          <h3>Onderwerp(en)</h3>
          <ul>
              {#each details.labels as label}
                  <li>{label}</li>
              {/each}
          </ul>
      </div>

      <nav>
          <h3>Nuttige link(s)</h3>
          <ul>
              <li>
                  <a href={details.website_link}
                      ><span>Portfolio</span><Svg name="arrow-right" /></a
                  >
              </li>
              <li>
                  <a href={details.website_link_2}
                      ><span>Bedrijf</span><Svg name="arrow-right" /></a
                  >
              </li>
          </ul>
      </nav>
  </aside>
</section>

<style>
  .red-circle {
      color: var(--purple);
  }

  header {
      color: var(--blue);
      display: flex;
      flex-direction: column;

      @media (min-width: 768px) {
          margin-top: 1.5rem;
      }

      @media (min-width: 1024px) {
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
      }
  }

  header article h1 {
      font-size: 1.8rem;
      margin-bottom: 0.5rem;

      @media (min-width: 1024px) {
          font-size: 2.6rem;
      }
  }

  header article small {
      font-size: 1rem;

      @media (min-width: 1024px) {
          font-size: 1.2rem;
      }
  }

  header > a {
      position: relative;
      z-index: 1;
      border: 1px solid var(--blue);
      padding: 10px 5rem;
      margin-top: 1.875rem;
      background-color: var(--green);
      border-radius: 10px;
      color: var(--blue);
      font-weight: 700;
      text-decoration: none;
      width: fit-content;
      transition:
          top 0.2s,
          right 0.2s;

      @media (min-width: 1024px) {
          padding: 1.25rem 6.25rem;
          margin-top: 0;
      }
  }

  header > a:hover {
      top: 1px;
      right: 1px;
  }

  header > a::after {
      content: "";
      z-index: -1;
      position: absolute;
      width: 100%;
      height: 100%;
      border: 1px solid var(--blue);
      background-color: var(--green);
      border-radius: 10px;
      right: 2px;
      top: 2px;
      transition:
          top 0.2s,
          right 0.2s;
  }

  header > a:hover::after {
      top: 1px;
      right: 1px;
  }

  img {
      width: 100%;
      margin-top: 2.5rem;
      border-radius: 1rem;
  }

  section {
      margin-top: 1rem;
      display: flex;
      flex-direction: column;

      @media (min-width: 1024px) {
          flex-direction: row;
      }
  }

  h2 {
      color: var(--blue);
  }

  h3 {
      margin-top: 5px;
      font-size: 1rem;
      font-weight: var(--font-weight-semi);
      color: var(--blue);
  }

  p {
      margin-top: 10px;
      font-size: 1rem;
      font-weight: var(--font-weight-semi);
      color: rgb(5 5 66 / 65%);
      margin-bottom: 1rem;
  }

  aside {
      display: flex;
      justify-content: space-around;
      position: relative;
      min-width: 25%;
      @media (min-width: 1024px) {
          flex-direction: column;
      }
  }
  @media (min-width: 1024px) {
      aside::before {
          content: "";
          position: absolute;
          height: 100%;
          width: 2px;
          background-color: #e9e0e9;
          left: -1rem;
          top: 0;
      }
  }

  aside h3 {
      opacity: 45%;
      margin-bottom: 1.5rem;
  }

  aside div ul {
      list-style-type: none;
      display: flex;
      flex-wrap: wrap;
      gap: 0.4rem;
      max-width: 80%;

      @media (min-width: 1024px) {
          max-width: 100%;
      }
  }

  aside div ul li {
      padding: 0.2rem 1rem;
      background-color: red;
      border-radius: 5rem;
      font-weight: 600;
      color: var(--blue);
      cursor: pointer;
      transition: 0.7s;
  }

  aside div ul li:hover {
      transform: scale(1.05);
  }

  aside div ul li:nth-child(1) {
      background-color: var(--yellow);
  }
  aside div ul li:nth-child(2) {
      background-color: var(--green);
  }
  aside div ul li:nth-child(3) {
      background-color: var(--purple);
      color: var(--white);
  }
  aside div ul li:nth-child(4) {
      background-color: #ff86f9;
  }
  aside div ul li:nth-child(5) {
      background-color: #86bcff;
      color: var(--white);
  }

  aside nav {
      min-width: 30%;
  }

  aside nav ul {
      list-style-type: none;
      color: var(--blue);
      font-weight: 500;
  }

  aside nav ul li {
      margin-bottom: 1rem;
      transition: 0.3s ease-in-out;
      width: fit-content;
  }

  aside nav ul li a {
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--blue);
      display: flex;
      align-items: center;
      cursor: pointer;
  }
  aside nav ul li a span {
      margin-right: 0.8rem;
  }

  aside nav ul li:hover {
      margin-left: 5px;
      opacity: 85%;
      transition: 0.3s ease-in-out;
  }

  @media screen and (min-width: 768px) {
      section {
          margin-top: 1.563rem;
      }

      img {
          border-radius: 1.25rem;
      }

      h2 {
          font-size: 1.875rem;
      }

      h3 {
          margin-top: 10px;
          font-size: 1.125rem;
      }

      p {
          margin-top: 1rem;
          font-size: 1.375rem;
      }
  }

  @media screen and (min-width: 1024px) {
      p {
          max-width: 95%;
      }
  }

  @media screen and (min-width: 1440px) {
      section {
          margin-top: 3.125rem;
      }

      img {
          border-radius: 1.5rem;
      }
      h2 {
          font-size: 2.5rem;
      }

      h3 {
          margin-top: 5px;
          font-size: 1.375rem;
      }

      p {
          margin-top: 1.875rem;
          font-size: 1.5rem;
      }
  }
</style>
