<script>
	import TabBody from './TabBody.svelte';
</script>

<main>
	<div class="tabContainer">
		<TabBody />
	</div>
</main>

<style>
	main {
		height: 100vh;
		background-color: #fa6a38;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	:global(body){
		margin: 0em;
		padding: 0em;
	}
</style>