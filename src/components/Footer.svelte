<script>
	import Icon from '@iconify/svelte';
</script>

<footer class="w-full bg-base-300">
	<div
		class="container-layout flex flex-col items-center justify-between space-y-4 py-6 sm:flex-row sm:space-y-0"
	>
		<p class="text-sm">&copy; {new Date().getFullYear()} Aidan Richardson</p>

		<div class="flex space-x-2">
			<a
				href="https://github.com/AidanRichardson/portfolio"
				target="_blank"
				rel="noopener noreferrer"
				class="transition-colors duration-300 hover:text-white"
			>
				<Icon icon="mdi:code" width="22" height="22" />
			</a>
		</div>
	</div>
</footer>
