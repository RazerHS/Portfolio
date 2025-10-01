<script>
    import Post from '$lib/components/generic/Post.svelte';

    let title = 'Teeko';
    let description = "Platformer meets tower defense in this story-rich game inspired by the Costa Rican <i>Día de Las Mascaradas</i> festival. <br> <br> <div class=\'description-divider\'></div> Built a custom <b>node-based dialogue tool</b> using Unity’s experimental Graph API featuring in-editor text animation previews, fast iteration, and source control compatibility.";
    let featuredImageSrc = 'posts/Teeko/teeko_featured.png';
    let timeline = "March 2023 - Present";
    let role = 'Programming';
    let tools = ['Unity', 'Odin', 'TextAnimator'];
    let size = 2;

</script>

<Post {title} {description} {featuredImageSrc} {timeline} {role} {tools}/>
