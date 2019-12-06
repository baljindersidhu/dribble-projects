<script>
    import SvgLoader from "./SvgLoader.svelte";
    let hideContainer = false;

    let uploadVidIconSrc = "https://image.flaticon.com/icons/svg/626/626075.svg";
    let notificationIconSrc = "https://image.flaticon.com/icons/svg/759/759039.svg";
    let loggedInUserSrc = "https://image.flaticon.com/icons/svg/701/701993.svg";
</script>

<div class="container" data-hide-container={hideContainer}>
    <!-- <button on:click={() => {hideContainer = true}}>hide me</button> -->
    <div class="topActions">

        <div class="userIcon">
            <SvgLoader src={loggedInUserSrc}/>
        </div>

        <div class="actionIcon">
            <SvgLoader src={notificationIconSrc}/>
        </div>

        <div class="fill-parent"></div>

        <p>Welcome! Ben Waiyt</p>

    </div>

    <div class="uploadContainer">
        <div class="icon">
            <div class="placeholder"></div>
            <SvgLoader src={uploadVidIconSrc}/>
        </div>
        <h4>Upload a New Video</h4>
        <p>Click on the button or drag and drop your file here</p>
        <div class="uploadFileBtn">Upload a File</div>
    </div>
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

    .topActions{
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        padding: 0vh 5vw;
        margin-top: 5vh;
    }

    .topActions .fill-parent{
        flex: 1;
    }

    .topActions p{
        margin: 0em;
    }

    .actionIcon{
        position: relative;
        height: 2.5vh;
        width: 1.5vw;
        margin: 0vh 1.25vw;
    }

    .actionIcon::before{
        content: "";
        position: absolute;
    }

    .userIcon{
        height: 5.5vh;
        width: 2.25vw;
        margin-left: 1.25vw;
    }

    .uploadContainer{
        height: 90vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .uploadContainer .icon{
        height: 6vh;
        margin-top: 2vh;
        margin-bottom: 4.25vh;
    }

    .uploadContainer .icon .placeholder{
        position: relative;
        height: 0vh;
        width: 0vw;
    }

    .uploadContainer .icon .placeholder::before{
        content: '';
        position: absolute;
        left: 7.35vw;
        top: -2.5vh;
        height: 13vh;
        width: 7vw;
        background-color: #333;
        opacity: 0.1;
        border-radius: 0.5vmax;
    }

    .uploadContainer h4{
        opacity: 0.8;
        letter-spacing: 0.05vw;
        margin-bottom: 0vh;
    }

    .uploadContainer p{
        opacity: 0.7;
        font-size: 1vmax;
    }

    .uploadFileBtn{
        background-color: #4dcfe0;
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