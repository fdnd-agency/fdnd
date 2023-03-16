<script>
	export let title;
</script>

<!-- Primary button -->
<a href="https://discord.com/channels/1017099203882782750/1027275543755890799" target="_blank">{title}</a>

<style>
	a {
		background-color: var(--element-primary);
		padding: 1.25rem 0;
		width: 100%;
		border-radius: 2rem;
		margin-top: 2rem;
		font-size: 1rem;
		font-weight: bold;
		cursor: pointer;
		transition: background-color 150ms, transform 100ms;
        display: none;
        color: var(--text-white);
        text-align: center;
        text-transform: uppercase;
	}

	a:hover {
		background-color: var(--element-primary-action);
	}

	a:active {
		background-color: var(--element-primary-action);
		transform: scale(0.97);
	}

	a:focus {
		background-color: var(--element-primary-action);
	}

    @media (min-width: 60rem) {
        a {
            display: block;
        }
    }
</style>
