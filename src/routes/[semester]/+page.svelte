<script>
  import Heading from "$lib/molecules/Heading.svelte"
  import Content from "$lib/organisms/ContentSemester.svelte"
  import SprintLink from "$lib/molecules/SprintLink.svelte"

  let { data } = $props()

  const semester = data
  const {content, goal, sprints, title} = semester
</script>

<Heading title="Semester" subtitle={title}/>

<section>
  <div class="content-container">
    <Content {semester} {content} />

    <article>
      <h3>Sprints</h3>
      <ol>
        {#each sprints as sprint}
          <SprintLink {semester} {sprint}/>
        {/each}
      </ol>
    </article>
  </div>

  

  <article class="goal">
    <h3> Leerresultaat </h3>
    {@html semester.goal.html}
  </article>
</section>

<style>
  section{
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    gap:2rem;


    .content-container{ 
      width: 100%; 
    }
    article{
      ol{ 
        padding-left: 0; 
      }

      h3 {
        margin-top: 2rem;
      }
    }

    article.goal {
      background-color: var(--white);
      color: var(--blueberry);
      border: 2px solid var(--turquoise);
      border-radius: var(--rounded);
      box-shadow: -4px 4px var(--lavender);
      padding:1rem;
      margin: .9rem 0;
    }

    article.goal h3 {
      margin-top: 0;
    }
  }

  @media (750px <=width){
    section{
      display: flex;
      flex-direction: column;
      justify-content: start;

      .content-container{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items:start;
        gap:2rem;
        
      }
    }
  }

  @media (1024px <= width){
    section{
      display: grid;
      grid-template-areas: "content sprints";
      grid-template-columns: 2fr 1fr;

      .content-container{ 
        grid-area: content; 
      }
      
      article{
        padding-bottom: 1em;
        ol{ 
          grid-area: sprints; 
        }
      }
    }
  }
</style>