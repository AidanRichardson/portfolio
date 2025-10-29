<script lang="ts">
	import '../app.css';
	import Buttons from '../components/Buttons.svelte';
	import Footer from '../components/Footer.svelte';
	import ListModal from '../components/ListModal.svelte';
	import PreviewModal from '../components/PreviewModal.svelte';
	import Profile from '../components/Profile.svelte';
	import { display } from '../stores/display';
	import { showListModal, showPreviewModal } from '../stores/modal';
	import { profile as profileStore } from '../stores/profile';

	let { data, children } = $props();

	if (data?.profile) {
		profileStore.set(data.profile);
		display.set(data.profile.projects);
	}
</script>

<svelte:head>
	<title>{data.profile.name} – Portfolio</title>
	<meta name="description" content={data.profile.description} />
	<meta property="og:title" content={data.profile.name + ' – Portfolio'} />
	<meta property="og:description" content={data.profile.description} />
	<meta property="og:image" content={`/data/images/${data.profile.image}`} />
	<link rel="icon" href="/favicon.ico" />
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
	<link rel="manifest" href="/site.webmanifest" />
</svelte:head>

<div class="flex min-h-screen flex-col items-center justify-start">
	<div class="container-layout flex-grow px-4">
		<div class="space-y-15">
			<Profile />
			<Buttons />
		</div>

		<main>{@render children()}</main>
	</div>

	{#if showPreviewModal}
		<PreviewModal />
	{/if}

	{#if showListModal}
		<ListModal />
	{/if}

	<Footer />
</div>
