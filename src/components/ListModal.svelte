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
		class="fixed inset-0 z-50 flex items-center justify-center p-4"
		role="dialog"
		aria-modal="true"
		tabindex="-1"
		on:keydown={handleKeydown}
	>
		<!-- Overlay background -->
		<div class="absolute inset-0 bg-black/50" on:click={close} aria-hidden="true"></div>

		<!-- Modal content -->
		<div
			class="relative z-10 flex flex-row justify-center overflow-hidden rounded-2xl bg-base-100 text-base-content shadow-lg"
			on:click|stopPropagation
		>
			<div class="max-w-sm min-w-sm overflow-hidden">
				<div class="flex items-center justify-between border-b border-base-300 px-6 py-1">
					<h2 class="flex-1 text-center text-xl font-bold">{$selectedList.title}</h2>
					<button
						type="button"
						on:click={close}
						class="ml-4 cursor-pointer text-3xl"
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
