<script>
	import QuoteBox from './QuoteBox.svelte';
	
	export let name;

</script>

<main>
	<link href="https://fonts.googleapis.com/css?family=Bangers&display=swap" rel="stylesheet">
	<div class="brand-name">{name}</div>
	<QuoteBox />
</main>

<style>

	main{
		height: 100vh;
		background-image: linear-gradient(45deg, #243134, #1a2526);
		animation: slide-up 0.35s ease-in-out;
	}

	.brand-name{
		position: relative;
		color: white;
		font-family: 'Bangers', cursive;
		font-size: 2.5rem;
    	padding: 8vh 3vw;
	}

	.brand-name::before{
		content: '';
		position: absolute;
		height: 0.5vh;
		width: 4vw;
		background: white;
		bottom: 5vh;
	}

	:global(body){
		padding: 0em;
		overflow: hidden;
		background: #1a2526;
	}
	

	@keyframes slide-up{
		from{
			transform: translateY(100vh);
		}

		to{
			transform: translateY(0vh);
		}
	}
</style>