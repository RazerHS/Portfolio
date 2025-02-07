<script>
    import Header from '$lib/components/generic/Header.svelte';
    import Footer from '$lib/components/generic/Footer.svelte';
    import Backdrop from '$lib/components/generic/Backdrop.svelte';
</script>

<style>
    .about-container {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        height: 50em;
        width: 100%;
    }

    .text-container {
        color: white;
        font-family: Lexend;
        width: 50em;
    }

    .separator {
        position: absolute;
        width: 110%;
        height: 100%;
        margin-left: -1em;
        opacity: 1;
        overflow: hidden;
        box-shadow: 0 0 8px 0px white inset;
    }

    img {
        border-radius: 20px;
        box-shadow: 0 0 10px 0.1px rgb(105, 105, 105);
        height: 80%;
    }

    h2 {
        text-align: center;
        color: white;
        font-family: Lexend;
        font-size: 3em;
    }

</style>

<Header />
<Backdrop />

<h2>I’m Igor. </h2>
<div class="about-container">
    <div class="separator"></div>
    <img src="/igor.jpg" alt="">
    <div class="text-container">
        <p>I’m a Serbian game developer based in Groningen, Netherlands. </p>
        <p>During my studies, I made all kinds of games and prototypes, eventually leading me to discover a particular interest in tools. I learned to love experimenting with workflows and being creative in order to allow others to be their most creative self. For me, the journey is just as important as any final product. </p>
        <p>I am currently looking for new opportunities, so if you like what I do, let’s chat!</p>
        <p>From modding Minecraft to installing for the first time Unity and attempting to recreate the original roguelike deckbuilder Dream Quest, game development has always been a curiosity of mine waiting to get its turn to burst out in the world. As an avid card gamer growing up and hitting #1 on Hearthstone’s Europe leaderboards, I’m happy programming has allowed my favorite hobby to find its way into my work. </p>
        <p>Outside work, I will be bouncing on the volleyball court for my team’s next victory and hanging around my good friends. At home, I spend a good chunk of time practicing and recording music (drums, singing, guitar), and one of these days I hope to record and mix a song worthwhile for the internet to bear. </p>
    </div>
</div>


<Footer />

