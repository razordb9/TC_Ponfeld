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
        min-height: 90vh;
        background-color: red;
        text-align: center;
        
        .content {
            padding: 20px;

            h1 {
                font-size: 3rem;
                margin-bottom: 1rem;
            }

            .btn {
                display: inline-block;
                background: white;
                color: #3b82f6;
                padding: 0.75rem 1.5rem;
                border-radius: 3px;
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
    
</style>