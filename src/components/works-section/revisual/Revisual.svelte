<script>
    // @ts-nocheck

    let projectName = "revisual";

    function toggleExpansion() {
        let currentWork = document.querySelector(
            `.work-container.${projectName}`,
        );
        let checkBox = currentWork.querySelector(
            `.show-desc-btn.${projectName}`,
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
            Work at Revisual Labs
            <div class={`chevron ${projectName}`} />
        </div>
        <div class="work-banner">
            <div class="banner-img-container">
                <img
                    src="projects/Revisual/career-overview.png"
                    alt="streamgraph showing the career overview for Schubert"
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
                    Since September 2023, I have been working as a data
                    visualisation developer for <a
                        href="https://www.revisual.co"
                        target="_blank"
                        rel="noreferrer">Revisual Labs</a
                    >, an information design firm based out of India. As things
                    progress, I will update this section with some of the
                    amazing stuff we're working on!
                </div>
            </div>

            <div class="work-field">
                <div class="work-field-title">The Work</div>
                <div class="work-field-desc">
                    The majority of work involves writing code in <strong
                        >D3</strong
                    >
                    and <strong>Svelte</strong> for reusable graphics for use
                    within the organisation, as well as work on interactive
                    stories and dashboards for client data.

                    <br /><br />
                    While I have completed work on several projects with Revisual,
                    with the recent launch of the firm, not a lot of the projects
                    are accessible to the public as of yet. So I will update this
                    section as and when things are revealed.
                </div>
            </div>
        </div>

        <div class="results-grid">
            <div class="grid-img-container grid-item">
                <img
                    src="projects/Revisual/career-overview.png"
                    alt="streamgraph showing the career overview for Schubert"
                    class="grid-item"
                />
            </div>
        </div>

        <br />

        <!-- 
            
        <div class="results-grid">
            <div class="grid-item grid-item--result">
                <div class="work-field-title">The Result</div>
                <div class="work-field-desc">
                    The final short static piece that dove into how grassroots
                    innovations varied across different regions and their
                    <strong>readiness to scale to meet local needs</strong>.
                    <br /><br />
                    It highlighted the progress of the Summit in capturing these
                    solutions and where local efforts are focused.
                </div>

                <a
                    href="https://schubert-da.github.io/dvs-world-summit/"
                    target="_blank"
                    rel="noreferrer">View project</a
                >
            </div>
            <img
                src="projects/Summit/summit-maps.png"
                alt="summit-maps"
                class="grid-item--summit-maps grid-item"
            />
            <img
                src="projects/Summit/summit-bar-chart.png"
                alt="summit-bar-chart"
                class="grid-item--summit-bar-chart grid-item"
            />
            <img
                src="projects/Summit/summit-table.png"
                alt="summit-table"
                class="grid-item--summit-table grid-item"
            />
        </div>
         -->
    </div>
</div>

<style>
    /* PREVIEW IMAGE STYLING */
    .work-banner {
        display: block;
        background-color: #e9c569;
    }

    .banner-img-container {
        display: flex;
        padding: 10px 0 15px 10px;
        height: 350px;
    }

    .grid-img-container {
        width: 100%;
        height: auto;
        padding: 10px;
        background-color: #e9c569;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .work-banner .banner-img-container img {
        box-shadow: none !important;
        /* border: 1px solid #999; */
        height: auto;
        width: auto;
        max-width: 100%;
        max-height: 100%;
        margin: auto;
        margin-right: 10px;
    }

    .grid-img-container img {
        box-shadow: none !important;
        height: auto;
        width: auto;
        max-width: 100%;
        max-height: 100%;
        margin: auto;
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
        background-color: #666;

        display: grid;
        grid-template-columns: repeat(3, 1fr);
        column-gap: 10px;
        grid-template-rows: repeat(1, 300px);
        row-gap: 14px;
    }

    .grid-item--result {
        grid-row: 1/4;
        grid-column: 1/2;

        padding: 10px 15px;
        background-color: #efefef;
        border-radius: 8px;
        box-shadow: none !important;
        padding-right: 20px;
    }

    .grid-item--result .work-field-title {
        margin-top: 0;
    }

    .grid-item--summit-maps {
        margin-top: auto;
        grid-row: 1/4;
        grid-column: 2/4;
    }

    .grid-item--summit-bar-chart {
        margin-left: auto;
        grid-row: 4/6;
        grid-column: 1/3;
    }

    .grid-item--summit-table {
        grid-row: 4/6;
        grid-column: 3/5;
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
