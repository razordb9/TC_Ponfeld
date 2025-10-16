<section class="hero">
    <div class="content">
        <h1>TC Grössinghof Ponfeld</h1>
        <a href="https://groessinghof-ponfeld.tennisplatz.info/" target="_blank" class="btn">Platzreservierung</a>
    </div>
    
</section>

<style lang="scss">
    .hero{
        display: flex;
        justify-content: center;
        align-items: center;
        // min-height: 90vh;
        // background-color: red;
        // height: 90vh;
        // margin-top: -80px;
        // position: relative;
        background-image: url('/Tennispllatz.jpg');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        height: 100vh;
        // margin-top: -150px;
        text-align: center;
        color: white;
        
        .content {
            padding: 20px;

            h1 {
                font-size: 3rem;
                margin-bottom: 1rem;
            }

            .btn {
                display: inline-block;
                background: darkgray;
                color: white;
                padding: 0.75rem 1.5rem;
                border-radius: 5px;
                font-weight: bold;
                text-decoration: none;
                transition: background 0.2s;

                &:hover {
                    background: #e0e7ff;
                    color: #2563eb;
                }
            }
        }
    }

    @media (max-width: 600px) {
        .hero {
            margin-top: -70px;
        }
    }
    
</style>