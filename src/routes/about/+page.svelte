<script lang="ts">
    import { base } from '$app/paths';
    import { onMount } from "svelte";

    let loader: HTMLDivElement;
    let song1: HTMLSpanElement;
    let song2: HTMLSpanElement;
    let song1div: HTMLDivElement;
    let song2div: HTMLDivElement;

    onMount(async () => {

        let songName: String;
        let songUrl: String;
        let artist: String;

        await fetch('https://last-scrobble.matijakljajic173.workers.dev')
            .then((response) => response.json())
            .then((data) => { songName = data["name"]; songUrl = data["url"]; artist = data["artist"]["#text"]; })
            .then(() => { song1.innerHTML = "Last listened to \"<a href=" + songUrl + ">" + songName + "</a>\"" + " by " + artist + "."; song2.innerHTML = "Last listened to \"<a href=" + songUrl + ">" + songName + "</a>\"" + " by " + artist + "."; });
    
        loader.style.display = "none";
        song1.style.display = "initial";
        song2.style.display = "initial";
        
        song1div.classList.add('animated_text');
        song2div.classList.add('animated_text');

    });
</script>

<svelte:head>
    <title>About Matija</title>
    <meta name="description" content="I am currently a student and an aspiring software engineer. Learn more about me, my projects and all-around work through this portfolio and blog." />

    <link rel="canonical" href="{base}/" />
</svelte:head>

<div id="about">
    <div id="left">
        <div id="avatar">
            <img src="/avatar.jpeg" alt="avatar">
        </div>
        <div id="info">
            <div>
                <span><a href="/Matija Kljajić - CV.pdf">Curriculum vitae</a></span>
            </div>
            <!--<div>
                <span><a href="">Experience</a></span>
            </div>-->
            <div>
                <span><a href="{base}/projects">Projects</a></span>
            </div>
            <div>
                <span><a href="">Setup</a></span>
            </div>
        </div>
        <div id="scrobble">
            <div id="loader" bind:this="{ loader }">
                [loading scrobble]
            </div>
            <div bind:this="{ song1div }">
                <span id="song1" bind:this="{ song1 }"></span>
            </div>
            <div bind:this="{ song2div }">
                <span id="song2" bind:this="{ song2 }"></span>
            </div>
        </div>
    </div>
    <div id="right" class="prose">
        <h2>Hello, I am Matija.</h2>
        <p>Currently attending the University of <a href="https://en.wikipedia.org/wiki/Novi_Sad">Novi Sad</a>, but originally from a small town called <a href="https://en.wikipedia.org/wiki/U%C5%BEice">Užice</a>, where my CompSci journey started to unfold.</p>
        <h3>Regarding Work</h3>
        <p>Feel free to <a href="{base}/">contact</a> me if any questions arise, although keep in mind that I would rather have serious inquiries over <a href="mailto:contact@matijakljajic.com">email</a> or even <a href="https://www.linkedin.com/in/kljajicmatija">LinkedIn</a>.</p>
        <h3>Some of my Interests</h3>
        <p>My main interests consist of programming and a valid amount of data hoarding. (: <br> Aside from that, I really enjoy exploring the intricacies of different natural languages and how they've evolved over time. You can read more about my interests through the <a href="{base}/blog">blog</a>.</p>
        <h2>About this site</h2>
        <p>With simplicity in mind, this site can work without JavaScript, although a couple of negligible functionalities will be disabled. Content written on the blog is licensed under the <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a> unless stated otherwise.</p>
    </div>
</div>

<style>
    #about {
		margin-block: var(--size-5);
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: var(--size-8);
    }

    #about > * {
		max-width: var(--size-content-3);
    }

    #left {
        max-width: 240px;
        padding-top: var(--size-3);
        display: flex;
        flex-direction: column;
        gap: var(--size-4);
        user-select: none;
    }

    #right {
        margin-top: var(--size-1);
    }

    #avatar img {
        width: 240px;
        height: 240px;
        pointer-events: none;
    }

    #info {
        display: flex;
        flex-direction: column;
        gap: var(--size-1);
    }

    #info > div, #scrobble {
        border-block: 0.1054em solid var(--text-1);
        text-transform: uppercase;
    }

    #info > div > span {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    #scrobble {
        display: flex;
        align-items: center;
        overflow: hidden;
        white-space: nowrap;
    }

    #song1, #song2 {
        display: none;
    }

    #scrobble > div > * {
        margin-right: var(--size-5);
    }

    #loader {
        width: 100%;
        text-align: center;
    }

    .animated_text {
        animation: animate_text 12s linear infinite;
    }

    @keyframes animate_text {
        from {
            transform: translateX(0%);
        }
        to {
            transform: translateX(-100%);
        }
    }

    @media only screen and (max-width: 640px) {
        #about > * {
            width: 100%;
        }
	}

    .prose h2:nth-child(1) {
        margin: initial;
    }
</style>