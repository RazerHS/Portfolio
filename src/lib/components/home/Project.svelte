<script> 
    import '$lib/style.css';
    let {name, tools, tags} = $props();
</script>

<style>
    :root {
        --gradient-color: rgb(0, 0, 0);
    }

    p {
        font-family: Lexend;
        font-size: 1.1em;
    }    

    a {
        text-decoration: none;
    }

    a:link , a:visited{
        color: var(--accent-color2);
    }

    /* mouse over link */
    a:hover {
        color: var(--accent-color1);
        text-decoration: underline;
    }

    /* selected link */
    a:active {
        color: var(--accent-color3);
    }

    .container {
        padding-bottom: 2em;
        border-radius: 12px;
        flex-direction: column;
        align-items: center;
        transition: all .6s;
    }

    .container:hover {
        transform: translate(-3px, -3px);
        transition: transform .3s;
    }

    .img-container {
        height: 25em;
        width: 100%;
        border-top-left-radius: 7px;
        border-top-right-radius: 7px;
    }

    .content-container {
        padding: 0 1em;
    }  

    .description {
        padding-bottom: 2em;
    }

    .title-container {
        display: flex;
        flex-shrink: 1;
        overflow: hidden;
        padding-top: 0.5em;
    }

    .tools-container {
        flex-grow: 1;
        display: flex;
        align-items: center; 
        justify-content: flex-end;
        column-gap: 0.1em;

        max-height: 3rem;
        width: 100%;
        padding: 0.5em;
        padding-left: 2em;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover; 
        object-position: center; 
        border-top-left-radius: 7px;
        border-top-right-radius: 7px;
    }

    .tool-img {
        overflow: hidden;
        width: auto;
        height: auto;
        max-height: 100%;
        max-width: 100%;
    }

    .tags-container {
        display: flex;
        gap: 0.5em 1em;
        flex-shrink: 1;
        flex-wrap: wrap;

        height: auto;
    }

    .tag {
        padding: 0em 0.3em;
        height: 3em;
        border: 3px solid rgba(255, 255, 255, 0.124);
        display: flex;
        justify-content: center;
        align-items: center;
        background: linear-gradient(211deg, rgba(59,81,223,1) 0%, rgba(86,51,215,1) 9%, rgba(21,138,183,1) 65%, rgba(8,149,177,1) 72%, rgba(43,175,201,1) 80%);
        font-size: 1rem;
    }

    div.tools {
        background: linear-gradient(211deg, var(--accent-color2) 20%, var(--gradient-color) 130%);
    }

    div.pitching {
        background: linear-gradient(211deg, var(--accent-grey) 0%, var(--gradient-color) 130%);
    }

    div.systems {
        background: linear-gradient(211deg, var(--accent-color1) 0%, var(--gradient-color) 130%);
    }

    div.gameplay {
        background: linear-gradient(211deg, var(--accent-color3) 0%, var(--gradient-color) 130%);
    }

    h2 {
        font-family: 'Londrina Solid';
        margin: 0;
        display: flex;
        align-items: center;

        a {
            font-size: calc(1em + 1vw);
            display: block;
            width: 100%;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
    }
</style>

<div class='container glass'>
    <div class='img-container'>
        <img src={name.toLowerCase().replace(' ', '_') + "_featured.png"} alt={name}>
    </div>
        <div class='content-container'>
            <div class='title-container'>
                <h2> <a href='{"/" + name.toLowerCase().replace(' ', '_')}'> {name} </a></h2>
                <div class='tools-container'>
                    {#each tools as tool}
                        <img class='tool-img' src={tool.toLowerCase() + "_icon.png"} alt=''>
                    {/each}
                </div>
            </div>
            <p class='description'> Befiend is a single-player roguelike-adventure mix depicted by the twisted fates of two protagonists from different worlds.
                I worked on the game’s main architecture, most notably creating our turn-based combat system and an effective way to manage data.
            <div class='tags-container'>
                {#each tags as tag}
                    <div class='tag {tag.toLowerCase()}'>
                        <p> {tag}
                    </div>
                {/each}
            </div>    
        </div>
</div>
