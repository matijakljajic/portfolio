<script lang="ts">
	import { base } from '$app/paths';
</script>

<svelte:head>
	<link rel="canonical" href="{base}/" />
    <title>Matija's Projects</title>
</svelte:head>

<!-- Projects -->
<section id="center">
	<ul class="posts">
		<li class="post">
			<a href="https://github.com/matijakljajic/milionerpy"><div class="title">Who wants to be a millionaire?</div></a>
			<p class="synopsis">A rendition of the popular TV quiz for one of the uni courses called "Seminarski rad A". The game and the questions are in Serbian.</p>
			<div class="tagsdiv">
				<div class="tags">
					<span>&num;Python</span>
					<span>&num;PyGame</span>
					<span>&num;Video game</span>
				</div>
			</div>
		</li>
		<li class="post">
			<a href="https://matijakljajic.github.io/skolskabiblioteka/"><div class="title">Database for the city library</div></a>
			<p class="synopsis">Legacy software done for the school and city library. <br> The original project is not FOSS unfortunately and thus you can only go through a shallow copy.</p>
			<div class="tagsdiv">
				<div class="tags">
					<span>&num;VBA</span>
					<span>&num;SQL</span>
					<span>&num;P2P</span>
					<span>&num;Database</span>
				</div>
			</div>
		</li>
	</ul>
</section>

<style>
	* {
        user-select: none;
	}

	#center {
		display: flex;
		width: 100%;
		justify-content: center;
	}

	.posts {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		margin-block: var(--size-fluid-2);
		gap: var(--size-fluid-1);
	}

	.post {
		max-width: var(--size-content-2);
		border: 0.1054em solid var(--text-1);
		padding-top: var(--size-2);
		padding-bottom: var(--size-1);
	}

	.title {
		display: inline-block;
		text-align: center;
		text-wrap: balance;
		width: 100%;
		color: var(--text-1);
		font-size: var(--size-6);
		text-transform: capitalize;
		text-decoration: none;
		line-height: 1;
		margin: 0;
		padding-block: var(--size-2);
		padding-inline: var(--size-1);
	}

	.title:hover {
		color: var(--background);
		background-color: var(--text-1);
	}

	.synopsis {
		text-align: center;
		color: var(--text-2);
		padding: var(--size-1);
		margin-bottom: var(--size-fluid-1);
	}

	.tagsdiv {
		display: flex; 
		margin-top: var(--size-3);
		width: 100%; 
		border-top: 0.1054em solid var(--text-1);
	}

	.tags {
		width: 100%;
		display: flex;
		min-width: 0;
		max-width: 85cqw;
		padding-top: var(--size-1);
		overflow-x: auto;
		-ms-overflow-style: none;  /* IE and Edge */
  		scrollbar-width: none;
        white-space: nowrap;
		margin-inline: 0.15em;
		justify-content: center;
	}

	.tags::-webkit-scrollbar {
		display: none;
	}

	.tags > * {
		color: var(--background);
		background-color: var(--text-1);
		padding: var(--size-1) var(--size-2);
		margin-inline: 0.1em;
		user-select: none;
	}

    @media only screen and (max-width: 300px) {
        .title {
            font-size: 9.5cqw;
        }

		.synopsis, .tags {
			font-size: 6cqw;
		}
	}

    @media only screen and (max-width: 640px) {
        .posts {
            width: 100%;
        }
	}
</style>