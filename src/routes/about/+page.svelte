<script>
    import "$lib/styles/app.scss";
    import Header from '$lib/components/generic/Header.svelte';
    import Footer from '$lib/components/generic/Footer.svelte';
    import Backdrop from '$lib/components/generic/Backdrop.svelte';
    import TimelineElement from "$lib/components/generic/TimelineElement.svelte";
    import ContactButton from "$lib/components/generic/ContactButton.svelte";
    import { onMount } from "svelte";

    export let data;

    onMount(() => {
        console.log(data);
    });

</script>

<style lang='scss'>
    .backdrop {
        width: 100%;
        height: 100%;
        overflow: hidden;
        backdrop-filter: blur(32px) saturate(100%);
        margin-top: -80px;
        padding-top: 96px;
    }

    section {
        padding: 0 var(--spacing-m);

        .lore-container {
            width: min(50%, 1000px);    
        }

        > * {
            max-width: 1344px;
            margin: auto;

            @media (max-width: 1256px) {
                width: 60% !important;
            }

            @media (max-width: 768px) {
                width: 100% !important;
            }
        }
    }

    .hero-grid {
        width: min(1344px, 100%);    
        opacity: 0;
        animation: loadIn 1s 0.2s forwards;
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: var(--spacing-2xl);
        justify-items: center;

        @media (max-width: 1256px) {
            width: 60%;
            grid-template-columns: 1fr;
            gap: var(--spacing-m);
        }

        @media (max-width: 768px) {
            width: 100%;
        }
    }

    .hero-text-container {
        p {
            margin-top: 0;
        }
    }

    .igi-container {
        aspect-ratio: 1 / 1;

        img {
            height: 100%;
            width: 100%;
            object-fit: cover;
        }

        @media (max-width: 1256px) {
            gap: var(--spacing-xl);
        }
    }

    .contact-container {
        display: grid;
        grid-template-columns: repeat(3, 0.1fr);
        width: 100%;
        gap: var(--spacing-s);
        min-height: 50px;
        
        @media (max-width: 1256px) {
            justify-content: center;
        }
    }
   
    .divider {
        overflow: hidden;
        width: 160px;
        height: var(--divider-height);
        margin: auto;
        background-color: white;
        border-radius: var(--border-radius);
        animation: textGlow 5s infinite, loadIn 0.4s ease-in-out forwards;
    }

    img {
        border-radius: 20px;
        box-shadow: 0 0 10px 0.1px rgb(105, 105, 105);
        width: 100%;
    }

    h1 {
        text-align: center;
        transform: translateY(-5px);
        animation: textGlow 5s infinite ease-in-out alternate, visibleLoadIn 0.8s 0.1s forwards;
    }

    h2 {
        opacity: 0;
        animation: textGlow 5s infinite ease-in-out alternate, loadIn 1s 0.5s forwards;
    }

    .timeline-container {
        padding: 0 var(--spacing-m);
        margin: auto;
        max-width: 1344px;    
        position: relative;
    }
    
    .timeline-labels {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: var(--spacing-xl) 1fr;
        width: 100%;
        height: 99%;
        position: absolute;
        top: -96px;
    }

    .timeline-label-year {
        height: 100%;
        width: 10px;
        border-left: 1px solid rgba(255, 255, 255, .8);
        border-left-style: dashed;

        p {
            padding-left: var(--spacing-2xs);
            margin-top: var(--spacing-3xs);
        }
    }

    .timeline {
        width: 100%;
        margin: auto;
        display: grid;
        grid-template-columns: repeat(40, 1fr);
        gap: var(--spacing-xs);
        opacity: 0;
        animation: loadIn 1s 0.5s forwards;

        @media (max-width: 1031px) {
            grid-template-columns: none;
            grid-template-rows: repeat(5, auto);
        }
    }

    .images-container {
        display: flex;        
        flex-wrap: wrap;
        justify-content: center;
        gap: var(--spacing-s);

        img {
            max-width: 350px;
            object-fit: cover;
            border-radius: var(--border-radius);
            box-shadow: 0 0 10px 0.1px rgb(105, 105, 105);
            flex: 0 1 150px;
        }
    }

    .post-end-divider {
        width: 10%;
        margin: auto;
        background-color: white;
        height: var(--divider-height);
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
    <div class="spacing-2xl"></div>
    <section>
        <div class="hero-grid">
            <div class="igi-container">
                <img src="/igor.jpg" alt="">
            </div>
            <div class="hero-text-container">
                <p>I’m a Serbian game developer based in Groningen, Netherlands. </p>
                <p>During my studies, I made all kinds of games and prototypes, eventually leading me to discover a painterly interest in <color class='color1'>tools</color>. I grew to love synthesizing workflows and using my creativity to sharpen the work of my team. Along the way, I found that the journey of creation and learning are just as significant as any final product.</p>
                <p>I am currently looking for <color class='color2'>new opportunities</color>, so if you like what I do, let’s chat!</p>
                <div class="spacing-xs"></div>
                <div class='contact-container'>
                    <ContactButton src='/linkedin_icon.png' alt='LinkedIn' link='https://www.linkedin.com/in/igor-kovacevic-04b931239/' text='LinkedIn' fadeInDelay=0.7/>
                    <ContactButton src='/email_icon.png' alt='Email' link='mailto:igor.kovacevic550@gmail.com' text='Email' fadeInDelay=0.8/>
                    <ContactButton src='/cv_icon.png' alt='CV' link='/CV - Igor Kovacevic.pdf' text='CV' fadeInDelay=0.9/>
                </div>
            </div>
        </div>
    </section>
    <div class="spacing-3xl hide-on-mobile"></div>
    <div class="spacing-xl hide-on-desktop"></div>
    <div class="timeline-container">
        <div class="timeline-labels hide-on-mobile">
            <p>2022</p>
            <p>2023</p>
            <p>2024</p>
            <p>2025</p>
            <div class="timeline-label-year"></div>
            <div class="timeline-label-year"></div>
            <div class="timeline-label-year"></div>
            <div class="timeline-label-year"></div>
        </div>
        <div class="timeline">
            <TimelineElement title='Game Design' role ='Student' startDate='Sep &#39;20' duration='4 years' logo='/unsealed_logo.png' rowSpan="1 / 1" columnSpan="1 / 28" />
            <TimelineElement title='Unsealed Studios' role ='Lead Programmer' startDate='Sep &#39;22' duration='1 year' logo='/unsealed_logo.png' rowSpan="2 / 2" columnSpan="7 / 20" />
            <TimelineElement title='Linx Interactive' role ='Programming Intern' startDate='Feb &#39;23' duration='6 months' logo='/linx_logo.png' rowSpan="3 / 3" columnSpan="12 / 19" />
            <TimelineElement title='Linx Interactive' role ='Graduation Intern' startDate='Feb &#39;24' duration='6 months' logo='/linx_logo.png' rowSpan="4 / 4" columnSpan="23 / 30" />
            <TimelineElement title='Ripe Render' role ='Tools & Systems Programmer' startDate='April &#39;24' duration='Present' current=true  logo='/teeko_logo.png' rowSpan="5 / 5" columnSpan="24 / 40" />
        </div>
        <div class="spacing-xl hide-on-mobile"></div>
        <div class="spacing-l"></div>
        <div class="divider"></div>
    </div>
    <section>
        <div class="lore-container">
            <h2>Lore</h2>
            <div class="text-container">
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
    </section>
     
    <div class="spacing-l"></div>
    <div class="post-end-divider"></div> 
    <div class="spacing-l"></div>
</div>


<Footer />

