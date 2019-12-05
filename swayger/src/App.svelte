<script>
	import Sidenav from "./Sidenav.svelte";
	import GoLive from "./GoLive.svelte";
</script>

<main>

	<Sidenav/>
	<GoLive/>


</main>

<style>
	main {
		padding: 0em;
		display: flex;
		align-items: flex-start;
		height: 100vh;
		background-color: #333;
	}

	:global(body){
		padding: 0em;
	}
</style>