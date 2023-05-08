<script>
	export let min;
	export let max;
	export let value;
</script>

<!-- Custom rangeslider -->
<input type="range" id="reactions" {min} {max} {value} />

<style>
	input {
		background-color: var(--white);
	}
</style>
