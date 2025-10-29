<script lang="ts">
	import Display from '../../components/Display.svelte';
	import { display } from '../../stores/display';

	const education: Item[] = [
		{
			id: 1,
			image: ['src/lib/assets/whatsplaying3.gif'],
			title: 'University of York',
			description: 'Computer Science BEng'
		}
	];

	display.set(education);
</script>

<Display />
