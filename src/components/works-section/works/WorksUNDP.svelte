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
                    src="/projects/UNDP/undp-bars.png"
                    alt="stacked bar charts for UNDP project"
                    style="transform: translate(-20%, {computeImageScroll( 150, 300, scrollInfo.index)}px);"
                />
            </div>
            <div class="image-track image-track-2">
                <img
                    src="/projects/UNDP/undp-blocks.png"
                    alt="tile chart for UNDP project"
                    style="transform: translate(-5%, {computeImageScroll( -400, 300, scrollInfo.index, true)}px);"
                />
            </div>
        </div>

        <div class="text-container">
            <div class="title">
                <h2>United Nations Development Program</h2>
            </div>
            <div class="subtitle">
                A data story on the work done by the <strong>UNDP 
                Accelerator Labs Network </strong> which tracks and 
                documents regional progress towards achieving
                the UN's SDGs (Sustainable Development Goals).
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
                    A data story on the work done by the <strong>UNDP 
                    Accelerator Labs Network</strong> which tracks and 
                    documents regional progress towards achieving
                    the UN's SDGs (Sustainable Development Goals).
                </div>
            </div>
            
            <div class="body-section">
                <div class="section-title">
                    <h2>MY APPROACH</h2>
                </div>
                <div class="section-desc">
                    In this project I wanted to give a broad overview of the
                    work done by UNDP and give a sense of the measures adopted
                    by communities in developing regions. The work would show
                    the <strong> importance of grassroots innovation and the 
                    value of local change </strong>
                    affected by people solving their most immediate problems.

                    <br /><br />

                    Data included details of the individual solutions recorded
                    by the Accelerator labs in different countries which formed
                    the basis of the analysis.

                    <br /><br />

                    I decided on using <strong>Svelte</strong> for the project early
                    on because the shorter deadline for submission meant that I would
                    more than likely be reusing charts and the modularity also goes
                    a long way on these single-page projects.
                </div>
            </div>

            <div class="body-section">
                <img
                    src="/projects/UNDP/undp-blocks.png"
                    alt="tile chart for UNDP project"
                />
            </div>

            <div class="body-section">
                <div class="section-title">
                    <h2>TOOLS</h2>
                </div>
                <div class="section-desc">
                    The entire project was completed with D3 and Svelte.
                    <br>
                    An interesting detail is that not a single SVG was used for any of the charts 
                    throughout the project. All graphics were created with basic HTML elements manipulated
                    with Svelte based on the data.
                </div>
            </div>
        </div>
    {/if}
</div>

<style lang="scss">
    .work-container--redesign {
        --small-screen-breakpoint: 600px;
        max-width: 95vw;

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

                    height: 70vmin;
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
                        background-color: #fff;

                        img {
                            // transform: translate(-10%, -50%);
                        }
                    }

                    &.image-track-2 {
                        background-color: #fff;

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

                img {
                    width: 100%;
                    height: auto;
                    border: 2px solid #666;
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

    @media(max-width: 950px) {

        .work-container--redesign{

            .work-header{
                padding: 15px;
                display: flex;
                flex-direction: column-reverse;

                .text-container {
                    width: 100%;
                    margin-bottom: 20px;

                    .title h2 {
                        font-size: 30px;
                        margin-top: 0px;
                        margin-bottom: 10px;
                        line-height: 1.1;
                    }

                    .sub-title {
                        font-size: 16px;
                    }
                }

                .image-container {
                    width: 100%;

                    .image-track {
                        height: 90vmin;
                    }
                }
            }
        }
    }
</style>
