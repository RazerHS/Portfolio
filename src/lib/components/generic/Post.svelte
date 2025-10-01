<script>
    import Header from '$lib/components/generic/Header.svelte';
    import Footer from '$lib/components/generic/Footer.svelte';
    import Backdrop from '$lib/components/generic/Backdrop.svelte';
    import ContactButton from '$lib/components/generic/ContactButton.svelte';
    import { onMount, onDestroy } from 'svelte';
    import hljs from 'highlight.js';
    import 'highlight.js/styles/atom-one-dark.css';

    let {title, description, featuredImageSrc, timeline, role, tools, githubUrl} = $props();
    let {content} = $state('');

    let observer;
    let interval = null;
    let contentContainer;

    async function fetchContent() {
        const response = await fetch(`/posts/${title.toLowerCase().replace(' ', '_')}_content.html`);
        content = await response.text();
    }

    function addCollapsableListeners() {
        let collapsables = document.getElementsByClassName("collapsable");

        for (let i = 0; i < collapsables.length; i++) {
            collapsables[i].removeEventListener("click", toggleCollapsable);
            collapsables[i].addEventListener("click", toggleCollapsable);
        }
    }

    function toggleCollapsable(event) {
        let collapsable = event.currentTarget;
        let content = collapsable.nextElementSibling;

        collapsable.classList.toggle("active");
        content.classList.toggle("collapsable-hidden");

       highlightCodeBlocks(content);

        let maxHeight = content.scrollHeight + "px";

        content.style.maxHeight = content.style.maxHeight ? null : maxHeight;
    }

    function highlightCodeBlocks(content) {
        let codeBlocks = content.getElementsByTagName("code");

        Array.from(codeBlocks).forEach((block) => {
            if (block.dataset.highlighted) {
                return;
            }

            hljs.highlightElement(block);
            block.dataset.highlighted = true;
        });
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
        .content {

            @media (max-width: 768px) {
                padding: 0;
            }

            img, video {
                display: flex;
                justify-content: center;
                border-radius: var(--border-radius);
                box-shadow: var(--image-box-shadow);
                margin: auto;    
                max-width: 100%;
                min-width: 100%;
            }

            h3 {
                animation: textGlow 5s infinite ease-in-out alternate;
            }

            h2 {
                animation: textGlow 4s infinite ease-in-out alternate;
            }

            ul {
                font-family: Lexend;
                font-weight: 350;
                line-height: 1.3;
                margin-left: auto;
                margin-right: auto;
                list-style-type: lower-greek;
                list-style-position: inside;
                gap: 1em;

                @media (min-width: 768px) and (max-width: 1024px) {
                    font-size: 1.7em;
                    width: 90%;
                }

                @media (max-width: 768px) {
                    font-size: 1em;
                    width: 90%;
                }
            }

            li::marker {
                font-weight: 500;
                line-height: 1.3;
                color: var(--color-secondary);
                animation: textGlow 3s ease-in-out infinite alternate;
            }

            .code-snippet {
                box-sizing: border-box;
                margin: auto;
                max-width: 90dvw;
                overflow: auto;

                @media (max-width: 768px) {
                    max-width: 80dvw;
                }

                @media (max-width: 620px) {
                    max-width: 65dvw;
                }
            }

            pre {
                box-sizing: border-box;
            }

            code {
                border-radius: 10px;
                background-color: hsl(200, 20%, 10%);
                border: 3px solid var(--color-primary-20);
            }         

            .collapsable-end-divider {
                width: 25%;
                margin: var(--spacing-l) auto;
                background-color: white;
                height: var(--divider-height);
            }

             .post-end-divider {
                width: 10%;
                margin: var(--spacing-l) auto 0 auto;
                background-color: white;
                height: var(--divider-height);
            }

            color.color1 {
                color: var(--color-secondary);
                animation: textGlow 3s ease-in-out infinite alternate;
            }

            color.color2 {
                color: var(--color-accent);
                animation: textGlow 4s ease-in-out infinite alternate;
            }

            color.color3 {
                color: var(--color-primary);
                animation: textGlow 5s ease-in-out infinite alternate;
            }

            .collapsable {
                display: flex;
                cursor: pointer;
                justify-content: center;
                align-items: center;
                height: calc(var(--spacing-2xl) * 1.25);
                width: 100%;
                border-top-left-radius: var(--border-radius);
                border-top-right-radius: var(--border-radius);
                box-shadow: var(--image-box-shadow);
                transition: border-radius 0.5s ease-in-out, box-shadow 0.2s ease-in-out, width 1s ease-in-out;
                margin: 0 auto 0 auto;
                border: 0;
                padding: 0 var(--spacing-m)
            }

            .collapsable::before {
                content: '➯';
                animation: textGlow 4s ease-in-out infinite alternate;
                padding-right: 0.4em;
                font-size: 1.5em;
                transition: all 0.2s;
            }

            .collapsable:hover {
                @media (min-width: 1024px) {
                    transition: border-radius 0.5s ease-in-out, box-shadow 0.1s, width 0.1s ease-in-out;
                    box-shadow: 0 0 10px 0.1px var(--color-secondary) inset;
                }
            }

            .collapsable.active::before {
                transition: all 0.2s;
                transform: translateX(0.2em);
                rotate: 90deg;
            }

            .collapsable.active:hover {
                transition: box-shadow 0.1s ease-in-out, width 0.1s ease-in-out;
                box-shadow: 0 0 10px 0.1px var(--color-accent) inset;
            }

            .collapsable.active {
                border-bottom-left-radius: 0;
                border-bottom-right-radius: 0;
                box-shadow: 0 0 10px 0.1px rgb(174, 172, 172) inset;
                transition: box-shadow 0.3s ease-in-out, width 0.1s ease-in-out;
                width: 100%;
            }

            .collapsable-content {
                overflow: hidden;
                border-radius: 20px;
                border: 0;
                box-shadow: 0 0 10px 0.1px rgb(66, 66, 66) inset;
                border-top-left-radius: 0;
                border-top-right-radius: 0;
                opacity: 1;
                transition: opacity 0.3s ease-out;
                padding: 0 var(--spacing-m);

                img {
                    width: 90% !important;
                    margin: 1.5em auto !important;
                }
            }    

            .collapsable-hidden {
                opacity: 0;
                max-height: 0;
                transition: max-height 0.3s ease-out, opacity 0.3s ease-out;
            }

            .trailer 
            {
                iframe {
                    width: 100%;
                    height: 500px;
                }
            }

            .steam-widget-container {
                display: grid;
                grid-template-columns: 1fr 1fr;
                place-items: center;
                width: 100%;
                row-gap: var(--spacing-l);

                img {
                    box-shadow: none;
                    min-width: 60%;
                    max-width: 60%;
                }

                p {
                    text-align: center;
                }

                @media (max-width: 750px) {
                    grid-template-columns: 1fr;
                }

                .wishlist-button {
                    width: 200px;
                    display: grid;
                    place-items: center;
                    grid-template-columns: 1fr 0.75fr;
                }
            }
        }
    }

    .post-container {
        width: 100%;
        height: 100%;
        margin: auto;
        backdrop-filter: blur(64px) saturate(100%);
        overflow: hidden;
        margin-top: -80px;
        padding-top: 96px;
    }

    .content-container {
        display: flex;
        justify-content: center;
        margin: auto;
        padding: 0 calc(var(--spacing-3xl) * 2);
        max-width: 780px;
        min-width: 0;

        @media (max-width: 1024px) {
            padding: 0 var(--spacing-m);
        }

        @media (max-width: 768px) {
            max-width: 100%;
            min-width: fit-content;
            padding: 0 var(--spacing-m);
        }
    }
    
    .hero-container {
        margin: auto;
        row-gap: var(--spacing-s);
        column-gap: var(--spacing-xl);
        justify-content: center;
        display: grid;
        grid-template-areas: 
            "col1 col2"
            "col1-2 col1-2";

        @media (max-width: 1345px) {
            grid-template-areas: 
            "col1 col1"
            "col2 col1-2";
            padding: 0 calc(var(--spacing-3xl) * 2);
        }

        @media (max-width: 768px) {
            grid-template-areas: 
            "col1"
            "col2"
            "col1-2";
        }

        > .featured-image {
            grid-area: col1;
            }

        > .post-meta {
            grid-area: col2;
        }

        > .project-details {
            grid-area: col1-2;
        }

        @media (min-width: 1921px) {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-areas: 
                "col1 col2"
                "col1-2 col1-2";
            max-width: 1200px;
        }

        @media (max-width: 1024px) {
            padding: 0 var(--spacing-m);
        }

        @media (max-width: 768px) {
            padding: 0 var(--spacing-m);
        }

        .featured-image {
            display: flex;
            justify-content: center;
            aspect-ratio: 16/9;
            width: 900px;
            border-radius: 10px;
            box-shadow: 0 0 10px 0.1px rgb(105, 105, 105);
            opacity: 0; 
            animation: loadIn 1s 0.3s forwards;

            @media (max-width: 1024px) {
                max-width: 100%;
            }
        }

        .project-details {
            max-width: 944px;
            min-width: 400px;
            margin: auto;
            height: 100%;

            @media (max-width: 768px) {
                max-width: 100%;
                min-width: fit-content;
            }
        }
    }

    .post-meta {
        color: hsl(0, 0%, 80%);
        display: flex;
        flex-direction: column;
        gap: var(--spacing-s);
        opacity: 0;
        animation: loadIn 1s 0.2s forwards;

        @media (min-width: 1920px) {
            flex: 0 0 30%;
        }

        h3, p {
            margin-top: var(--spacing-xs);
            margin-bottom: var(--spacing-xs);
        }
    }

    .post-meta-category {
        min-width: 300px;
        position: relative;

        p {
            color: hsl(0, 0%, 60%);
        }
    }

    h1 {
        font: var(--h1);
        color: var(--color-text);
        transform: translateY(var(--load-in-y-offset));
        text-align: center;
        animation: textGlow 5s infinite ease-in-out alternate, visibleLoadIn 0.8s 0.1s forwards;
    }
    
    .tools-container {
        display: flex;
        flex-grow: 1;
        align-items: center; 
        column-gap: 0.25em;
        height: 4em;
        margin-top: -0.5em;

        @media (min-width: 768px) and (max-width: 1024px) {
            margin-top: 0;
            height: 2em;
        }

        @media (max-width: 768px) {
            margin-top: 0;

            height: 2.25em;
        }
    }

    .tool-img {
        overflow: hidden;
        max-height: 3em;
        max-width: 100%;
        margin: 0;
        width: auto;
        height: auto;

        @media (min-width: 768px) and (max-width: 1024px) {
            max-height: 2.5em;
        }

        @media (max-width: 768px) {
            max-height: 2.25em;
        }
    }
   
    .post-start-divider {
        width: 10%;
        margin: var(--spacing-l) auto 0 auto;
        background-color: white;
        height: var(--divider-height);
    }
</style>

<Header />

<div class='post-container'>
    <h1>{title}</h1>
    <div class="hero-container">
        <img src="{featuredImageSrc}" alt="Featured" class='featured-image'>
        <div class='post-meta'>
            <div class='post-meta-category'>
                <h3>Timeline</h3>
                <p class='post-meta-content-text'>{timeline}</p>
            </div>
            <div class='post-meta-category'>
                <h3>Role</h3>
                <p class='post-meta-content-text'>{role}</p>
            </div>
            <div class="post-meta-category">
                <h3>Created Using:</h3>
                <div class="tools-container">
                    {#each tools as tool}
                        <img class='tool-img' src={tool.toLowerCase() + "_icon.png"} alt="tool">
                    {/each}
                </div>
            </div>
        </div>
        <div class="project-details">
            <p>{@html description}</p>
        </div>
    </div>
    <div class="post-start-divider"></div>
    <div class="spacing-m"></div>
    <div class='content-container'>
        <div bind:this={contentContainer}>
            <article>{@html content}</article>
        </div>
    </div>
    <div class="spacing-m"></div>
</div>

<Backdrop />
<Footer />