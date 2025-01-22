<script>
    import { onMount } from 'svelte';

    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;
    let ease = 200;
   
    onMount(() => {
        const interactiveBubble = document.querySelector('.interactive');

        function moveInteractiveBubble() {
            currentX += (targetX - currentX) / ease;
            currentY += (targetY - currentY) / ease;

            interactiveBubble.style.transform = `translate(${Math.round(currentX)}px, ${Math.round(currentY)}px)`;

            requestAnimationFrame(() => {
                moveInteractiveBubble();
            });
        }

        window.addEventListener('mousemove', (event) => {
            targetX = event.clientX;
            targetY = event.clientY;
        });

        moveInteractiveBubble();
    });
</script>

<style>
   :root {
		--color-bg1: rgb(3, 3, 44);
		--color-bg2: rgb(0, 0, 0);
		--color1: 18, 113, 255;
		--color2: 221, 74, 255;
		--color3: 100, 220, 255;
		--color4: 200, 50, 50;
		--color5: 180, 180, 50;
		--color-interactive: 58, 15, 15;
		--circle-size: 80%;
		--blending: hard-light;
	}

    @keyframes moveInCircle {
        0% {
            transform: rotate(0deg);
        }
        50% {
            transform: rotate(180deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }   

    @keyframes moveVertical {
        0% {
            transform: translateY(-50%);
        }
        50% {
            transform: translateY(50%);
        }
        100% {
            transform: translateY(-50%);
        }
    }

    @keyframes moveHorizontal {
        0% {
            transform: translateX(-50%) translateY(-10%);
        }
        50% {
            transform: translateX(50%) translateY(10%);
        }
        100% {
            transform: translateX(-50%) translateY(-10%);
        }
    }

     .gradient-bg {
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        z-index: -1;
        background: linear-gradient(40deg, var(--color-bg1), var(--color-bg2));
        overflow: hidden;
    }

    svg {
        display: none;
    }

    .gradient-container {
        filter: url(#goo) blur(40px);
        width: 100%;
        height: 100%;
    }

    .g1 {
        position: absolute;
        background: radial-gradient(circle at center, rgba(var(--color1), 0.3) 0, rgba(var(--color1), 0) 30%) no-repeat;
        mix-blend-mode: var(--blending);

        width: var(--circle-size);
        height: var(--circle-size);
        top: calc(50% - var(--circle-size) / 2);
        left: calc(50% - var(--circle-size) / 2);

        transform-origin: center center;
        animation: moveVertical 30s ease infinite;

        opacity: 1;
    }

    .g2 {
        position: absolute;
        background: radial-gradient(circle at center, rgba(var(--color2), 0.3) 0, rgba(var(--color2), 0) 30%) no-repeat;
        mix-blend-mode: var(--blending);

        width: var(--circle-size);
        height: var(--circle-size);
        top: calc(50% - var(--circle-size) / 2);
        left: calc(50% - var(--circle-size) / 2);

        transform-origin: calc(50% - 400px);
        animation: moveInCircle 20s reverse infinite;

        opacity: 1;
    }

    .g3 { 
        position: absolute;
        background: radial-gradient(circle at center, rgba(var(--color3), 0.3) 0, rgba(var(--color3), 0) 30%) no-repeat;
        mix-blend-mode: var(--blending);

        width: var(--circle-size);
        height: var(--circle-size);
        top: calc(50% - var(--circle-size) / 2 + 200px);
        left: calc(50% - var(--circle-size) / 2 - 500px);

        transform-origin: calc(50% + 400px);
        animation: moveInCircle 40s linear infinite;

        opacity: 1;
    }

    .g4 {
        position: absolute;
        background: radial-gradient(circle at center, rgba(var(--color4), 0.3) 0, rgba(var(--color4), 0) 30%) no-repeat;
        mix-blend-mode: var(--blending);

        width: var(--circle-size);
        height: var(--circle-size);
        top: calc(50% - var(--circle-size) / 2);
        left: calc(50% - var(--circle-size) / 2);

        transform-origin: calc(50% - 200px);
        animation: moveHorizontal 40s ease infinite;

        opacity: 0.7;
    }

  .g5 {
        position: absolute;
        background: radial-gradient(circle at center, rgba(var(--color5), 0.5) 0, rgba(var(--color5), 0) 30%) no-repeat;
        mix-blend-mode: var(--blending);

        width: calc(var(--circle-size) * 2);
        height: calc(var(--circle-size) * 2);
        top: calc(50% - var(--circle-size));
        left: calc(50% - var(--circle-size));

        transform-origin: calc(50% - 800px) calc(50% + 200px);
        animation: moveInCircle 20s ease infinite;

        opacity: 1;
    }

    .interactive {
        position: absolute;
        background: radial-gradient(circle at center, rgba(var(--color-interactive), 0.8) 0, rgba(var(--color-interactive), 0) 50%) no-repeat;
        mix-blend-mode: var(--blending);

        width: 100%;
        height: 100%;
        top: -50%;
        left: -50%;

        opacity: 0.7;
    }

    img {
        position: fixed;
        width: 100%;
        height: 100%;
        z-index: -1;
        opacity: 0.2;
        top: 0;
        left: 0;
        object-fit: cover;
    }
</style>

<div class='gradient-bg'> 
    <svg xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
    </svg>
    <div class='gradient-container'>
        <div class='g1'> </div>
        <div class='g2'> </div>
        <div class='g3'> </div>
        <div class='g4'> </div>
        <div class='g5'> </div>
        <div class='interactive'> </div>
    </div>
</div>
 <img src='/galaxy.jpg' alt='bg'>


