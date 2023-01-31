<script context="module">
	// 에러를 표시해야하는데 에러가 안나옴
	
	export async function load() {
		
	}
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<h1>최근 피드</h1>

<!-- <Icon name="about" /> -->
<style>
	h1 {
		position: sticky;
		top: 10px;
		padding: var(--spacing-8) var(--spacing-24);
		font-size: var(--font-24);
		backdrop-filter: blur(100px);
	}
</style>
