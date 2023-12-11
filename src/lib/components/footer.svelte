<script lang="ts">
	import ThemeToggle from './themetoggle.svelte';

	import * as config from '$lib/config';
</script>

<!-- Footer -->
<footer>
	<p>Matija Kljajić &copy {new Date().getFullYear()}</p>
	<div id="hidden"><ThemeToggle /></div>
</footer>

<style>
	* {
		user-select: none;
	}

	footer {
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-top: 0.1054em solid var(--border);
	}

	p {
		margin-block: var(--size-fluid-1);
		color: var(--text-2);
	}

	@media (width <= 400px) {
        p {
            font-size: 4.2cqw;
        }
    }
</style>