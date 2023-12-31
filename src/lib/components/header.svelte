<script lang="ts">
	import * as config from '$lib/config';
	import { base } from '$app/paths';
	import { page } from '$app/stores';

	$: path = $page.url.pathname;
</script>

<header>
	<nav>
		<div></div>
		
		<!-- Navigation -->
		<div class="links">
			<a href="{base}/">
				<p class:st={path === "/"}>Index</p>
			</a>
			<a href="{base}/about">
				<p class:st={path.includes("/about")}>About</p>
			</a>
			<a href="{base}/blog">
				<p class:st={path.includes("/blog")}>Blog</p>
			</a>
		</div>

		<div></div>
	</nav>
</header>

<style>
	* {
		user-select: none;
	}

	header {
		display: flex;
		align-items: center;
		border-bottom: 0.1054em solid var(--text-1);
	}

	nav {
		width: 100%;
		display: flex;
		justify-content: space-between;
		padding-block: var(--size-fluid-1);
		text-transform: uppercase;
	}

	.links {
		display: flex;
		gap: var(--size-11);
		margin-block: 0;
	}

	.links * {
		padding-block: var(--size-1);
		padding-inline: var(--size-2);
	}

	.links *:hover {
		background-color: var(--text-1);
		color: var(--background);
		cursor: pointer;
	}

	a {
		color: inherit;
		text-decoration: none;
	}
	
	@media only screen and (min-width: 1920px) {
		.links {
			gap: var(--size-13);
		}
	}

	@media only screen and (max-width: 768px) {
		.links {
			gap: var(--size-6);
		}

		.links * {
			padding-inline: var(--size-1);
		}
	}

	@media only screen and (max-width: 360px) {
		.links {
			gap: var(--size-3);
		}

		.links * {
			padding-inline: var(--size-1);
		}
	}
</style>
