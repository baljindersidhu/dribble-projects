<script>
    let hideContainer = false;
</script>

<div class="container" data-hide-container={hideContainer}>
    <!-- <button on:click={() => {hideContainer = true}}>hide me</button> -->
</div>

<style>
    .container{
        position: relative;
        background-color: white;
        height: 100vh;
        width: 55vw;
        border-top-left-radius: 2vmax;
        border-bottom-left-radius: 2vmax;
        animation: slide-from-right 1s ease-in-out;
    }

    @keyframes slide-from-right{
        from{
            transform: translateX(30vw);
        }

        to{
            transform: translateX(0vw);
        }
    }

    .container::before{
        content: '';
        position: absolute;
        transform: translate(-0.65vw, 38vh);
        height: 12vh;
        width: 0.25vw;
        background-color: white;
        opacity: 0.35;
        border-radius: 1vh;
    }

    .container[data-hide-container="true"]{
        animation: slide-out 0.5s ease-out;
        animation-fill-mode: forwards;
    }

    @keyframes slide-out{
        from{
            opacity: 1;
            transform: translateX(0vw);
        }

        to{
            opacity: 0;
            transform: translateX(-95vw);
        }
    }
</style>