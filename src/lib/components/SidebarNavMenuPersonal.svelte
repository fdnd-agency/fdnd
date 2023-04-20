<script>
    import {page} from "$app/stores";
</script>

<h4>Mijn pagina's</h4>

<nav>
    <ul>
        <li>
            <a href="/profile" class:active={$page.url.pathname === "/profile"}>
                <img src="/images/profile-icon.svg" alt="">
                Profiel
            </a>
        </li>
        <li>
            <a href="/">
                <img src="/images/question-mark-icon.svg" alt="">
                Mijn vragen
            </a>
        </li>
    </ul>
</nav>

<style>
    h4 {
        padding: 0 0.94rem;
    }

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