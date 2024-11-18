<script>
    let {content, imageSrc, icon} = $props(); 

    function downloadCV() {
        console.log("meow");
    }
</script>

<style>
    img {
        width: 60%;
    }

    .button-86 {
        all: unset;
        width: 50px;
        height: 30px;
        font-size: 2em;
        background: transparent;
        border: none;
        position: relative;
        color: #f0f0f0;
        cursor: pointer;
        z-index: 1;
        padding: 10px 20px 13px 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        white-space: nowrap;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        font-family: 'Londrina Solid';
        border-radius: 5px;
    }

    .button-86::after, .button-86::before {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        z-index: -99999;
        transition: all .15s;
    }

    .button-86::before {
        transform: translate(0%, 0%);
        width: 100%;
        height: 100%;
        background: #28282d;
        border-radius: 5px;
        border: 2px groove white;
    }

    .button-86::after {
        transform: translate(10px, 10px);
        width: 35px;
        height: 35px;
        background: #ffffff15;
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        border-radius: 50px;
        justify-content: center;
        align-items: center;
        display: flex;
        content: '↓';
        font-size: 0.5em;
    }

    .button-86:hover::before {
        transform: translate(5%, 20%);
        width: 110%;
        height: 110%;
    }

    .button-86:hover::after {
        border-radius: 10px;
        transform: translate(0, 0);
        width: 100%;
        height: 100%;
        justify-content: left;
        align-items: center;
        font-size: 0.6em;
        text-indent: 100%;
    }

    .button-86:active::after {
        transition: 0s;
        transform: translate(0, 5%);
    }
</style>

<button class="button-86">{content}
    {#if content === ''}
        <img src={imageSrc} alt={content}> 
    {/if}
</button>
