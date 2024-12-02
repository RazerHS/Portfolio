<script>
    import Header from '$lib/components/generic/Header.svelte';
    import Footer from '$lib/components/generic/Footer.svelte';
    import Backdrop from '$lib/components/generic/Backdrop.svelte';
    import { onMount } from 'svelte';

    let {title, content} = $props();

    onMount(() => {
        let collapsibles = document.getElementsByClassName("collapsible");

        for (let i = 0; i < collapsibles.length; i++) {
            collapsibles[i].addEventListener("click", function() {
                this.classList.toggle("active");
                let content = this.nextElementSibling;

                content.classList.toggle("collapsible-hidden");
                content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + "px";
            });
        }
    });

</script>

<style lang="scss">
    :global {
        img {
            width: 80%;
            display: flex;
            margin: 0 auto;
            justify-content: center;
        }

        .collapsible {
            display: flex;
            margin: auto;
            width: 100%;
            margin: 0 auto;
            cursor: pointer;
            font-family: 'Londrina Solid';
            background-color: rgba(17, 46, 144, 0.8);
            font-size: 1.4em;
            justify-content: center;
            align-items: center;
            height: fit-content;
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
            background-color: aqua;
        }

        .collapsible-content {
            overflow: hidden;
            background-color: rgba(0, 0, 0, 0.75);
            max-height: 0;
            transition: max-height 0.2s ease-out;
            padding: 0em 2em 2em 2em;
        }    

        .collapsible-hidden {
            border: 0;
            padding-bottom: 0;
        }

        p {
            font-family: Lexend;
            font-size: 1em;
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
            width: 40%;
        }
    }

    .content-container {
        height: 50em;
        width: 40%;
        display: flex;
        margin: auto;
        justify-content: center;
        border: 3px solid var(--glass-border-color);
        background-color: rgba(9, 44, 60, 0.75);
    }

    .content {
        padding: 0em 2em;
    }

    h1 {
        font-family: 'Londrina Solid';
        color: white;
        display: flex;
        margin: auto;
        justify-content: center;
        font-size: 3em;
        margin-bottom: 1em;
    }
</style>

<Header />


<h1>{title}</h1>
<div class='content-container glass'>
    <div class='content'>
        <article>{@html content}</article>
    </div>
</div>

<Backdrop />
<Footer />