<script>
    import Post from '$lib/components/generic/Post.svelte';

    let title = 'Polished Trust';
    let description = 'A <strong>social</strong> co-op roguelike deckbuilder about cleaning a luxury hotel created to card games more accessible to newer players. <br> <br> <div class=\'description-divider\'></div> Integrated a state machine-based multiplayer workflow for <strong>networked</strong> co-op play using Photon Fusion 2 and a dynamic card effect system to iterate and balance cards while in play mode.';
    let featuredImageSrc = 'posts/PT/polished_trust_featured.jpg';
    let timeline = "February 2024 - July 2024";
    let role = 'Research, Design, Programming';
    let tools = ['Unity', 'Odin', 'PUN2'];

</script>

<Post {title} {description} {featuredImageSrc} {timeline} {role} {tools}/>

