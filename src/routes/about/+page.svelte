<script lang="ts">
    import { base } from '$app/paths';
    import { onMount } from "svelte";

    let song1: HTMLSpanElement;
    let song2: HTMLSpanElement;

    onMount(() => {

        let songName: String;
        let songUrl: String;
        let artist: String;

        const scrobble = fetch('https://last-scrobble.matijakljajic173.workers.dev')
            .then((response) => response.json())
            .then((data) => { songName = data["name"]; songUrl = data["url"]; artist = data["artist"]["#text"]; })
            .then(() => { song1.innerHTML = "\"<a href=" + songUrl + ">" + songName + "</a>\"" + " by " + artist; song2.innerHTML = "\"<a href=" + songUrl + ">" + songName + "</a>\"" + " by " + artist; });
    
    });
</script>

<svelte:head>
    <title>Matija.About</title>
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
            <div>
                <span><a href="">Projects</a></span>
            </div>
            <div>
                <span><a href="">Setup</a></span>
            </div>
            <div id="scrobble">
                <div>
                    <span>Last listened to <span class="song" bind:this="{ song1 }">[loading]</span>.</span>
                </div>
                <div>
                    <span>Last listened to <span class="song" bind:this="{ song2 }">[loading]</span>.</span>
                </div>
            </div>
        </div>
    </div>
    <div id="right">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra aliquam elit. Suspendisse luctus risus ut tellus ornare, quis vestibulum quam auctor. Curabitur quis cursus neque.
        </p>
        <p>
            Sed tincidunt, purus a pretium rhoncus, augue dolor molestie mauris, non placerat metus arcu sed nibh. Nulla sit amet laoreet eros, accumsan vestibulum justo.
        </p>
        <p>
            Etiam id tincidunt lorem. Curabitur feugiat, dui vel molestie feugiat, leo lorem iaculis lectus, in viverra ante tellus et orci. Nunc justo nisl, vulputate eu laoreet id, rhoncus laoreet nisi. Sed ac ligula nec felis suscipit blandit eget nec tortor. Nam eleifend odio at fermentum suscipit. Curabitur fringilla turpis eros, non faucibus neque ullamcorper maximus. Nulla mauris neque, ultrices eget commodo ac, tincidunt quis mauris. Suspendisse pharetra odio lacus, sed condimentum ex viverra in. Vestibulum porta massa eget nulla vulputate, vitae tempus sapien dapibus. Morbi pretium felis urna, eu laoreet arcu finibus sed. Fusce tempor finibus nunc, nec tristique purus vulputate at. Donec sodales eros sed diam cursus, nec sagittis turpis sodales.
        </p>
    </div>
</div>

<style>
    #about {
		margin-block: var(--size-8);
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: var(--size-8);
    }

    #about > * {
		width: var(--size-content-3);
    }

    #left {
        max-width: 240px;
        display: flex;
        flex-direction: column;
        gap: var(--size-2);
        user-select: none;
    }

    #left a:hover {
        text-decoration: none;
    }

    #avatar img {
        width: 100%;
        margin-bottom: var(--size-fluid-1);
        pointer-events: none;
    }

    #info {
        display: flex;
        flex-direction: column;
        gap: var(--size-1);
    }

    #info > * {
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

    #scrobble > * {
        animation: animate_text 8s linear infinite;
    }

    #scrobble > div > * {
        margin-right: var(--size-5);
    }

    .song {
        text-decoration: none;
    }

    @keyframes animate_text {
        from {
            transform: translate(0, 0);
        }
        to {
            transform: translate(-100%, 0);
        }
    }

    @media (width <= 640px) {
        #about > * {
            width: 100%;
        }
	}
</style>