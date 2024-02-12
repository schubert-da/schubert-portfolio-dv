<script>
    export let index = 0;
    export let scrollInfo;

    function computeImageScroll( start, scrollSpeed, currentIndex, reverse = false ) {
        if(index !== currentIndex || scrollInfo.offset <= 0) {
            return start;
        }
        else {
            let reverseMultiplier = reverse === false ? 1: -1;
            return start - scrollInfo.offset * scrollSpeed * reverseMultiplier;
        }
    }

    let hideBodySection = true;

    function toggleBodySection(){
        hideBodySection = !hideBodySection;
    }
    
</script>
<div 
    id="project-container-{index}"
    class="work-container--redesign" 
    class:active={index === scrollInfo.index}
>
    <div class="work-header" on:click={()=> toggleBodySection()}>
        <div class="image-container">
            <div class="image-track image-track-1">
                <img
                    src="/projects/Kaggle22/line-chart.png"
                    alt="stacked bar charts for UNDP project"
                    style="transform: translate(-40%, {computeImageScroll( 150, 300, scrollInfo.index)}px);"
                />
            </div>
            <div class="image-track image-track-2">
                <img
                    src="/projects/Kaggle22/area-bi.png"
                    alt="tile chart for UNDP project"
                    style="transform: translate(-34%, {computeImageScroll( -400, 300, scrollInfo.index, true)}px);"
                />
            </div>
        </div>

        <div class="text-container">
            <div class="title">
                <h2>State of Low-Code in Data</h2>
            </div>
            <div class="subtitle">
                Winning entry for the  Kaggle Machine Learning and Data Science 
                Survey 2022 competition, where I looked at how data professionals 
                were using low-code tools to quickly build and deploy data 
                pipelines without the need for complex code.
            </div>
        </div>
    </div>

    {#if hideBodySection === false}
        <div class="work-body">

            <div class="body-section">
                <div class="section-desc">
                    <a class="site-link"
                        href="https://schubert-da.github.io/undp/"
                        target="_blank"
                        rel="noreferrer">View project</a
                    >
                </div>
            </div>
            
            <div class="body-section">
                <div class="section-title">
                    <h2>BRIEF</h2>
                </div>
                <div class="section-desc">
                    For my Kaggle ML and DS Survey 2022 submission, I looked at
                    how data professionals were using low-code tools to quickly
                    build and deploy data pipelines without the need for complex
                    code.
                </div>
            </div>
            
            <div class="body-section">
                <div class="section-title">
                    <h2>MY APPROACH</h2>
                </div>
                <div class="section-desc">
                    This competition entry won a runner-up spot in the
                    competition. It used data from various low-code trend
                    industry reports as well as Kaggle survey data to look into
                    the usage of these tools.
                    <br /><br />
                    
                </div>
            </div>

            <div class="body-section">
                <img
                    src="/projects/Kaggle22/table.png"
                    alt="tile chart for UNDP project"
                />
            </div>

            <div class="body-section">
                <div class="section-title">
                    <h2>TOOLS</h2>
                </div>
                <div class="section-desc">
                    The notebook contains graphs in Python(with Plotly), with 
                    more involved graphs and tables using <strong>Markdown</strong> 
                    + <strong>CSS</strong>. The graphs created with CSS (eg. the above tables) 
                    were created with HTML elements, inspired by how Svelte uses data to
                    c                
                </div>
            </div>
        </div>
    {/if}
</div>

<style lang="scss">
    .work-container--redesign {
        .image-track-1 {
            background-color: #fff;
        }

        .image-track-2 {
            background-color: #fff;
        }
    }
</style>
