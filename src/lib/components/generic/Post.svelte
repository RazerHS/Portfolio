<script>
    import Header from '$lib/components/generic/Header.svelte';
    import Footer from '$lib/components/generic/Footer.svelte';
    import Backdrop from '$lib/components/generic/Backdrop.svelte';
    import { onMount, onDestroy } from 'svelte';

    let {title, featuredImageSrc, timeline, role, tools} = $props();
    let {content} = $state('');

    let observer;
    let interval = null;
    let contentContainer;

    async function fetchContent() {
        const response = await fetch(`/posts/${title.toLowerCase().replace(' ', '_')}_content.html`);
        content = await response.text();
    }

    function addCollapsibleListeners() {
        let collapsibles = document.getElementsByClassName("collapsible");

        for (let i = 0; i < collapsibles.length; i++) {
            collapsibles[i].addEventListener("click", function() {
                let content = this.nextElementSibling;
                
                collapsibles[i].classList.toggle("active");
                content.classList.toggle("collapsible-hidden");
                content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + "px";
            });
        }
    }

    onMount(() => {
        fetchContent();

        observer = new MutationObserver(() => {
            addCollapsibleListeners();
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
        .collapsible {
            display: flex;
            margin: auto;
            width: 100%;
            cursor: pointer;
            font-family: 'Londrina Solid';
            font-size: 1.4em;
            justify-content: center;
            align-items: center;
            height: fit-content;
            border-top-left-radius: 20px;
            border-top-right-radius: 20px;
            border: 0;
            box-shadow: 0 0 10px 0.1px rgb(66, 66, 66) inset;
            transition: border-radius 0.5s ease-in-out;
            transition: box-shadow 0.2s ease-in-out;

            @media (max-width: 768px) {
                font-size: 1em;
            }
        }

        .collapsible::before {
            content: '➯';
            padding-right: 0.4em;
            font-size: 1.5em;
            transition: all 0.2s;
        }

        .collapsible:hover {

            @media (min-width: 1024px) {
                transition: box-shadow 0.1s;
                box-shadow: 0 0 12px 0.1px var(--accent-color2) inset;
            }
        }

        .collapsible.active::before {
            transition: all 0.2s;
            transform: translateX(0.2em);
            rotate: 90deg;
        }

        .collapsible.active {
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
            box-shadow: 0 0 10px 0.5px rgb(174, 172, 172) inset;
            transition: box-shadow 0.3s ease-in-out;
        }

        .collapsible-content {
            overflow: hidden;
            max-height: 0;
            transition: max-height 1s ease-out;
            border-radius: 20px;
            padding: 0em 2em 2em 2em;
            border: 0;
            box-shadow: 0 0 10px 0.1px rgb(66, 66, 66) inset;
            margin-bottom: 1em;
            border-top-left-radius: 0;
            border-top-right-radius: 0;

            @media (max-width: 768px) {
                padding: 0;

                img {
                    width: 90% !important;
                    margin: 1.5em auto !important;
                }
            }
        }    

        .collapsible-hidden {
            border: 0;
            padding-bottom: 0;
            transition: max-height 0.2s ease-out;
        }

        .content {
            padding: 0em 5em;

            @media (max-width: 768px) {
                padding: 0;
            }

            img {
                width: 80%;
                display: flex;
                justify-content: center;
                border-radius: 10px;
                box-shadow: 0 0 10px 0.1px rgb(105, 105, 105);
                margin: 2em auto;    
                
                @media (max-width: 768px) {
                    width: 100%;
                    margin: 0;
                }
            }

            p {
                font-family: Lexend;
                font-size: 1.3em;
                font-weight: 350;
                line-height: 1.3;

                @media (max-width: 768px) {
                    font-size: 1em;
                    padding: 0 1.5em;
                }
            }

            h3 {
                font-family: Lexend;
            }
        }
    }

    @media (max-width: 768px) {
        .content-container {
            width: 95%;
        }
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        .content-container {
            width: 80%;
        }
    }

    @media (min-width: 1025px) {
        .content-container {
            width: 50%;
        }
    }

    .post-container {
        width: 100%;
        height: 100%;
        margin: auto;
        box-shadow: 0 0 20px 0.1px rgb(66, 66, 66) inset;
        backdrop-filter: blur(64px) saturate(100%);
        overflow: hidden;
        margin-top: -4.9em;
        padding-top: 6em;
    }

    .content-container {
        display: flex;
        margin: auto;
        justify-content: center;
        border-radius: 20px;
        padding-bottom: 2em;
        color: rgb(236, 234, 234);
    }

    h1 {
        font-family: 'Londrina Solid';
        color: white;
        display: flex;
        margin: 0.5em auto 1em auto;
        justify-content: center;
        font-size: 5em;
        transform: translateY(-5px);
        animation: visibleLoadIn 0.8s 0.1s forwards;

        @media (max-width: 768px) {
            font-size: 3.5em;
            margin-bottom: 0.5em;
        }
    }

    .post-meta {
        color: rgb(199, 192, 192);
        display: flex;
        justify-content: center;
        margin: auto;
        gap: 5em;
        width: 50%;
        margin-bottom: 3em;
        font-family: 'Londrina Solid';
        font-weight: 300;
        font-size: 1.5em;
        opacity: 0;
        animation: loadIn 1s 0.2s forwards;

        @media (max-width: 768px) {
            flex-direction: column;
            width: 90%;
            margin-bottom: 1em;
            gap: 0.1em;
            font-size: 1.3em;
        }
    }

    .post-meta p {
        font-size: 0.9em;
        color: var(--accent-color2);
        opacity: 1;
        font-weight: 350;
    }

    .post-meta-category {
        position: relative;
        padding: 1em;
        border-radius: 10px;
    }

    .featured-image {
        width: 80%;
        display: flex;
        margin: 0 auto;
        justify-content: center;
        border-radius: 10px;
        box-shadow: 0 0 10px 0.1px rgb(105, 105, 105);
        margin: 2em auto;
        opacity: 0; 
        animation: loadIn 1s 0.3s forwards;

        @media (max-width: 768px) {
            width: 90%;
            margin: 0 auto;
        }
    }
    
    .tools-container {
        display: flex;
        flex-grow: 1;
        align-items: center; 
        column-gap: 0.1em;
        padding-top: 0.3em;
        height: 4em;
    }

    .tool-img {
        overflow: hidden;
        max-height: 100%;
        max-width: 100%;
        margin: 0;
        width: auto;
        height: auto;
    }

</style>

<Header />

<div class='post-container'>
    <h1>{title}</h1>
    <div class=post-meta>
        <div class='post-meta-category'> Timeline
            <!-- <img src="/timeline-icon.png" alt="Timeline"> -->
            <p>{timeline}</p>
        </div>
        <div class='post-meta-category'>Role
            <p>{role}</p>
        </div>
        <div class="post-meta-category"> Created Using:
            <div class="tools-container">
                {#each tools as tool}
                    <img class='tool-img' src={tool.toLowerCase() + "_icon.png"} alt="tool">
                {/each}
            </div>
        </div>
    </div>
    <img src="{featuredImageSrc}" alt="Featured" class='featured-image'>
    <div class='content-container'>
        <div bind:this={contentContainer} class='content'>
            <article>{@html content}</article>
        </div>
    </div>
</div>

<Backdrop />
<Footer />