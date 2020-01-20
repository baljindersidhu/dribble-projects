<script>

    import Quote from './Quote.svelte';

    let src = 'https://image.flaticon.com/icons/svg/1721/1721589.svg';
</script>

<div class="quote-box">
    <div class="avatar"><img {src} alt="quote_icon" /></div>
    <Quote />
</div>

<style>

    .quote-box{
        display: flex;
        margin-top: 20vh;
    }

    .avatar{
        margin-left: 25vw;
    }

    .avatar img{
        height: 7vh;
    }
</style>