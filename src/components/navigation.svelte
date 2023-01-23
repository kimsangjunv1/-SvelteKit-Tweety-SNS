<script lang="ts">
	import { page } from '$app/stores'
	import Icon from '$root/components/icon.svelte'

	// 활성화 된 링크가 무엇인지 파악하기 위한 용도
	$: path = $page.url.pathname
</script>

<aside>
	<div class="container">
		<nav>
			<ul>
				<li>
					<a href="/" class="logo">🐦️</a>
				</li>
				<li class:active={path === '/home'}>
					<a href="/home">
						<Icon width="32" height="32" name="home" />
						<span>홈</span>
					</a>
				</li>

				<li class:active={path === '/home/profile/matia'}>
					<a href="/home/profile/matia">
						<Icon width="32" height="32" name="profile" />
						<span>프로파일</span>
					</a>
				</li>

				<li class:active={path === '/home/settings'}>
					<a href="/home/settings">
						<Icon width="32" height="32" name="settings" />
						<span>설정</span>
					</a>
				</li>

				<li class:active={path === '/home/about'}>
					<a href="/home/about">
						<Icon width="32" height="32" name="about" />
						<span>더 보기</span>
					</a>
				</li>
			</ul>
		</nav>
		<button class="btn tweet">업로드</button>
	</div>
</aside>
