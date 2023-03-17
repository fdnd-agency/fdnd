<script>
    import {filters} from "$lib/stores/filters";

    let newCheckboxes;
    export let name;
    export let value;
    export let label;
    export let emoji;

    /**
     * Get & set value of checkboxes store
     * @constructor
     * @param {e} event - On change event.
     */
    function setChecked(e) {
        const newCheckboxValue = e.target.value;

        filters.update((state) => {
            if (e.target.checked) {
                const checkedCheckboxes = state.checkboxes.filter((checkbox) => checkbox !== newCheckboxValue);

                newCheckboxes = [...checkedCheckboxes, newCheckboxValue];
            } else {
                newCheckboxes = state.checkboxes.filter((checkbox) => checkbox !== newCheckboxValue);
            }

            return {
                ...state,
                checkboxes: newCheckboxes,
            }
        })
    }
</script>

<label>
    <input type="checkbox" {name} {value} on:input={setChecked}/>
    <span>{emoji} {label}</span>
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
