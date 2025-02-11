<script>
    import "$lib/styles/style.scss";
    import Header from '$lib/components/generic/Header.svelte';
    import Footer from '$lib/components/generic/Footer.svelte';
    import Backdrop from '$lib/components/generic/Backdrop.svelte';
    import TimelineElement from "$lib/components/generic/TimelineElement.svelte";
    import ContactButton from "$lib/components/generic/ContactButton.svelte";
</script>

<style lang='scss'>
    .backdrop {
        width: 100%;
        height: 100%;
        overflow: hidden;
        backdrop-filter: blur(32px) saturate(100%);
        margin-top: -4.9em;
        padding-top: 6em;
    }

    p {
        color: white;
        font-family: Lexend;
        font-size: 1.4em;

        @media (max-width: 1024px) {
            font-size: 1.3em;
        }

        @media (max-width: 768px) {
            font-size: 1.1em;
        }
    }

    .hero-container {
        display: flex;
        justify-content: space-evenly;
        width: 100%;
        opacity: 0;
        animation: loadIn 1s 0.2s forwards;

        @media (max-width: 1024px) and (min-width: 768px) {
            flex-direction: column;
            align-items: center;
        }

        @media (max-width: 768px) {
            flex-direction: column;
            align-items: center;
        }
    }

    .main-text-container {
        color: white;
        font-family: Lexend;
        width: 50%;
        margin: 1em 2em;

        @media (min-width: 768px) and (max-width: 1024px) 
        {
            font-size: 1.7em;
            width: 90%;
        }

        @media (max-width: 768px) {
            font-size: 1em;
            width: 90%;
        }
    }

    .igi-container {
        width: 30em;
        height: 30em;
        display: flex;
        justify-content: center;
        
        img {
            height: 100%;
            width: 100%;
            object-fit: cover;
        }

        @media (max-width: 1024px) and (min-width: 768px) {
            width: 90vw;
            height: 100vh;
            margin: 0;
        }

        @media (max-width: 1024px) and (min-width: 768px) and (max-height: 800px) {
            height: 60em;
        }

        @media (max-width: 768px) {
            width: 90vw;
            height: 30em;
            margin: 0;
        }

        @media (max-device-width: 1024px) and (orientation: landscape) {
            width: 90vw;
            height: 40em;
            margin: 0;
        }
    }

    .content {
        width: 50%;
        margin: auto;

        @media (max-width: 1024px) {
            width: 90%;
        }

        @media (max-width: 768px) {
            width: 90%;
        }
    }
   
    .divider {
        overflow: hidden;
        width: 10em;
        height: 0.2em;
        background-color: white;
        border-radius: 10px;
        margin: 5em auto;
        animation: textGlow 5s infinite, loadIn 0.4s ease-in-out forwards;

        @media (max-width: 1024px) {
            margin-top: 0.5em;
            margin-bottom: 3em;
        }
    }

    img {
        border-radius: 20px;
        box-shadow: 0 0 10px 0.1px rgb(105, 105, 105);
        width: 100%;
    }

    h1 {
        text-align: center;
        color: white;
        font-family: 'Londrina Solid';
        font-size: 5em;
        transform: translateY(-5px);
        animation: textGlow 5s infinite ease-in-out alternate, visibleLoadIn 0.8s 0.1s forwards;

        @media (min-width: 768px) and (max-width: 1024px) {
            font-size: 7em;
            margin-bottom: 0.5em;
        }

        @media (max-width: 768px) {
            font-size: 3.5em;
            margin-bottom: 0.5em;
        }
    }

    h3 {
        color: white;
        font-family: 'Londrina Solid';
        font-size: 3em;
        animation: textGlow 5s infinite ease-in-out alternate;
        text-decoration: underline;
        padding-left: 0.1em;
        margin-bottom: 0.5em;

        @media (max-width: 768px) {
            margin-top: 0.75em;
        }
    }

    .timeline {
        display: flex;
        flex-direction: column;
        justify-content: center;
        opacity: 0;
        gap: 2em;
        animation: loadIn 1s 0.5s forwards;
        margin-bottom: 4em;
    }

    .contact-container {
        display: flex;
        gap: 1em;
        font-size: 1.3em;
        margin-top: 2em;

        @media (max-width: 768px) {
            justify-content: center;
        }
    }

    .images-container {
        display: flex;
        justify-content: space-evenly;

        img {
            width: 44%;
            object-fit: cover;
            border-radius: 20px;
            box-shadow: 0 0 10px 0.1px rgb(105, 105, 105);
        }

        @media (max-width: 768px) {
            flex-direction: column;
            align-items: center;

            img {
                width: 90%;
                margin-bottom: 1em;
            }
        }
    }

    .post-end-divider {
        width: 10%;
        margin: 4em auto 3em auto;
        background-color: white;
        height: 0.1em;

        @media (max-width: 768px) {
            margin-top: 2em;
            
        }
    }

    figure {
        position: relative;
        font-family: Lexend;
        width: 100%;
        margin: 0;

        span {
            position: absolute;
            background-color: white;
            opacity: 0;
            transition: opacity 0.5s;
        }
    }
    
    figure:hover {
        span {
            opacity: 1;
            transition: opacity 0.5s;
        }
    }

