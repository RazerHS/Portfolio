<script>
    import Header from '$lib/components/generic/Header.svelte';
    import Footer from '$lib/components/generic/Footer.svelte';
    import Backdrop from '$lib/components/generic/Backdrop.svelte';
    import ContactButton from '$lib/components/generic/ContactButton.svelte';
    import { onMount, onDestroy } from 'svelte';
    import hljs from 'highlight.js';
    import 'highlight.js/styles/atom-one-dark.css';

    let {title, featuredImageSrc, timeline, role, tools, githubUrl} = $props();
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

        let codeBlocks = content.getElementsByTagName("code");

        Array.from(codeBlocks).forEach((block) => {
            if (block.dataset.highlighted) {
                return;
            }

            hljs.highlightElement(block);
            block.dataset.highlighted = true;
        });

        let maxHeight = content.scrollHeight + "px";

        content.style.maxHeight = content.style.maxHeight ? null : maxHeight;
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

            img {
                width: 50%;
                display: flex;
                justify-content: center;
                border-radius: 10px;
                box-shadow: 0 0 10px 0.1px rgb(105, 105, 105);
                margin: 2em auto;    
                
                @media (min-width: 769px) and (max-width: 1024px) {
                    font-size: 1.7em;
                    width: 90%;
                }

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
                width: 50%;
                margin-left: auto;
                margin-right: auto;

                @media (min-width: 768px) and (max-width: 1024px) {
                    font-size: 1.7em;
                    width: 90%;
                }

                @media (max-width: 768px) {
                    font-size: 1em;
                    width: 90%;
                }
            }

            h3 {
                font-family: Lexend;
                width: 50%;
                margin: auto;
                font-size: 2em;
                margin-top: 1em;
                animation: textGlow 5s infinite ease-in-out alternate;

                @media (min-width: 768px) and (max-width: 1024px) {
                    font-size: 3em;
                    width: 90%;
                }

                @media (max-width: 768px) {
                    font-size: 1.7em;
                    width: 90%;
                }
            }

            ul {
                font-size: 1.2em;
                font-family: Lexend;
                font-weight: 350;
                line-height: 1.3;
                width: 50%;
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
                color: var(--accent-color2);
                animation: textGlow 3s ease-in-out infinite alternate;
            }

            video {
                width: 50%;
                display: flex;
                justify-content: center;
                border-radius: 10px;
                box-shadow: 0 0 10px 0.1px rgb(105, 105, 105);
                margin: 2em auto;

                @media (min-width: 768px) and (max-width: 1024px) {
                    font-size: 1.7em;
                    width: 90%;
                }

                @media (max-width: 768px) {
                    width: 100%;
                    margin: 0;
                }
            }

            pre {
                margin: 2em auto;
                box-sizing: border-box;
                max-width: 48vw;

                @media (min-width: 768px) and (max-width: 1024px) {
                    max-width: 90vw;
                }

                @media (max-width: 768px) {
                    max-width: 90vw;
                }
            }

            code {
                margin-left: auto;
                margin-right: auto;
                max-width: 100%;
                border-radius: 10px;
                box-shadow: 0 0 10px 0.1px rgb(105, 105, 105);
            }

            .collapsable-end-divider {
                width: 25%;
                margin: 3em auto 3em auto;
                background-color: white;
                height: 0.1em;
            }

             .post-end-divider {
                width: 10%;
                margin: 2em auto 0 auto;
                background-color: white;
                height: 0.1em;
            }



            color.color1 {
                color: var(--accent-color2);
                animation: textGlow 3s ease-in-out infinite alternate;
            }

            color.color2 {
                color: var(--accent-color3);
                animation: textGlow 4s ease-in-out infinite alternate;
            }

            color.color3 {
                color: var(--accent-color1);
                animation: textGlow 5s ease-in-out infinite alternate;
            }

            .collapsable {
                display: flex;
                cursor: pointer;
                font-family: 'Londrina Solid';
                font-size: 1.4em;
                justify-content: center;
                align-items: center;
                height: fit-content;
                border-top-left-radius: 20px;
                border-top-right-radius: 20px;
                box-shadow: 0 0 10px 0.1px rgb(66, 66, 66) inset;
                transition: border-radius 0.5s ease-in-out, box-shadow 0.2s ease-in-out, width 1s ease-in-out;
                width: 50%;
                margin: 1.5em auto 0 auto;
                border: 0;

                @media (min-width: 768px) and (max-width: 1024px) {
                    font-size: 1.7em;
                    width: 90%;
                    border-top-left-radius: 10px;
                    border-top-right-radius: 10px;
                }

                @media (max-width: 768px) {
                    font-size: 1em;
                    width: 95%;
                    border-top-left-radius: 10px;
                    border-top-right-radius: 10px;
                }
            }

            .collapsable::before {
                content: '➯';
                padding-right: 0.4em;
                font-size: 1.5em;
                transition: all 0.2s;
            }

            .collapsable:hover {
                @media (min-width: 1024px) {
                    transition: border-radius 0.5s ease-in-out, box-shadow 0.1s, width 0.1s ease-in-out;
                    box-shadow: 0 0 10px 0.1px var(--accent-color2) inset;
                }
            }

            .collapsable.active::before {
                transition: all 0.2s;
                transform: translateX(0.2em);
                rotate: 90deg;
            }

            .collapsable.active:hover {
                transition: box-shadow 0.1s ease-in-out, width 0.1s ease-in-out;
                box-shadow: 0 0 10px 0.1px var(--accent-color3) inset;
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

                @media (max-width: 768px) {
                    padding: 0;

                    img {
                        width: 90% !important;
                        margin: 1.5em auto !important;
                    }
                }
            }    

            .collapsable-hidden {
                opacity: 0;
                max-height: 0;
                transition: max-height 0.3s ease-out, opacity 0.3s ease-out;
            }
        }
    }

    .post-container {
        width: 100%;
        height: 100%;
        margin: auto;
        backdrop-filter: blur(64px) saturate(100%);
        overflow: hidden;
        margin-top: -4.9em;
        padding-top: 6em;
    }

    .content-container {
        display: flex;
        justify-content: center;
        border-radius: 20px;
        padding-bottom: 2em;
        color: rgb(236, 234, 234);
        width: 95%;
        margin: auto;
    }

    h1 {
        font-family: 'Londrina Solid';
        color: white;
        display: flex;
        justify-content: center;
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

    .post-meta {
        color: rgb(199, 192, 192);
        display: flex;
        justify-content: center;
        margin: auto;
        gap: 5em;
        width: calc(100% - 35vw);
        margin-bottom: 3em;
        font-family: 'Londrina Solid';
        font-size: calc(1em + 0.5vw);
        opacity: 0;
        animation: loadIn 1s 0.2s forwards;

        @media (min-width: 768px) and (max-width: 1024px) {
            flex-direction: column;
            width: 90%;
            font-size: 2em;
            gap: 0.5em;
        }

        @media (max-width: 768px) {
            flex-direction: column;
            width: 90%;
            margin-bottom: 1em;
            gap: 0.1em;
            font-size: 1.3em;
        }
    }

    .post-header-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 0.5em 0 1em 0;
    }

    .github-link {
    }

    .post-meta-category {
        position: relative;
        padding: 1em;
    }

    .post-meta-category p {
        font-size: 0.9em;
        color: var(--accent-color2);
    }

    .post-meta-category .separator {
        position: absolute;
        width: 1.5em;
        height: 0.07em;
        color: white;
        background: white;
        opacity: 0.4;
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

        @media (min-width: 768px) and (max-width: 1024px) {
            width: 88%;
        }

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

        @media (min-width: 768px) and (max-width: 1024px) {
            padding-top: 0.7em;
            height: 2em;
        }

        @media (max-width: 768px) {
            padding-top: 0.5em;
            height: 2.2em;
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
            max-height: 2.2em;
        }
    }
</style>

<Header />

<div class='post-container'>
    <div class="post-header-container">
        <h1>{title}</h1>
        <!-- <div class="github-link">
            <ContactButton src='/github_icon.png' alt='Github' link='https://github.com/RazerHS' text='Repository' fadeInDelay=0.5/>
        </div> -->
    </div>
    <div class=post-meta>
        <div class='post-meta-category'> Timeline
            <div class='separator'></div>
            <p class='post-meta-content-text'>{timeline}</p>
        </div>
        <div class='post-meta-category'>Role
            <div class='separator'></div>
            <p class='post-meta-content-text'>{role}</p>
        </div>
        <div class="post-meta-category"> Created Using:
            <div class='separator'></div>
            <div class="tools-container">
                {#each tools as tool}
                    <img class='tool-img' src={tool.toLowerCase() + "_icon.png"} alt="tool">
                {/each}
            </div>
        </div>
    </div>
    <img src="{featuredImageSrc}" alt="Featured" class='featured-image'>
    <div class='content-container'>
        <div bind:this={contentContainer}>
            <article>{@html content}</article>
        </div>
    </div>
</div>

<Backdrop />
<Footer />