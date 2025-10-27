<script>
	const projects = [
		{
			id: 1,
			image: 'https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg'
		},
		{
			id: 2,
			image: 'https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg'
		}
	];
</script>

<div class="rounded-xl p-4">
	<div class="grid grid-cols-4 gap-3">
		{#each projects as p}
			<div class="aspect-square overflow-hidden rounded-lg">
				<img
					src={p.image}
					alt=""
					class="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
				/>
			</div>
		{/each}
	</div>
</div>
