<script>
    import Post from '$lib/components/generic/Post.svelte';

    let title = 'Teeko';
    let featuredImageSrc = '/teeko_featured.png';
    let timeline = "April 2023 - Present (On and Off)";
    let role = 'Programming';

</script>

<Post {title} {featuredImageSrc} {timeline} {role}/>
