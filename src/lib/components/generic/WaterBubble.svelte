<script>
  let {name, src, mastery, includeImage} = $props();
  import { slide } from 'svelte/transition';
</script>

<style>
  .bowl {
      position: relative;
      border-radius: 50%;
      width: 9.375em; /* 150px / 16 */
      height: 9.375em; /* 150px / 16 */
      box-shadow: inset 0 -0.3125em 0 0 rgba(0, 0, 0, 0.5), inset 0 -1.25em 0.3125em 0 rgba(0, 0, 0, 0.2), inset -0.9375em 0 0.3125em 0 rgba(0, 0, 0, 0.1), inset 0.9375em 0 0.3125em 0 rgba(0, 0, 0, 0.1);
      background: -moz-radial-gradient(center, ellipse cover, transparent 0%, transparent 76%, rgba(0, 0, 0, 0.65) 100%);
      background: -webkit-radial-gradient(center, ellipse cover, transparent 0%, transparent 76%, rgba(0, 0, 0, 0.65) 100%);
      background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 76%, rgba(0, 0, 0, 0.65) 100%);
      margin: 1.25em; /* 20px / 16 */
  }

  .bowl:before {
      overflow: hidden;
      border-radius: 50%;
      content: "";
      box-shadow: inset 0 -0.3125em 0 0 rgba(0, 0, 0, 0.5), inset 0 -1.25em 0.3125em 0 rgba(0, 0, 0, 0.2), inset -0.9375em 0 0.3125em 0 rgba(0, 0, 0, 0.1), inset 0.9375em 0 0.3125em 0 rgba(0, 0, 0, 0.1);
      background: -moz-radial-gradient(center, ellipse cover, transparent 0%, transparent 60%, rgba(0, 0, 0, 0.65) 81%, black 100%);
      background: -webkit-radial-gradient(center, ellipse cover, transparent 0%, transparent 60%, rgba(0, 0, 0, 0.65) 81%, black 100%);
      background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.65) 81%, #000000 100%);
      position: absolute;
      width: 9.375em; /* 150px / 16 */
      height: 9.375em; /* 150px / 16 */
      z-index: 2;
  }

  .bowl .inner {
      border-radius: 50%;
      width: 9.375em; /* 150px / 16 */
      height: 9.375em; /* 150px / 16 */
      background: -moz-radial-gradient(center, ellipse cover, transparent 0%, transparent 76%, rgba(0, 0, 0, 0.65) 100%);
      background: -webkit-radial-gradient(center, ellipse cover, transparent 0%, transparent 76%, rgba(0, 0, 0, 0.65) 100%);
      background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 76%, rgba(0, 0, 0, 0.65) 100%);
      overflow: hidden;
      -webkit-backface-visibility: hidden;
      -webkit-transform: translate3d(0, 0, 0);
  }

  .bowl .inner:before {
      content: "";
      width: 1.25em; /* 20px / 16 */
      height: 1.25em; /* 20px / 16 */
      background: rgba(255, 255, 255, 0.2);
      border-radius: 50%;
      position: absolute;
      right: 2em; /* 40% of 150px / 16 */
      top: 2em; /* 60% of 150px / 16 */
      z-index: 2;
  }

  .bowl .fill {
      animation: fillAction 5s cubic-bezier(0.2, 0.6, 0.8, 0.4) 1 forwards;
  }

  .bowl .waveShape {
      animation: waveAction 5s 0.5s linear infinite;
      width: 18.75em; /* 300px / 16 */
      height: 9.375em; /* 150px / 16 */
      fill: #086f9f;
      opacity: 0.5;
  }

  img {
    position: absolute;
    margin: auto;
    width: 100%;
    height: 100%;
    scale: 0.6;
    z-index: 5;
  }

  h4 {
    text-align: center;
    color: white;
    font-family: 'Lexend';
    font-size: 1.7em;
    margin-top: 0.5em;
  }

@-webkit-keyframes fillAction {
0% {
  -webkit-transform: translate(0, 150px); /* 150px / 16 */
}
100% {
  -webkit-transform: translate(0, var(--wave-fill)); /* 10px / 16 */
}
}
@-webkit-keyframes waveAction {
0% {
  -webkit-transform: translate(-150px, 0); /* 150px / 16 */
}
100% {
  -webkit-transform: translate(0, 0);
}
}
</style>

<div class="bowl" style='--wave-fill: {10 - (mastery)}em'>
  <div class="inner">
      {#if includeImage}
        <img {src} alt={name} />
      {/if}
    <div class="fill">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="18.75em" height="18.75em" viewBox="0 0 300 300" enable-background="new 0 0 300 300" xml:space="preserve">
        <path class="waveShape" d="M300,300V2.5c0,0-0.6-0.1-1.1-0.1c0,0-25.5-2.3-40.5-2.4c-15,0-40.6,2.4-40.6,2.4
    c-12.3,1.1-30.3,1.8-31.9,1.9c-2-0.1-19.7-0.8-32-1.9c0,0-25.8-2.3-40.8-2.4c-15,0-40.8,2.4-40.8,2.4c-12.3,1.1-30.4,1.8-32,1.9
    c-2-0.1-20-0.8-32.2-1.9c0,0-3.1-0.3-8.1-0.7V300H300z" />
      </svg>
    </div>
  </div>
  <h4>{name}</h4>
</div>
