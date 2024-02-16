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
                    src="projects/Revisual/rvl-career-overview.png"
                    alt="stacked bar charts for UNDP project"
                    style="transform: translate(-33%, {computeImageScroll( 150, 300, scrollInfo.index)}px);"
                />
            </div>
            <div class="image-track image-track-2">
                <img
                src="projects/Revisual/rvl-data-bank.png"
                alt="a streamgraph depicting my evolution as a data visualization developer"
                style="transform: translate(-15%, {computeImageScroll( -300, 300, scrollInfo.index, true)}px);"
                />
            </div>
        </div>

        <div class="text-container">
            <div class="title">
                <h2>Work at Revisual Labs</h2>
            </div>
            <div class="subtitle">
                Since September 2023, I have been working as a <strong>Data
                Visualisation Engineer</strong> for <a href="https://www.revisual.co"
                target="_blank"  rel="noreferrer">Revisual Labs</a
                >, an information design firm based out of India. As things
                progress, I will update this section with some of the
                amazing stuff we're working on!
            </div>
        </div>
    </div>

    {#if hideBodySection === false}
        <div class="work-body">
            
            <div class="body-section">
                <div class="section-desc">
                    <a class="site-link"
                        href="https://www.revisual.co"
                        target="_blank"
                        rel="noreferrer">SOME OF OUR WORK</a
                    >
                </div>
            </div>
           
            
            <div class="body-section">
                <div class="section-title">
                    <h2>BRIEF</h2>
                </div>
                <div class="section-desc">
                    Since September 2023, I have been working as a <strong>Data
                    Visualisation Engineer</strong> for <a href="https://www.revisual.co"
                    target="_blank"  rel="noreferrer">Revisual Labs</a
                    >, an information design firm based out of India. As things
                    progress, I will update this section with some of the
                    amazing stuff we're working on!
                </div>
            </div>

            <div class="body-section">
                <img
                    src="projects/Revisual/rvl-data-bank.png"
                    alt="a data explorer showing a line chart of mobile subscription 
                    data for several countries"
                />
            </div>
            
            <div class="body-section">
                <div class="section-title">
                    <h2>THE WORK</h2>
                </div>
                <div class="section-desc">
                    The majority of work involves writing code in <strong>
                    D3</strong> and <strong>Svelte</strong> for reusable graphics for use
                    within the organisation, as well as work on interactive
                    stories and dashboards for client data.

                    <br /><br />
                    While I have completed work on several projects with Revisual,
                    with the recent launch of the firm, very few are accessible 
                    to the public as of yet. So I will update this section as 
                    and when things are rolled out.
                </div>
            </div>
        </div>
    {/if}
</div>

<style lang="scss">
    .work-container--redesign {
        .image-track-1 {
            background-color: #E9C569;
        }

        .image-track-2 {
            background-color: #fff;
        }
    }
</style>
