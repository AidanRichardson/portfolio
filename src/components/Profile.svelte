<script lang="ts">
	import type { Writable } from 'svelte/store';
	import { selectedList, showListModal } from '../stores/modal';

	const languages: List = {
		title: 'Languages',
		items: ['Python', 'JavaScript', 'TypeScript']
	};

	const skills: List = {
		title: 'Skills',
		items: ['Leadership', 'Problem Solving', 'Pandas']
	};

	function openModal(l: List) {
		selectedList.set(l);
		showListModal.set(true);
	}
</script>

<div class="flex flex-row items-stretch justify-center space-x-4">
	<div class="flex items-center rounded-xl p-4">
		<img
			src="https://www.shutterstock.com/image-vector/user-profile-icon-vector-avatar-600nw-2558760599.jpg"
			alt="User avatar"
			class="h-64 w-64 rounded-full object-cover"
		/>
	</div>

	<div class="flex max-w-xl flex-col justify-between rounded-xl p-4">
		<div>
			<h1 class="pb-2 text-2xl font-bold">Aidan Richardson</h1>
			<h2 class="pb-2">Computer Science Student</h2>

			<div class="flex flex-row pb-2">
				<h1 class="pr-10"><b>4</b> Projects</h1>
				<button
					type="button"
					class="cursor-pointer border-none bg-transparent p-0 pr-10 text-left hover:underline"
					on:click={() => openModal(languages)}
				>
					<h1><b>{languages.items.length}</b> Languages</h1>
				</button>
				<button
					type="button"
					class="cursor-pointer border-none bg-transparent p-0 pr-10 text-left hover:underline"
					on:click={() => openModal(skills)}
				>
					<h1><b>{skills.items.length}</b> Skills</h1>
				</button>
			</div>

			<p class="text-wrap">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
				cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</p>
		</div>
	</div>
</div>
