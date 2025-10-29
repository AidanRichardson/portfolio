<script lang="ts">
	import { selectedList, showListModal } from '../stores/modal';

	function close() {
		showListModal.set(false);
		selectedList.set(null);
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			close();
		}
	}
</script>

{#if $showListModal && $selectedList}
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
			class="relative flex flex-row justify-center overflow-hidden rounded-2xl"
			on:click|stopPropagation
		>
			<div class="max-w-sm min-w-sm overflow-hidden bg-gray-900 text-white">
				<div class="flex items-center justify-between border-b border-gray-700 px-6 py-1">
					<h2 class="flex-1 text-center text-xl font-bold">{$selectedList.title}</h2>
					<button
						type="button"
						on:click={close}
						class="ml-4 text-3xl text-white hover:text-gray-300"
						aria-label="Close modal"
					>
						&times;
					</button>
				</div>
				<ul class="list-none space-y-2 px-6 py-2">
					{#each $selectedList.items as item}
						<li class="flex items-center justify-between text-lg">
							<span>{item.name}</span>
							<img
								src={`/data/icons/${item.icon}`}
								alt={item.name + ' icon'}
								class="h-10 w-10 rounded object-contain"
							/>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
{/if}
