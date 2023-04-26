<script>
    // @ts-nocheck

    let projectName = "summit";

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
            The World Data Visualization Prize
            <div class={`chevron ${projectName}`} />
        </div>
        <div class="work-banner">
            <div class="banner-img-container">
                <img
                    src="projects/Summit/summit-banner.png"
                    alt="preview for summit project"
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
                    The World Data Visualization Prize (2023) was a competition
                    hosted by the <strong>World Government Summit</strong> which
                    throws a spotlight on the progress made by world governments
                    through data.
                </div>
            </div>

            <div class="work-field">
                <div class="work-field-title">My approach</div>
                <div class="work-field-desc">
                    The World Government Summit provided data on the
                    achievements of governments in health, poverty, world
                    hunger, etc. The aim of the competition was to create an
                    insightful data story to put into context the progress made
                    by world governments in the last ten years.

                    <br /><br />

                    With a large amount of time series data on achievements of
                    governments in health, poverty, world hunger, etc, I started
                    by looking for trends in the progress. With each measure we
                    saw a general trend - there would be steady progress at the
                    start then it would plateau later on, only to have years
                    worth of progress erased by the global pandemic in 2019.

                    <br /><br />

                    My initial goal was to understand exactly how COVID-19 threw
                    us off track from achieving our goals. However as I started
                    to look over the data, I quickly realised that
                    <strong
                        >in most cases we were far from achieving the set goals</strong
                    >
                    even if all things went smoothly - and this is what guided the
                    new angle that I took this data story. Now my focus was to understand
                    where global development had stagnated in recent years and how
                    things worsened with covid.

                    <br /><br />
                </div>

                <div class="work-field">
                    <div class="work-field-title">Tools</div>
                    <div class="work-field-desc">
                        Svelte seemed a no-brainer for this project - it would
                        be a longer piece divided with sections for different
                        metrics, each having their own writeups and charts which
                        would benefit from a bit of modularity. There would be a
                        fair bit of reuse too since the general format of each
                        section would remain the same.

                        <br /><br />

                        Lastly, one tool which made this project MUCH easier was
                        <a href="https://milton.fun/"><strong>Milton</strong></a>, an
                        AI2HTML-like plugin for Figma created by the folks over
                        at The Telegraph. This let me quickly create responsive
                        charts directly from Figma which greatly sped up my
                        workflow.
                    </div>
                </div>
            </div>
        </div>

        <br />

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
        padding: 10px 0 15px 10px;
        height: 350px;
    }

    .work-banner .banner-img-container img {
        box-shadow: none !important;
        /* border: 1px solid #999; */
        height: auto;
        width: auto;
        max-width: 100%;
        max-height: 100%;
        margin: auto;
        margin-right: 20px;
    }

    .work-banner .banner-img-container .filler-rect {
        width: 100%;
        height: 100%;
        background: #444;
        box-shadow: none !important;
        border-left: 4px solid #aaa;
        display: block;
    }

    /* GRID STYLING */
    .results-grid {
        background-color: #666;

        display: grid;
        grid-template-columns: repeat(3, 1fr);
        column-gap: 10px;
        grid-template-rows: repeat(5, 180px);
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
