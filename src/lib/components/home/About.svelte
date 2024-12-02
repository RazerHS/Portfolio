<script>
    import '$lib/styles/style.scss';
    import Button from '$lib/components/generic/Button.svelte';
</script>

<style>
    @media (max-width: 768px) {
        .about-main-container {
            flex-wrap: wrap;
            align-items: center;
        }
    }

    .about-main-container {
        display: flex;
        justify-content: center;
        gap: 2em;
        padding: 2em;
        overflow: hidden;
    }

    .about-sub-container {
        display: flex;
        justify-content: center;
    }

    .text-container {
        width: 25em;
    }

    .img-container {
        width: 20em;
        height: auto;
        min-width: 1em;
        min-height: 1em;
        display: flex;
    }

    .contact-container {
        display: flex;
        gap: 1.5em;
    }

    #circular-img {
        clip-path: circle(50%);
        width: 100%;
        height: 100%;
    }

    #igi-img {
        width: 100%;
        height: 70%;
        object-fit: cover;
    }

    h1, h2 {
        color: white;
        font-family: Lexend;

        width: 100%;
        text-overflow: ellipsis;
    }

    color.color1 {
        color: var(--accent-color1);
    }

    color.color2 {
        color: var(--accent-color2);
    }

    color.color3 {
        color: var(--accent-color3);
    }

    .cards-container {
        display: flex;
        transform: translate(15em, 15em);
        position: absolute;
        z-index: -1;
    }

    .card {
        position: absolute;
        width: 12em;
        height: 17em;
        background-color: rgb(5, 39, 39);
        border-radius: 8px;
        z-index: -10;
        display: flex;
        align-items: center;
    }

    .card-1 {
        rotate: -40deg;
        transform: translate(-80px, 20px);
    }

    .card-2 {
        rotate: -20deg;
        transform: translate(40px, 10px);
    }

    .card-3 {
        rotate: 10deg;
        transform: translate(100px, -30px);
    }

</style>

<div class='about-main-container' name="about">
    <div class=img-container>
        <img src='/about_circular.png' alt='me' id='circular-img'>
    </div>
    <div class='text-container'>
        <h1> Hi, I'm Igor.</h1>
        <h2> I develop <color class='color1'>systems</color>, <color class='color2'>tools</color>, and <color class='color3'>gameplay</color> for games that inspire me.</h2>
        <div class='contact-container'>
            <Button content='' imageSrc='/linkedin_icon.png'/>
        </div>
    </div>
    <!-- <div class="cards-container"> 
        <div class="card card-1">
            <Button content='CV' />
        </div> 
        <div class="card card-2"></div> 
        <div class="card card-3">
            <img id='igi-img' src='igi.png'>
        </div> 
    </div> -->
</div>
