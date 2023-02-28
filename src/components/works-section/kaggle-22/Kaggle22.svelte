<script>
// @ts-nocheck

    let project_name = "kaggle22";

    function toggleExpansion() {
        let checkBox = document.getElementById("show-desc");
        let chevron = document.querySelector(".chevron.kaggle22");

        if (checkBox.checked == true) {
            chevron.style.transform = "rotate(135deg)";
        } else {
            chevron.style.transform = "rotate(-45deg)"; 
        }
    }
</script>

<div class="work-container">
    <label for="show-desc">
        <div class="work-header-title">
            State of Low-Code in Data
            <div class="chevron kaggle22" />
        </div>
    </label>
    <input
        type="checkbox"
        name="show-desc"
        id="show-desc"
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
                src="/projects/Kaggle22/area-bi.png"
                alt="area charts"
                class="grid-item--area-bi grid-item"
            />
            <img
                src="/projects/Kaggle22/line-chart.png"
                alt="line chart"
                class="grid-item--line-chart grid-item"
            />
            <img
                src="/projects/Kaggle22/table.png"
                alt="table"
                class="grid-item--table grid-item"
            />
        </div>
    </div>
</div>

<style>

    /* GRID STYLING */

    .results-grid {
        background-color: #aec0b8;

        display: grid;
        grid-template-columns: repeat(3, 1fr);
        column-gap: 10px;
        grid-template-rows: repeat(3, 200px);
        row-gap: 10px;
    }

    .grid-item--result {
        grid-row: 1/2;
        grid-column: 1/2;

        box-shadow: none !important;
        padding-right: 20px;
    }

    .grid-item--result .work-field-title {
        margin-top: 0;
    }

    .grid-item--table {
        grid-row: 3/4;
        grid-column: 2/4;
    }

    .grid-item--area-bi {
        grid-row: 1/3;
        grid-column: 2/4;
    }

    .grid-item--line-chart {
        grid-row: 2/4;
        grid-column: 1/2;
    }
</style>
