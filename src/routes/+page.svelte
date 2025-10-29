<script lang="ts">
	import Display from '../components/Display.svelte';
	import { display } from '../stores/display';

	const projects: Item[] = [
		{
			id: 1,
			image: [
				'src/lib/assets/whatsplaying2.png',
				'src/lib/assets/whatsplaying1.png',
				'src/lib/assets/whatsplaying3.gif'
			],
			title: "What's Playing?",
			description:
				'Basic docker app so a user can host thier spotify playing in a web app that can then be displayed on other devices'
		}
	];

	display.set(projects);
</script>

<Display />
