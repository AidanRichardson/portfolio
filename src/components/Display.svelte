<script lang="ts">
	import { display } from '../stores/display';
	import { selectedItem, showPreviewModal } from '../stores/modal';

	function openModal(d: Item) {
		selectedItem.set(d);
		showPreviewModal.set(true);
	}
</script>

<div class="p-4">
	<div class="grid grid-cols-4 gap-3">
		{#each $display as d}
			<button
				type="button"
				class="aspect-square overflow-hidden rounded-lg"
				on:click={() => openModal(d)}
			>
				<img
					src={`/data/images/${d.image[0]}`}
					alt=""
					class="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
				/>
			</button>
		{/each}
	</div>
</div>
