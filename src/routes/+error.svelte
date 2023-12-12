<script lang="ts">
	import { base } from '$app/paths';
    import Image from "$lib/assets/404.webp";
    import ImageAlt from "$lib/assets/404.gif";
</script>

<svelte:head>
    <title>Matija.404</title>
    <meta name="description" content="I am currently a student and an aspiring software engineer. Learn more about me, my projects and all-around work through this portfolio and blog." />
</svelte:head>

<div id="center">
    <a href="{base}/">
        <picture>
            <source srcset={ Image } type="image/webp">
            <source srcset={ ImageAlt } type="image/gif">
            <img src={ ImageAlt } alt="Bob the Builder">
        </picture>
    </a>
</div>

<style>
    #center {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>