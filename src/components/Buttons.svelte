<script>
	import { page } from '$app/state';
	import Icon from '@iconify/svelte';
</script>

<div class="flex justify-center">
	<nav class="flex w-full max-w-xl flex-row items-center justify-between">
		<a
			href="/"
			class="flex w-20 cursor-pointer flex-col items-center pb-1 transition-colors duration-300
				{page.route.id == '/' ? 'border-b-2' : ''}"
		>
			<Icon icon="material-symbols:grid-on-outline" width="32" height="32" />
		</a>

		<a
			href="/work"
			class="flex w-20 cursor-pointer flex-col items-center pb-1 transition-colors duration-300
				{page.route.id == '/work' ? 'border-b-2 ' : ''}"
		>
			<Icon icon="material-symbols:work-outline" width="32" height="32" />
		</a>

		<a
			href="/education"
			class="flex w-20 cursor-pointer flex-col items-center pb-1 transition-colors duration-300
				{page.route.id == '/education' ? 'border-b-2 ' : ''}"
		>
			<Icon icon="material-symbols:school-outline" width="32" height="32" />
		</a>
	</nav>
</div>
