<script>
    import SvgLoader from "./SvgLoader.svelte";
    let actions= "Discover, Feed, Games, Videos, Chats".split(", ")
        .map(action => action.trim());
    let heroAvatarSrc = 'https://image.flaticon.com/icons/svg/758/758484.svg';
</script>

<div class="container column">
    <div class="row mainActions">
        {#each actions as action}
            <p>{action}</p>
        {/each}
    </div>

    <div class="fillParent column heroContent">
        <div class="heroAvatar">
            <SvgLoader src={heroAvatarSrc}/>
        </div>
        <h4>Start a Live Video</h4>
        <p>Setup a stream to start a live video now</p>
        <div class="goLiveBtn">Go Live</div>
    </div>
</div>


<style>
    .container{
        height: 100vh;
    }
    .row{
        display: flex;
    }

    .column{
        display: flex;
        flex-direction: column;
    }

    .column .fillParent{
        flex: 1;
    }

    .mainActions{
        padding-left: 5vw;
        padding-top: 6.25vh;
    }

    .mainActions p{
        color: white;
        font-size: 1vmax;
        font-weight: bold;
        text-transform: capitalize;
        opacity: 0.6;
        margin: 0vh 1.5vw;
        cursor: pointer;
    }

    .mainActions p:hover{
        text-decoration: underline;
    }

    .mainActions p:first-child{
        margin-left: 0vw;
    }

    .mainActions p:last-child{
        margin-right: 0vw;
    }

    .heroContent{
        align-items: center;
        justify-content: center;
        min-width: 40vw;
    }

    .heroAvatar{
        height: 15vh;
    }

    .heroContent h4{
        color: white;
        opacity: 0.8;
        letter-spacing: 0.05vw;
        margin-bottom: 0vh;
    }

    .heroContent p{
        color: white;
        opacity: 0.7;
        font-size: 1vmax;
    }

    .goLiveBtn{
        background-color: salmon;
        color: white;
        font-weight: bold;
        font-size: 1vmax;
        padding: 2vh 2vw;
        margin-top: 1vh;
        border-radius: 1vmax;
        animation: fade-in 0.5s ease-in-out;
        animation-delay: 1s;
        animation-fill-mode: backwards;

    }

    @keyframes fade-in{
        from{
            opacity: 0;
        }

        to{
            opacity: 1;
        }
    }
</style>