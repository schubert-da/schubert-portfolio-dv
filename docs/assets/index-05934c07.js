(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const v of a.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&r(v)}).observe(document,{childList:!0,subtree:!0});function s(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=s(o);fetch(o.href,a)}})();function m(){}function Q(t){return t()}function R(){return Object.create(null)}function W(t){t.forEach(Q)}function Y(t){return typeof t=="function"}function P(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function ee(t){return Object.keys(t).length===0}function b(t){return t??""}function n(t,e){t.appendChild(e)}function $(t,e,s){t.insertBefore(e,s||null)}function k(t){t.parentNode&&t.parentNode.removeChild(t)}function c(t){return document.createElement(t)}function B(t){return document.createTextNode(t)}function p(){return B(" ")}function K(t,e,s,r){return t.addEventListener(e,s,r),()=>t.removeEventListener(e,s,r)}function l(t,e,s){s==null?t.removeAttribute(e):t.getAttribute(e)!==s&&t.setAttribute(e,s)}function te(t){return Array.from(t.childNodes)}let V;function A(t){V=t}const H=[],J=[],F=[],X=[],se=Promise.resolve();let C=!1;function ie(){C||(C=!0,se.then(Z))}function G(t){F.push(t)}const O=new Set;let E=0;function Z(){if(E!==0)return;const t=V;do{try{for(;E<H.length;){const e=H[E];E++,A(e),re(e.$$)}}catch(e){throw H.length=0,E=0,e}for(A(null),H.length=0,E=0;J.length;)J.pop()();for(let e=0;e<F.length;e+=1){const s=F[e];O.has(s)||(O.add(s),s())}F.length=0}while(H.length);for(;X.length;)X.pop()();C=!1,O.clear(),A(t)}function re(t){if(t.fragment!==null){t.update(),W(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(G)}}const U=new Set;let le;function T(t,e){t&&t.i&&(U.delete(t),t.i(e))}function D(t,e,s,r){if(t&&t.o){if(U.has(t))return;U.add(t),le.c.push(()=>{U.delete(t),r&&(s&&t.d(1),r())}),t.o(e)}else r&&r()}function N(t){t&&t.c()}function I(t,e,s,r){const{fragment:o,after_update:a}=t.$$;o&&o.m(e,s),r||G(()=>{const v=t.$$.on_mount.map(Q).filter(Y);t.$$.on_destroy?t.$$.on_destroy.push(...v):W(v),t.$$.on_mount=[]}),a.forEach(G)}function q(t,e){const s=t.$$;s.fragment!==null&&(W(s.on_destroy),s.fragment&&s.fragment.d(e),s.on_destroy=s.fragment=null,s.ctx=[])}function oe(t,e){t.$$.dirty[0]===-1&&(H.push(t),ie(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function L(t,e,s,r,o,a,v,g=[-1]){const f=V;A(t);const i=t.$$={fragment:null,ctx:[],props:a,update:m,not_equal:o,bound:R(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(f?f.$$.context:[])),callbacks:R(),dirty:g,skip_bound:!1,root:e.target||f.$$.root};v&&v(i.root);let h=!1;if(i.ctx=s?s(t,e.props||{},(d,u,...w)=>{const y=w.length?w[0]:u;return i.ctx&&o(i.ctx[d],i.ctx[d]=y)&&(!i.skip_bound&&i.bound[d]&&i.bound[d](y),h&&oe(t,d)),u}):[],i.update(),h=!0,W(i.before_update),i.fragment=r?r(i.ctx):!1,e.target){if(e.hydrate){const d=te(e.target);i.fragment&&i.fragment.l(d),d.forEach(k)}else i.fragment&&i.fragment.c();e.intro&&T(t.$$.fragment),I(t,e.target,e.anchor,e.customElement),Z()}A(f)}class M{$destroy(){q(this,1),this.$destroy=m}$on(e,s){if(!Y(s))return m;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(s),()=>{const o=r.indexOf(s);o!==-1&&r.splice(o,1)}}$set(e){this.$$set&&!ee(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function ne(t){let e;return{c(){e=c("div"),e.innerHTML=`<div class="home-container svelte-1yrldur"><h1 class="home-heading svelte-1yrldur">Hi I&#39;m <span class="svelte-1yrldur">Schubert!</span></h1> 
        <div class="text-home svelte-1yrldur"><strong>FRONTEND DEVELOPER</strong></div> 
        <div class="text-home-small svelte-1yrldur">I am a web developer with a keen interest for responsive web design
            and creating interactive visuals.
            <br/><br/>
            I have a passion for using data to tell stories and solve problems, and
            I am constantly seeking out new ways to use visualization to make data
            more accessible and meaningful to a wide range of audiences.</div></div>`,l(e,"id","home-section"),l(e,"class","svelte-1yrldur")},m(s,r){$(s,e,r)},p:m,i:m,o:m,d(s){s&&k(e)}}}class ae extends M{constructor(e){super(),L(this,e,null,ne,P,{})}}function de(t){let e;return{c(){e=c("div"),e.innerHTML=`<div class="skills-container svelte-1tja9ry"><div class="section-header svelte-1tja9ry">Skills</div> 
        <div class="skill-group svelte-1tja9ry"><div class="skill-group-header svelte-1tja9ry">I have worked with</div> 
            <div class="skill-group-desc svelte-1tja9ry">These are some of the things I picked up working in a
                professional setting, as a Frontend Dev for two years.</div></div> 
        <div class="skill-group svelte-1tja9ry"><div class="skill-group-name svelte-1tja9ry">HTML, CSS and JavaScript / Typescript</div> 
            <div class="skill-group-desc svelte-1tja9ry">I have a good grasp over CSS concepts and can write clean
                JavaScript (and TypeScript) code.</div></div> 
        <div class="skill-group svelte-1tja9ry"><div class="skill-group-name svelte-1tja9ry">Angular, AngularJS</div> 
            <div class="skill-group-desc svelte-1tja9ry">I primarily work with Angular to create reusable components and
                web pages. However, I am always keen to learn new
                frameworks/libraries as a project might demand.</div></div> 
        <div class="skill-group svelte-1tja9ry" style="border-bottom: 2px solid #2f3238; margin-bottom: 2rem;"><div class="skill-group-name svelte-1tja9ry">Git, Agile</div> 
            <div class="skill-group-desc svelte-1tja9ry">I have worked with version control systems and have experience
                in work environments following Agile Scrum Methodology</div></div> 
        <div class="skill-group svelte-1tja9ry"><div class="skill-group-header svelte-1tja9ry">I also dabble with</div> 
            <div class="skill-group-desc svelte-1tja9ry">These include some of the things I enjoy working with and taught
                myself over the years.</div></div> 
        <div class="skill-group svelte-1tja9ry"><div class="skill-group-name svelte-1tja9ry">Python - Pandas, Visualisation libraries</div> 
            <div class="skill-group-desc svelte-1tja9ry">My go-to scripting language when it comes to analysing,
                transforming and cleaning data.</div></div> 
        <div class="skill-group svelte-1tja9ry"><div class="skill-group-name svelte-1tja9ry">D3.js, Svelte</div> 
            <div class="skill-group-desc svelte-1tja9ry">Good foundation in using D3 to create custom visuals. Experience
                using Svelte to develop one-off dataviz pieces.</div></div> 
        <div class="skill-group svelte-1tja9ry"><div class="skill-group-name svelte-1tja9ry">Figma</div> 
            <div class="skill-group-desc svelte-1tja9ry">Have a good understanding UI/UX principles (and in collaborating
                with designers). I have also used Figma in the past to prototype
                and wireframe projects.</div></div> 
        <div class="skill-group svelte-1tja9ry"><div class="skill-group-name svelte-1tja9ry">Tableau, Datawrapper, RawGraphs</div> 
            <div class="skill-group-desc svelte-1tja9ry"></div></div> 
        <div class="skill-group svelte-1tja9ry"><div class="skill-group-name svelte-1tja9ry">Three.JS, GSAP, SVG/WebGL</div> 
            <div class="skill-group-desc svelte-1tja9ry">Several JavaScript libraries/tools that I have used on projects
                over the years.</div></div></div>`,l(e,"class","skills-section svelte-1tja9ry"),l(e,"id","skills-section")},m(s,r){$(s,e,r)},p:m,i:m,o:m,d(s){s&&k(e)}}}class ce extends M{constructor(e){super(),L(this,e,null,de,P,{})}}function ve(t){let e,s,r,o,a,v,g,f,i,h,d,u,w;return{c(){e=c("div"),s=c("label"),r=c("div"),o=B(`State of Low-Code in Data\r
            `),a=c("div"),v=p(),g=c("div"),g.innerHTML=`<div class="banner-img-container svelte-ezrh38"><img src="projects/Kaggle22/kaggle22-banner.png" alt="preview for kaggle 2022 project" class="grid-item svelte-ezrh38"/> 
                <div class="filler-rect svelte-ezrh38"></div></div>`,f=p(),i=c("input"),h=p(),d=c("div"),d.innerHTML=`<div class="work-text"><div class="work-field"><div class="work-field-title svelte-ezrh38">Brief</div> 
                <div class="work-field-desc">For my Kaggle ML and DS Survey 2022 submission, I looked at
                    how data professionals were using low-code tools to quickly
                    build and deploy data pipelines without the need for complex
                    code.</div></div> 

            <div class="work-field"><div class="work-field-title svelte-ezrh38">My approach</div> 
                <div class="work-field-desc">This competition entry won a runner-up spot in the
                    competition. It used data from various low-code trend
                    industry reports as well as Kaggle survey data to look into
                    the usage of these tools.
                    <br/><br/>
                    The notebook contains graphs in Python, with more involved graphs
                    and tables using <strong>Markdown</strong> +
                    <strong>CSS</strong>.</div></div></div> 

        <br/> 

        <div class="results-grid svelte-ezrh38"><div class="grid-item grid-item--result svelte-ezrh38"><div class="work-field-title svelte-ezrh38">The Result</div> 
                <div class="work-field-desc">This competition entry won a runner-up spot in the
                    competition. It used data from various low-code trend
                    industry reports as well as Kaggle survey data to look into
                    the usage of these tools.</div> 

                <a href="https://www.kaggle.com/code/spitfire2nd/the-state-of-low-no-code-in-data" target="_blank" rel="noreferrer">View project</a></div> 
            <img src="projects/Kaggle22/area-bi.png" alt="area charts" class="grid-item--area-bi grid-item svelte-ezrh38"/> 
            <img src="projects/Kaggle22/line-chart.png" alt="line chart" class="grid-item--line-chart grid-item svelte-ezrh38"/> 
            <img src="projects/Kaggle22/table.png" alt="table" class="grid-item--table grid-item svelte-ezrh38"/></div>`,l(a,"class",b(`chevron ${_}`)+" svelte-ezrh38"),l(r,"class","work-header-title"),l(g,"class","work-banner svelte-ezrh38"),l(s,"for",`show-desc-${_}`),l(i,"type","checkbox"),l(i,"name",`show-desc-${_}`),l(i,"id",`show-desc-${_}`),l(i,"class",b(`show-desc-btn ${_}`)+" svelte-ezrh38"),l(d,"class","details-container"),l(e,"class",b(`work-container ${_}`)+" svelte-ezrh38")},m(y,z){$(y,e,z),n(e,s),n(s,r),n(r,o),n(r,a),n(s,v),n(s,g),n(e,f),n(e,i),n(e,h),n(e,d),u||(w=K(i,"click",ue),u=!0)},p:m,i:m,o:m,d(y){y&&k(e),u=!1,w()}}}let _="kaggle22";function ue(){let t=document.querySelector(`.work-container.${_}`),e=t.querySelector(`.show-desc-btn.${_}`),s=t.querySelector(".work-banner"),r=t.querySelector(`.chevron.${_}`);e.checked==!0?(r.style.transform="rotate(-45deg)",s.style.display="none"):(r.style.transform="rotate(135deg)",s.style.display="block")}class ge extends M{constructor(e){super(),L(this,e,null,ve,P,{})}}function he(t){let e,s,r,o,a,v,g,f,i,h,d,u,w;return{c(){e=c("div"),s=c("label"),r=c("div"),o=B(`United Nations Development Program\r
            `),a=c("div"),v=p(),g=c("div"),g.innerHTML=`<div class="banner-img-container svelte-bonyq0"><img src="projects/UNDP/undp-banner.png" alt="preview for undp project" class="grid-item svelte-bonyq0"/> 
                <div class="filler-rect svelte-bonyq0"></div></div>`,f=p(),i=c("input"),h=p(),d=c("div"),d.innerHTML=`<div class="work-text"><div class="work-field"><div class="work-field-title svelte-bonyq0">Brief</div> 
                <div class="work-field-desc">A data story on the work done by the <strong>UNDP Accelerator Labs Network</strong> which tracks and documents regional progress towards achieving
                    the UN&#39;s SDGs (Sustainable Development Goals).</div></div> 

            <div class="work-field"><div class="work-field-title svelte-bonyq0">My approach</div> 
                <div class="work-field-desc">In this project I wanted to give a broad overview of the
                    work done by UNDP and give a sense of the measures adopted
                    by communities in developing regions. The work would show
                    the <strong>importance of grassroots innovation and the value of
                        local change</strong>
                    affected by people solving their most immediate problems.

                    <br/><br/>

                    Data included details of the individual solutions recorded
                    by the Accelerator labs in different countries which formed
                    the basis of the analysis.

                    <br/><br/>

                    I decided on using <strong>Svelte</strong> for the project early
                    on because the shorter deadline for submission meant that I would
                    more than likely be reusing charts and the modularity also goes
                    a long way on these single-page projects.</div></div></div> 

        <br/> 

        <div class="results-grid svelte-bonyq0"><div class="grid-item grid-item--result svelte-bonyq0"><div class="work-field-title svelte-bonyq0">The Result</div> 
                <div class="work-field-desc">The final short static piece that dove into how grassroots
                    innovations varied across different regions and their
                    <strong>readiness to scale to meet local needs</strong>.
                    <br/><br/>
                    It highlighted the progress of the UNDP in capturing these solutions
                    and where local efforts are focused.</div> 

                <a href="https://schubert-da.github.io/undp/" target="_blank" rel="noreferrer">View project</a></div> 
            <img src="projects/UNDP/undp-blocks.png" alt="undp-blocks" class="grid-item--undp-blocks grid-item svelte-bonyq0"/> 
            <img src="projects/UNDP/undp-bars.png" alt="line chart" class="grid-item--undp-bars grid-item svelte-bonyq0"/></div>`,l(a,"class",b(`chevron ${j}`)+" svelte-bonyq0"),l(r,"class","work-header-title"),l(g,"class","work-banner svelte-bonyq0"),l(s,"for",`show-desc-${j}`),l(i,"type","checkbox"),l(i,"name",`show-desc-${j}`),l(i,"id",`show-desc-${j}`),l(i,"class",b(`show-desc-btn ${j}`)+" svelte-bonyq0"),l(d,"class","details-container"),l(e,"class",b(`work-container ${j}`)+" svelte-bonyq0")},m(y,z){$(y,e,z),n(e,s),n(s,r),n(r,o),n(r,a),n(s,v),n(s,g),n(e,f),n(e,i),n(e,h),n(e,d),u||(w=K(i,"click",fe),u=!0)},p:m,i:m,o:m,d(y){y&&k(e),u=!1,w()}}}let j="undp";function fe(){let t=document.querySelector(`.work-container.${j}`),e=t.querySelector(`.show-desc-btn.${j}`),s=t.querySelector(".work-banner"),r=t.querySelector(`.chevron.${j}`);e.checked==!0?(r.style.transform="rotate(-45deg)",s.style.display="none"):(r.style.transform="rotate(135deg)",s.style.display="block")}class me extends M{constructor(e){super(),L(this,e,null,he,P,{})}}function pe(t){let e,s,r,o,a,v,g,f,i,h,d,u,w;return{c(){e=c("div"),s=c("label"),r=c("div"),o=B(`The World Data Visualization Prize\r
            `),a=c("div"),v=p(),g=c("div"),g.innerHTML=`<div class="banner-img-container svelte-1di3vk0"><img src="projects/Summit/summit-banner.png" alt="preview for summit project" class="grid-item svelte-1di3vk0"/> 
                <div class="filler-rect svelte-1di3vk0"></div></div>`,f=p(),i=c("input"),h=p(),d=c("div"),d.innerHTML=`<div class="work-text"><div class="work-field"><div class="work-field-title svelte-1di3vk0">Brief</div> 
                <div class="work-field-desc">The World Data Visualization Prize (2023) was a competition
                    hosted by the <strong>World Government Summit</strong> which
                    throws a spotlight on the progress made by world governments
                    through data.</div></div> 

            <div class="work-field"><div class="work-field-title svelte-1di3vk0">My approach</div> 
                <div class="work-field-desc">The World Government Summit provided data on the
                    achievements of governments in health, poverty, world
                    hunger, etc. The aim of the competition was to create an
                    insightful data story to put into context the progress made
                    by world governments in the last ten years.

                    <br/><br/>

                    With a large amount of time series data on achievements of
                    governments in health, poverty, world hunger, etc, I started
                    by looking for trends in the progress. With each measure we
                    saw a general trend - there would be steady progress at the
                    start then it would plateau later on, only to have years
                    worth of progress erased by the global pandemic in 2019.

                    <br/><br/>

                    My initial goal was to understand exactly how COVID-19 threw
                    us off track from achieving our goals. However as I started
                    to look over the data, I quickly realised that
                    <strong>in most cases we were far from achieving the set goals</strong>
                    even if all things went smoothly - and this is what guided the
                    new angle that I took this data story. Now my focus was to understand
                    where global development had stagnated in recent years and how
                    things worsened with covid.

                    <br/><br/></div> 

                <div class="work-field"><div class="work-field-title svelte-1di3vk0">Tools</div> 
                    <div class="work-field-desc">Svelte seemed a no-brainer for this project - it would
                        be a longer piece divided with sections for different
                        metrics, each having their own writeups and charts which
                        would benefit from a bit of modularity. There would be a
                        fair bit of reuse too since the general format of each
                        section would remain the same.

                        <br/><br/>

                        Lastly, one tool which made this project MUCH easier was
                        <a href="https://milton.fun/"><strong>Milton</strong></a>, an
                        AI2HTML-like plugin for Figma created by the folks over
                        at The Telegraph. This let me quickly create responsive
                        charts directly from Figma which greatly sped up my
                        workflow.</div></div></div></div> 

        <br/> 

        <div class="results-grid svelte-1di3vk0"><div class="grid-item grid-item--result svelte-1di3vk0"><div class="work-field-title svelte-1di3vk0">The Result</div> 
                <div class="work-field-desc">The final short static piece that dove into how grassroots
                    innovations varied across different regions and their
                    <strong>readiness to scale to meet local needs</strong>.
                    <br/><br/>
                    It highlighted the progress of the Summit in capturing these
                    solutions and where local efforts are focused.</div> 

                <a href="https://schubert-da.github.io/dvs-world-summit/" target="_blank" rel="noreferrer">View project</a></div> 
            <img src="projects/Summit/summit-maps.png" alt="summit-maps" class="grid-item--summit-maps grid-item svelte-1di3vk0"/> 
            <img src="projects/Summit/summit-bar-chart.png" alt="summit-bar-chart" class="grid-item--summit-bar-chart grid-item svelte-1di3vk0"/> 
            <img src="projects/Summit/summit-table.png" alt="summit-table" class="grid-item--summit-table grid-item svelte-1di3vk0"/></div>`,l(a,"class",b(`chevron ${S}`)+" svelte-1di3vk0"),l(r,"class","work-header-title"),l(g,"class","work-banner svelte-1di3vk0"),l(s,"for",`show-desc-${S}`),l(i,"type","checkbox"),l(i,"name",`show-desc-${S}`),l(i,"id",`show-desc-${S}`),l(i,"class",b(`show-desc-btn ${S}`)+" svelte-1di3vk0"),l(d,"class","details-container"),l(e,"class",b(`work-container ${S}`)+" svelte-1di3vk0")},m(y,z){$(y,e,z),n(e,s),n(s,r),n(r,o),n(r,a),n(s,v),n(s,g),n(e,f),n(e,i),n(e,h),n(e,d),u||(w=K(i,"click",ye),u=!0)},p:m,i:m,o:m,d(y){y&&k(e),u=!1,w()}}}let S="summit";function ye(){let t=document.querySelector(`.work-container.${S}`),e=t.querySelector(`.show-desc-btn.${S}`),s=t.querySelector(".work-banner"),r=t.querySelector(`.chevron.${S}`);e.checked==!0?(r.style.transform="rotate(-45deg)",s.style.display="none"):(r.style.transform="rotate(135deg)",s.style.display="block")}class we extends M{constructor(e){super(),L(this,e,null,pe,P,{})}}function be(t){let e,s,r,o,a,v,g,f,i,h,d,u,w;return{c(){e=c("div"),s=c("label"),r=c("div"),o=B(`Bridges to Prosperity\r
            `),a=c("div"),v=p(),g=c("div"),g.innerHTML=`<div class="banner-img-container svelte-1tpy2ly"><div class="filler-rect svelte-1tpy2ly"></div> 
                <img src="projects/B2P/b2p-banner.gif" alt="preview for b2p project" class="grid-item svelte-1tpy2ly"/> 
                <div class="filler-rect svelte-1tpy2ly"></div></div>`,f=p(),i=c("input"),h=p(),d=c("div"),d.innerHTML=`<div class="work-text"><div class="work-field"><div class="work-field-title svelte-1tpy2ly">Brief</div> 
                <div class="work-field-desc">A short scrolly-telling style article on the work done by
                    <b>Bridges To Prosperity</b> at combatting poverty due to rural
                    isolation by connecting communities via trail bridges.</div></div> 

            <div class="work-field"><div class="work-field-title svelte-1tpy2ly">My approach</div> 
                <div class="work-field-desc">The data for this challenge dealt with the hardships faced
                    by rural communities due to seasonal flooding / weather
                    which would cut them off from the external labour and
                    agricultural markets, causing loss of livelihood.

                    <br/><br/>

                    In this visualisation piece I wanted to highlight a few of
                    the
                    <b>key metrics that showed the success of B2P in raising
                        quality of life</b> in these rural villages by connecting them with the external
                    world through trail bridges created through local efforts.</div> 

                <div class="work-field"><div class="work-field-title svelte-1tpy2ly">Tools</div> 
                    <div class="work-field-desc">At the time of working on this piece, I was learning how
                        to use <b>Scrollama</b> in creating a scrollytelling
                        story so I was excited to experiment with how I could
                        tie different aspects of the storytelling with the
                        user&#39;s scroll interactions.

                        <br/><br/>

                        Finally the entire piece was done in
                        <b>JavaScript with Scrollama</b> for scroll
                        interactions. Additionally, I used
                        <b>Figma for illustration</b> of the bridge construction
                        graphic, which was tied to the user&#39;s scrolling.</div></div></div></div> 

        <br/> 

        <div class="results-grid svelte-1tpy2ly"><div class="grid-item grid-item--result svelte-1tpy2ly"><div class="work-field-title svelte-1tpy2ly">The Result</div> 
                <div class="work-field-desc">The final piece ended up being a great lesson in
                    understanding scrollytelling and the intricacies of working
                    with a scroll-based narration style.</div> 
                <br/> 
                <a href="https://schubert-da.github.io/VFSG-BridgesToProsperity/" target="_blank" rel="noreferrer">View project</a></div> 
            <img src="projects/B2P/b2p-banner.gif" alt="bridges to prosperity bridge construction gif" class="grid-item--b2p-scrolly grid-item svelte-1tpy2ly"/></div>`,l(a,"class",b(`chevron ${x}`)+" svelte-1tpy2ly"),l(r,"class","work-header-title"),l(g,"class","work-banner svelte-1tpy2ly"),l(s,"for",`show-desc-${x}`),l(i,"type","checkbox"),l(i,"name",`show-desc-${x}`),l(i,"id",`show-desc-${x}`),l(i,"class",b(`show-desc-btn ${x}`)+" svelte-1tpy2ly"),l(d,"class","details-container"),l(e,"class",b(`work-container ${x}`)+" svelte-1tpy2ly")},m(y,z){$(y,e,z),n(e,s),n(s,r),n(r,o),n(r,a),n(s,v),n(s,g),n(e,f),n(e,i),n(e,h),n(e,d),u||(w=K(i,"click",ke),u=!0)},p:m,i:m,o:m,d(y){y&&k(e),u=!1,w()}}}let x="b2p";function ke(){let t=document.querySelector(`.work-container.${x}`),e=t.querySelector(`.show-desc-btn.${x}`),s=t.querySelector(".work-banner"),r=t.querySelector(`.chevron.${x}`);e.checked==!0?(r.style.transform="rotate(-45deg)",s.style.display="none"):(r.style.transform="rotate(135deg)",s.style.display="block")}class $e extends M{constructor(e){super(),L(this,e,null,be,P,{})}}function _e(t){let e,s,r,o,a,v,g,f,i,h,d;return o=new ge({}),v=new $e({}),f=new me({}),h=new we({}),{c(){e=c("div"),s=c("div"),s.textContent="Projects",r=p(),N(o.$$.fragment),a=p(),N(v.$$.fragment),g=p(),N(f.$$.fragment),i=p(),N(h.$$.fragment),l(s,"class","section-header svelte-12we2ri"),l(s,"id","works-section"),l(e,"class","container svelte-12we2ri")},m(u,w){$(u,e,w),n(e,s),n(e,r),I(o,e,null),n(e,a),I(v,e,null),n(e,g),I(f,e,null),n(e,i),I(h,e,null),d=!0},p:m,i(u){d||(T(o.$$.fragment,u),T(v.$$.fragment,u),T(f.$$.fragment,u),T(h.$$.fragment,u),d=!0)},o(u){D(o.$$.fragment,u),D(v.$$.fragment,u),D(f.$$.fragment,u),D(h.$$.fragment,u),d=!1},d(u){u&&k(e),q(o),q(v),q(f),q(h)}}}class je extends M{constructor(e){super(),L(this,e,null,_e,P,{})}}function Se(t){let e;return{c(){e=c("footer"),e.innerHTML=`<div class="contact svelte-1w9n8ec"><div class="section-header svelte-1w9n8ec">Contact me</div> 
        <div class="contact-desc svelte-1w9n8ec">If you&#39;re looking for candidates on your Data Team, in need of
            freelance data work, or just have coding questions - please send me
            a message or <a href="mailto:schubertdeabreu2@gmail.com">email me</a> directly.</div></div> 
    <div class="socials svelte-1w9n8ec"><div class="social svelte-1w9n8ec"><div class="social-title svelte-1w9n8ec"><a href="https://twitter.com/schubertda1"><img src="icons/twitter2.png" alt="twitter logo" class="svelte-1w9n8ec"/>Twitter</a></div> 
            <div class="social-desc svelte-1w9n8ec">Probably the best place to check out my work - If I&#39;ve posted it
                online it&#39;s probably here.</div></div> 
        <div class="social svelte-1w9n8ec"><div class="social-title svelte-1w9n8ec"><a href="mailto:schubertdeabreu2@gmail.com"><img src="icons/mail.png" alt="mail logo" class="svelte-1w9n8ec"/> Mail</a></div> 
            <div class="social-desc svelte-1w9n8ec">Email me if you want to get in touch for work opportunities,
                collaborations or even just to chat.</div></div> 
        <div class="social linkedin svelte-1w9n8ec"><div class="social-title svelte-1w9n8ec"><a href="https://www.linkedin.com/in/schubert-de-abreu-47a56037/"><img src="icons/linkedin.png" alt="linkedin logo" class="svelte-1w9n8ec"/> LinkedIn</a></div></div> 
        <div class="social svelte-1w9n8ec"><div class="social-title svelte-1w9n8ec"><a href="https://www.kaggle.com/spitfire2nd"><img src="icons/kaggle.png" alt="kaggle logo" class="svelte-1w9n8ec"/> Kaggle</a></div> 
            <div class="social-desc svelte-1w9n8ec">I occassionally post exploratory data visualisation notebooks in
                Python and D3.</div></div></div>`,l(e,"class","svelte-1w9n8ec")},m(s,r){$(s,e,r)},p:m,i:m,o:m,d(s){s&&k(e)}}}class xe extends M{constructor(e){super(),L(this,e,null,Se,P,{})}}function Te(t){let e,s,r,o,a,v,g,f;return e=new ae({}),r=new ce({}),a=new je({}),g=new xe({}),{c(){N(e.$$.fragment),s=p(),N(r.$$.fragment),o=p(),N(a.$$.fragment),v=p(),N(g.$$.fragment)},m(i,h){I(e,i,h),$(i,s,h),I(r,i,h),$(i,o,h),I(a,i,h),$(i,v,h),I(g,i,h),f=!0},p:m,i(i){f||(T(e.$$.fragment,i),T(r.$$.fragment,i),T(a.$$.fragment,i),T(g.$$.fragment,i),f=!0)},o(i){D(e.$$.fragment,i),D(r.$$.fragment,i),D(a.$$.fragment,i),D(g.$$.fragment,i),f=!1},d(i){q(e,i),i&&k(s),q(r,i),i&&k(o),q(a,i),i&&k(v),q(g,i)}}}class Ie extends M{constructor(e){super(),L(this,e,null,Te,P,{})}}new Ie({target:document.getElementById("app")});
