<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import '../app.css';
	import Buttons from '../components/Buttons.svelte';
	import Footer from '../components/Footer.svelte';
	import ListModal from '../components/ListModal.svelte';
	import PreviewModal from '../components/PreviewModal.svelte';
	import Profile from '../components/Profile.svelte';
	import { showListModal, showPreviewModal } from '../stores/modal';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="flex min-h-screen flex-col items-center justify-start">
	<div class="container-layout flex-grow px-4">
		<div class="space-y-15">
			<Profile />
			<Buttons />
		</div>

		<main>
			{@render children()}
		</main>
	</div>

	{#if showPreviewModal}
		<PreviewModal />
	{/if}

	{#if showListModal}
		<ListModal />
	{/if}

	<Footer />
</div>
