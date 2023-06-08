<a href="https://discord.gg/pmBqsKxXCG">
    <div>
        <figure>
            <img src="/images/hero-bg-fdnd.jpg" alt="" />
            <figcaption>
                <span>Join de community</span>
            </figcaption>
        </figure>
    </div>
</a>

<style>
    div {
        margin-top: 1.6rem;
        display: none;
    }

    figure {
        overflow: hidden;
        border-radius: var(--border-round);
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: var(--border-round);
    }

    figcaption {
        margin: calc(-4.5rem + 1px) 0 0 0;
        padding: 2rem 1.5rem 1rem 0.4rem;
        position: relative;
        width: fit-content;
        line-height: 1rem;
        border-top-right-radius: var(--border-round-pilled);
        background-color: var(--blue);
    }

    figcaption::before {
        content: "";
        position: absolute;
        background-color: transparent;
        width: 2rem;
        height: 2.6rem;
        border-bottom-left-radius: var(--border-round-pilled);
        bottom: 4rem;
        left: 0;
        box-shadow: -0.35rem 0.6rem 0 0.16rem;
        color: var(--blue);
    }

    figcaption span {
        padding: 0.5rem 1rem;
        border: 1px solid var(--green);
        border-radius: 2rem;
        white-space: nowrap;
        color: var(--green);
    }

    figcaption::after {
        content: "";
        position: absolute;
        background-color: transparent;
        width: 2rem;
        height: 2.4rem;
        border-bottom-left-radius: var(--border-round-pilled);
        bottom: 0;
        right: -2rem;
        box-shadow: -0.35rem 0.6rem 0 0.16rem;
        color: var(--blue);
    }
    @media (min-width: 75rem) {
        div {
            display: block;
        }
    }
</style>
