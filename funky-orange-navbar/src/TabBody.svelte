<script>
    import SvgLoader from './SvgLoader.svelte';

    let tabs = [];
    let activeTab = 'coin';
    tabs.push({'icon': 'assets/3d.svg', label: 'coin'});
    tabs.push({'icon': 'assets/quotes.svg', label: 'quotes'});
    tabs.push({'icon': 'assets/wallet.svg', label: 'wallet'});
    tabs.push({'icon': 'assets/avatar.svg', label: 'user'});

    let changeActiveTab = setInterval(() => {
        let tabsLabels = tabs.map(tab => tab.label);
        let activeTabIndex = tabsLabels.indexOf(activeTab);
        if(activeTabIndex === tabs.length - 1){
            activeTab = 'coin';
            // clearInterval(changeActiveTab);
        }else{
            activeTab = tabs[activeTabIndex + 1]['label'];
        }
    }, 1000);
</script>

<div class="tabBody">
    <div class="activeTabIndicatorPlaceholder">
        <div class="activeTabIndicatorContainer" data-tab-active={activeTab}>
            <div class="activeTabIndicator"></div>
        </div>
    </div>
    {#each tabs as tab}
         <!-- content here -->
         <div class="tabItem" data-tab-active={activeTab === tab.label}>
            <div class="icon" on:click={() => activeTab=tab.label}>
                <SvgLoader src={tab.icon}/>
            </div>
            <div class="title">{tab.label}</div>
         </div>
    {/each}
</div>

<style>
    .tabBody{
        display: flex;
        align-items: center;
        background: white;
        padding: 3vh 1vw;
        border-radius: 1.5vh;
        box-shadow: 0px 2px 1em orangered;
    }

    .tabItem{
        width: 4vw;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .tabItem .icon{
        width: 1.25vw;
        cursor: pointer;
        transform: translateY(0);
        transition: transform 0.25s ease-in-out;
    }

    .tabItem .title{
        font-size: 0.6rem;
        text-transform: uppercase;
        opacity: 0;
        transition: opacity 0.25s ease-in-out;
    }

    .tabItem[data-tab-active="true"] .title{
        opacity: 1;
        color: #fa6a38;
    }

    .tabItem[data-tab-active="true"] .icon{
        transform: translateY(-0.75vh);
        fill: #fa6a38;
    }

    .activeTabIndicator{
        display: inline-block;
        height: 3vh;
        width: 1.5vw;
        border-radius: 50%;
        background-color: white;
    }

    .activeTabIndicatorContainer{
        height: 3vh;
        width: 2vw;
        padding-bottom: 0.5vh;
        text-align: center;
        background-color: #fa6a38;
        border-radius: 50%;
        transition: transform 0.15s ease-in-out;
    }

    .activeTabIndicatorPlaceholder{
        width: 0vw;
    }

    .activeTabIndicatorContainer[data-tab-active="coin"]{
        transform: translate(1vw, -5.75vh);
    }

    .activeTabIndicatorContainer[data-tab-active="quotes"]{
        transform: translate(5vw, -5.75vh);
    }

    .activeTabIndicatorContainer[data-tab-active="wallet"]{
        transform: translate(9vw, -5.75vh);
    }

    .activeTabIndicatorContainer[data-tab-active="user"]{
        transform: translate(13vw, -5.75vh);
    }
</style>