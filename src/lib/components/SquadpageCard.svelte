<script lang="ts">
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
                <svg class="hashtag" version="1.1" id="Capa_2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 490 490" style="enable-background:new 0 0 490 490;" xml:space="preserve">
                    <path d="M64.333,490h58.401l33.878-137.69h122.259L245.39,490h58.401l33.878-137.69h119.92v-48.162h-108.24l29.2-117.324h79.04
                    v-48.162H390.23L424.108,0H365.31l-33.878,138.661H208.79L242.668,0h-58.415l-33.864,138.661H32.411v48.162h106.298l-28.818,117.324
                    h-77.48v48.162h65.8L64.333,490z M197.11,186.824h122.642l-29.2,117.324H168.292L197.11,186.824z"></path>
                </svg>
            </div>
            <div class="arrow-container">
                <a href="">Bekijk deze squad
                    <div class="arrow"></div>
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
        height: 360px;
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
        border-bottom-left-radius: 10px;
    }

    .squad-title h2 {
        color: var(--blueberry);
        background-color: var(--turquoise);
        padding: .75rem  .75rem;
        margin: -10px 10px 10px 0;
        border-radius: 10px;
        font-size: 1.25rem;
    }

    .sprint-title {
        position: absolute;
        bottom: 0;
        left: 0;
        background-color: var(--blueberry);
        border-top-right-radius: 10px;
        padding: .5rem;
    }

    .sprint-title h2 {
        color: var(--turquoise);
        border: 1px solid var(--turquoise);
        padding: .75rem .75rem;
        border-radius: 10px;
        font-size: 1.25rem;
        margin: 0 10px -10px 0;
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
        width: 20px;
        height: 20px;
        margin-right: 5px;
    }

    .arrow-container {
        width: 4rem;
        flex: 1;
        border-radius: 50px;
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