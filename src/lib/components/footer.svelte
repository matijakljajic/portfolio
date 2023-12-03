<script lang="ts">
	import ThemeToggle from './themetoggle.svelte';

	import * as config from '$lib/config';
</script>

<!-- Footer -->
<footer>
	<p>{config.title} &copy {new Date().getFullYear()}</p>
	<div id="hidden"><ThemeToggle /></div>
</footer>

<style>
	footer {
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-top: 1px solid var(--text-1);
	}

	p {
		margin-block: var(--size-fluid-1);
		color: var(--text-2);
	}
</style>