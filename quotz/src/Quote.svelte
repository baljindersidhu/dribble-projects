<script>

    let quote;
    let author;
    fetchRandomQuote().then(data => {
        quote = data[0];
        author = data.length > 1 ? data[1]: 'Unknown';
    });

    async function fetchRandomQuote(){
        let response = await fetch('quotes.json');
        let quotes = await response.json();
        let rand = Math.floor(Math.random() * quotes.length);
        return quotes[rand];
    }

</script>

<div>
    <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet">
    
    {#if quote != void 0}
        <!-- content here -->
        <div class="quote">{quote}</div>
    {/if}

    {#if author}
        <!-- content here -->
        <div class="author">{author}</div>
    {/if}
</div>


<style>

    .quote, .author{
        font-family: 'Montserrat', sans-serif;
        margin-left: 3vw;
    }

    .quote{
        padding-right: 7vw;
        color: aliceblue;
        font-size: 2.5rem;
    }

    .author{
        padding-top: 3vh;
        color: aliceblue;
        opacity: 0.3;
        font-weight: bold;
    }

</style>