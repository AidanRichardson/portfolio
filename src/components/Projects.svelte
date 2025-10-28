<script lang="ts">
	import { selectedProject, showModal } from '../stores/modal';

	const projects: Project[] = [
		{
			id: 1,
			image: [
				'src/lib/assets/whatsplaying2.png',
				'src/lib/assets/whatsplaying1.png',
				'src/lib/assets/whatsplaying3.gif'
			],
			title: "What's Playing?",
			description:
				'Basic docker app so a user can host thier spotify playing in a web app that can then be displayed on other devices'
		}
	];

	function openModal(p: Project) {
		selectedProject.set(p);
		showModal.set(true);
	}
</script>

<div class="p-4">
	<div class="grid grid-cols-4 gap-3">
		{#each projects as p}
			<div class="aspect-square overflow-hidden rounded-lg" on:click={() => openModal(p)}>
				<img
					src={p.image[0]}
					alt=""
					class="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
				/>
			</div>
		{/each}
	</div>
</div>
