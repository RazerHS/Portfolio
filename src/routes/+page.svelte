<script>
    import Header from '$lib/components/generic/Header.svelte';
    import Footer from '$lib/components/generic/Footer.svelte';
    import Hero from '$lib/components/home/Hero.svelte';
    import Project from '$lib/components/home/Project.svelte';
    import Backdrop from '$lib/components/generic/Backdrop.svelte';

     const projects = [
        {
            name: 'Teeko',
            tools: ['Unity', 'Odin'],
            tags: [],
            description: 'Platformer meets tower defense in this story-rich game inspired by the Costa Rican <i>Día de Las Mascaradas</i> festival. <br> <br> <div class=\'description-divider\'></div> Built a custom <b>node-based dialogue tool</b> using Unity’s experimental Graph API featuring in-editor text animation previews, fast iteration, and source control compatibility. ',
            featuredImageSrc: 'posts/Teeko/teeko_featured.png'
        },
        {
            name: 'Polished Trust',
            tools: ['Unity', 'Odin'],
            tags: [],
            description: 'A <strong>social</strong> co-op roguelike deckbuilder about cleaning a luxury hotel created to card games more accessible to newer players. <br> <br> <div class=\'description-divider\'></div> Integrated a state machine-based multiplayer workflow for <strong>networked</strong> co-op play using Photon Fusion 2 and a dynamic card effect system to iterate and balance cards while in play mode.',
            featuredImageSrc: 'posts/PT/polished_trust_featured.jpg'
        },
       
        {
            name: 'Grigorostok',
            tools: ['Unity', 'Odin'],
            tags: [],
            description: 'A futuristic murder-mystery game about the digitization of data. <br> <br> <div class=\'description-divider\'></div> Developed all aspects of gameplay, including dynamic weather, a tool to automate art iteration for level assets, and a layered interaction system to support non-linear storytelling.', 
            featuredImageSrc: 'posts/Grigorostok/grigorostok_featured.png'
        },
    ]
</script>

<style lang='scss'>
    .project-container {
        display: grid;
        justify-content: center;  
        grid-template-columns: repeat(2, minmax(1em, 1fr));
        column-gap: var(--spacing-s);
        row-gap: var(--spacing-s); 
        margin: var(--spacing-l) auto var(--spacing-l) auto;
        width: 60%;
        max-width: 1500px;

        @media (max-width: 768px) {
            grid-template-columns: repeat(1, minmax(1em, 1fr));
            width: 90%;
        margin: var(--spacing-m) auto var(--spacing-m) auto;
        }

        @media (min-width: 768px) and (max-width: 1024px) {
            width: 90%;
        margin: var(--spacing-m) auto var(--spacing-m) auto;
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




