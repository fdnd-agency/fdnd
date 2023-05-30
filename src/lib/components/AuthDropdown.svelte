<div>
    <ul>
        <li>
            <a href="/">Profiel</a>
        </li>
        <li>
            <a href="/api/signout">Uitloggen</a>
        </li>
    </ul>
</div>

<style>
    div {
        position: absolute;
        background-color: var(--purple);
        top: 3rem;
        right: 0;
        padding: 1rem;
        border-radius: 0.6rem;
        font-size: 1rem;
        width: 10rem;
        opacity: 0;
        transform: translateY(100%) scale(1);
        transform-origin: 30% 0;
        transition: .3s;
    }

    li:nth-child(1) {
        margin-bottom: 0.5rem;
    }

    a {
        color: var(--blue);
        font-size: 0.9rem;
    }
</style>