<script>
</script>

<div class="skills-section" id="skills-section">
    <div class="skills-container">
        <div class="section-header">Skills</div>
        <div class="skill-group">
            <div class="skill-group-header">I have worked with</div>
            <div class="skill-group-desc">
                These are some of the things I picked up working in a
                professional setting, as a Frontend Dev for two years.
            </div>
        </div>
        <div class="skill-group">
            <div class="skill-group-name">
                HTML, CSS and JavaScript / Typescript
            </div>
            <div class="skill-group-desc">
                I have a good grasp over CSS concepts and can write clean
                JavaScript (and TypeScript) code.
            </div>
        </div>
        <div class="skill-group">
            <div class="skill-group-name">Angular, AngularJS</div>
            <div class="skill-group-desc">
                I primarily work with Angular to create reusable components and
                web pages. However, I am always keen to learn new
                frameworks/libraries as a project might demand.
            </div>
        </div>
        <div
            class="skill-group"
            style="border-bottom: 2px solid #2f3238; margin-bottom: 2rem;"
        >
            <div class="skill-group-name">Git, Agile</div>
            <div class="skill-group-desc">
                I have worked with version control systems and have experience
                in work environments following Agile Scrum Methodology
            </div>
        </div>
        <div class="skill-group">
            <div class="skill-group-header">I also dabble with</div>
            <div class="skill-group-desc">
                These include some of the things I enjoy working with and taught
                myself over the years.
            </div>
        </div>
        <div class="skill-group">
            <div class="skill-group-name">
                Python - Pandas, Visualisation libraries
            </div>
            <div class="skill-group-desc">
                My go-to scripting language when it comes to analysing,
                transforming and cleaning data.
            </div>
        </div>
        <div class="skill-group">
            <div class="skill-group-name">D3.js, Svelte</div>
            <div class="skill-group-desc">
                Good foundation in using D3 to create custom visuals. Experience
                using Svelte to develop one-off dataviz pieces.
            </div>
        </div>
        <div class="skill-group">
            <div class="skill-group-name">Figma</div>
            <div class="skill-group-desc">
                Have a good understanding UI/UX principles (and in collaborating
                with designers). I have also used Figma in the past to prototype
                and wireframe projects.
            </div>
        </div>
        <div class="skill-group">
            <div class="skill-group-name">Tableau, Datawrapper, RawGraphs</div>
            <div class="skill-group-desc" />
        </div>
        <div class="skill-group">
            <div class="skill-group-name">Three.JS, GSAP, SVG/WebGL</div>
            <div class="skill-group-desc">
                Several JavaScript libraries/tools that I have used on projects
                over the years.
            </div>
        </div>
    </div>
</div>

<style>
    .skills-section {
        margin-top: 8rem;
        padding: 5rem 15%;
        background: #aec0b8;
        border-bottom: 3.2px solid #939e99;
        border-top: 3.2px solid #939e99;
    }

    .section-header {
        font-size: 3rem;
        letter-spacing: -0.5px;
        border-bottom: 2px solid #2f3238;
        font-weight: 700;
        line-height: 1.4;
        padding-bottom: 1rem;
        margin-bottom: 1rem;
        text-transform: uppercase;
    }

    .skills-container {
        margin: 0 15% 0 5%;
        display: flex;
        flex-direction: column;
    }

    .skill-group {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        margin-bottom: 10px;
        padding-bottom: 14px;
        border-bottom: 1px dashed #4c4752;
    }

    .skill-group-header {
        align-self: center;
        text-transform: uppercase;
        letter-spacing: -0.5px;

        width: 40%;
        font-size: 2.4rem;
        font-weight: 600;
        padding-right: 1rem;
    }

    .skill-group-name {
        width: 40%;
        font-size: 2rem;
        padding-right: 1rem;
    }

    .skill-group-desc {
        font-size: 1.7rem;
        line-height: 1.3;
        width: 60%;
    }

    @media (max-width: 480px) {
        .skills-section {
            padding: 2rem 2rem;
        }
        .skills-container {
            margin: 0 2%;
        }

        .skill-group-header {
            width: 40%;
            font-size: 1.6rem;
        }

        .skill-group-name {
            width: 40%;
            font-size: 1.6rem;
        }

        .skill-group-desc {
            font-size: 1.4rem;
            width: 60%;
        }
    }
</style>
