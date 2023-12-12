<script lang="ts">
	import { onMount } from 'svelte';
	
	import '../../app.css'

	let themebtn: HTMLInputElement;
	let jsblock: HTMLLabelElement;

	onMount(() => {
		jsblock.style.display = "block";

		const theme = sessionStorage.getItem('theme');

		if (theme != null) {
			document.documentElement.dataset.theme = theme;
			themebtn.checked = theme === "dark" ? false : true;
		} else {
			themebtn.checked = window.matchMedia('(prefers-color-scheme: dark)') ? false : true;
		}
	});
	
	const setTheme = () => {
		if (themebtn.checked) {
			document.documentElement.dataset.theme = "light";
			sessionStorage.setItem('theme', 'light');
		} else {
			document.documentElement.dataset.theme = "dark";
			sessionStorage.setItem('theme', 'dark');
		}
	}
</script>

<label bind:this="{jsblock}">
	<input aria-label="Theme Toggle" class='toggle-checkbox' type='checkbox' on:click={() => setTheme()} bind:this="{themebtn}">
	<div class='toggle-slot'><div class='toggle-button'></div></div>
</label>

<style>
    label {
		display: none;
		justify-self: end;
	}

	label:hover {
		cursor: pointer;
	}

	.toggle-checkbox {
		position: absolute;
		opacity: 0;
		cursor: pointer;
		height: 0;
		width: 0;
	}

	.toggle-slot {
		margin-inline-end: var(--size-2);
		position: relative;
		height: 2em;
		width: 4em;
		border: 2px solid var(--text-1);
		background-color: var(--background);
	}

	.toggle-button {
		transform: translate(2.1em, 0.1em);
		position: absolute;
		height: 1.568em;
		width: 1.568em;
		background-color: var(--background);
		box-shadow: inset 0px 0px 0px 0.2em var(--text-1);
		transition: transform 0.5s cubic-bezier(.26, 2, .46, .70);
	}

	.toggle-checkbox:checked ~ .toggle-slot .toggle-button {
		background-color: var(--background);
		transform: translate(0.1em, 0.1em);
	}
</style>