<script lang="ts">
	import '../styles/theme.css';
	import '../styles/style.css';

	import Header from '$lib/components/Header.svelte';
</script>

<Header />
<main>
	<slot />
</main>
