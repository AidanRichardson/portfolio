<script lang="ts">
	import '../../app.css';
	import { profile as profileStore } from '../../stores/profile';

	let { data, children } = $props();

	if (data?.profile) {
		profileStore.set(data.profile);
	}
</script>

{@render children()}
