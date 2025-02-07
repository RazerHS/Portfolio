<script>
    import Header from '$lib/components/generic/Header.svelte';
    import Footer from '$lib/components/generic/Footer.svelte';
    import Hero from '$lib/components/home/Hero.svelte';
    import Project from '$lib/components/home/Project.svelte';
    import Backdrop from '$lib/components/generic/Backdrop.svelte';

     const projects = [
        // {
        //     name: 'Befiend',
        //     tools: ['Unity', 'Odin'],
        //     tags: ['Pitching', 'Tools', 'Gameplay', 'Systems'],
        //     description: 'A single-player roguelike-adventure mix depicted by the twisted fates of two protagonists from different worlds. I worked on the game’s main architecture, most notably creating our turn-based combat system and an effective way to manage data.' 
        // },
        {
            name: 'Teeko',
            tools: ['Unity', 'Odin'],
            tags: ['Tools', 'Systems'],
            description: 'An action-adventure platformer featuring rich storytelling and intense boss battles inspired by the Costa Rican ‘La Mascarada’ celebration. I built a custom node-based dialogue tool to speed up the workflow of narrative designers featuring in-editor text animation previews, fast iteration, and source control compatibility.'
        },
        {
            name: 'Polished Trust',
            tools: ['Unity', 'Odin'],
            tags: ['Tools', 'Gameplay', 'Systems'],
            description: 'A networked roguelike deckbuilder for two players working together to clean a luxury hotel. Built as a graduation project using Photon Fusion 2 with the goal of teaching card game mechanics to new players through social gameplay.' 
        },
        {
            name: 'Grigorostok',
            tools: ['Unity', 'Odin'],
            tags: ['Tools', 'Gameplay', 'Systems'],
            description: 'A futuristic murder mystery detective game in which people’s data is protected through the use of decentralized digital wallets. As a solo programmer, the most memorable features I built consisted of a dynamic weather system with corresponding procedural and custom controls for each day of the plot and an asset importer tool to speed up our art integration and level design workflows.' 
        },
    ]
</script>

<style lang='scss'>
    .project-container {
        display: grid;
        justify-content: center;  
        grid-template-columns: repeat(2, minmax(1em, 1fr));
        column-gap: 1em;
        row-gap: 1em; 
        margin: 3em auto 3em auto;
        width: 60%;

        @media (max-width: 768px) {
            grid-template-columns: repeat(1, minmax(1em, 1fr));
            width: 90%;
            margin-top: 1.5em; 
        }

        @media (min-width: 768px) and (max-width: 1024px) {
            width: 90%;
            margin-top: 1.5em; 
        }

        @media (min-width: 1024px) and (max-width: 1300px) {
            width: 75%;
        }

        @media (max-height: 520px) and (max-width: 1024px) {
            width: 75%;
        }
    }
</style>

<Header />
<Backdrop />
<Hero />

<div class='project-container'> 
    {#each projects as project}
        <Project {...project}/>
    {/each}
</div>

<Footer />




