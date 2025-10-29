<script lang="ts">
	import { selectedList, showListModal } from '../stores/modal';
	import { profile } from '../stores/profile';

	function openModal(list: List) {
		selectedList.set(list);
		showListModal.set(true);
	}
</script>

<div class="flex flex-row flex-wrap items-center justify-center space-x-4">
	<div class="flex items-center justify-center rounded-full p-4">
		<img
			src={`/data/images/${$profile.image}`}
			alt={$profile.name}
			class="h-48 w-48 rounded-full object-cover transition-all duration-300 sm:h-40 sm:w-40 md:h-48 md:w-48 lg:h-56 lg:w-56 xl:h-64 xl:w-64"
		/>
	</div>

	<div class="flex max-w-xl flex-col justify-between rounded-xl p-4">
		<div>
			<h1 class="pb-2 text-2xl font-bold">{$profile.name}</h1>
			<h2 class="pb-2">{$profile.title}</h2>

			<div class="flex flex-row pb-2">
				<h1 class="pr-10"><b>{$profile.projects.length}</b> Projects</h1>
				<button
					type="button"
					class="cursor-pointer border-none bg-transparent p-0 pr-10 text-left hover:underline"
					on:click={() => openModal($profile.languages)}
				>
					<h1><b>{$profile.languages.items.length}</b> Languages</h1>
				</button>
				<button
					type="button"
					class="cursor-pointer border-none bg-transparent p-0 pr-10 text-left hover:underline"
					on:click={() => openModal($profile.skills)}
				>
					<h1><b>{$profile.skills.items.length}</b> Skills</h1>
				</button>
			</div>

			<p class="text-wrap">{$profile.description}</p>
		</div>
	</div>
</div>
