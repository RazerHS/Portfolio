<script>
    let {title, role, color, startDate, endDate, sideProject, logo} = $props(); 

    const mainProjectColor = 'var(--accent-color2)';
    const sideProjectColor = 'var(--accent-color3)';
</script>

<style lang='scss'>
    .timeline-element {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        height: 4em;
        border-radius: 10px;
        align-items: center;
        font-family: Lexend;
        padding: 0.5em;
        position: relative;
    }

    p {
        z-index: 10;
        text-shadow: black 0 0 1em;
    }

    .backdrop {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        opacity: 0.5;
        position: absolute;
        backdrop-filter: saturate(50%);
    }
    
    .title {
        font-size: 1.1em;
        font-weight: 500;
    }

    .heading {
        display: flex;
        flex-direction: column;
        gap: 1em;
        width: fit-content;
        
        p {
            margin: 0;
        }
    }

    .date-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.5em;

        p {
            font-size: 1em;
            font-family: Lexend;
            width: 5em;
            text-align: center;
            margin: 0;
        }

        .divider {
            width: 70%;
            height: 0.1em;
            background-color: white;
            border-radius: 10px;
        }
    }

    .role {
        font-size: 0.9em;
    }

    .timeline-element-container {
        display: flex;
    }

    .logo-container {
        padding-right: 1.5em;
        align-content: center;

        img {
            max-width: 4em;
            max-height: 4em;
            filter: drop-shadow(0 0 0.1rem var(--accent-color1)) drop-shadow(0 0 0.1rem var(--accent-color2));
        }
    }
</style>

<div class="timeline-element-container">
    <!-- <div class="logo-container">
        <img src={logo} alt=''>
    </div> -->
    <div class="timeline-element glass" style="background: linear-gradient(100deg, {sideProject ? sideProjectColor : mainProjectColor}, var(--accent-color1));">
        <div class="backdrop"></div>
        <div class="heading">
            <p class='title'>{title}</p>
            <p class='role'>{role}</p>
        </div>
        <div class="date-container">
            <p>{startDate}</p>
            <div class="divider"></div>
            <p>{endDate}</p>
        </div>
    </div>
</div>

