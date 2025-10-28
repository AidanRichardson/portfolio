<script lang="ts">
	import { selectedProject, showModal } from '../stores/modal';

	function close() {
		showModal.set(false);
		selectedProject.set(null);
	}
</script>

{#if $showModal && $selectedProject}
	<div class="fixed inset-0 flex items-center justify-center bg-black/50 p-4" on:click={close}>
		<div
			class="flex w-full flex-row justify-center overflow-hidden rounded-lg"
			on:click|stopPropagation
		>
			<button
				on:click={close}
				class="absolute top-3 right-3 z-10 text-4xl text-white hover:text-gray-300"
			>
				&times;
			</button>

			<div class="carousel max-w-[125vh] bg-black">
				{#each $selectedProject.image as img, i (i)}
					<div id={'slide' + i} class="relative carousel-item w-full">
						<img src={img} alt="Project image" class="max-h-[80vh] w-full object-contain" />

						<!-- Navigation arrows -->
						<div
							class="absolute top-1/2 right-5 left-5 flex -translate-y-1/2 transform justify-between"
						>
							<a
								href={'#slide' +
									($selectedProject.image[
										(i - 1 + $selectedProject.image.length) % $selectedProject.image.length
									]
										? (i - 1 + $selectedProject.image.length) % $selectedProject.image.length
										: 0)}
								class="btn btn-circle">❮</a
							>
							<a href={'#slide' + ((i + 1) % $selectedProject.image.length)} class="btn btn-circle"
								>❯</a
							>
						</div>
					</div>
				{/each}
			</div>

			<div class="max-w-sm min-w-sm overflow-hidden bg-gray-900 p-6 text-wrap text-white">
				<h2 class="mb-4 text-2xl font-bold">{$selectedProject.title}</h2>
				<p>{$selectedProject.description}</p>
			</div>
		</div>
	</div>
{/if}