</style>

<Header />
<Backdrop />

<div class='backdrop'>
    <h1>I’m Igor. </h1>
    <div class="divider"></div>
    <div class="hero-container">
        <div class="igi-container">
            <img src="/igor.jpg" alt="">
        </div>
        <div class="main-text-container">
            <p>I’m a Serbian game developer based in Groningen, Netherlands. </p>
            <p>During my studies, I made all kinds of games and prototypes, eventually leading me to discover a painterly interest in <color class='color1'>tools</color>. I grew to love synthesizing workflows and using my creativity to sharpen the work of my team. Along the way, I found that the journey of creation and learning are just as significant as any final product.</p>
            <p>I am currently looking for <color class='color2'>new opportunities</color>, so if you like what I do, let’s chat!</p>
            <div class='contact-container'>
                <ContactButton src='/linkedin_icon.png' alt='LinkedIn' link='https://www.linkedin.com/in/igor-kovacevic-04b931239/' text='LinkedIn' fadeInDelay=0.7/>
                <ContactButton src='/email_icon.png' alt='Email' link='mailto:igor.kovacevic550@gmail.com' text='Email' fadeInDelay=0.8/>
                <ContactButton src='/cv_icon.png' alt='CV' link='/Igi_CV.pdf' text='CV' fadeInDelay=0.9/>
            </div>
        </div>
    </div>
    <div class="content">
        <div class="timeline">
            <h3>Experience</h3>
            <TimelineElement title='Teeko (Side Project)' role ='Tools & Systems Programmer' startDate='April &#39;24' endDate='Present' sideProject=true  logo='/teeko_logo.png'/>
            <TimelineElement title='Linx Interactive' role ='Graduation Intern' startDate='Feb &#39;24' endDate='July &#39;24' logo='/linx_logo.png'/>
            <TimelineElement title='Linx Interactive' role ='Programming Intern' startDate='Feb &#39;23' endDate='July &#39;23' logo='/linx_logo.png'/>
            <TimelineElement title='Unsealed Studios (Side Project)' role ='Lead Programmer' startDate='Sep &#39;22' endDate='July &#39;23' sideProject=true logo='/unsealed_logo.png'/>
        </div>
        <div class="text-container">
            <h3>Lore</h3>
            <p>As an avid card gamer player for most of my existence - ranging from Dream Quest to hitting #1 on Hearthstone’s Europe leaderboards - game development has always lived in my heart rent-free. Years later, there is nothing more <color class='color2'>fulfilling</color> than using that inspiration to build my own card games and give back to a community I love.</p>
            <figure>
                <span>Peter Whalen's Dream Quest</span>
                <img src="/dream_quest.jpg" alt="Dream Quest">
            </figure>
            <p>Outside work, you’ll find me bouncing on the volleyball court or <color class='color1'>cheerfully</color> yapping with friends. At home, I also spend a healthy chunk of time practicing music (drums, singing, guitar), and one of these days I hope to record and mix a song worthwhile for humans to bear. </p>
        </div>
        <div class="images-container">
            <img src="/lmn.jpeg" alt="Music">
            <img src="/volleyball.jpeg" alt="Volleyball">
        </div>
    </div>

    <div class="post-end-divider"></div>      
</div>


<Footer />

