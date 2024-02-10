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
    class="work-container--redesign" 
    class:active={index === scrollInfo.index}
>
    <div class="work-header" on:click={()=> toggleBodySection()}>
        <div class="image-container">
            <div class="image-track image-track-1">
                <img
                    src="/projects/Summit/summit-maps.png"
                    alt="map for the world dataviz prize project"
                    style="transform: translate(-10%, {computeImageScroll( 10, 300, scrollInfo.index)}px);"
                />
            </div>
            <div class="image-track image-track-2">
                <img
                    src="/projects/Summit/summit-bar-chart.png"
                    alt="bar chart for the world dataviz prize project"
                    style="transform: translate(-2%, {computeImageScroll( -200, 300, scrollInfo.index, true)}px);"
                />
            </div>
        </div>

        <div class="text-container">
            <div class="title">
                <h2>The World Data Visualization Prize 2023</h2>
            </div>
            <div class="subtitle">
                The World Data Visualization Prize (2023) was a competition
                hosted by the <strong>World Government Summit</strong> which throws
                a spotlight on the progress made by world governments through data.
            </div>
        </div>
    </div>

    {#if hideBodySection === false}
        <div class="work-body">

            <div class="body-section">
                <div class="section-desc">
                    <a class="site-link"
                        href="https://schubert-da.github.io/dvs-world-summit/"
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
                    The World Data Visualization Prize (2023) was a competition
                    hosted by the <strong>World Government Summit</strong> which throws
                    a spotlight on the progress made by world governments through data.
                </div>
            </div>
            
            <div class="body-section">
                <div class="section-title">
                    <h2>MY APPROACH</h2>
                </div>
                <div class="section-desc">
                    The World Government Summit provided data on the achievements of governments 
                    in health, poverty, world hunger, etc. The aim of the competition was to create 
                    an insightful data story to put into context the progress made by world governments 
                    in the last ten years.
                    <br><br>
                    With a large amount of time series data on achievements of governments in health, 
                    poverty, world hunger, etc, I started by looking for trends in the progress. With 
                    each measure we saw a general trend - there would be steady progress at the start then 
                    it would plateau later on, only to have years worth of progress erased by the global pandemic in 2019.
                    <br><br>
                    My initial goal was to understand exactly how COVID-19 threw us off track from 
                    achieving our goals. However as I started to look over the data, I quickly realised 
                    that in most cases we were far from achieving the set goals even if all things went 
                    smoothly - and this is what guided the new angle that I took this data story. Now my focus 
                    was to understand where global development had stagnated in recent years and how things 
                    worsened with covid.
                </div>
            </div>

            <div class="body-section">
                <div class="section-title">
                    <h2>TOOLS</h2>
                </div>
                <div class="section-desc">
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
    {/if}
</div>

<style lang="scss">
    .work-container--redesign {

        margin-bottom: 30px;

        transition: transform 0.2s ease-in;
        &.active {
            transform: scale(1.02);
        }

        .work-header {
            padding: 25px;
            background-color: #fefefe;
            border: 1px solid #d2d2d2;
            border-radius: 15px;

            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            
            cursor: pointer;

            box-shadow:
                rgba(0, 0, 0, 0.25) 0px 14px 28px,
                rgba(0, 0, 0, 0.22) 0px 10px 10px;

            .text-container {
                width: 30%;

                .title h2 {
                    font-size: 36px;
                    line-height: 1.0;
                    letter-spacing: -2px;
                }
            }

            .image-container {
                width: 66%;

                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;

                .image-track {
                    --track-padding: 3px;

                    height: 70vh;
                    border: 1px solid #afafaf;
                    width: calc(50% - var(--track-padding));
                    overflow: hidden;

                    position: relative;

                    &:first-of-type {
                        margin-right: var(--track-padding);
                    }

                    img {
                        transition-timing-function: ease-in-out;
                    }

                    &.image-track-1 {
                        background-color: #efefef;

                        img {
                            // transform: translate(-10%, -50%);
                        }
                    }

                    &.image-track-2 {
                        background-color: #efefef;

                        img {
                            // transform: translate(-2%, -20%);
                        }
                    }
                }
            }
        }

        .work-body {
            --body-overlap: 20px;
                
            position: relative;
            z-index: -1;

            margin-top: calc(-1 * var(--body-overlap));
            padding: calc(20px + var(--body-overlap)) 30px 30px 30px;

            background-color: #98ACB1;

            border: 4px solid #F5F5F5;
            border-bottom-left-radius: 15px;
            border-bottom-right-radius: 15px;

            box-shadow:
                rgba(0, 0, 0, 0.25) 0px 14px 28px,
                rgba(0, 0, 0, 0.22) 0px 10px 10px;

            .body-section {
                width: clamp(300px, 70%, 60ch);
                margin: 0 auto 20px auto;

                .section-title h2{
                    margin-top: 0;
                    margin-bottom: 5px;
                }

                a.site-link {
                    display: block;
                    color: #efefef;
                    background: #444;
                    text-transform: uppercase;

                    text-decoration: none;
                    font-size: 1.6rem;

                    width: fit-content;
                    border: 2px solid #efefef;
                    border-radius: 2px;
                    padding: 6px 10px;
                    margin: 10px 0;

                    transition: all 0.2s ease-in;

                    &:hover {
                        opacity: 0.9;
                        transform: scale(1.01);
                        box-shadow: rgba(3, 0, 0, 0.25) 0px 4px 5px,
                    }
                }
            }
        }
    }
</style>
