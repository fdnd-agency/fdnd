<script>
  import { Heading, IconStar } from '$lib';


  let { stargazer = $bindable(false), tasks } = $props();

  if (tasks) {
    tasks.forEach((task) => {
      if (!stargazer && task.forks && task.forks.length > 0) {
        stargazer = true;
      }
    });
  }
</script>

{#if tasks && tasks.length > 0}
  <section class="showcase {stargazer ? 'stargazer' : ''}">
    <Heading title="Studentenwerk" />
    <div class="gradient-container">
      <ul>
        {#each tasks as task}
          {#if task.forks && task.forks.length > 0}
            {#each task.forks as fork}
              <li>
                <div class="repo">
                  <span class="repo-title">{fork.title}</span>
                  <IconStar stargazerCount={fork.stargazerCount} />
                  <div class="links">
                    <a href={fork.url} target="_blank" rel="noreferrer">Code</a>
                    {#if fork.homepageUrl}
                      <a
                        href={fork.homepageUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Website
                      </a>
                    {/if}
                  </div>
                </div>
                <strong class="profile">
                  <img
                    src={fork.avatarUrl}
                    alt=""
                    class="avatar"
                    loading="lazy"
                    height="2rem"
                    width="2rem"
                  />
                  <a href={fork.ownerUrl} target="_blank" rel="noreferrer">
                    @{fork.owner}
                  </a>
                </strong>
              </li>
            {/each}
          {/if}
        {/each}
      </ul>
    </div>
  </section>
{/if}

<style>
  .showcase {
    display: block;
  }

  .gradient-container {
    position: relative;
  }

  .showcase ul {
    display: flex;
    gap: 1rem;
    padding: 0;
    overflow: scroll;
    scroll-snap-type: x mandatory;
    padding-bottom: 1rem;
    margin: 0 -4px;
    padding: 4px;
  }

  .showcase ul li {
    display: flex;
    flex-wrap: wrap;
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    border-radius: var(--rounded)
    margin-bottom: 0;
    position: relative;
    min-width: 230px;
    scroll-snap-align: center;
    background: var(--white);
    border: var(--blueberry) 2px solid;
    box-shadow: -4px 4px 0px var(--blueberry);
    gap: 0.25rem;
  }

  .stargazer {
    display: block;
  }

  .repo {
    overflow: hidden;
  }

  .repo a,
  .repo span {
    display: block;
  }

  .repo-title {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .links {
    display: inline-flex;
    gap: 0.2em;
    text-transform: uppercase;
    flex-wrap: wrap;
  }

  .links a {
    border: 1px solid currentColor;
    border-radius: 1rem;
    padding: 0.3em 0.5em;
    margin: 1em 0 0.8em 0;
    line-height: 1;
    text-decoration: none;
    font-size: 0.6em;
    color: var(--blueberry);
  }

  .links a:hover:not(.profile),
  a:focus:not(.profile),
  a:focus-visible:not(.profile) {
    color: var(--blueberry);
  }

  .profile {
    position: relative;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    overflow: hidden;
    white-space: nowrap;
    gap: 0.5rem;
    padding: 0.5rem 0;
    margin: 0;
  }

  .profile a {
    text-decoration: none;
    font-size: 0.7em;
    display: block;
    padding: 0;
  }

  .profile::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    opacity: 0.5;
    border-top: 1px solid currentColor;
  }

  .avatar {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    margin-bottom: 0;
    image-rendering: optimizeSpeed;
    content-visibility: auto;
  }
</style>
