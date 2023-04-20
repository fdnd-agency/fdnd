<script>
    import {page} from "$app/stores";
</script>

<nav>
    <ul>
        <li>
            <a href="/" class:active={$page.url.pathname === "/"}>
                <img src="/images/stack-icon.svg" alt="">
                Alle vragen
            </a>
        </li>
        <li>
            <a href="/">
                <img src="/images/community-icon.svg" alt="">
                Community
            </a>
        </li>
        <li>
            <a href="/changelogs">
                <img src="/images/changelogs-icon.svg" alt="">
                Changelogs
            </a>
        </li>
    </ul>
</nav>

<style>
    ul {
        display: flex;
        flex-direction: column;
    }

    .active {
        background: var(--element-secondary);
        display: flex;
        border-radius: 5px;
        width: 100%;
        padding: 0.63rem 0.94rem;
        align-items: center;
        color: var(--text-special);
    }

    li {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
        margin-top: 1.25rem;
    }                  
    
    a {
        display: flex;
        padding: 0 0.94rem;
        color: var(--text-secondary);
        font-weight: 500;
    }
    
    img {
        width: 1.5rem;
        height: auto;
        margin-right: 0.94rem;
    }
</style>