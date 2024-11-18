<script>

</script>

<style>
    header {
        position: sticky;
        top: 0;
        z-index: 1;
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
</style>

<header class='glass'>
    <nav>       
        <a>Home </a>
        <a>About </a>
        <a>Contact </a>
    </nav>
</header>