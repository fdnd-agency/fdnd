<script>
    import { page } from "$app/stores";
    import { Footer } from "$lib";

</script>

<section>
    <h1 id="text">De pagina is vermist. Scroll naar benenden voor meer 👀</h1>
    <h2>{$page.status}</h2>
</section>

<Footer />

<style>
    section {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100dvh;
        overflow: hidden;
        box-sizing: border-box;
    }

    h1 {
        position: relative;
        color: var(--blue);
        font-weight: 700;
        font-size: 3rem;
        text-align: center;
        transform: rotate(-5deg) skew(20deg);
        transition: font-size 0.3s ease;
        text-shadow:
            rgb(72, 37, 131) 0px 0px 0px,
            rgb(72, 37, 131) -1px 1px 0px,
            rgb(72, 37, 131) -2px 2px 0px,
            rgb(72, 37, 131) -3px 3px 0px,
            rgb(72, 37, 131) -4px 4px 0px,
            rgb(72, 37, 131) -5px 5px 0px,
            rgb(72, 37, 131) -6px 6px 0px,
            rgb(72, 37, 131) -7px 7px 0px,
            rgb(72, 37, 131) -8px 8px 0px,
            rgb(72, 37, 131) -9px 9px 0px,
            rgb(72, 37, 131) -10px 10px 0px,
            rgb(72, 37, 131) -11px 11px 0px,
            rgb(72, 37, 131) -12px 12px 0px,
            rgb(72, 37, 131) -13px 13px 0px,
            rgb(72, 37, 131) -14px 14px 0px,
            rgb(72, 37, 131) -15px 15px 0px,
            rgb(72, 37, 131) -16px 16px 0px,
            rgb(72, 37, 131) -17px 17px 0px,
            rgb(72, 37, 131) -18px 18px 0px,
            rgb(72, 37, 131) -19px 19px 0px,
            rgb(72, 37, 131) -20px 20px 0px,
            rgb(72, 37, 131) -21px 21px 0px,
            rgb(72, 37, 131) -22px 22px 0px,
            rgb(72, 37, 131) -23px 23px 0px,
            rgb(72, 37, 131) -24px 24px 0px,
            rgb(72, 37, 131) -25px 25px 0px,
            rgb(72, 37, 131) -26px 26px 0px,
            rgb(72, 37, 131) -27px 27px 0px,
            rgb(72, 37, 131) -28px 28px 0px,
            rgb(72, 37, 131) -29px 29px 0px;
    }

    h2 {
        position: absolute;
        color: var(--blue);
        bottom: 0;
        right: 0;
        padding: 5rem;
        font-size: var(--radius);
    }

    @media (min-width: 700px) {
        h1 {
            font-size: 5.5rem;
        }

        h2 {
            font-size: var(--radius);
        }
    }

    @media (min-width: 1000px) {
        h1 {
            font-size: 7rem;
        }

        h2 {
            font-size: 2rem;
        }
    }

    @media (min-width: 1447px) {
        h1 {
            font-size: 10rem;
            max-width: 1400px;
        }
    }
</style>
