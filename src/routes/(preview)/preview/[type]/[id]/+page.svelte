<script lang="ts">
	import { page } from '$app/state';
	import { onMount } from 'svelte';
	import MobilePreview from '../../../../../components/MobilePreview.svelte';
	import PreviewModal from '../../../../../components/PreviewModal.svelte';
	import { selectedItem } from '../../../../../stores/modal';
	import { profile } from '../../../../../stores/profile';

	let isMobile = false;

	function checkMobile() {
		isMobile = window.matchMedia('(max-width: 1150px)').matches;
	}

	onMount(() => {
		checkMobile();
		window.addEventListener('resize', checkMobile);
		return () => window.removeEventListener('resize', checkMobile);
	});

	$: id = page.params.id;
	$: type = page.params.type;

	function openModal(d: Item) {
		selectedItem.set(d);
	}

	$: if (type == 'projects') openModal($profile.projects[id]);
	$: if (type == 'work') openModal($profile.work[id]);
	$: if (type == 'education') openModal($profile.education[id]);
</script>

{#if isMobile}
	<MobilePreview />
{:else}
	<PreviewModal />
{/if}
