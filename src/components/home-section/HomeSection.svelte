<script>
</script>

<div id="home-section">
    <div class="home-container">
        <h1 class="home-heading">
            Hi I'm <span>Schubert!</span>
        </h1>
        <div class="text-home"><strong>FRONTEND DEVELOPER</strong></div>
        <div class="text-home-small">
            I am a web developer with a keen interest for responsive web design
            and creating interactive visuals.
            <br /><br />
            I have a passion for using data to tell stories and solve problems, and
            I am constantly seeking out new ways to use visualization to make data
            more accessible and meaningful to a wide range of audiences.
        </div>
    </div>
</div>

<style>
    #home-section {
        margin-top: 10rem;
        display: flex;
        flex-direction: row;
        justify-content: end;
    }

    .home-container {
        width: 66%;
    }

    .home-heading {
        font-size: 4rem;
        font-weight: 200;
        line-height: 1.4;
        margin-bottom: 0;
        padding-bottom: 2rem;
        letter-spacing: 2px;
    }

    .home-heading span {
        background-color: #d49c6b;
        color: white;
        padding: 0.4rem 1rem;
    }

    .text-home {
        font-size: 1.8rem;
        font-weight: 700;
        line-height: 1.4;
        padding-bottom: 2rem;
        letter-spacing: 2px;
        text-transform: uppercase;
    }

    .text-home-small {
        max-width: 50ch;
        font-size: 2rem;
        line-height: 1.3;
    }

    @media (max-width: 480px) {
        #home-section {
            margin-top: 5rem;
            justify-content: center;
        }

        .home-container {
            width: 85%;
        }

        .text-home {
            font-size: 1.6rem;
            letter-spacing: 1px;
            padding-bottom: 4px;
        }

        .text-home-small {
            font-size: 1.6rem;
        }
    }
</style>
