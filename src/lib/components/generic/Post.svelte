<script>
    import Header from '$lib/components/generic/Header.svelte';
    import Footer from '$lib/components/generic/Footer.svelte';
    import Backdrop from '$lib/components/generic/Backdrop.svelte';
    import { onMount, onDestroy } from 'svelte';

    let {title, featuredImageSrc, timeline, role} = $props();
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
            margin:  auto;
            cursor: pointer;
            font-family: 'Londrina Solid';
            font-size: 1.4em;
            justify-content: center;
            align-items: center;
            height: fit-content;
            border-radius: 20px;
            border: 0;
            box-shadow: 0 0 10px 0.1px rgb(66, 66, 66) inset;
            transition: border-radius 0.5s ease-in-out;
        }

        .collapsible::before {
            content: '➯';
            padding-right: 0.4em;
            font-size: 1.5em;
            transition: all 0.2s;
        }

        .collapsible:hover::before {
            transition: all 0.2s;
            transform: translateX(0.2em);
            rotate: 90deg;
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
        }    

        .collapsible-hidden {
            border: 0;
            padding-bottom: 0;
            transition: max-height 0.5s ease-out;
        }

        .content {
            img {
                width: 80%;
                display: flex;
                margin: 0 auto;
                justify-content: center;
                border-radius: 10px;
                box-shadow: 0 0 10px 0.1px rgb(105, 105, 105);
                margin: 2em auto;        
            }

            p {
                font-family: Lexend;
                font-size: 1.3em;
                font-weight: 350;
                line-height: 1.3;
            }

            h3 {
                font-family: Lexend;
            }
        }
    }

    @media (max-width: 768px) {
        .content-container {
            width: 90%;
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

    .content {
        padding: 0em 5em;
    }

    h1 {
        font-family: 'Londrina Solid';
        color: white;
        display: flex;
        margin: 0.5em auto 1em auto;
        justify-content: center;
        font-size: 5em;
    }

    .post-meta {
        color: rgb(172, 172, 172);
        display: flex;
        justify-content: center;
        margin: auto;
        gap: 10em;
        width: 80%;
        margin-bottom: 5em;
        font-family: Lexend;
        font-size: 1.3em;
    }

    .post-meta p {
        font-size: 0.9em;
        color: var(--accent-color2);
        opacity: 1;
        font-weight: 500;
    }

    .post-meta-category {
        position: relative;
    }

    .post-meta-category img {
        width: 1em;
        height: 1em;
        box-shadow: 0;
        position: absolute;
    }

    .featured-image {
        width: 80%;
        display: flex;
        margin: 0 auto;
        justify-content: center;
        border-radius: 10px;
        box-shadow: 0 0 10px 0.1px rgb(105, 105, 105);
        margin: 2em auto; 
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