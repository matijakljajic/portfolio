<script lang="ts">
	import { base } from '$app/paths';
    import Image from "$lib/assets/404.gif";
</script>

<svelte:head>
    <title>Matija.Lost</title>
</svelte:head>

<div id="center">
    <a href="{base}/">
        <img src={Image} alt="Bob the Builder">
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