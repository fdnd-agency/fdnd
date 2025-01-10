<script>
    import { Heading, Grid, About, Credits} from "$lib";

    export let data;
</script>

<Heading
    smallText={'Laat je inspireren door experts!'}
    h1Text={'We ❤️ Web'}
    linkText={'Archief'}
    link={'/collectie'}
></Heading>
<Grid {data} />
<About />
<Credits />
