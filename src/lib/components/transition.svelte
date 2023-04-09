<script>
	import { fade } from 'svelte/transition';
  import { cubicIn } from 'svelte/easing';
	export let pathname = '';
</script>

{#key pathname}
	<div in:fade={{ duration: 480, delay: 480, easing: cubicIn }} out:fade={{ duration: 480 }}>
		<slot />
	</div>
{/key}