<script>
    export let user;
</script>

<div>
    <button>
        <p>{user.username}</p>
        <picture>
            <img
                src="https://cdn.discordapp.com/avatars/{user.id}/{user.avatar}.png"
                alt=""
            />
        </picture>
    </button>
</div>

<style>
    div {
        display: flex;
        align-items: center;
        position: relative;
    }

    button {
        display: flex;
        align-items: center;
        text-transform: none;
        background: none;
    }

    picture {
        width: 2.25rem;
        height: 2.25rem;
    }

    picture img {
        width: inherit;
        height: inherit;
        border-radius: 50%;
        object-fit: cover;
    }

    p {
        color: var(--white);
        font-size: 1rem;
        display: none;
    }

    @media (min-width: 30rem) {
        p {
            margin-right: 1rem;
        }

        p {
            display: block;
        }
    }
</style>
