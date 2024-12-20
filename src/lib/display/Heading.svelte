<section>
    <header>
        <small>Laat je inspireren door experts!</small>
        <h1>We ❤️ Web</h1>
    </header>
    <div>
        <a href="#/">Archief</a>
    </div>
</section>

<style>
    section {
        position: relative;
        margin-bottom: 4rem;
        align-items: center;
    }

    section::after {
        content: "";
        width: 100%;
        height: 2px;
        margin-top: 2.813rem;
        background-color: #e9e0e9;
        border-radius: 10px;
        position: absolute;
        bottom: -2rem;
    }

    header small {
        font-weight: 700;
        font-size: 1rem;
        color: var(--blue);
    }

    header h1 {
        font-size: 2.5rem;
        color: var(--blue);
    }

    div {
        margin-top: 1.875rem;
    }

    a {
        position: relative;
        z-index: 1;
        border: 1px solid var(--blue);
        padding: 10px 5rem;
        background-color: var(--green);
        border-radius: 10px;
        color: var(--blue);
        font-weight: 700;
        text-decoration: none;
        transition:
            top 0.2s,
            right 0.2s;
    }

    a:hover {
        top: 1px;
        right: 1px;
    }

    a::after {
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

    a:hover::after {
        top: 1px;
        right: 1px;
    }

    @media (min-width: 768px) {
        section {
            margin-top: 6.25rem;
        }

        header {
            width: fit-content;
        }

        header small {
            font-size: 1.125rem;
        }

        header h1 {
            font-size: 5rem;
        }
    }

    @media (min-width: 1024px) {
        section {
            margin-top: 6.25rem;
            display: flex;
            justify-content: space-between;
        }

        header {
            min-width: fit-content;
        }

        header small {
            font-size: 1rem;
        }

        header h1 {
            font-size: 4rem;
        }

        div {
            margin-top: 0;
        }

        a {
            padding: 1.25rem 6.25rem;
        }
    }

    @media (min-width: 1130px) {
        header small {
            font-size: 1.125rem;
        }

        header h1 {
            font-size: 5rem;
        }
    }
</style>
