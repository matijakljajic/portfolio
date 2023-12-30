<script lang="ts">
	import { base } from '$app/paths';
	import { formatDate } from '$lib/utils';
	import { onMount } from 'svelte';
	
	let jsblock: HTMLDivElement;

	onMount(() => {
		jsblock.style.display = "block";
	});

	export let data;

	let selectedCategory = 'all';

	const filterPosts = (category:string) => {
		selectedCategory = category;
	};

	let alltags:string[] = []
	data.posts.forEach((post: { categories: any[]; }) => alltags.push(post.categories[0]));
	alltags = Array.from(new Set(alltags));

	$: filteredPosts = selectedCategory === 'all'
    ? data.posts
    : data.posts.filter((post: { categories: string | string[]; }) => post.categories.includes(selectedCategory));
</script>

<svelte:head>
	<link rel=canonical href="{base}/blog">
    <title>Matija Kljajić - Blog</title>
    <meta name="description" content="I am currently a student and an aspiring software engineer. Learn more about me, my projects and all-around work through this portfolio and blog." />
</svelte:head>

<div id="head">
	<div>
		<div id="filter" bind:this="{jsblock}">
			<p>TAG</p>
			<div id="filters">
				<button name="all" on:click={() => filterPosts('all')}>
					<div class="{selectedCategory === 'all' ? 'st' : ''}">All</div>
				</button>
				{#each alltags as tag}
					<button name="${tag}" on:click={() => filterPosts(tag)}>
						<div class="{selectedCategory === tag ? 'st' : ''}">{tag}</div>
					</button>
				{/each}
			</div>
		</div>
	</div>
    <a id="rss" href="{base}/rss.xml">
        <p>RSS</p>
    </a>
</div>

<!-- Posts -->
<section id="center">
	<ul class="posts">
		{#each filteredPosts as post}
			<li class="post">
				<a href={post.slug}><div class="title">{post.title}</div></a>
				<p class="synopsis">{post.description}</p>
				<p class="date">{formatDate(post.date)}</p>
			</li>
		{/each}
	</ul>
</section>

<style>
	#head {
		width: 100%;
        display: flex;
        justify-content: space-between;
        overflow: hidden;
        margin-bottom: var(--size-1);
        border-bottom: 0.1054em solid var(--text-1);
    }

	* {
        user-select: none;
	}

	#filter {
		display: none;
	}

    #filter, #rss {
		color: var(--text-1);
        margin-inline: 0.01em;
		text-decoration: none;
	}

	#filter:hover, #rss:hover {
		background-color: var(--text-1);
		color: var(--background);
		cursor: pointer;
	}

    #filters {
        display: none;
        position: absolute;
        z-index: 1;
		background-color: var(--background);
		border: 0.1054em solid var(--text-1);
		width: var(--size-content-1);
		min-height: fit-content;
		max-height: 163.4px;
		overflow-y: auto;
    }

	#filter > p {
		padding-inline: var(--size-1);
	}

	#filters > * {
		all: unset;
		display: inline-block;
		width: 100%;
		color: var(--text-1);
		text-align: left;
	}

	#filters div {
		display: inline-block;
		padding: var(--size-1);
		margin-left: var(--size-3);
	}

	#filters button:hover:not(.st) {
		color: var(--background);
		background-color: var(--text-1);
	}

	#filter:hover #filters {
		display: block;
	}

	#center {
		display: flex;
		width: 100%;
		justify-content: center;
	}

	.posts {
		display: flex;
		flex-direction: column;
		align-items: center;
		max-width: var(--size-content-3);
		margin-block: var(--size-fluid-1);
	}

	.post {
		width: 100%;
		border-top: 0.1054em solid var(--text-1);
		border-bottom: 0.1054em solid var(--text-1);
		padding-top: var(--size-2);
		padding-bottom: var(--size-1);
		margin-block: var(--size-fluid-1);
	}

	.title {
		display: inline-block;
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
		color: var(--text-2);
		font-style: italic;
		padding: var(--size-1);
		margin-bottom: var(--size-fluid-1);
	}

	.date {
		text-align: right;
	}

    @media (width < 300px) {
        .title {
            font-size: 9.5cqw;
        }

		.synopsis, .date {
			font-size: 6cqw;
		}
	}

    @media (width <= 640px) {
        .posts {
            width: 100%;
        }
	}
</style>