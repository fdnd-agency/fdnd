<script>
    import { Heading, ArchiveGrid } from "$lib";

    export let data;
</script>

<Heading
    smallText={'Archief pagina'}
    h1Text={'We ❤️ Web'}
    linkText={'Terug'}
    link={'/'}
></Heading>

<ArchiveGrid {data} startYear={2029} endYear={2030}/>
<ArchiveGrid {data} startYear={2028} endYear={2029}/>
<ArchiveGrid {data} startYear={2027} endYear={2028}/>
<ArchiveGrid {data} startYear={2026} endYear={2027}/>
<ArchiveGrid {data} startYear={2025} endYear={2026}/>
<ArchiveGrid {data} startYear={2024} endYear={2025}/>
<ArchiveGrid {data} startYear={2023} endYear={2024}/>
<ArchiveGrid {data} startYear={2022} endYear={2023}/>
<ArchiveGrid {data} startYear={2021} endYear={2022}/>
