<script>
  import Semesters from "$lib/organisms/Semesters.svelte"
  import Program from "$lib/molecules/Program.svelte"
  
  let { data } = $props()
  const { title, subtitle, content, semesters } = data
</script>

<Program {title} {content} />
<Semesters {semesters} {subtitle} />