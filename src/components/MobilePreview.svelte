<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { selectedItem } from '../stores/modal';

	function close() {
		goto('/');
	}
</script>

{#if $selectedItem}
	<div class="flex min-h-screen flex-col bg-base-300">
		<button
			type="button"
			on:click={close}
			class="absolute top-3 right-3 z-10 cursor-pointer text-4xl"
			aria-label="Close modal"
		>
			&times;
		</button>
		{#if $selectedItem.image.length == 1}
			<div class="max-w-[125vh] bg-black">
				<img
					src={`/data/images/${$selectedItem.image[0]}`}
					alt="Project image"
					class="max-h-[50vh] w-full object-contain"
				/>
			</div>
		{:else}
			<!-- Image carousel -->
			<div class="carousel bg-black">
				{#each $selectedItem.image as img, i (i)}
					<div id={'slide' + i} class="relative carousel-item w-full">
						<img
							src={`/data/images/${img}`}
							alt="Project image"
							class="max-h-[60vh] w-full object-contain"
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
		{/if}

		<!-- Details panel -->
		<div class="flex w-full flex-col justify-between overflow-y-auto bg-base-300 p-6">
			<div>
				<h1 class="mb-3 text-3xl font-bold">{$selectedItem.title}</h1>

				{#if $selectedItem.company}
					<h1 class="mb-3 text-xl font-bold">Company: {$selectedItem.company}</h1>
				{/if}

				<p class="mb-4 text-base">{$selectedItem.description}</p>

				{#if $selectedItem.tools}
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
				{/if}
			</div>

			{#if $selectedItem.link}
				<div class="mt-8 flex justify-center">
					<a
						href={$selectedItem.link}
						target="_blank"
						rel="noopener noreferrer"
						class="inline-block rounded-lg bg-blue-800 px-4 py-2 font-medium text-white transition hover:bg-blue-600"
					>
						[View Project]
					</a>
				</div>
			{/if}
		</div>
	</div>
{/if}
