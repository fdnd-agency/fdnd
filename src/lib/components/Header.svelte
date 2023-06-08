<script>
    import ButtonPrimary from "./ButtonPrimary.svelte";
    import ProfileInformation from "./ProfileInformation.svelte";

    export let user;
</script>

<!-- Header -->
<header>
    <h1>fdnd stack</h1>

        {#if user}
          <ProfileInformation user={user} />
        {/if}

        {#if !user}
            <ButtonPrimary title="Login" url="/api/auth" />
        {/if}
</header>

<style>
    header {
        z-index: 999;
        display: flex;
        padding: 1rem;
        justify-content: space-between;
        align-items: center;
    }

    h1 {
        color: var(--green);
        font-size: 1.35rem;
        box-shadow: var(--green) -4px 4px;
        border: 1px solid var(--green);
        border-radius: var(--border-round);
        padding: 1rem;
        text-transform: lowercase;  
    }

    @media (min-width: 60rem) {
        header {
            padding: 1rem 2rem;
        }
    }

    @media (min-width: 75rem) {
        header {
            padding: 1.56rem 4.7rem;
            align-items: center;
        }
    }
</style>
