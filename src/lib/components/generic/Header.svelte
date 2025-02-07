<script>
    let mobileNavActive = $state(false);
    let hamburgerIcon = $state('☰');

    function onHamburgerClicked() {
        mobileNavActive = !mobileNavActive;
        hamburgerIcon = mobileNavActive ? '☓' : '☰';
    }

</script>

<style lang='scss'>
    header {
        top: 0;
        position: sticky;
        margin-left: auto;
        margin-right: auto;
        height: 1vh;
        padding-top: 1em;
        z-index: 10;
        overflow-x: clip;

        @media (min-width: 1024px) {
            height: 1.5em;
        }
    }

    .nav-desktop {
        display: flex;
        justify-content: space-around;
        margin: auto;
        gap: 1em;
        font-size: 2vh;
        padding: 1em 2em;
        font-family: 'Lexend';
        border-radius: 10px;
        width: fit-content;
        min-width: 10em;
        box-shadow: 0 0 10px 0.1px rgb(142, 142, 142) inset;
        backdrop-filter: blur(32px) saturate(100%);
    }

    nav {
        display: flex;
        height: 100%;
    }

    a {
        overflow: hidden;
        color: white;
    }

    button {
        background-color: transparent;
        border-color: transparent;
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

    .hamburger {
        display: flex;
        position: sticky;
        top: 0;
        overflow: auto;
        justify-content: flex-end;
        color: white;
        text-shadow: 0 0 10px white;
        margin-right: 1em;
        
        button {
            box-shadow: 0 0 10px 0.1px rgb(142, 142, 142) inset;
            backdrop-filter: blur(32px) saturate(100%);
            padding: 1em;
            border-radius: 10px;
        }
    }

    .nav-mobile {
        width: 55vw;
        right: 0;
        top: 0;
        height: fit-content;
        position: absolute;
        border-radius: 20px;
        overflow: hidden;

        nav {
            padding: 1em 0 1em 1em;
            color: white;
            display: flex;
            flex-direction: column;
            gap: 1em;
            height: 100%;
            width: 100%;
            font-size: 1.3em;
            font-family: Lexend;
        }
    }

    .nav-mobile-bg {
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0.3;
        background: linear-gradient(110deg, rgba(59,81,223,1) 0%, rgba(86,51,215,1) 9%, rgba(21,138,183,1) 65%, rgba(8,149,177,1) 72%, rgba(43,175,201,1) 80%);
        box-shadow: 0 0 10px 0.1px rgb(142, 142, 142);
        z-index: -1;
        overflow: hidden;
    }

    .mobile-menu-active {
        transform: translateX(10%);
        transition: all 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
        content: '☰';
        overflow: hidden;
    }

    .mobile-menu-hidden {
        transform: translateX(100%);
        transition: all 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
        content: '☓';
        overflow: hidden;
    }

</style>

<div class="background"></div>
<header>
    <div class='nav-mobile glass {mobileNavActive ? "mobile-menu-active" : "mobile-menu-hidden"}'>
        <div class="nav-mobile-bg"></div>   
        <nav>
            <a href='/'>Work</a>
            <a href=''>About</a>
            <a>Play</a>
        </nav>
    </div>   
    <nav class='nav-desktop hide-on-mobile'>
        <a href='/'>Work</a>
        <a href=''>About</a>
        <a>Play</a>
    </nav>
    <div class="hamburger hide-on-desktop">
        <button onclick={onHamburgerClicked}>{hamburgerIcon}</button>
    </div>
</header>

