<script>
    import Post from '$lib/components/generic/Post.svelte';

    let title = 'Grigorostok';
    let featuredImageSrc = 'posts/Grigorostok/grigorostok_featured.png';
    let timeline = "September 2023 - February 2024";
    let role = 'Design, Programming';
    let tools = ['Unity', 'Odin', 'FMOD'];

</script>

<Post {title} {featuredImageSrc} {timeline} {role} {tools}/>

