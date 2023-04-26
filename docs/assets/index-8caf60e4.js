(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const n of l)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function s(l){const n={};return l.integrity&&(n.integrity=l.integrity),l.referrerPolicy&&(n.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?n.credentials="include":l.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(l){if(l.ep)return;l.ep=!0;const n=s(l);fetch(l.href,n)}})();function h(){}function X(t){return t()}function B(){return Object.create(null)}function K(t){t.forEach(X)}function Q(t){return typeof t=="function"}function q(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Z(t){return Object.keys(t).length===0}function S(t){return t??""}function a(t,e){t.appendChild(e)}function b(t,e,s){t.insertBefore(e,s||null)}function k(t){t.parentNode&&t.parentNode.removeChild(t)}function u(t){return document.createElement(t)}function O(t){return document.createTextNode(t)}function m(){return O(" ")}function G(t,e,s,r){return t.addEventListener(e,s,r),()=>t.removeEventListener(e,s,r)}function o(t,e,s){s==null?t.removeAttribute(e):t.getAttribute(e)!==s&&t.setAttribute(e,s)}function ee(t){return Array.from(t.childNodes)}let V;function H(t){V=t}const z=[],R=[],A=[],J=[],te=Promise.resolve();let C=!1;function se(){C||(C=!0,te.then(Y))}function F(t){A.push(t)}const W=new Set;let P=0;function Y(){if(P!==0)return;const t=V;do{try{for(;P<z.length;){const e=z[P];P++,H(e),ie(e.$$)}}catch(e){throw z.length=0,P=0,e}for(H(null),z.length=0,P=0;R.length;)R.pop()();for(let e=0;e<A.length;e+=1){const s=A[e];W.has(s)||(W.add(s),s())}A.length=0}while(z.length);for(;J.length;)J.pop()();C=!1,W.clear(),H(t)}function ie(t){if(t.fragment!==null){t.update(),K(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(F)}}const U=new Set;let re;function x(t,e){t&&t.i&&(U.delete(t),t.i(e))}function M(t,e,s,r){if(t&&t.o){if(U.has(t))return;U.add(t),re.c.push(()=>{U.delete(t),r&&(s&&t.d(1),r())}),t.o(e)}else r&&r()}function N(t){t&&t.c()}function T(t,e,s,r){const{fragment:l,after_update:n}=t.$$;l&&l.m(e,s),r||F(()=>{const c=t.$$.on_mount.map(X).filter(Q);t.$$.on_destroy?t.$$.on_destroy.push(...c):K(c),t.$$.on_mount=[]}),n.forEach(F)}function I(t,e){const s=t.$$;s.fragment!==null&&(K(s.on_destroy),s.fragment&&s.fragment.d(e),s.on_destroy=s.fragment=null,s.ctx=[])}function le(t,e){t.$$.dirty[0]===-1&&(z.push(t),se(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function D(t,e,s,r,l,n,c,v=[-1]){const g=V;H(t);const i=t.$$={fragment:null,ctx:[],props:n,update:h,not_equal:l,bound:B(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(g?g.$$.context:[])),callbacks:B(),dirty:v,skip_bound:!1,root:e.target||g.$$.root};c&&c(i.root);let d=!1;if(i.ctx=s?s(t,e.props||{},(f,p,...y)=>{const w=y.length?y[0]:p;return i.ctx&&l(i.ctx[f],i.ctx[f]=w)&&(!i.skip_bound&&i.bound[f]&&i.bound[f](w),d&&le(t,f)),p}):[],i.update(),d=!0,K(i.before_update),i.fragment=r?r(i.ctx):!1,e.target){if(e.hydrate){const f=ee(e.target);i.fragment&&i.fragment.l(f),f.forEach(k)}else i.fragment&&i.fragment.c();e.intro&&x(t.$$.fragment),T(t,e.target,e.anchor,e.customElement),Y()}H(g)}class L{$destroy(){I(this,1),this.$destroy=h}$on(e,s){if(!Q(s))return h;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(s),()=>{const l=r.indexOf(s);l!==-1&&r.splice(l,1)}}$set(e){this.$$set&&!Z(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function oe(t){let e;return{c(){e=u("div"),e.innerHTML=`<div class="home-container svelte-1yrldur"><h1 class="home-heading svelte-1yrldur">Hi I&#39;m <span class="svelte-1yrldur">Schubert!</span></h1> 
        <div class="text-home svelte-1yrldur"><strong>FRONTEND DEVELOPER</strong></div> 
        <div class="text-home-small svelte-1yrldur">I am a web developer with a keen interest for responsive web design
            and creating interactive visuals.
            <br/><br/>
            I have a passion for using data to tell stories and solve problems, and
            I am constantly seeking out new ways to use visualization to make data
            more accessible and meaningful to a wide range of audiences.</div></div>`,o(e,"id","home-section"),o(e,"class","svelte-1yrldur")},m(s,r){b(s,e,r)},p:h,i:h,o:h,d(s){s&&k(e)}}}class ne extends L{constructor(e){super(),D(this,e,null,oe,q,{})}}function ae(t){let e;return{c(){e=u("div"),e.innerHTML=`<div class="skills-container svelte-1tja9ry"><div class="section-header svelte-1tja9ry">Skills</div> 
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
                over the years.</div></div></div>`,o(e,"class","skills-section svelte-1tja9ry"),o(e,"id","skills-section")},m(s,r){b(s,e,r)},p:h,i:h,o:h,d(s){s&&k(e)}}}class de extends L{constructor(e){super(),D(this,e,null,ae,q,{})}}function ce(t){let e,s,r,l,n,c,v,g,i,d,f,p,y;return{c(){e=u("div"),s=u("label"),r=u("div"),l=O(`State of Low-Code in Data\r
            `),n=u("div"),c=m(),v=u("div"),v.innerHTML=`<div class="banner-img-container svelte-ezrh38"><img src="projects/Kaggle22/kaggle22-banner.png" alt="preview for kaggle 2022 project" class="grid-item svelte-ezrh38"/> 
                <div class="filler-rect svelte-ezrh38"></div></div>`,g=m(),i=u("input"),d=m(),f=u("div"),f.innerHTML=`<div class="work-text"><div class="work-field"><div class="work-field-title svelte-ezrh38">Brief</div> 
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
            <img src="projects/Kaggle22/table.png" alt="table" class="grid-item--table grid-item svelte-ezrh38"/></div>`,o(n,"class",S(`chevron ${$}`)+" svelte-ezrh38"),o(r,"class","work-header-title"),o(v,"class","work-banner svelte-ezrh38"),o(s,"for",`show-desc-${$}`),o(i,"type","checkbox"),o(i,"name",`show-desc-${$}`),o(i,"id",`show-desc-${$}`),o(i,"class",S(`show-desc-btn ${$}`)+" svelte-ezrh38"),o(f,"class","details-container"),o(e,"class",S(`work-container ${$}`)+" svelte-ezrh38")},m(w,E){b(w,e,E),a(e,s),a(s,r),a(r,l),a(r,n),a(s,c),a(s,v),a(e,g),a(e,i),a(e,d),a(e,f),p||(y=G(i,"click",ve),p=!0)},p:h,i:h,o:h,d(w){w&&k(e),p=!1,y()}}}let $="kaggle22";function ve(){let t=document.querySelector(`.work-container.${$}`),e=t.querySelector(`.show-desc-btn.${$}`),s=t.querySelector(".work-banner"),r=t.querySelector(`.chevron.${$}`);e.checked==!0?(r.style.transform="rotate(-45deg)",s.style.display="none"):(r.style.transform="rotate(135deg)",s.style.display="block")}class ue extends L{constructor(e){super(),D(this,e,null,ce,q,{})}}function ge(t){let e,s,r,l,n,c,v,g,i,d,f,p,y;return{c(){e=u("div"),s=u("label"),r=u("div"),l=O(`United Nations Development Program\r
            `),n=u("div"),c=m(),v=u("div"),v.innerHTML=`<div class="banner-img-container svelte-bonyq0"><img src="projects/UNDP/undp-banner.png" alt="preview for undp project" class="grid-item svelte-bonyq0"/> 
                <div class="filler-rect svelte-bonyq0"></div></div>`,g=m(),i=u("input"),d=m(),f=u("div"),f.innerHTML=`<div class="work-text"><div class="work-field"><div class="work-field-title svelte-bonyq0">Brief</div> 
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
            <img src="projects/UNDP/undp-bars.png" alt="line chart" class="grid-item--undp-bars grid-item svelte-bonyq0"/></div>`,o(n,"class",S(`chevron ${_}`)+" svelte-bonyq0"),o(r,"class","work-header-title"),o(v,"class","work-banner svelte-bonyq0"),o(s,"for",`show-desc-${_}`),o(i,"type","checkbox"),o(i,"name",`show-desc-${_}`),o(i,"id",`show-desc-${_}`),o(i,"class",S(`show-desc-btn ${_}`)+" svelte-bonyq0"),o(f,"class","details-container"),o(e,"class",S(`work-container ${_}`)+" svelte-bonyq0")},m(w,E){b(w,e,E),a(e,s),a(s,r),a(r,l),a(r,n),a(s,c),a(s,v),a(e,g),a(e,i),a(e,d),a(e,f),p||(y=G(i,"click",fe),p=!0)},p:h,i:h,o:h,d(w){w&&k(e),p=!1,y()}}}let _="undp";function fe(){let t=document.querySelector(`.work-container.${_}`),e=t.querySelector(`.show-desc-btn.${_}`),s=t.querySelector(".work-banner"),r=t.querySelector(`.chevron.${_}`);e.checked==!0?(r.style.transform="rotate(-45deg)",s.style.display="none"):(r.style.transform="rotate(135deg)",s.style.display="block")}class he extends L{constructor(e){super(),D(this,e,null,ge,q,{})}}function me(t){let e,s,r,l,n,c,v,g,i,d,f,p,y;return{c(){e=u("div"),s=u("label"),r=u("div"),l=O(`The World Data Visualization Prize\r
            `),n=u("div"),c=m(),v=u("div"),v.innerHTML=`<div class="banner-img-container svelte-1di3vk0"><img src="projects/Summit/summit-banner.png" alt="preview for summit project" class="grid-item svelte-1di3vk0"/> 
                <div class="filler-rect svelte-1di3vk0"></div></div>`,g=m(),i=u("input"),d=m(),f=u("div"),f.innerHTML=`<div class="work-text"><div class="work-field"><div class="work-field-title svelte-1di3vk0">Brief</div> 
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
            <img src="projects/Summit/summit-table.png" alt="summit-table" class="grid-item--summit-table grid-item svelte-1di3vk0"/></div>`,o(n,"class",S(`chevron ${j}`)+" svelte-1di3vk0"),o(r,"class","work-header-title"),o(v,"class","work-banner svelte-1di3vk0"),o(s,"for",`show-desc-${j}`),o(i,"type","checkbox"),o(i,"name",`show-desc-${j}`),o(i,"id",`show-desc-${j}`),o(i,"class",S(`show-desc-btn ${j}`)+" svelte-1di3vk0"),o(f,"class","details-container"),o(e,"class",S(`work-container ${j}`)+" svelte-1di3vk0")},m(w,E){b(w,e,E),a(e,s),a(s,r),a(r,l),a(r,n),a(s,c),a(s,v),a(e,g),a(e,i),a(e,d),a(e,f),p||(y=G(i,"click",pe),p=!0)},p:h,i:h,o:h,d(w){w&&k(e),p=!1,y()}}}let j="summit";function pe(){let t=document.querySelector(`.work-container.${j}`),e=t.querySelector(`.show-desc-btn.${j}`),s=t.querySelector(".work-banner"),r=t.querySelector(`.chevron.${j}`);e.checked==!0?(r.style.transform="rotate(-45deg)",s.style.display="none"):(r.style.transform="rotate(135deg)",s.style.display="block")}class we extends L{constructor(e){super(),D(this,e,null,me,q,{})}}function ye(t){let e,s,r,l,n,c,v,g,i;return l=new ue({}),c=new he({}),g=new we({}),{c(){e=u("div"),s=u("div"),s.textContent="Projects",r=m(),N(l.$$.fragment),n=m(),N(c.$$.fragment),v=m(),N(g.$$.fragment),o(s,"class","section-header svelte-12we2ri"),o(s,"id","works-section"),o(e,"class","container svelte-12we2ri")},m(d,f){b(d,e,f),a(e,s),a(e,r),T(l,e,null),a(e,n),T(c,e,null),a(e,v),T(g,e,null),i=!0},p:h,i(d){i||(x(l.$$.fragment,d),x(c.$$.fragment,d),x(g.$$.fragment,d),i=!0)},o(d){M(l.$$.fragment,d),M(c.$$.fragment,d),M(g.$$.fragment,d),i=!1},d(d){d&&k(e),I(l),I(c),I(g)}}}class ke extends L{constructor(e){super(),D(this,e,null,ye,q,{})}}function be(t){let e;return{c(){e=u("footer"),e.innerHTML=`<div class="contact svelte-1w9n8ec"><div class="section-header svelte-1w9n8ec">Contact me</div> 
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
                Python and D3.</div></div></div>`,o(e,"class","svelte-1w9n8ec")},m(s,r){b(s,e,r)},p:h,i:h,o:h,d(s){s&&k(e)}}}class $e extends L{constructor(e){super(),D(this,e,null,be,q,{})}}function _e(t){let e,s,r,l,n,c,v,g;return e=new ne({}),r=new de({}),n=new ke({}),v=new $e({}),{c(){N(e.$$.fragment),s=m(),N(r.$$.fragment),l=m(),N(n.$$.fragment),c=m(),N(v.$$.fragment)},m(i,d){T(e,i,d),b(i,s,d),T(r,i,d),b(i,l,d),T(n,i,d),b(i,c,d),T(v,i,d),g=!0},p:h,i(i){g||(x(e.$$.fragment,i),x(r.$$.fragment,i),x(n.$$.fragment,i),x(v.$$.fragment,i),g=!0)},o(i){M(e.$$.fragment,i),M(r.$$.fragment,i),M(n.$$.fragment,i),M(v.$$.fragment,i),g=!1},d(i){I(e,i),i&&k(s),I(r,i),i&&k(l),I(n,i),i&&k(c),I(v,i)}}}class je extends L{constructor(e){super(),D(this,e,null,_e,q,{})}}new je({target:document.getElementById("app")});
