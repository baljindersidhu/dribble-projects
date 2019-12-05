<script>
	import Sidenav from "./Sidenav.svelte";
	import GoLive from "./GoLive.svelte";
	import UploadNewVideo from "./UploadNewVideo.svelte";
</script>

<main>

	<Sidenav/>
	<GoLive/>
	<UploadNewVideo/>


</main>

<style>
	main {
		padding: 0em;
		display: flex;
		align-items: flex-start;
		height: 100vh;
		background-color: #333;
		overflow: hidden;
	}

	:global(body){
		padding: 0em;
		font-family: 'Roboto', sans-serif;
	}
</style>