<script>
    import Header from '$lib/components/generic/Header.svelte';
    import Footer from '$lib/components/generic/Footer.svelte';
    import About from '$lib/components/home/About.svelte';
    import Project from '$lib/components/home/Project.svelte';
    import Backdrop from '$lib/components/generic/Backdrop.svelte';

    const projects = [
        {
            name: 'Befiend',
            tools: ['Unity', 'FMOD', 'Odin'],
            tags: ['Pitching', 'Tools', 'Gameplay', 'Systems'],
        },
        {
            name: 'Teeko',
            tools: ['Unity', 'Odin'],
            tags: ['Pitching', 'Tools', 'Gameplay', 'Systems'],
        },
        {
            name: 'Polished Trust',
            tools: ['Unity', 'PUN2', 'Odin'],
            tags: ['Pitching', 'Tools', 'Gameplay', 'Systems'],
        },
        {
            name: 'Grigorostok',
            tools: ['Unity', 'FMOD', 'Odin'],
            tags: ['Pitching', 'Tools', 'Gameplay', 'Systems'],
        },
    ]
</script>

<style>
    .project-container {
        display: grid;
        justify-content: center;  
        grid-template-columns: repeat(2, minmax(1em, 1fr));
        column-gap: 1em;
        row-gap: 1em; 
        margin: auto;
    }

    @media (max-width: 768px) {
        .project-container {
            grid-template-columns: repeat(1, minmax(1em, 1fr));
            width: 90%;
        }
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        .project-container {
            width: 80%;
        }
    }

    @media (min-width: 1025px) {
        .project-container {
            width: 60%;
        }
    }

    .heading-container {
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Londrina Solid';
        color: white;
        font-size: 1.5em;
        text-decoration: underline;
        margin: 0 auto;
        margin-bottom: 1em;
        width: fit-content;
        height: 4em;
        padding: 0 4em;
    }
   
</style>

<Header />
<Backdrop />
<About />

<div class='heading-container glass'>
    <h1>Projects</h1>
</div>
<div class='project-container'> 
    {#each projects as project}
        <Project {...project}/>
    {/each}
</div>

<Footer />




