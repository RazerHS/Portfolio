<script> 
    import '$lib/styles/app.scss';
    import { onMount, onDestroy } from 'svelte';

    let {name, tools, tags, description, featuredImageSrc, size} = $props();
    let {content} = $state('');

    let observer;
    let interval = null;
    let contentContainer;

    async function fetchContent() {
        const response = await fetch(`/projects/${name.toLowerCase().replace(' ', '_')}_project.html`);
        content = await response.text();
    }

    onMount(() => {
        fetchContent();

        observer = new MutationObserver(() => {
            addCollapsableListeners();
        });

        if (contentContainer) {
            observer.observe(contentContainer, { childList: true, subtree: true });
        }

        interval = setInterval(() => {
            fetchContent();
        }, 1000); 
    });

    onDestroy(() => {
        if (observer) {
            observer.disconnect();
        }

        clearInterval(interval);
    });

</script>

<style lang="scss">
    :global {
        .description-divider {
            width: 20%;
            height: 0.05em;
            background: rgba(255, 255, 255, 0.15);
            display: flex;
            margin: -0.5em 0 0.5em 0;
        }
    }

    :root {
        --gradient-color: rgb(0, 0, 0);
    }

    .container {
        border-radius: 12px;
        align-items: center;
        transition: all .6s;
        border: 7px solid var(--glass-border-color);
        position: relative;
        height: fit-content;
        transform: translateY(-3px);
        opacity: 0;
        animation: loadIn 0.7s ease-in-out 0.35s forwards;
    }

    .container:hover {
        transition: all .1s;
        box-shadow: 0px 0px 100px 3px rgba(14, 182, 194, 0.4);

        h2 {
            color: var(--color-primary);
            text-decoration-color: var(--color-primary);
            text-underline-offset: 0.1em;
        }
    }

    .img-container {
        height: 25em;
        width: 100%;
        border-top-left-radius: 7px;
        border-top-right-radius: 7px;

        @media (max-width: 480px) {
            height: 20em;
        }
    }

    .content-container {
        padding: 0 1em;
    }  

    .title-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        overflow: hidden;
        padding-top: var(--spacing-2xs);
    }

    .tools-container {
        flex-grow: 1;
        display: flex;
        align-items: center; 
        justify-content: flex-end;
        column-gap: var(--spacing-3xs);

        max-height: 3em;
        width: 100%;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover; 
        object-position: center; 
        border-top-left-radius: 7px;
        border-top-right-radius: 7px;
    }

    .tool-img {
        overflow: hidden;
        width: auto;
        height: auto;
        max-height: 100%;
        max-width: 100%;
        margin: 0;
    }

    h2 {
        margin: 0;
        display: flex;
        align-items: center;
        align-content: center;
        display: block;
        width: 100%;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: var(--color-secondary);
        text-decoration: underline 0.05em rgba(0, 0, 0, 0);
        text-underline-offset: 0.2em;
        transition: all 0.2s ease-out;
        font: var(--h2);

        @media (max-width: 1024px) {
            text-decoration: underline;
        }
    }

    .mobile-link a {
        width: 100%;
        height: 100%;
        z-index: 5;
    }

    .divider {
        width: 10%;
        height: 0.05em;
        background: white;
        margin: 0 0 1em 0;
        display: flex;

        @media (max-width: 768px) {
            margin: 0 0 0.75em 0;
        }
    }

    a {
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
    }
</style>


<div class='container glass' style='grid-columns: span {size};'>
    <a href='{"/" + name.toLowerCase().replace(' ', '_')}' aria-label="project"> </a>    
    <div class='img-container'>
        <img src={featuredImageSrc} alt={name}>
    </div>
    <div class='content-container'>
        <div class ='title-container'>
            <h2> {name} </h2>
            <div class='tools-container'>
                {#each tools as tool}
                    <img class='tool-img' src={tool.toLowerCase() + "_icon.png"} alt=''>
                {/each}
            </div>
        </div>
        <p class='description'> {@html description} </p>
        <div class='tags-container'>
            {#each tags as tag}
                <div class='tag {tag.toLowerCase()}'>
                    <p> {tag}
                </div>
            {/each}
        </div>   
          <div class='content-container'>
        <div bind:this={contentContainer}>
            <article>{@html content}</article>
        </div>
    </div> 
    </div>
</div>
