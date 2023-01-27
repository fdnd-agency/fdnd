<script>
	import { checkboxes } from "$lib/stores/filter";

	export let id;
	export let name;
	export let value;
	export let emoji;

	// Get value from selected checkbox
	function setChecked(e) {
		if (e.target.checked) {
			checkboxes.update((state) => {
				return [...state, e.target.value];
			});
		} else {
			checkboxes.update((state) => {
				return state.filter((box) => box !== e.target.value);
			});
		}
	}
</script>

<label>
	<input on:change={setChecked} type="checkbox" {id} {name} {value} />
	<span>{emoji} {name}</span>
</label>

<style>
	label {
		display: flex;
		cursor: pointer;
		position: relative;
		align-items: center;
		font-family: "Inter", sans-serif;
		font-size: 0.9rem;
		text-transform: capitalize;
	}

	label:focus {
		border: 3px solid red;
	}

	span {
		padding: 0.35rem 0.35rem;
	}

	input {
		width: 1rem;
		height: 1rem;
		-webkit-appearance: none;
		-moz-appearance: none;
		-o-appearance: none;
		appearance: none;
		border: 1px solid var(--element-border);
		outline: none;
		cursor: pointer;
		border-radius: 0.15rem;
		position: relative;
	}

	input:checked {
		background-color: var(--element-primary);
	}

	input:checked + span::before {
		content: "\2713";
		display: block;
		text-align: center;
		color: var(--text-white);
		position: absolute;
		top: 0.45rem;
		left: 0.25rem;
		font-size: 0.75rem;
	}
</style>
