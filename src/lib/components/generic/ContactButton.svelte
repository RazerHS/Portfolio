<script>
    import '$lib/styles/style.scss';

    let {src, alt, link, invertColors, fadeInDelay} = $props();
</script>

<style>
    a {
        scale: 1;
        transition: scale 0.2s ease-in-out;
        filter: drop-shadow(0 0 0.5rem var(--accent-color1));
        max-width: 3em;
        max-height: 3em;
        opacity: 0;
    }

    a:hover {
        scale: 1.05;
        transition: scale 0.4s ease-in-out; 
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        border-radius: 0.5em;
        filter: drop-shadow(0 0 0.3rem var(--accent-color2));
    }
</style>

<a href={link} target='_blank' style='animation: fadeIn 0.75s ease-in-out {fadeInDelay}s forwards;'>
    <img {src} {alt}/>
</a>
