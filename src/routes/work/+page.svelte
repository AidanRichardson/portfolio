<script lang="ts">
	import Display from '../../components/Display.svelte';
	import { display } from '../../stores/display';

	const work: Item[] = [
		{
			id: 1,
			image: ['whatsplaying2.png'],
			title: 'Network Computing',
			description: '1st Line IT Support'
		}
	];

	display.set(work);
</script>

<Display />
