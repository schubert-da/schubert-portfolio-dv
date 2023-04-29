<script>
    // @ts-nocheck

    let projectName = "b2p";

    function toggleExpansion() {
        let currentWork = document.querySelector(
            `.work-container.${projectName}`
        );
        let checkBox = currentWork.querySelector(
            `.show-desc-btn.${projectName}`
        );
        let banner = currentWork.querySelector(".work-banner");
        let chevron = currentWork.querySelector(`.chevron.${projectName}`);

        if (checkBox.checked == true) {
            chevron.style.transform = "rotate(-45deg)";
            banner.style.display = "none";
        } else {
            chevron.style.transform = "rotate(135deg)";
            banner.style.display = "block";
        }
    }
</script>

<div class={`work-container ${projectName}`}>
    <label for={`show-desc-${projectName}`}>
        <div class="work-header-title">
            Bridges to Prosperity
            <div class={`chevron ${projectName}`} />
        </div>
        <div class="work-banner">
            <div class="banner-img-container">
                <div class="filler-rect" />
                <img
                    src="projects/B2P/b2p-banner.gif"
                    alt="preview for b2p project"
                    class="grid-item"
                />
                <div class="filler-rect" />
            </div>
        </div>
    </label>
    <input
        type="checkbox"
        name={`show-desc-${projectName}`}
        id={`show-desc-${projectName}`}
        class={`show-desc-btn ${projectName}`}
        on:click={toggleExpansion}
    />
    <div class="details-container">
        <div class="work-text">
            <div class="work-field">
                <div class="work-field-title">Brief</div>
                <div class="work-field-desc">
                    A short scrolly-telling style article on the work done by
                    <b>Bridges To Prosperity</b> at combatting poverty due to rural
                    isolation by connecting communities via trail bridges.
                </div>
            </div>

            <div class="work-field">
                <div class="work-field-title">My approach</div>
                <div class="work-field-desc">
                    The data for this challenge dealt with the hardships faced
                    by rural communities due to seasonal flooding / weather
                    which would cut them off from the external labour and
                    agricultural markets, causing loss of livelihood.

                    <br /><br />

                    In this visualisation piece I wanted to highlight a few of
                    the
                    <b
                        >key metrics that showed the success of B2P in raising
                        quality of life</b
                    > in these rural villages by connecting them with the external
                    world through trail bridges created through local efforts.
                </div>

                <div class="work-field">
                    <div class="work-field-title">Tools</div>
                    <div class="work-field-desc">
                        At the time of working on this piece, I was learning how
                        to use <b>Scrollama</b> in creating a scrollytelling
                        story so I was excited to experiment with how I could
                        tie different aspects of the storytelling with the
                        user's scroll interactions.

                        <br /><br />

                        Finally the entire piece was done in
                        <b>JavaScript with Scrollama</b> for scroll
                        interactions. Additionally, I used
                        <b>Figma for illustration</b> of the bridge construction
                        graphic, which was tied to the user's scrolling.
                    </div>
                </div>
            </div>
        </div>

        <br />

        <div class="results-grid">
            <div class="grid-item grid-item--result">
                <div class="work-field-title">The Result</div>
                <div class="work-field-desc">
                    The final piece ended up being a great lesson in
                    understanding scrollytelling and the intricacies of working
                    with a scroll-based narration style.
                </div>
                <br />
                <a
                    href="https://schubert-da.github.io/VFSG-BridgesToProsperity/"
                    target="_blank"
                    rel="noreferrer">View project</a
                >
            </div>
            <img
                src="projects/B2P/b2p-banner.gif"
                alt="bridges to prosperity bridge construction gif"
                class="grid-item--b2p-scrolly grid-item"
            />
        </div>
    </div>
</div>

<style>
    /* PREVIEW IMAGE STYLING */
    .work-banner {
        display: block;
        background-color: #fefefe;
    }

    .banner-img-container {
        display: flex;
        padding: 10px;
        height: 350px;
    }

    .work-banner .banner-img-container img {
        box-shadow: none !important;
        /* border: 1px solid #999; */
        height: auto;
        width: auto;
        max-width: 10 0%;
        max-height: 100%;
        margin: auto 4px;
    }

    .work-banner .banner-img-container .filler-rect {
        width: 100%;
        height: 100%;
        background: #444;
        box-shadow: none !important;
        display: block;
    }

    /* GRID STYLING */
    .results-grid {
        background-color: #aec0b8;

        display: grid;
        grid-template-columns: repeat(4, 1fr);
        column-gap: 10px;
        grid-template-rows: repeat(1, 250px);
    }

    .grid-item--result {
        grid-row: 1/2;
        grid-column: 1/2;

        padding: 10px 15px;
        box-shadow: none !important;
        padding-right: 20px;
    }

    .grid-item--result .work-field-title {
        margin-top: 0;
    }

    .grid-item--b2p-scrolly {
        border: 2px solid #888;
        margin-left: auto;
        grid-row: 1/3;
        grid-column: 2/5;
    }

    @media (max-width: 480px) {
        .banner-img-container {
            height: auto;
        }

        .work-banner .banner-img-container .filler-rect {
            display: none;
        }

        .banner-img-container {
            height: auto;
        }

        .results-grid {
            margin-top: 2rem;
            display: flex;
            flex-direction: column;
        }
    }
</style>
