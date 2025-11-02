<script lang="ts">
	import { selectedItem, showPreviewModal } from '../stores/modal';

	function close() {
		showPreviewModal.set(false);
		selectedItem.set(null);
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			close();
		}
	}
</script>

{#if $showPreviewModal && $selectedItem}
	<div
		class="fixed inset-0 flex items-center justify-center bg-black/50 p-4"
		role="dialog"
		aria-modal="true"
		tabindex="-1"
		on:keydown={handleKeydown}
		on:click={close}
	>
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<div class="flex flex-row justify-center overflow-hidden rounded-lg" on:click|stopPropagation>
			<button
				type="button"
				on:click={close}
				class="absolute top-3 right-3 z-10 cursor-pointer text-4xl"
				aria-label="Close modal"
			>
				&times;
			</button>

			<div class="carousel max-w-[125vh] bg-black">
				{#each $selectedItem.image as img, i (i)}
					<div id={'slide' + i} class="relative carousel-item w-full">
						<!-- svelte-ignore a11y_img_redundant_alt -->
						<img
							src={`/data/images/${img}`}
							alt="Project image"
							class="max-h-[80vh] w-full object-contain"
						/>
						<div
							class="absolute top-1/2 right-5 left-5 flex -translate-y-1/2 transform justify-between"
						>
							<button
								type="button"
								class="btn btn-circle"
								on:click={() =>
									document
										.getElementById(
											'slide' + (($selectedItem.image.length + i - 1) % $selectedItem.image.length)
										)
										?.scrollIntoView({ behavior: 'smooth' })}
								aria-label="Previous image"
							>
								❮
							</button>
							<button
								type="button"
								class="btn btn-circle"
								on:click={() =>
									document
										.getElementById('slide' + ((i + 1) % $selectedItem.image.length))
										?.scrollIntoView({ behavior: 'smooth' })}
								aria-label="Next image"
							>
								❯
							</button>
						</div>
					</div>
				{/each}
			</div>

			<div class="max-w-sm min-w-sm overflow-hidden bg-base-300 p-6 text-wrap">
				<h2 class="mb-4 text-2xl font-bold">{$selectedItem.title}</h2>
				<p>{$selectedItem.description}</p>
			</div>
		</div>
	</div>
{/if}
