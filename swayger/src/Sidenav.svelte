<script>
    import SvgLoader from './SvgLoader.svelte';
    let brandIcon = 'https://image.flaticon.com/icons/svg/2009/2009904.svg';
    let bottomIcon = 'https://image.flaticon.com/icons/svg/1828/1828490.svg';
    let bottomIconFill = 'white;'
    let userAvatars = [
        'https://image.flaticon.com/icons/svg/145/145849.svg',
        'https://image.flaticon.com/icons/svg/145/145848.svg',
        'https://image.flaticon.com/icons/svg/145/145847.svg',
        'https://image.flaticon.com/icons/svg/145/145843.svg'
    ]
</script>

<div class="container">
    <div class="brandIcon">
        <SvgLoader src={brandIcon}/>
    </div>
    <div class="fill-parent"></div>
    {#each userAvatars as src}
        <div class="userAvatar">
            <SvgLoader {src}/>
        </div>
    {/each}
    <div class="fill-parent"></div>
    <div class="bottomIcon">
        <SvgLoader src={bottomIcon}/>
    </div>
</div>

<style>
    .container{
        height: 100vh;
        width: 5vw;
        background-color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        animation: slide-right 0.25s ease-in-out;
    }

    .container .fill-parent{
        flex: 1;
    }

    @keyframes slide-right{
        from{
            transform: translateX(-5vw);
        }

        to{
            transform: translateX(0vw);
        }
    }

    .brandIcon{
        width: 3vw;
        margin-top: 4vh;
    }

    .userAvatar{
        position: relative;
        width: 2.75vw;
        margin: 1.5vh 0vw;
        animation: bring-life 0.35s ease-out;
        animation-delay: 0.5s;
        animation-fill-mode: backwards;
    }

    .userAvatar::before{
        content: '';
        position: absolute;
        background-color: seagreen;
        bottom: 0vh;
        right: 0vw;
        padding: 0.75vh;
        border-radius: 50%;
        animation: grow 0.25s ease-in-out;
        animation-delay: 0.5s;
        animation-fill-mode: backwards;
    }

    .bottomIcon{
        width: 2.5vw;
        height: 3.5vh;
        margin-bottom: 4vh;
    }

    @keyframes grow{
        from{
            transform: scale(0);
        }

        to{
            transform: scale(1);
        }
    }

    @keyframes bring-life{
        from{
            filter: grayscale(1);
        }

        to{
            filter: grayscale(0);
        }
    }

</style>