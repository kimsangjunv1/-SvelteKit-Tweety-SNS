<script lang="ts">
	import { onDestroy, onMount } from 'svelte'
	import { page } from '$app/stores'
	import '$root/styles/global.css'
	import { fly } from 'svelte/transition'

	let main: string = '메인 페이지'

	onMount(() => {
		console.log(`${main}가 마운트(로딩) 되었습니다.`)
	})
	onDestroy(() => {
		console.log(`${main}가 언마운트(사라짐) 되었습니다.`)
	})
</script>

<svelte:head>
	<title>Twittr</title>
</svelte:head>

<main
	class="container"
	in:fly={{ x: -100, duration: 250, delay: 300 }}
	out:fly={{ x: -100, duration: 250 }}
>
	<section class="hero">
		<h1 class="title">Twittr 🐦️</h1>
		<p class="text">Share your hot take with everyone.</p>
	</section>

	<section class="login">
		<a class="btn" href="/home"> 🔥 Share Your Hot Take</a>
	</section>
</main>

<style>
	.container {
		height: 100vh;
		display: grid;
	}

	.hero,
	.login {
		display: grid;
		place-content: center;
	}

	.hero {
		background-color: var(--color-brand);
		text-align: center;
	}

	.title {
		font-size: var(--font-80);
		z-index: 2;
	}

	.text {
		padding: var(--spacing-16);
		transform: rotate(2deg) translateY(-40%);
		background: var(--color-bg-primary);
		font-weight: bold;
		font-size: var(--font-24);
		z-index: 1;
	}

	@media (min-width: 1024px) {
		.container {
			grid-template-columns: repeat(2, 1fr);
		}
	}
</style>
