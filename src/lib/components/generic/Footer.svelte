<script>
    
</script>

<style>

    @media (max-width: 768px) {
        .footer-container {
            max-width: 60%;
            min-width: 60%;
        }
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        .footer-container {
            max-width: 50%;
            min-width: 50%;
        }
    }

    @media (min-width: 1025px) {
        .footer-container {
            max-width: 40%;
            min-width: 40%;
        }
    }

    footer {
        width: 100%;
        height: 20em;
        font-family: Lexend;
        box-shadow: 0 0 10px 0.1px rgb(142, 142, 142) inset;
        backdrop-filter: blur(32px) saturate(100%);
        border: 0;
    }

    .footer-container {
        display: flex;
        justify-content: space-between;
        margin: auto;
        width: 40%;
        height: 100%;
    }

    .footer-column {
        display: flex;
        flex-direction: column;
        gap: 0.3em;
        padding-top: 3em;
        width: fit-content;
    }

</style>

<footer class='glass'>
    <div class='footer-container'>
        <div class='footer-column hide-on-mobile'> 
            <h3> Igi Inc. @2024</h3> 
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