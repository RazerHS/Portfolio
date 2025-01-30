<script>
    import Post from '$lib/components/generic/Post.svelte';

    let title = 'Polished Trust';
    let featuredImageSrc = '/polished_trust_featured.png';
    let timeline = "February 2024 - July 2024";
    let role = 'Research, Design, Programming';
    let tools = ['Unity', 'Odin', 'PUN2'];

</script>

<Post {title} {featuredImageSrc} {timeline} {role} {tools}/>

