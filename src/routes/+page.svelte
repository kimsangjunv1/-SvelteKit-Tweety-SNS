<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { page } from '$app/stores';

	onMount(() => {
		console.log('마운트(로딩) 되었습니다.');
	});
	onDestroy(() => {
		console.log('언마운트(사라짐) 되었습니다.');
	});
</script>

<h1>hi</h1>
<pre>
    {JSON.stringify($page, null, 2)}
</pre>
