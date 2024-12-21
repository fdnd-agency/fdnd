<section>
    <article>
        <h2>Wat is een We Love Web?</h2>
        <p>
            We Love Web is een inspirerend evenement georganiseerd door de
            opleiding FDND. Tijdens dit evenement verwelkomen we een spreker uit
            het frontend- of designvakgebied die zijn of haar persoonlijke
            verhaal deelt. De spreker neemt je mee in hun werkervaring,
            inzichten en geeft een kijkje in de dagelijkse werkprocessen binnen
            hun vakgebied. Het doel van We Love Web is om studenten en
            professionals te inspireren, kennis te delen en een kijkje te geven
            in de praktijk van het werk als frontend developer of designer.
        </p>
    </article>
    <picture>
        <img src="/img/weloveweb.jpg" alt="foto van een event" />
    </picture>
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    img {
        width: 100%;
        margin-top: 10px;
        border-radius: 10px;
    }

    h2 {
        margin-top: 3.125rem;
        font-size: 1.375rem;
        color: var(--blue);
    }

    p {
        margin-top: 5px;
        font-size: 1.125rem;
        line-height: 1.6;
        color: var(--blue);
    }

    @media (min-width: 1224px) {
        section {
            flex-direction: row;
            gap: 1.25rem;
        }

        article,
        picture {
            flex-basis: 50%;
            max-width: 50%;
        }

        img {
            width: 100%;
            height: auto;
            margin-top: 3.125rem;
        }

        h2 {
            font-size: 1.875rem;
        }

        p {
            font-weight: var(--font-weight-semi);
        }
    }

    @media (min-width: 1440px) {
        h2 {
            font-size: 2.5rem;
        }

        p {
            font-size: 1.25rem;
            font-weight: var(--font-weight-semi);
        }
    }
</style>
