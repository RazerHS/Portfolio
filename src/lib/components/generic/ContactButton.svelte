<script>
    import '$lib/styles/style.scss';

    let {src, alt, link, invertColors, fadeInDelay, text} = $props();
</script>

<style lang='scss'>
    a {
        scale: 1;
        transition: scale 0.2s ease-in-out;
        filter: drop-shadow(0 0 0.5rem var(--accent-color1)) drop-shadow(0 0 0.3rem var(--accent-color2));
        max-width: 3em;
        max-height: 3em;
        opacity: 0;
        position: relative;

        @media (max-width: 768px) {
            max-width: 2.5em;
            max-height: 2.5em;
        }
    }

    a:hover {
        scale: 1.1;
        transition: scale 0.1s ease-out; 

        @media (max-width: 1024px) {
            scale: 1;
        }
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        border-radius: 0.5em;
    }

    .hover-popup {
        background: rgba(3, 31, 46, 0.8);
        padding: 0.5em;
        color: white;
        font-family: 'Londrina Solid';
        font-weight: 300;
        margin: auto;
        align-items: center;
        border-radius: 10px;
        width: fit-content;
        height: fit-content;
        font-size: 0.8em;
        opacity: 0;
        transition: opacity 0.2s ease-in-out;
        position: absolute;
        bottom: 65px;
        left: 50px;
        z-index: 5;
    }

    a:hover {
        .hover-popup {
            opacity: 1;

            @media (max-width: 1024px) {
                opacity: 0;
            }
        }
    }

</style>

<a href={link} target='_blank' style='animation: fadeIn 0.75s ease-in-out {fadeInDelay}s forwards;'>
    <img {src} {alt}/>
    <div class="hover-popup">{text}</div>
</a>
