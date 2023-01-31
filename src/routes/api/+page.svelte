<!-- export async function GET({fetch}){
    // 가져오기를 기다리는걸 response에다가
    const response = await fetch('/api/item')
    // json파일의 응답을 기다립
    const item = await response.json()
    console.log(item)
} -->
<script context="module">
	export async function load({ fetch }) {
		const response = await fetch('/api/item')
		const item = await response.json()

		console.log(item)

		return {
			props: { item }
		}
	}
</script>

<h1>{item}</h1>

<form action="/api/item" method="post">
	<input type="text" name="item" />
	<button class="btn" type="submit">Submit</button>
</form>
