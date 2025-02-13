<script>
    import '$lib/styles/style.scss';
    import Button from '$lib/components/generic/Button.svelte';
    import { fade } from 'svelte/transition';
    import ContactButton from '../generic/ContactButton.svelte';
</script>

<style lang='scss'>

    @keyframes hover {
        0% {
            transform: scale(1) translate(0px, 0px);
        }
        50% {
            transform: translate(2px, 3px);
        }
        100% {
            transform: scale(1) translate(0px, 0px);
        }
    }

    @keyframes slide-in {
        0% {
            transform: translateY(-100%);
            opacity: 0;
        }
        100% {
            transform: translateY(0);
            opacity: 1;
        }
    }

    .hero-main-container {
        gap: 0em;
        overflow: hidden;
        width: 100%;
        display: flex;
        position: relative;
        overflow: hidden;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        height: 80vh;
        transform: translateY(-10px);
        animation: loadIn 0.7s ease-in-out forwards;
    }

    .hero-separator {
        position: absolute;
        box-shadow: 0 0 8px 8px white inset;
        margin-left: -1em;
        width: 110%;
        height: 100%;
        opacity: 0.1;
    }

    .text-container {
        justify-content: center;
        width: 25em;
        padding: 1em 2em;
        position: relative;
        border-radius: 15px;
        font-size: clamp(1.5em, 1em, 2em);

        @media (max-width: 480px) or (max-height: 720px){
            font-size: calc(1em - 0.5vw);
        }

        @media (max-width: 768px) {
            width: 15em;
            padding: 1em 1.5em;
        }

        @media (min-width: 768px) and (max-width: 1024px) {
            width: 20em;
        }

        @media (max-height: 520px) and (max-width: 1024px) {
            width: 25em;
        }
    }

    .bottom-container {
        display: flex;
        justify-content: space-between;
        width: 95%;
        padding-bottom: 5vh;
        font-size: clamp(0.8rem, 3vw, 1.3rem);
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
        flex-wrap: wrap;
        gap: 1em;
        width: 12em;
        font-size: clamp(1rem, 3vw, 1.3rem);
        padding-left: 2em;
        
        @media (max-width: 768px) {
            padding-left: 1.5em;
        }

        @media (max-height: 720px) and (min-width: 768px) {
            font-size: 0.7em;
        }
        
        @media (max-height: 520px) and (max-width: 1024px) {
            font-size: 0.7em;
        }
    }

    .hero-image {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover; 
        object-position: center;
        opacity: 1;
        mix-blend-mode: lighten;
        transform: rotateY(180deg);
    }

    .arrow {
        padding-top: 1em;
        color: white;
        width: 5em;
        rotate: 30deg;
        left: 5em;
        opacity: 0;
        filter: drop-shadow(0 0 1.5rem var(--accent-color1)) drop-shadow(0 0 0.2rem var(--accent-color2));
        animation: fadeIn 1.5s ease-in-out 1.5s forwards;

        @media (max-width: 768px) or (max-height: 850px) {
            display: none;
        }
    }

    .hero-credits-wrapper {
        margin: 0;
        width: fit-content;
        height: 100%;
        display: flex;
        align-items: flex-end;
    }

    .hero-credits {
        opacity: 0;
        color: rgba(255, 255, 255, 0.7);
        font-weight: 300;
        font-size: 1em;
        filter: drop-shadow(0 0 1.5rem var(--accent-color1)) drop-shadow(0 0 0.2rem var(--accent-color2));
        animation: fadeIn 1.5s ease-in-out 2.3s forwards;
        margin: 0;

        @media (max-height: 520px) and (max-width: 1024px) {
            font-size: 0.7em;
        }
    }

    .placeholder {
        width: 3em;
        height: 3em;

        @media (max-width: 768px) {
            width: 2.5em;
            height: 2.5em;
        }
    }

    p {
        font-family: 'Londrina Solid';
    }

    h1, h2 {
        color: white;
        font-family: 'Londrina Solid';
        font-size: 2em;
        text-shadow: 2px 2px 16px rgb(0, 0, 0);
        text-shadow: 5px 5px 32px rgb(0, 0, 0);

        width: 100%;
        text-overflow: ellipsis;

        opacity: 0;
        animation: fadeIn 1.5s ease-in-out 0.75s forwards;
    }

    color.color1 {
        color: var(--accent-color2);
        animation: textGlow 3s ease-in-out infinite alternate;
    }

    color.color2 {
        color: var(--accent-color3);
        animation: textGlow 4s ease-in-out infinite alternate;
    }

    color.color3 {
        color: var(--accent-color1);
        animation: textGlow 5s ease-in-out infinite alternate;
    }

</style>

<div class='hero-main-container' name="about">
    <div class='hero-separator'></div>
    <img class='hero-image' src='/igi2.png' alt='Hero'/>
        <div class='text-container'>
            <h1> Hi, I'm Igor.</h1>
            <h2 class='heading-subtext'> I develop <color class='color1'>systems</color>, <color class='color2'>tools</color>, and <color class='color3'>gameplay</color> for games that inspire me.</h2>
            <img src='\arrow.png' alt='' class="arrow">
        </div>
        <div class='bottom-container'>
            <div class='contact-container'>
                <ContactButton src='/github_icon.png' alt='Github' link='https://github.com/RazerHS' text='GitHub' fadeInDelay=1.5/>
                <ContactButton src='/linkedin_icon.png' alt='LinkedIn' link='https://www.linkedin.com/in/igor-kovacevic-04b931239/' text='LinkedIn' fadeInDelay=1.6/>
                <span class="placeholder"></span>
                <ContactButton src='/itch_icon.png' alt='Itch' link='https://razerhs.itch.io/' text='Itch.io' fadeInDelay=1.7/>
                <ContactButton src='/email_icon.png' alt='Email' link='mailto:igor.kovacevic550@gmail.com' text='Email' fadeInDelay=1.8/>
                <ContactButton src='/cv_icon.png' alt='CV' link='/CV - Igor Kovacevic.pdf' text='CV' fadeInDelay=1.9/>
            </div>
            <div class='hero-credits-wrapper'>
                <p class='hero-credits'>Art by: @manasseh</p>
            </div>
    </div>
</div>
 