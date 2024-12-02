<script>
    import {onMount} from 'svelte';

    onMount(() => {
        const header = document.querySelector('header');

        window.addEventListener('scroll', () => {
            //   header.classList.toggle('fade-out-header', window.scrollY == 0);
            //   header.classList.toggle('fade-in-header', window.scrollY != 0);
        });
    });
</script>

<style>
    header {
        position: sticky;
        top: 0;
        z-index: 10;
        height: 4.5em;
        margin: auto;
        margin-bottom: 2em;
        font-family: Lexend;
    }

    nav {
       display: flex; 
       align-items: center;
       justify-content: center;
       gap: 2em;
       height: 100%;
       margin: auto;
       font-size: 1.2em;
    }

    a {
        overflow: hidden;
        width: auto;
        color: white;
    }

    @media (max-width: 768px) {
        header {
            width: 100%;
        }
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        header {
            width: 50%;
        }
    }

    @media (min-width: 1025px) {
        header {
            width: 30%;
        }
    }

    @keyframes fadeHeader {
        0% {
            background-color: rgba(0, 0, 0, 0);
            
        }
        100% {
            background-color: rgba(78, 0, 0, 1);
        }
    }

    .fade-in-header {
        animation: fadeHeader 1s forwards;
    }

    .fade-out-header
     {
        animation: fadeHeader 2s both reverse;
     }

    .header-border {
        border: 3px solid black;
    }

</style>

<header class='glass header-border'>
    <nav>       
        <a href='/'>Home</a>
        <a>About</a>
        <a>Contact</a>
    </nav>
</header>