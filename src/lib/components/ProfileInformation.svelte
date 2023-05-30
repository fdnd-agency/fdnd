<script>
    import AuthDropdown from "./AuthDropdown.svelte";

    export let user;
</script>

<div>
    <p>{user.username}</p>
    <picture>
        <img
            src="https://cdn.discordapp.com/avatars/{user.id}/{user.avatar}.png"
            alt=""
        />
    </picture>

    <AuthDropdown />
</div>

<style>
    div {
        display: flex;
        align-items: center;
        position: relative;
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
