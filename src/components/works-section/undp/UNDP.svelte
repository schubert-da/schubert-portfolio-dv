<script>
    // @ts-nocheck

    let projectName = "undp";

    function toggleExpansion() {
        let currentWork = document.querySelector(`.work-container.${projectName}`)
        let checkBox = currentWork.querySelector(`.show-desc-btn.${projectName}`);
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

<div class="{`work-container ${projectName}`}">
    <label for="{`show-desc-${projectName}`}">
        <div class="work-header-title">
            United Nations Development Program
            <div class="{`chevron ${projectName}`}" />
        </div>
        <div class="work-banner">
            <div class="banner-img-container">
                <img
                    src="/projects/UNDP/undp-banner.png"
                    alt="preview for undp project"
                    class="grid-item"
                />
                <div class="filler-rect" />
            </div>
        </div>
    </label>
    <input
        type="checkbox"
        name="{`show-desc-${projectName}`}"
        id="{`show-desc-${projectName}`}"
        class="{`show-desc-btn ${projectName}`}"
        on:click={toggleExpansion}
    />
    <div class="details-container">
        <div class="work-text">
            <div class="work-field">
                <div class="work-field-title">Brief</div>
                <div class="work-field-desc">
                    For my Kaggle ML and DS Survey 2022 submission, I looked at
                    how data professionals were using low-code tools to quickly
                    build and deploy data pipelines without the need for complex
                    code.
                </div>
            </div>

            <div class="work-field">
                <div class="work-field-title">My approach</div>
                <div class="work-field-desc">
                    This competition entry won a runner-up spot in the
                    competition. It used data from various low-code trend
                    industry reports as well as Kaggle survey data to look into
                    the usage of these tools.
                    <br /><br />
                    The notebook contains graphs in Python, with more involved graphs
                    and tables using <strong>Markdown</strong> +
                    <strong>CSS</strong>.
                </div>
            </div>
        </div>

        <br />

        <div class="results-grid">
            <div class="grid-item grid-item--result">
                <div class="work-field-title">The Result</div>
                <div class="work-field-desc">
                    This competition entry won a runner-up spot in the
                    competition. It used data from various low-code trend
                    industry reports as well as Kaggle survey data to look into
                    the usage of these tools.
                </div>
            </div>
            <img
                src="/projects/UNDP/undp-blocks.png"
                alt="undp-blocks"
                class="grid-item--undp-blocks grid-item"
            />
            <img
                src="/projects/UNDP/undp-bars.png"
                alt="line chart"
                class="grid-item--undp-bars grid-item"
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
        height: 300px;
    }

    .work-banner .banner-img-container img {
        box-shadow: none !important;
        /* border: 1px solid #999; */
        width: 80%;
        margin: auto;
    }

    .work-banner .banner-img-container .filler-rect {
        /* width: 100%;
        height: 100%;
        background: #aec0b8;
        box-shadow: none !important;
        border-left: 5px solid #aaa; */
        display: none;
    }

    /* GRID STYLING */
    .results-grid {
        background-color: #aec0b8;

        display: grid;
        grid-template-columns: repeat(4, 1fr);
        column-gap: 10px;
        grid-template-rows: repeat(3, 160px);
        row-gap: 10px;
    }

    .grid-item--result {
        grid-row: 1/2;
        grid-column: 1/3;

        box-shadow: none !important;
        padding-right: 20px;
    }

    .grid-item--result .work-field-title {
        margin-top: 0;
    }

    .grid-item--undp-blocks {
        grid-row: 1/3;
        grid-column: 3/5;
    }

    .grid-item--undp-bars {
        grid-row: 2/4;
        grid-column: 1/3;
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

        .grid-item--result {
            padding-right: 0px;
            margin-bottom: 2.4rem;
        }
    }
</style>
