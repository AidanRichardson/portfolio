<script lang="ts">
	import { page } from '$app/state';
	import { profile } from '../stores/profile';
</script>

<div class="pt-1 pb-3">
	<div class="grid grid-cols-3 gap-0.5">
		{#if page.route.id == '/(app)'}
			{#each $profile.projects as item, index}
				<a href={'/preview/projects/' + index} class="aspect-square overflow-hidden rounded-lg"
					><img
						src={`/data/images/${item.image[0]}`}
						alt=""
						class="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
					/></a
				>
			{/each}
		{/if}
		{#if page.route.id == '/(app)/work'}
			{#each $profile.work as item, index}
				<a href={'/preview/work/' + index} class="aspect-square overflow-hidden rounded-lg"
					><img
						src={`/data/images/${item.image[0]}`}
						alt=""
						class="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
					/></a
				>
			{/each}
		{/if}
		{#if page.route.id == '/(app)/education'}
			{#each $profile.education as item, index}
				<a href={'/preview/education/' + index} class="aspect-square overflow-hidden rounded-lg"
					><img
						src={`/data/images/${item.image[0]}`}
						alt=""
						class="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
					/></a
				>
			{/each}
		{/if}
	</div>
</div>
