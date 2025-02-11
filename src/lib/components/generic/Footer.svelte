<script>
    
</script>

<style lang='scss'>
    footer {
        width: 100%;
        height: 20em;
        font-family: Lexend;
        box-shadow: 0 8px 10px -10px rgb(142, 142, 142) inset;
        backdrop-filter: blur(32px) saturate(100%);
        border: 0;
        border-radius: 0;
    }

    p {
        margin: 0;
        padding-bottom: 0.5em;
    }

    .footer-container {
        display: flex;
        justify-content: space-between;
        margin: auto;
        height: 100% - 3em;
        width: calc(100% - 49vw);

        @media (max-width: 480px) {
            width: 60%;
        }
    }

    .footer-column {
        display: flex;
        flex-direction: column;
        gap: 0.3em;
        padding-top: 3em;
        width: fit-content;

        @media (max-width: 1024px) {
            padding-top: 2.5em;
        }
    }

    .colophon {
        img {
            width: 1em;
            height: 1em;
            filter: drop-shadow(0 0 0.15rem var(--accent-color1)) drop-shadow(0 0 0.1rem var(--accent-color2));
            color: white;
        }

        p {
            text-align: center;
            padding-bottom: 0;
        }
    }

    .colophon-section {
        display: flex;
        gap: 1em;
        align-items: center;
    }

    .background {
        width: 100%;
        background: linear-gradient(110deg, rgba(59,81,223,1) 0%, rgba(86,51,215,1) 9%, rgba(21,138,183,1) 65%, rgba(8,149,177,1) 72%, rgba(43,175,201,1) 80%);        height: 3em;
        position: absolute;
        height: 3.5em;
        opacity: 0.2;
        height: 100%;
        pointer-events: none;
    }

    .mobile-trademark {
        opacity: 0.5;
        margin-bottom: -1em;
        margin-top: 0;
        text-align: center;
        padding-top: 1em;
        font-size: 0.9em;
    }

</style>

<footer class='glass'>
    <div class="background"></div>
    <h3 class='hide-on-desktop mobile-trademark'> © 2025 Igor Kovacevic. <color style='font-weight: 300;'>❄</color> </h3>
    <div class='footer-container'>
        <div class='footer-column colophon hide-on-mobile'> 
            <h3> © 2025 Igor Kovacevic. <color style='font-weight: 300;'>❄</color> </h3>
            <div class="colophon-section">
                <img src="\svelte_logo.png" alt="">
                <p> Made with SvelteKit. </p>
            </div>
            <div class="colophon-section">
                <img src="\github_icon.png" alt="">
                <p> Versioned with Github. </p>
            </div>
            <div class="colophon-section">
                <img src="\vercel_icon.png" alt="">
                <p> Launched with Vercel. </p>
            </div>
        </div>
        <div class='footer-column'> 
            <h3> Elsewhere </h3> 
            <a href='https://github.com/RazerHS' target='_blank'> GitHub </a>
            <a href='/Igi_CV.pdf' target="_blank"> CV </a>
            <a href='https://razerhs.itch.io' target='_blank'> Itch.io </a>
            <a href='https://www.linkedin.com/in/igor-kovacevic-04b931239/' target='_blank'> LinkedIn </a>
        </div>
        <div class='footer-column'> 
            <h3> Contact </h3> 
            <a href='mailto:igor.kovacevic550@gmail.com'> Email </a>
        </div>
    </div>
</footer>