<script>
    import Kaggle22 from "./kaggle-22/Kaggle22.svelte";
    import Kaggle from "./kaggle/Kaggle.svelte";
    import Undp from "./undp/UNDP.svelte";
</script>

<div class="container">
    <div class="section-header" id="works-section">Projects</div>

    <Kaggle22 />
    <Kaggle />
    <Undp />
</div>

<style>
    .section-header {
        font-size: 3rem;
        letter-spacing: -0.5px;
        margin: 0 15% 0 5%;
        font-weight: 700;
        line-height: 1.4;
        padding-bottom: 1rem;
        margin-bottom: 1rem;
        text-transform: uppercase;
    }

    .container {
        width: 80%;
        margin: 4rem auto 0rem auto;
    }

    .container :global(.work-container) {
        display: flex;
        flex-direction: column;

        border: 1px solid #999;
        border-radius: 4px;
        box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
            rgba(0, 0, 0, 0.23) 0px 6px 6px;
        overflow: hidden;

        margin: 0rem 15% 4rem 5%;
    }

    .container :global(.work-container > div.details-container > div) {
        padding: 2.5rem 2.5rem 2.5rem 2.5rem;
    }

    .container :global(.work-header-title) {
        color: #444;
        text-transform: uppercase;
        letter-spacing: -1.2px;

        font-size: 2.6rem;
        font-weight: 700;
        padding: 2rem !important;
        border-bottom: 2px solid #999;
    }

    .container :global(.work-field-title) {
        color: #444;
        text-transform: uppercase;
        letter-spacing: -1px;

        font-size: 2.4rem;
        font-weight: 600;
        margin-top: 0;
    }

    .container :global(.work-field:not(:first-of-type) .work-field-title) {
        margin-top: 2.6rem;
    }

    .container :global(.work-field-desc) {
        color: #444;
        max-width: 55ch;
        margin-top: 5px;

        font-size: 1.6rem;
        line-height: 1.2;
    }

    .container :global(.results-grid a) {
        display: block;
        
        color: #efefef;
        background: #444;
        text-decoration: none;
        font-size: 1.6rem;
        width: fit-content;
        border-radius: 2px;
        padding: 6px 10px;
        margin: 10px 0;
    }

    /* EXPANSION PANEL STYLING */
    .container :global(.details-container) {
        opacity: 0;
        height: auto;
        max-height: 0;
        overflow: hidden;
    }

    .container :global(.show-desc-btn) {
        display: none;
    }

    .container :global(.show-desc-btn:checked + .details-container) {
        opacity: 1;
        max-height: 1500px;
        transition: all 1s 0s ease-in;
    }

    .container :global(.show-desc-btn:not(:checked) + .details-container) {
        opacity: 0;
        height: auto;
        max-height: 0;
        transition: max-height 0.5s 0s ease-out, opacity 0.2s 0s ease-out;
    }

    .container :global(.chevron) {
        border-style: solid;
        border-width: 0.25em 0.25em 0 0;
        content: "";
        height: 0.45em;
        position: relative;
        top: 10px;
        right: 10px;
        float: right;

        transform: rotate(135deg);
        vertical-align: top;
        width: 0.45em;

        transition: all 0.3s 0s ease-in-out;
    }

    /* GRID STYLING */
    .container :global(.grid-item) {
        width: auto;
        height: auto;
        max-width: 100%;
        max-height: 100%;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px,
            rgba(0, 0, 0, 0.23) 0px 3px 6px;
    }

    @media (max-width: 480px) {
        .container {
            width: fit-content;
            margin: 1rem;
        }

        .container :global(.work-container) {
            margin: 0rem;
            margin-bottom: 1.5rem;
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
            border: 1px solid #aaa;
        }

        .container :global(.work-header-title) {
            letter-spacing: -1.2px;
            width: auto;
            font-size: 1.8rem;
            font-weight: 700;
            padding: 1rem !important;
            border-bottom: 2px solid #aaa;
        }

        .container :global(.chevron) {
            top: 3px;
        }

        .container :global(.work-field-desc) {
            font-size: 1.6rem;
        }

        .container :global(.work-field-title) {
            font-size: 1.8rem;
            letter-spacing: -0.4px;
        }
    }
</style>
