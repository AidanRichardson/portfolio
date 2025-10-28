<script>
	import Preview from '../components/Preview.svelte';
	import Projects from '../components/Projects.svelte';
	import { selectedProject, showModal } from '../stores/modal.js';
</script>

<Projects />

{#if showModal}
	<Preview />
{/if}
