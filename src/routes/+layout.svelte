<script lang="ts">
	import Footer from '../lib/components/footer.svelte';
	import Header from '../lib/components/header.svelte';

	import 'open-props/style';
	import 'open-props/normalize';
	import 'open-props/buttons';

	import '../app.css';
</script>

<div class="layout">
  <!-- Header -->
	<Header />

	<main>
		<!-- Black hole for other content -->
		<slot />
	</main>

  <!-- Footer -->
	<Footer />
</div>

<style>
	.layout {
		height: 100%;
		display: grid;
		grid-template-rows: auto 1fr auto;
		margin-inline: auto;
		padding-inline: var(--size-7);
	}

	@media only screen and (max-width: 360px) {
		.layout {
			padding-inline: var(--size-4);
		}
	}
</style>