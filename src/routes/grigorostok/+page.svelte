<script>
    import Post from '$lib/components/generic/Post.svelte';

    let title = 'Grigorostok';
    let featuredImageSrc = '/grigorostok_featured.png';
    let timeline = "September 2024 - February 2024";
    let role = 'Design, Programming';

</script>

<Post {title} {featuredImageSrc} {timeline} {role}/>

