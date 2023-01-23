<aside>
	<div class="container">
		<div class="placeholder" />

		<section>
			<h2>당신을 위한 트렌드 모음!</h2>
			<div class="placeholder" />
			<div class="placeholder" />
			<div class="placeholder" />
			<div class="placeholder" />
			<div class="placeholder" />
			<a href="/">더 보기</a>
		</section>

		<section>
			<h2>나를 팔로우 한 사람</h2>
			<div class="placeholder" />
			<div class="placeholder" />
			<a href="/">더 보기</a>
		</section>
	</div>
</aside>

<style>
	.container {
		display: none;
		position: sticky;
		top: 0;
	}

	section {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-24);
		padding: 2rem;
		background-color: var(--color-bg-secondary);
		border: 1px solid var(--color-border-primary);
		border-radius: var(--radius-base);
	}

	h2 {
		font-size: var(--font-18);
	}

	a {
		font-size: var(--font-16);
		color: hsl(204, 88%, 53%);
	}

	@media (min-width: 1024px) {
		.container {
			width: 400px;
			display: flex;
			flex-direction: column;
			gap: var(--spacing-16);
			margin-top: var(--spacing-16);
			padding: 0 var(--spacing-32);
		}
	}
</style>
