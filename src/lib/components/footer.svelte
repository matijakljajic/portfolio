<script lang="ts">
	import ThemeToggle from './themetoggle.svelte';

	import * as config from '$lib/config';
</script>

<div id="info-track">
	<div class="text">
		<span>Placeholder Text</span>
		<span>Placeholder Text</span>
		<span>Placeholder Text</span>
		<span>Placeholder Text</span>
	</div>
	<div class="text">
		<span>Placeholder Text</span>
		<span>Placeholder Text</span>
		<span>Placeholder Text</span>
		<span>Placeholder Text</span>
	</div>
	<div class="text">
		<span>Placeholder Text</span>
		<span>Placeholder Text</span>
		<span>Placeholder Text</span>
		<span>Placeholder Text</span>
	</div>
</div>

<!-- Footer -->
<footer>
	<p>Matija Kljajić &copy {new Date().getFullYear()}</p>
	<div id="hidden"><ThemeToggle /></div>
</footer>

<style>
	* {
		user-select: none;
	}

	footer {
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-top: 1px solid var(--text-1);
	}

	p {
		margin-block: var(--size-fluid-1);
		color: var(--text-2);
	}

	@media (width <= 400px) {
        p, .text {
            font-size: 4.2cqw;
        }
    }

	#info-track {
		display: flex;
		width: 100%;
		overflow: hidden;
		white-space: nowrap;
		border-top: 1px solid var(--text-1);
	}

	#info-track > * {
		margin: 0;
	}

	.text {
    	text-transform: uppercase;
		animation: animate_text 25s linear infinite;
	}

	.text span {
    	margin-right: var(--size-fluid-2);
		animation: fade_in 4s;
		animation-iteration-count: 1;
    	animation-fill-mode: forwards;
	}

	@keyframes fade_in {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	@keyframes animate_text {
		from {
		transform: translate3d(0, 0, 0);
		}
		to {
		transform: translate3d(-100%, 0, 0);
		}
	}
</style>