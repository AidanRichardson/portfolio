<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import '../app.css';
	import Buttons from '../components/Buttons.svelte';
	import Profile from '../components/Profile.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="flex flex-col items-center justify-center">
	<div class="w-full max-w-7xl px-4">
		<div class="space-y-15">
			<Profile />
			<Buttons />
		</div>

		<main>
			{@render children()}
		</main>
	</div>
</div>
