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
		<div class="flex flex-row justify-center overflow-hidden rounded-lg" on:click|stopPropagation>
			<button
				type="button"
				on:click={close}
				class="absolute top-3 right-3 z-10 text-4xl text-white hover:text-gray-300"
				aria-label="Close modal"
			>
				&times;
			</button>

			<div class="max-w-sm min-w-sm overflow-hidden bg-gray-900 p-6 text-wrap text-white">
				<h2 class="mb-4 text-2xl font-bold">{$selectedList.title}</h2>
				<ul class="list-inside list-disc space-y-1">
					{#each $selectedList.items as item}
						<li>{item}</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
{/if}
