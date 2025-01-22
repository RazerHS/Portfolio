<script>
    import WaterBubble from '$lib/components/generic/WaterBubble.svelte';
</script>

<style>
    @keyframes hover {
        0% {
            transform: scale(1) translate(0px, 0px);
        }
        50% {
            transform: translate(2px, 3px);
        }
        100% {
            transform: scale(1) translate(0px, 0px);
        }
    }

    .main-container {
        display: flex;
        justify-content: center;
        align-items: center;
        animation: hover 2s infinite ease-in-out;
        margin-bottom: 2em;
    }

    .skills-container {
        display: flex;
        flex-direction: row;
        width: 90em;
        gap: 3em;
    }

    .skills-section {
        display: flex;
        align-items: center;
        width: 100%;
        height: 18em;
        border-radius: 10px;
    }

    h2 {
        font-family: Lexend;
        color: white;
        rotate: -90deg;
    }
    
</style>

<div class='main-container'>
    <div class='skills-container'>
        <div class='skills-section'>
           
        </div>
    </div>
</div>