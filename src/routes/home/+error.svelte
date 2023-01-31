<script context="module" lang="ts">
	// import type { ErrorLoad } from '@sveltejs/kit'
	import { page } from '$app/stores'
	import '$root/styles/global.css'

	// export const load: ErrorLoad = async ({
	// 	error,
	// 	status
	// }) => {
	// 	return {
	// 		props: {
	// 			title: `${status}: ${error.message}`
	// 		}
	// 	}
	// }
</script>

<script lang="ts">
	export let title: string
</script>

<div class="error">
	<!-- 페이지에 에러가 있다면 메세지를 띄워라! -->
	<h1>으! {$page?.status} {$page.error?.message}</h1>
	<pre>
        <!-- JSON파일을 4칸씩 띄워서 표시해라! -->
        {JSON.stringify($page, null, 4)}
    </pre>
	<!-- <h1>{title}</h1> -->
	<img src="/dancing.webp" alt="Person dancing" />
</div>

<style>
	.error {
		display: grid;
		gap: var(--spacing-32);
		padding: var(--spacing-24) var(--spacing-32);
		place-items: center;
	}

	img {
		width: 200px;
		height: 200px;
		border-radius: 50%;
		object-fit: cover;
	}
</style>
