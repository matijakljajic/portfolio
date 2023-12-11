<script lang="ts">
	import * as config from '$lib/config';
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

		animation: fade_in 0.5s;
		animation-iteration-count: 1;
    	animation-fill-mode: forwards;	
	}

	label:hover {
		cursor: pointer;
	}

	@keyframes fade_in {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
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
		border: 2px solid var(--border);
		border-radius: 5em;
		background-color: var(--background);
	}

	.toggle-button {
		transform: translate(2.1em, 0.1em);
		position: absolute;
		height: 1.568em;
		width: 1.568em;
		border-radius: 50%;
		background-color: var(--background);
		box-shadow: inset 0px 0px 0px 0.2em var(--border);
		transition: transform 0.5s cubic-bezier(.26, 2, .46, .70);
	}

	.toggle-checkbox:checked ~ .toggle-slot .toggle-button {
		background-color: var(--background);
		transform: translate(0.1em, 0.1em);
	}
</style>