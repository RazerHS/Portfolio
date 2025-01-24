<style>
    header {
        top: 0;
        position: sticky;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: -3em;
        padding-top: 1em;
        z-index: 10;
    }

    nav {
        display: flex; 
        align-items: center;
        justify-content: center;
        gap: 2em;
        width: fit-content;
        padding: 1em 3em;
        margin: auto;
        font-size: 1.2em;
        height: fit-content;
        font-family: 'Lexend';
        box-shadow: 0;
        border-radius: 10px;
        box-shadow: 0 0 10px 0.1px rgb(142, 142, 142) inset;
        backdrop-filter: blur(32px) saturate(100%);
    }

    a {
        overflow: hidden;
        width: auto;
        color: white;
    }

    .background {
        width: 100%;
        background: linear-gradient(110deg, rgba(59,81,223,1) 0%, rgba(86,51,215,1) 9%, rgba(21,138,183,1) 65%, rgba(8,149,177,1) 72%, rgba(43,175,201,1) 80%);        height: 3em;
        position: absolute;
        height: 3.5em;
        opacity: 0.6;
        filter: blur(32px);
    }

    @media (max-width: 768px) {
        header {
            width: 100%;
        }
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        header {
            width: 50%;
        }
    }

    @media (min-width: 1025px) {
        header {
            width: 30%;
        }
    }

    @keyframes fadeHeader {
        from {
            
        }
        to {
            box-shadow: 0 0 0px 0px rgb(142, 142, 142) inset;
            
        }
    }

</style>

<div class="background"></div>
<header>
    <nav>       
        <a href='/'>Work</a>
        <a>About</a>
        <a>Play</a>
        <a>Blog</a>
    </nav>
</header>