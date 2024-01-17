<script lang="ts">
    import { base } from '$app/paths';
</script>

<svelte:head>
    <title>Matija Kljajić</title>
    <meta name="description" content="Learn more about Matija, his projects and all-around work through this portfolio and blog." />

    <link rel="canonical" href="{base}/" />

    <script type="application/ld+json">
        {
            "@context": "https://schema.org/",
            "@type": "Person",
            "name": "Matija Kljajić",
            "url": "https://matijakljajic.com",
            "image": "",
            "sameAs": [
                "https://www.linkedin.com/in/kljajicmatija",
                "https://github.com/matijakljajic",
                "https://matijakljajic.com"
            ],
            "jobTitle": "Software Engineer"
        }
    </script>
</svelte:head>

<div id="home">
    <div id="head">
        <h1 class="item-1"><span class="item-name">Matija Kljajić </span><span class="item-format">[Latin]</span></h1>
        <h1 class="item-2"><span class="item-name">Матија Кљајић </span><span class="item-format">[Cyrillic]</span></h1>
        <h1 class="item-3"><span class="item-name">Matija Kljaji\'c </span><span class="item-format">[LaTeX]</span></h1>
    </div>
    <div id="main">
        <div id="section-1">
            <p><a href="{base}/about">Student</a> and an aspiring software developer.</p>
            <p>Feel free to go through my <a href="{base}/projects">projects</a> and <a href="/Matija Kljajić - CV.pdf">CV</a>.</p>
        </div>
        <div id="section-2">
            <div id="contact">
                <p style="text-align: center;">You can find me on:</p>
                <div id="links">
                    <div class="links" style="margin-top: var(--size-fluid-2); margin-bottom: var(--size-fluid-2);">
                        <a href="mailto:contact@matijakljajic.com">
                            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke-width="2" stroke="var(--text-1)" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <title>E-mail</title>
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" fill="none"/>
                                <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28" fill="none"/>
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/kljajicmatija">
                            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke-width="2" stroke="var(--text-1)" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <title>LinkedIn</title>
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" fill="none"/>
                                <path d="M8 11l0 5" fill="none"/>
                                <path d="M8 8l0 .01" fill="none"/>
                                <path d="M12 16l0 -5" fill="none"/>
                                <path d="M16 16v-3a2 2 0 0 0 -4 0" fill="none"/>
                            </svg>
                        </a>
                        <a href="https://github.com/matijakljajic">                            
                            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke-width="2" stroke="var(--text-1)" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <title>GitHub</title>
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" fill="none"/>
                            </svg>
                        </a>
                    </div>
                    <div class="links">
                        <a href="https://matrix.to/#/@kljaja:matrix.org">
                            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke-width="2" stroke="var(--text-1)" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <title>Matrix</title>
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M4 3h-1v18h1" fill="none"/>
                                <path d="M20 21h1v-18h-1" fill="none"/>
                                <path d="M7 9v6" fill="none"/>
                                <path d="M12 15v-3.5a2.5 2.5 0 1 0 -5 0v.5" fill="none"/>
                                <path d="M17 15v-3.5a2.5 2.5 0 1 0 -5 0v.5" fill="none"/>
                            </svg>
                        </a>
                        <a href="https://discordapp.com/users/545674835590774784">
                            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke-width="2" stroke="var(--text-1)" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <title>Discord</title>
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M8 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" fill="none"/>
                                <path d="M14 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" fill="none"/>
                                <path d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-.972 1.923a11.913 11.913 0 0 0 -4.053 0l-.975 -1.923c-1.5 .16 -3.043 .485 -4.5 1.5c-2 5.667 -2.167 9.833 -1.5 11.5c.667 1.333 2 3 3.5 3c.5 0 2 -2 2 -3" fill="none"/>
                                <path d="M7 16.5c3.5 1 6.5 1 10 0" fill="none"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="tail"></div>
</div>

<style>
    * {
        user-select: none;
    }

    #home {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        margin: auto;
        justify-content: space-between;
    }

    #head {
        display: grid;
        justify-self: start;
        justify-items: center;
        align-items: center;
        overflow: hidden;
        white-space: nowrap;
        user-select: none;
        padding-block: var(--size-2);
        border-bottom: 0.1054em solid var(--text-1);
    }

    #head > * {
        font-weight: normal;

        grid-column-start: 1;
        grid-row-start: 1;
        position: relative;
        display: block;
    
        text-align: center;
    
        animation-duration: 18s;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
    }

    .item-name {
        color: var(--text-1);
    }

    .item-format {
        font-size: 0.5em;
        color: var(--text-2);
    }

    .item-1 {
        animation-name: anim-1;
    }

    .item-2 {
        animation-name: anim-2;
    }

    .item-3 {
        animation-name: anim-3;
    }

    @keyframes anim-1 {
        0%, 8.3% { left: -100%; opacity: 0; }
        8.3%,25% { left: 0%; opacity: 1; }
        33.33%, 100% { left: 110%; opacity: 0; }
    }

    @keyframes anim-2 {
        0%, 33.33% { left: -100%; opacity: 0; }
        41.63%, 58.29% { left: 0%; opacity: 1; }
        66.66%, 100% { left: 110%; opacity: 0; }
    }

    @keyframes anim-3 {
        0%, 66.66% { left: -100%; opacity: 0; }
        74.96%, 91.62% { left: 0%; opacity: 1; }
        100% { left: 110%; opacity: 0; }
    }

    #main {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        margin-block: var(--size-3);
    }

    #section-1 {
        margin-bottom: var(--size-fluid-4);
    }

    #section-1 p {
        text-align: center;
        text-wrap: stable;
        margin-bottom: var(--size-fluid-1);
    }

    #section-2 {
        border: 0.1054em solid var(--text-1);
    }

    #contact {
        margin: var(--size-3);
    }

    #section-2 p {
        margin-bottom: initial;
    }

    @media only screen and (max-width: 568px) {
        #section-1 p {
            width: var(--size-13);
        }
    }

    #links {
        display: flex;
        flex-direction: column;
    }

    .links {
		display: flex;
        justify-content: center;
		gap: var(--size-6);
	}

	.links a {
        border: 0.1054em solid var(--text-1);
        display: flex;
        justify-content: center;
        align-items: center;
        height: 60px;
        width: 60px;
    }

    .links svg {
		padding-inline: var(--size-1);
        fill: var(--text-1);
        max-width: 40px;
	}

    .links a:hover svg {
        stroke: var(--background);
    }

	.links > *:hover {
		background-color: var(--text-1);
		cursor: pointer;
	}

	@media only screen and (max-width: 768px) {
        #head > * {
            font-size: 7.5cqw;
        }

        .links {
			gap: var(--size-3);
		}
	}
</style>
