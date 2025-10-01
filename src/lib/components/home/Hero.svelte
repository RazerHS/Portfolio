<script>
    import '$lib/styles/app.scss';
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
        aspect-ratio: 16/9;
        overflow: hidden;
        width: 95%;
        height: min(80vh, 1000px);
        transform: translateY(-10px);
        animation: loadIn 0.7s ease-in-out forwards;
        max-width: 2000px;
        margin: auto;
        grid-template: auto 1fr 1fr / minmax(150px, 60%) 150px;
        padding: var(--spacing-s) var(--spacing-m);
        display: grid;
        border-radius: 20px;

        @media (max-width: 450px) {
            grid-template: auto 1fr 1fr / minmax(150px, 60%) 60px;
        }

         @media (min-width: 768px) and (max-height: 800px) {
            height: auto;
        }

        .heading {
            grid-column: 1 / 2;
            max-width: 50%;

            @media (min-width: 601px) and (max-width: 1200px) {
                max-width: 400px;
            }

            @media (max-width: 600px) {
                min-width: 250px;
            }
        }

        .contact-container {
            grid-row: 3 / 3;
            display: grid;
            gap: var(--spacing-m);
            width: 20%;
            grid-template-columns: repeat(3, 1fr);
            min-height: 160px;
            align-self: end;
            padding-bottom: var(--spacing-xs);

            @media (max-width: 1000px) {
                min-height: 140px;
                gap: var(--spacing-s);
            }
        
            @media (max-width: 1000px) {
                min-height: 120px;
            }
        }

        .credits {
            grid-column: 4 / 5;
            grid-row: 3 / 3;
            display: flex;
            align-items: flex-end;
            color: rgba(255, 255, 255, 0.7);

            @media (max-width: 950px) {
                padding-right: var(--spacing-m);
            }

            @media (max-width: 500px) {
                padding-right: var(--spacing-m);
                
                p {
                    font-size: 0.8em;
                }
            }
        }
    }
    
    .divider {
        width: 10%;
        height: var(--divider-height);
        background: white;
    }

    .hero-separator {
        position: absolute;
        box-shadow: inset 0 0 16px white;
        width: 110%;
        height: 100%;
        opacity: 0.1;
    }

    .img-container {
        width: 20em;
        height: auto;
        min-width: 1em;
        min-height: 1em;
        display: flex;
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

    h1, h2 {
        text-shadow: 2px 2px 16px rgb(0, 0, 0);
        text-shadow: 5px 5px 32px rgb(0, 0, 0);
        opacity: 0;
        animation: fadeIn 1.5s ease-in-out 0.75s forwards;
    }

    h1 {
        font: var(--h1); 
    }

    color.color1 {
        color: var(--color-primary);
        animation: textGlow 3s ease-in-out infinite alternate;
    }
    
    color.color2 {
        color: var(--color-secondary);
        animation: textGlow 4s ease-in-out infinite alternate;
    }

    color.color3 {
        color: var(--color-accent);
        animation: textGlow 5s ease-in-out infinite alternate;
    }

</style>

<div class='hero-main-container' name="about">
    <div class='hero-separator'></div>
    <img class='hero-image' src='/igi2.png' alt='Hero'/>
    <div class='heading'>
        <h1> Hi, I'm Igor.</h1>
        <p class='fancy-divider'>┗━━━━━༻❁༺━━━━━┛</p>
        <h2> I develop <color class='color1'>systems</color>, <color class='color2'>tools</color>, and <color class='color3'>gameplay</color> for inspiring games.</h2>
    </div>
    <div class='contact-container'>
        <ContactButton src='/github_icon.png' alt='Github' link='https://github.com/RazerHS' text='GitHub' fadeInDelay=1.5/>
        <ContactButton src='/linkedin_icon.png' alt='LinkedIn' link='https://www.linkedin.com/in/igor-kovacevic-04b931239/' text='LinkedIn' fadeInDelay=1.6/>
        <div></div>
        <ContactButton src='/itch_icon.png' alt='Itch' link='https://razerhs.itch.io/' text='Itch.io' fadeInDelay=1.7/>
        <ContactButton src='/email_icon.png' alt='Email' link='mailto:igor.kovacevic550@gmail.com' text='Email' fadeInDelay=1.8/>
        <ContactButton src='/cv_icon.png' alt='CV' link='/CV - Igor Kovacevic.pdf' text='CV' fadeInDelay=1.9/>
    </div>
    <div class='credits'>
        <p>Art by: @manasseh</p>
    </div>
</div>
 