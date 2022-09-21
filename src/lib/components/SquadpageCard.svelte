<script lang="ts">
    import Hashtag from "$lib/components/Hashtag.svelte";

    export let squadTitle:string
    export let sprintTitle:string
</script>

<section>
    <div class="sprint-image">
        <div class="squad-title">
            <h2>{squadTitle}</h2> 
        </div>
        <div class="sprint-title">
            <h2>{sprintTitle}</h2>
        </div>
    </div>
    <div class="sprint-components">
            <div class="hastag-container">
                <Hashtag />
            </div>
            <div class="arrow-container">
                <a href="#">Bekijk deze squad
                    <span class="arrow"></span>
                </a>
            </div>
    </div>
</section>

<style>
    section {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }

    .sprint-image {
        background-image: url("../assets/images/your-tribe.avif");
        position: relative;
        height: 22.5rem;
        width: 100%;
        background-size: cover;
        background-position: center 10%;
        border-radius: var(--pilled);
    }

    .squad-title {
        position: absolute;
        top: 0;
        right: 0;
        padding: .5rem 0 0 1rem;
        background-color: var(--blueberry);
        border-bottom-left-radius: 0.625rem;
    }

    .squad-title h2 {
        color: var(--blueberry);
        background-color: var(--turquoise);
        padding: .75rem  .75rem;
        margin: -.625rem .625rem .625rem 0;
        border-radius: .625rem;
        font-size: 1.25rem;
    }

    .sprint-title {
        position: absolute;
        bottom: 0;
        left: 0;
        background-color: var(--blueberry);
        border-top-right-radius: .625rem;
        padding: .5rem;
    }

    .sprint-title h2 {
        color: var(--turquoise);
        border: 1px solid var(--turquoise);
        padding: .75rem .75rem;
        border-radius: .625rem;
        font-size: 1.25rem;
        margin: 0 .625rem -.625rem 0;
    }

    .sprint-components {
        display: flex;
        flex-direction: row;
        margin: 1rem 0;
        grid-row: 2;
    }

    .hastag-container {
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: .75rem;
        background-color: var(--lavender);
        width: 1.25rem;
        height: 1.25rem;
        margin-right: .313rem;
    }

    .arrow-container {
        width: 4rem;
        flex: 1;
        border-radius: 3.125rem;
        border: 2px solid var(--lavender);
    }

    .arrow-container a {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0;
        color: #000;
    }

    .arrow {
        position: relative;
        width: 90%;
        height: 3px;
        background-color: var(--lavender);
    }

    .arrow::after {
        content: '';
        position: absolute;
        width: .85rem;
        height: .85rem;
        border-right: 3px solid var(--lavender);
        border-bottom: 3px solid var(--lavender);
        transform: rotate(-45deg) translateY(-50%);
        right: calc(-0.5rem + 2px);
        top: -50%;
    }
</style>