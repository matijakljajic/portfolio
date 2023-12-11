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
		<ul class="links">
			<li class:st={path === "/"}>
				<a href="{base}/">INDEX</a>
			</li>
			<li class:st={path === "/about"}>
				<a href="{base}/about">ABOUT</a>
			</li>
			<li class:st={path === "/blog"}>
				<a href="{base}/blog">BLOG</a>
			</li>
		</ul>

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
		border-bottom: 0.1054em solid var(--border);
	}

	nav {
		width: 100%;
		display: flex;
		justify-content: space-between;
		padding-block: var(--size-fluid-1);
	}

	.links {
		display: flex;
		gap: var(--size-11);
		margin-block: 0;
	}

	.links > * {
		padding-inline: var(--size-1);
		border: 0.3054em solid transparent;
	}

	.links > *:hover {
		background-color: var(--text-1);
		color: var(--background);
		border: 0.3054em solid var(--text-1);
		cursor: pointer;
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	@media (width < 768px) {
		.links {
			gap: var(--size-6);
		}
	}

	@media (width >= 1920px) {
		.links {
			gap: var(--size-15);
		}
	}
</style>
