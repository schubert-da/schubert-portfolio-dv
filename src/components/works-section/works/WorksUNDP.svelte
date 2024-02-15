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
                    src="/projects/UNDP/undp-bars.png"
                    alt="stacked bar charts for UNDP project"
                    style="transform: translate(-40%, {computeImageScroll( 150, 300, scrollInfo.index)}px);"
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
        .image-track-1 {
            background-color: #fff;
        }

        .image-track-2 {
            background-color: #fff;
        }
    }
</style>
