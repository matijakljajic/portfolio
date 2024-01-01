<script lang="ts">
	import { formatDate } from '$lib/utils'

	export let data
</script>

<!-- SEO -->
<svelte:head>
	<title>MK - {data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
	<meta name="description" content={data.meta.description} />
</svelte:head>

<article>
  <!-- Title -->
	<hgroup>
		<h1>{data.meta.title}</h1>
		<p style="color: var(--text-2);">Published at {formatDate(data.meta.date)}</p>
	</hgroup>

  <!-- Tags -->
	<div class="tagsdiv">
		<div class="tags">
			{#each data.meta.categories as category}
				<span>&num;{category}</span>
			{/each}
		</div>
	</div>

  <!-- Post -->
	<div class="prose">
		<svelte:component this={data.content} />
	</div>
</article>

<style>
	article {
		min-width: 0;
		max-inline-size: var(--size-content-3);
		margin-block: var(--size-6);
		margin-inline: auto;
	}

	hgroup h1 {
		text-transform: capitalize;
		font-size: var(--size-7);
		margin-top: var(--size-2);
	}

	.tagsdiv {
		display: flex; 
		margin-top: var(--size-3); 
		width: 100%; 
		border-block: 0.1054em solid var(--text-1);
	}

	.tags {
		display: flex;
		min-width: 0;
		max-width: 85cqw;
		padding-block: var(--size-2);
		overflow-x: auto;
		-ms-overflow-style: none;  /* IE and Edge */
  		scrollbar-width: none;
	}

	.tags::-webkit-scrollbar {
		display: none;
	}

	.tags > * {
		color: var(--background);
		background-color: var(--text-1);
		padding: var(--size-1) var(--size-2);
		margin-inline: var(--size-2);
		text-wrap: nowrap;
		user-select: none;
	}

	@media (orientation: portrait) {
		.tagsdiv {
			justify-content: center;
		}
		
		article {
			margin-block: var(--size-4);
		}
	}
</style>