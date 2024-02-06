<div class="work-container--redesign">
    <div class="work-header">
        <div class="image-container">
            <div class="image-track image-track-1">
                <img
                    src="/projects/Summit/summit-maps.png"
                    alt="map for the world dataviz prize project"
                />
            </div>
            <div class="image-track image-track-2">
                <img
                    src="/projects/Summit/summit-bar-chart.png"
                    alt="bar chart for the world dataviz prize project"
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

    <div class="work-body"></div>
</div>

<style lang="scss">
    .work-container--redesign {
        .work-header {
            padding: 25px;
            background-color: #fefefe;
            border: 1px solid #d2d2d2;
            border-radius: 15px;

            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;

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
                        // position: absolute;
                    }

                    &.image-track-1 {
                        background-color: #efefef;

                        img {
                            transform: translate(-10%, -50%);
                            animation: translateYAnimation 6s infinite alternate;
                        }
                    }

                    &.image-track-2 {
                        background-color: #efefef;

                        img {
                            transform: translate(-2%, -20%);
                            animation: translateYAnimation 6s infinite alternate-reverse;
                        }
                    }
                }
            }
        }
    }

    @keyframes translateYAnimation {
        0% {
            transform: translate(-10%, -200px);
        }
        100% {
            transform: translate(-10%, +0px);
        }
    }
</style>
