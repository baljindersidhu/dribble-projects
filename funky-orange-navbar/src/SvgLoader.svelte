<script>
    /**
     * Variable Declarations 
     */
    export let src;
    let containerEl;
    let domParser = new DOMParser();
    const CONTENT_TYPE = "image/svg+xml";

    if(src){
        fetchAndAppendImage(src);
    }

    $: fetchAndAppendImage(src);

    async function fetchAndAppendImage(src){
        if(src.includes('.svg')){
            await fetchSVGImageAndAppend(src);
        }else if(src.includes('.png') || src.includes('.jpg') || 
            src.includes('.jpeg') || src.includes('.gif')){
            containerEl && appendTraditionalImage(src);
        }
    }

    async function fetchSVGImageAndAppend(src){
        let content = await fetch(src).then(data => data.text());
        let childEl = domParser.parseFromString(content, CONTENT_TYPE);
        setChildElementStyles(childEl);

        // check if container already has child element and remove it
        containerEl.firstChild && containerEl.removeChild(containerEl.firstChild);
        containerEl.appendChild(childEl.documentElement);
    }

    function setChildElementStyles(childEl){
        childEl.documentElement.style.height = '100%';
        childEl.documentElement.style.width = '100%';
        childEl.documentElement.style.animation = "grow 0.25s ease-in-out";
        childEl.documentElement.style.animationName = "grow";
    }

    function appendTraditionalImage(src){
        // check if container already has child element and remove it
        containerEl.firstChild && containerEl.removeChild(containerEl.firstChild);
        let imageEl = createNewImageEl(src);
        setChildElementStyles(imageEl);
        containerEl.appendChild(imageEl);
        return true;
    }

    function getImageElement(src){
        let el = document.createElement('img');
        el.src = src;
        el.alt = src.split('/').reverse()[0];
        return el;
    }
</script>

<div class="container" bind:this={containerEl}></div>

<style>
    .container{
        height: 100%;
        width: 100%;
    }

    @keyframes grow{
        from{
            transform: scale(0);
        }

        to{
            transform: scale(1);
        }
    }
</style>