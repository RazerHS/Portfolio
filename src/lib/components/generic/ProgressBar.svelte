<script>
    let {widthPercentage, heightPercentage, direction} = $props();
</script>

<style>
    .progress-bar {
        position: relative;
        height: 1em;
        background-color: white;
        border-radius: 2px;
    }

    .color {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: linear-gradient(211deg, rgba(59,81,223,1) 0%, rgba(86,51,215,1) 9%, rgba(21,138,183,1) 65%, rgba(8,149,177,1) 72%, rgba(43,175,201,1) 80%);
    }

    .progress {
        position: absolute;
        color: black;
        width: 100%;
        height: 100%;
    }
</style>

<!-- <div class='progress-bar' style='width: {widthPercentage}%; height: {heightPercentage}%;'>
    <div class='progress'></div>
    <div class='color'></div>
</div> -->