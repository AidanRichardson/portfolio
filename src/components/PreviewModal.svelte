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
		<div
			class="flex max-h-full flex-col justify-center overflow-hidden rounded-lg md:flex-row"
			on:click|stopPropagation
		>
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
							class="max-h-[50vh] w-full object-contain md:max-h-[80vh]"
						/>
						<div
							class="absolute top-1/2 right-5 left-5 flex -translate-y-1/2 transform justify-between"
						>
							<a
								href={'#slide' +
									(($selectedItem.image.length + i - 1) % $selectedItem.image.length)}
								class="btn btn-circle"
								aria-label="Previous image"
							>
								❮
							</a>
							<a
								href={'#slide' + ((i + 1) % $selectedItem.image.length)}
								class="btn btn-circle"
								aria-label="Next image"
							>
								❯
							</a>
						</div>
					</div>
				{/each}
			</div>

			<div
				class="flex min-h-0 w-full min-w-0 flex-col justify-between overflow-y-auto bg-base-300 p-6 text-wrap md:max-w-sm"
			>
				<div>
					<h2 class="mb-2 text-2xl font-bold">{$selectedItem.title}</h2>
					<p>{$selectedItem.description}</p>
				</div>

				{#if $selectedItem.link}
					<div>
						<div class="mt-6 grid w-full grid-cols-3 gap-3">
							{#each $selectedItem.tools as tool}
								<div
									class="flex flex-col items-center justify-center rounded-xl border border-gray-700 bg-base-100 p-2 shadow-sm transition hover:shadow-md"
								>
									<img
										src={'/data/icons/' + tool.icon}
										alt={tool.name + ' icon'}
										class="mb-1 h-12 w-12 object-contain"
									/>
									<span class="text-center text-sm font-medium text-white">{tool.name}</span>
								</div>
							{/each}
						</div>

						<div class="mt-6 flex justify-center">
							<a
								href={$selectedItem.link}
								target="_blank"
								rel="noopener noreferrer"
								class="inline-block rounded-lg bg-blue-800 px-4 py-2 font-medium text-white transition hover:bg-blue-600"
							>
								[View Project]
							</a>
						</div>
					</div>
				{/if}
			</div>
		</div>
	</div>
{/if}
