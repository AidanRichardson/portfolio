<script lang="ts">
	import { onMount } from 'svelte';
	import Display from '../components/Display.svelte';
	import { display } from '../stores/display';
	import { profile } from '../stores/profile';

	display.set($profile.projects);
</script>

<Display />
