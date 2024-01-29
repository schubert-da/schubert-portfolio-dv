(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const g of a.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&r(g)}).observe(document,{childList:!0,subtree:!0});function s(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(n){if(n.ep)return;n.ep=!0;const a=s(n);fetch(n.href,a)}})();function p(){}function Y(t){return t()}function J(){return Object.create(null)}function K(t){t.forEach(Y)}function Z(t){return typeof t=="function"}function T(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function te(t){return Object.keys(t).length===0}function b(t){return t??""}function o(t,e){t.appendChild(e)}function $(t,e,s){t.insertBefore(e,s||null)}function k(t){t.parentNode&&t.parentNode.removeChild(t)}function d(t){return document.createElement(t)}function B(t){return document.createTextNode(t)}function w(){return B(" ")}function R(t,e,s,r){return t.addEventListener(e,s,r),()=>t.removeEventListener(e,s,r)}function l(t,e,s){s==null?t.removeAttribute(e):t.getAttribute(e)!==s&&t.setAttribute(e,s)}function se(t){return Array.from(t.childNodes)}let V;function W(t){V=t}const A=[],X=[],F=[],Q=[],ie=Promise.resolve();let C=!1;function re(){C||(C=!0,ie.then(ee))}function G(t){F.push(t)}const O=new Set;let E=0;function ee(){if(E!==0)return;const t=V;do{try{for(;E<A.length;){const e=A[E];E++,W(e),le(e.$$)}}catch(e){throw A.length=0,E=0,e}for(W(null),A.length=0,E=0;X.length;)X.pop()();for(let e=0;e<F.length;e+=1){const s=F[e];O.has(s)||(O.add(s),s())}F.length=0}while(A.length);for(;Q.length;)Q.pop()();C=!1,O.clear(),W(t)}function le(t){if(t.fragment!==null){t.update(),K(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(G)}}const U=new Set;let oe;function j(t,e){t&&t.i&&(U.delete(t),t.i(e))}function z(t,e,s,r){if(t&&t.o){if(U.has(t))return;U.add(t),oe.c.push(()=>{U.delete(t),r&&(s&&t.d(1),r())}),t.o(e)}else r&&r()}function H(t){t&&t.c()}function S(t,e,s,r){const{fragment:n,after_update:a}=t.$$;n&&n.m(e,s),r||G(()=>{const g=t.$$.on_mount.map(Y).filter(Z);t.$$.on_destroy?t.$$.on_destroy.push(...g):K(g),t.$$.on_mount=[]}),a.forEach(G)}function x(t,e){const s=t.$$;s.fragment!==null&&(K(s.on_destroy),s.fragment&&s.fragment.d(e),s.on_destroy=s.fragment=null,s.ctx=[])}function ne(t,e){t.$$.dirty[0]===-1&&(A.push(t),re(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function I(t,e,s,r,n,a,g,v=[-1]){const f=V;W(t);const i=t.$$={fragment:null,ctx:[],props:a,update:p,not_equal:n,bound:J(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(f?f.$$.context:[])),callbacks:J(),dirty:v,skip_bound:!1,root:e.target||f.$$.root};g&&g(i.root);let h=!1;if(i.ctx=s?s(t,e.props||{},(u,m,...y)=>{const c=y.length?y[0]:m;return i.ctx&&n(i.ctx[u],i.ctx[u]=c)&&(!i.skip_bound&&i.bound[u]&&i.bound[u](c),h&&ne(t,u)),m}):[],i.update(),h=!0,K(i.before_update),i.fragment=r?r(i.ctx):!1,e.target){if(e.hydrate){const u=se(e.target);i.fragment&&i.fragment.l(u),u.forEach(k)}else i.fragment&&i.fragment.c();e.intro&&j(t.$$.fragment),S(t,e.target,e.anchor,e.customElement),ee()}W(f)}class q{$destroy(){x(this,1),this.$destroy=p}$on(e,s){if(!Z(s))return p;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(s),()=>{const n=r.indexOf(s);n!==-1&&r.splice(n,1)}}$set(e){this.$$set&&!te(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function ae(t){let e;return{c(){e=d("div"),e.innerHTML=`<div class="home-container svelte-1yrldur"><h1 class="home-heading svelte-1yrldur">Hi I&#39;m <span class="svelte-1yrldur">Schubert!</span></h1> 
        <div class="text-home svelte-1yrldur"><strong>FRONTEND DEVELOPER</strong></div> 
        <div class="text-home-small svelte-1yrldur">I am a web developer with a keen interest for responsive web design
            and creating interactive visuals.
            <br/><br/>
            I have a passion for using data to tell stories and solve problems, and
            I am constantly seeking out new ways to use visualization to make data
            more accessible and meaningful to a wide range of audiences.</div></div>`,l(e,"id","home-section"),l(e,"class","svelte-1yrldur")},m(s,r){$(s,e,r)},p,i:p,o:p,d(s){s&&k(e)}}}class de extends q{constructor(e){super(),I(this,e,null,ae,T,{})}}function ce(t){let e;return{c(){e=d("div"),e.innerHTML=`<div class="skills-container svelte-1tja9ry"><div class="section-header svelte-1tja9ry">Skills</div> 
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
                over the years.</div></div></div>`,l(e,"class","skills-section svelte-1tja9ry"),l(e,"id","skills-section")},m(s,r){$(s,e,r)},p,i:p,o:p,d(s){s&&k(e)}}}class ve extends q{constructor(e){super(),I(this,e,null,ce,T,{})}}function ue(t){let e,s,r,n,a,g,v,f,i,h,u,m,y;return{c(){e=d("div"),s=d("label"),r=d("div"),n=B(`Work at Revisual Labs\r
            `),a=d("div"),g=w(),v=d("div"),v.innerHTML=`<div class="banner-img-container svelte-8ufk70"><img src="projects/Revisual/career-overview.png" alt="streamgraph showing the career overview for Schubert" class="grid-item svelte-8ufk70"/> 
                <div class="filler-rect svelte-8ufk70"></div></div>`,f=w(),i=d("input"),h=w(),u=d("div"),u.innerHTML=`<div class="work-text"><div class="work-field"><div class="work-field-title svelte-8ufk70">Brief</div> 
                <div class="work-field-desc">Since September 2023, I have been working as a data
                    visualisation developer for <a href="https://www.revisual.co" target="_blank" rel="noreferrer">Revisual Labs</a>, an information design firm based out of India. As things
                    progress, I will update this section with some of the
                    amazing stuff we&#39;re working on!</div></div> 

            <div class="work-field"><div class="work-field-title svelte-8ufk70">The Work</div> 
                <div class="work-field-desc">The majority of work involves writing code in <strong>D3</strong>
                    and <strong>Svelte</strong> for reusable graphics for use
                    within the organisation, as well as work on interactive
                    stories and dashboards for client data.

                    <br/><br/>
                    While I have completed work on several projects with Revisual,
                    with the recent launch of the firm, not a lot of the projects
                    are accessible to the public as of yet. So I will update this
                    section as and when things are revealed.</div></div></div> 

        <div class="results-grid svelte-8ufk70"><div class="grid-img-container grid-item svelte-8ufk70"><img src="projects/Revisual/career-overview.png" alt="streamgraph showing the career overview for Schubert" class="grid-item svelte-8ufk70"/></div></div> 

        <br/>`,l(a,"class",b(`chevron ${P}`)+" svelte-8ufk70"),l(r,"class","work-header-title"),l(v,"class","work-banner svelte-8ufk70"),l(s,"for",`show-desc-${P}`),l(i,"type","checkbox"),l(i,"name",`show-desc-${P}`),l(i,"id",`show-desc-${P}`),l(i,"class",b(`show-desc-btn ${P}`)+" svelte-8ufk70"),l(u,"class","details-container"),l(e,"class",b(`work-container ${P}`)+" svelte-8ufk70")},m(c,_){$(c,e,_),o(e,s),o(s,r),o(r,n),o(r,a),o(s,g),o(s,v),o(e,f),o(e,i),o(e,h),o(e,u),m||(y=R(i,"click",ge),m=!0)},p,i:p,o:p,d(c){c&&k(e),m=!1,y()}}}let P="summit";function ge(){let t=document.querySelector(`.work-container.${P}`),e=t.querySelector(`.show-desc-btn.${P}`),s=t.querySelector(".work-banner"),r=t.querySelector(`.chevron.${P}`);e.checked==!0?(r.style.transform="rotate(-45deg)",s.style.display="none"):(r.style.transform="rotate(135deg)",s.style.display="block")}class he extends q{constructor(e){super(),I(this,e,null,ue,T,{})}}function fe(t){let e,s,r,n,a,g,v,f,i,h,u,m,y;return{c(){e=d("div"),s=d("label"),r=d("div"),n=B(`State of Low-Code in Data\r
            `),a=d("div"),g=w(),v=d("div"),v.innerHTML=`<div class="banner-img-container svelte-ezrh38"><img src="projects/Kaggle22/kaggle22-banner.png" alt="preview for kaggle 2022 project" class="grid-item svelte-ezrh38"/> 
                <div class="filler-rect svelte-ezrh38"></div></div>`,f=w(),i=d("input"),h=w(),u=d("div"),u.innerHTML=`<div class="work-text"><div class="work-field"><div class="work-field-title svelte-ezrh38">Brief</div> 
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
            <img src="projects/Kaggle22/table.png" alt="table" class="grid-item--table grid-item svelte-ezrh38"/></div>`,l(a,"class",b(`chevron ${L}`)+" svelte-ezrh38"),l(r,"class","work-header-title"),l(v,"class","work-banner svelte-ezrh38"),l(s,"for",`show-desc-${L}`),l(i,"type","checkbox"),l(i,"name",`show-desc-${L}`),l(i,"id",`show-desc-${L}`),l(i,"class",b(`show-desc-btn ${L}`)+" svelte-ezrh38"),l(u,"class","details-container"),l(e,"class",b(`work-container ${L}`)+" svelte-ezrh38")},m(c,_){$(c,e,_),o(e,s),o(s,r),o(r,n),o(r,a),o(s,g),o(s,v),o(e,f),o(e,i),o(e,h),o(e,u),m||(y=R(i,"click",me),m=!0)},p,i:p,o:p,d(c){c&&k(e),m=!1,y()}}}let L="kaggle22";function me(){let t=document.querySelector(`.work-container.${L}`),e=t.querySelector(`.show-desc-btn.${L}`),s=t.querySelector(".work-banner"),r=t.querySelector(`.chevron.${L}`);e.checked==!0?(r.style.transform="rotate(-45deg)",s.style.display="none"):(r.style.transform="rotate(135deg)",s.style.display="block")}class pe extends q{constructor(e){super(),I(this,e,null,fe,T,{})}}function we(t){let e,s,r,n,a,g,v,f,i,h,u,m,y;return{c(){e=d("div"),s=d("label"),r=d("div"),n=B(`United Nations Development Program\r
            `),a=d("div"),g=w(),v=d("div"),v.innerHTML=`<div class="banner-img-container svelte-bonyq0"><img src="projects/UNDP/undp-banner.png" alt="preview for undp project" class="grid-item svelte-bonyq0"/> 
                <div class="filler-rect svelte-bonyq0"></div></div>`,f=w(),i=d("input"),h=w(),u=d("div"),u.innerHTML=`<div class="work-text"><div class="work-field"><div class="work-field-title svelte-bonyq0">Brief</div> 
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
            <img src="projects/UNDP/undp-bars.png" alt="line chart" class="grid-item--undp-bars grid-item svelte-bonyq0"/></div>`,l(a,"class",b(`chevron ${M}`)+" svelte-bonyq0"),l(r,"class","work-header-title"),l(v,"class","work-banner svelte-bonyq0"),l(s,"for",`show-desc-${M}`),l(i,"type","checkbox"),l(i,"name",`show-desc-${M}`),l(i,"id",`show-desc-${M}`),l(i,"class",b(`show-desc-btn ${M}`)+" svelte-bonyq0"),l(u,"class","details-container"),l(e,"class",b(`work-container ${M}`)+" svelte-bonyq0")},m(c,_){$(c,e,_),o(e,s),o(s,r),o(r,n),o(r,a),o(s,g),o(s,v),o(e,f),o(e,i),o(e,h),o(e,u),m||(y=R(i,"click",ye),m=!0)},p,i:p,o:p,d(c){c&&k(e),m=!1,y()}}}let M="undp";function ye(){let t=document.querySelector(`.work-container.${M}`),e=t.querySelector(`.show-desc-btn.${M}`),s=t.querySelector(".work-banner"),r=t.querySelector(`.chevron.${M}`);e.checked==!0?(r.style.transform="rotate(-45deg)",s.style.display="none"):(r.style.transform="rotate(135deg)",s.style.display="block")}class be extends q{constructor(e){super(),I(this,e,null,we,T,{})}}function ke(t){let e,s,r,n,a,g,v,f,i,h,u,m,y;return{c(){e=d("div"),s=d("label"),r=d("div"),n=B(`The World Data Visualization Prize\r
            `),a=d("div"),g=w(),v=d("div"),v.innerHTML=`<div class="banner-img-container svelte-1di3vk0"><img src="projects/Summit/summit-banner.png" alt="preview for summit project" class="grid-item svelte-1di3vk0"/> 
                <div class="filler-rect svelte-1di3vk0"></div></div>`,f=w(),i=d("input"),h=w(),u=d("div"),u.innerHTML=`<div class="work-text"><div class="work-field"><div class="work-field-title svelte-1di3vk0">Brief</div> 
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
            <img src="projects/Summit/summit-table.png" alt="summit-table" class="grid-item--summit-table grid-item svelte-1di3vk0"/></div>`,l(a,"class",b(`chevron ${D}`)+" svelte-1di3vk0"),l(r,"class","work-header-title"),l(v,"class","work-banner svelte-1di3vk0"),l(s,"for",`show-desc-${D}`),l(i,"type","checkbox"),l(i,"name",`show-desc-${D}`),l(i,"id",`show-desc-${D}`),l(i,"class",b(`show-desc-btn ${D}`)+" svelte-1di3vk0"),l(u,"class","details-container"),l(e,"class",b(`work-container ${D}`)+" svelte-1di3vk0")},m(c,_){$(c,e,_),o(e,s),o(s,r),o(r,n),o(r,a),o(s,g),o(s,v),o(e,f),o(e,i),o(e,h),o(e,u),m||(y=R(i,"click",$e),m=!0)},p,i:p,o:p,d(c){c&&k(e),m=!1,y()}}}let D="summit";function $e(){let t=document.querySelector(`.work-container.${D}`),e=t.querySelector(`.show-desc-btn.${D}`),s=t.querySelector(".work-banner"),r=t.querySelector(`.chevron.${D}`);e.checked==!0?(r.style.transform="rotate(-45deg)",s.style.display="none"):(r.style.transform="rotate(135deg)",s.style.display="block")}class _e extends q{constructor(e){super(),I(this,e,null,ke,T,{})}}function je(t){let e,s,r,n,a,g,v,f,i,h,u,m,y;return{c(){e=d("div"),s=d("label"),r=d("div"),n=B(`Bridges to Prosperity\r
            `),a=d("div"),g=w(),v=d("div"),v.innerHTML=`<div class="banner-img-container svelte-1tpy2ly"><div class="filler-rect svelte-1tpy2ly"></div> 
                <img src="projects/B2P/b2p-banner.gif" alt="preview for b2p project" class="grid-item svelte-1tpy2ly"/> 
                <div class="filler-rect svelte-1tpy2ly"></div></div>`,f=w(),i=d("input"),h=w(),u=d("div"),u.innerHTML=`<div class="work-text"><div class="work-field"><div class="work-field-title svelte-1tpy2ly">Brief</div> 
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
            <img src="projects/B2P/b2p-banner.gif" alt="bridges to prosperity bridge construction gif" class="grid-item--b2p-scrolly grid-item svelte-1tpy2ly"/></div>`,l(a,"class",b(`chevron ${N}`)+" svelte-1tpy2ly"),l(r,"class","work-header-title"),l(v,"class","work-banner svelte-1tpy2ly"),l(s,"for",`show-desc-${N}`),l(i,"type","checkbox"),l(i,"name",`show-desc-${N}`),l(i,"id",`show-desc-${N}`),l(i,"class",b(`show-desc-btn ${N}`)+" svelte-1tpy2ly"),l(u,"class","details-container"),l(e,"class",b(`work-container ${N}`)+" svelte-1tpy2ly")},m(c,_){$(c,e,_),o(e,s),o(s,r),o(r,n),o(r,a),o(s,g),o(s,v),o(e,f),o(e,i),o(e,h),o(e,u),m||(y=R(i,"click",Se),m=!0)},p,i:p,o:p,d(c){c&&k(e),m=!1,y()}}}let N="b2p";function Se(){let t=document.querySelector(`.work-container.${N}`),e=t.querySelector(`.show-desc-btn.${N}`),s=t.querySelector(".work-banner"),r=t.querySelector(`.chevron.${N}`);e.checked==!0?(r.style.transform="rotate(-45deg)",s.style.display="none"):(r.style.transform="rotate(135deg)",s.style.display="block")}class xe extends q{constructor(e){super(),I(this,e,null,je,T,{})}}function Te(t){let e,s,r,n,a,g,v,f,i,h,u,m,y;return n=new he({}),g=new pe({}),f=new xe({}),h=new be({}),m=new _e({}),{c(){e=d("div"),s=d("div"),s.textContent="Projects",r=w(),H(n.$$.fragment),a=w(),H(g.$$.fragment),v=w(),H(f.$$.fragment),i=w(),H(h.$$.fragment),u=w(),H(m.$$.fragment),l(s,"class","section-header svelte-1wevnz5"),l(s,"id","works-section"),l(e,"class","container svelte-1wevnz5")},m(c,_){$(c,e,_),o(e,s),o(e,r),S(n,e,null),o(e,a),S(g,e,null),o(e,v),S(f,e,null),o(e,i),S(h,e,null),o(e,u),S(m,e,null),y=!0},p,i(c){y||(j(n.$$.fragment,c),j(g.$$.fragment,c),j(f.$$.fragment,c),j(h.$$.fragment,c),j(m.$$.fragment,c),y=!0)},o(c){z(n.$$.fragment,c),z(g.$$.fragment,c),z(f.$$.fragment,c),z(h.$$.fragment,c),z(m.$$.fragment,c),y=!1},d(c){c&&k(e),x(n),x(g),x(f),x(h),x(m)}}}class Ie extends q{constructor(e){super(),I(this,e,null,Te,T,{})}}function qe(t){let e;return{c(){e=d("footer"),e.innerHTML=`<div class="contact svelte-1w9n8ec"><div class="section-header svelte-1w9n8ec">Contact me</div> 
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
                Python and D3.</div></div></div>`,l(e,"class","svelte-1w9n8ec")},m(s,r){$(s,e,r)},p,i:p,o:p,d(s){s&&k(e)}}}class Pe extends q{constructor(e){super(),I(this,e,null,qe,T,{})}}function Le(t){let e,s,r,n,a,g,v,f;return e=new de({}),r=new ve({}),a=new Ie({}),v=new Pe({}),{c(){H(e.$$.fragment),s=w(),H(r.$$.fragment),n=w(),H(a.$$.fragment),g=w(),H(v.$$.fragment)},m(i,h){S(e,i,h),$(i,s,h),S(r,i,h),$(i,n,h),S(a,i,h),$(i,g,h),S(v,i,h),f=!0},p,i(i){f||(j(e.$$.fragment,i),j(r.$$.fragment,i),j(a.$$.fragment,i),j(v.$$.fragment,i),f=!0)},o(i){z(e.$$.fragment,i),z(r.$$.fragment,i),z(a.$$.fragment,i),z(v.$$.fragment,i),f=!1},d(i){x(e,i),i&&k(s),x(r,i),i&&k(n),x(a,i),i&&k(g),x(v,i)}}}class Me extends q{constructor(e){super(),I(this,e,null,Le,T,{})}}new Me({target:document.getElementById("app")});
