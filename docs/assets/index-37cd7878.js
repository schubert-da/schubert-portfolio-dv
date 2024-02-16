(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();function j(){}function Ve(t,e){for(const s in e)t[s]=e[s];return t}function Oe(t){return t()}function je(){return Object.create(null)}function le(t){t.forEach(Oe)}function Ae(t){return typeof t=="function"}function O(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let se;function W(t,e){return se||(se=document.createElement("a")),se.href=e,t===se.href}function qe(t){return Object.keys(t).length===0}function Se(t,e,s,i){if(t){const o=Re(t,e,s,i);return t[0](o)}}function Re(t,e,s,i){return t[1]&&i?Ve(s.ctx.slice(),t[1](i(e))):s.ctx}function Ie(t,e,s,i){if(t[2]&&i){const o=t[2](i(s));if(e.dirty===void 0)return o;if(typeof o=="object"){const r=[],l=Math.max(e.dirty.length,o.length);for(let f=0;f<l;f+=1)r[f]=e.dirty[f]|o[f];return r}return e.dirty|o}return e.dirty}function xe(t,e,s,i,o,r){if(o){const l=Re(e,s,i,r);t.p(l,o)}}function Te(t){if(t.ctx.length>32){const e=[],s=t.ctx.length/32;for(let i=0;i<s;i++)e[i]=-1;return e}return-1}function p(t,e){t.appendChild(e)}function x(t,e,s){t.insertBefore(e,s||null)}function I(t){t.parentNode&&t.parentNode.removeChild(t)}function _(t){return document.createElement(t)}function Ge(t){return document.createTextNode(t)}function S(){return Ge(" ")}function ee(t,e,s,i){return t.addEventListener(e,s,i),()=>t.removeEventListener(e,s,i)}function c(t,e,s){s==null?t.removeAttribute(e):t.getAttribute(e)!==s&&t.setAttribute(e,s)}function q(t,e,s){e in t?t[e]=typeof t[e]=="boolean"&&s===""?!0:s:c(t,e,s)}function Ke(t){return Array.from(t.childNodes)}function T(t,e,s,i){s===null?t.style.removeProperty(e):t.style.setProperty(e,s,i?"important":"")}function U(t,e,s){t.classList[s?"add":"remove"](e)}let $;function Z(t){$=t}function Je(){if(!$)throw new Error("Function called outside component initialization");return $}function Ye(t){Je().$$.on_mount.push(t)}const K=[],H=[],ie=[],he=[],Xe=Promise.resolve();let me=!1;function Qe(){me||(me=!0,Xe.then(ze))}function oe(t){ie.push(t)}function ue(t){he.push(t)}const ge=new Set;let G=0;function ze(){if(G!==0)return;const t=$;do{try{for(;G<K.length;){const e=K[G];G++,Z(e),Ze(e.$$)}}catch(e){throw K.length=0,G=0,e}for(Z(null),K.length=0,G=0;H.length;)H.pop()();for(let e=0;e<ie.length;e+=1){const s=ie[e];ge.has(s)||(ge.add(s),s())}ie.length=0}while(K.length);for(;he.length;)he.pop()();me=!1,ge.clear(),Z(t)}function Ze(t){if(t.fragment!==null){t.update(),le(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(oe)}}const ne=new Set;let $e;function D(t,e){t&&t.i&&(ne.delete(t),t.i(e))}function M(t,e,s,i){if(t&&t.o){if(ne.has(t))return;ne.add(t),$e.c.push(()=>{ne.delete(t),i&&(s&&t.d(1),i())}),t.o(e)}else i&&i()}const et=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function ve(t,e,s){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=s,s(t.$$.ctx[i]))}function z(t){t&&t.c()}function E(t,e,s,i){const{fragment:o,after_update:r}=t.$$;o&&o.m(e,s),i||oe(()=>{const l=t.$$.on_mount.map(Oe).filter(Ae);t.$$.on_destroy?t.$$.on_destroy.push(...l):le(l),t.$$.on_mount=[]}),r.forEach(oe)}function N(t,e){const s=t.$$;s.fragment!==null&&(le(s.on_destroy),s.fragment&&s.fragment.d(e),s.on_destroy=s.fragment=null,s.ctx=[])}function tt(t,e){t.$$.dirty[0]===-1&&(K.push(t),Qe(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function A(t,e,s,i,o,r,l,f=[-1]){const v=$;Z(t);const n=t.$$={fragment:null,ctx:[],props:r,update:j,not_equal:o,bound:je(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(v?v.$$.context:[])),callbacks:je(),dirty:f,skip_bound:!1,root:e.target||v.$$.root};l&&l(n.root);let a=!1;if(n.ctx=s?s(t,e.props||{},(m,w,...u)=>{const d=u.length?u[0]:w;return n.ctx&&o(n.ctx[m],n.ctx[m]=d)&&(!n.skip_bound&&n.bound[m]&&n.bound[m](d),a&&tt(t,m)),w}):[],n.update(),a=!0,le(n.before_update),n.fragment=i?i(n.ctx):!1,e.target){if(e.hydrate){const m=Ke(e.target);n.fragment&&n.fragment.l(m),m.forEach(I)}else n.fragment&&n.fragment.c();e.intro&&D(t.$$.fragment),E(t,e.target,e.anchor,e.customElement),ze()}Z(v)}class R{$destroy(){N(this,1),this.$destroy=j}$on(e,s){if(!Ae(s))return j;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(s),()=>{const o=i.indexOf(s);o!==-1&&i.splice(o,1)}}$set(e){this.$$set&&!qe(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function st(t){let e;return{c(){e=_("div"),e.innerHTML=`<div class="home-container svelte-1yrldur"><h1 class="home-heading svelte-1yrldur">Hi I&#39;m <span class="svelte-1yrldur">Schubert!</span></h1> 
        <div class="text-home svelte-1yrldur"><strong>FRONTEND DEVELOPER</strong></div> 
        <div class="text-home-small svelte-1yrldur">I am a web developer with a keen interest for responsive web design
            and creating interactive visuals.
            <br/><br/>
            I have a passion for using data to tell stories and solve problems, and
            I am constantly seeking out new ways to use visualization to make data
            more accessible and meaningful to a wide range of audiences.
            <br/><br/>
            Currently I am looking for roles (full-time or contract) as Software and Data Visualisation Engineer.</div></div>`,c(e,"id","home-section"),c(e,"class","svelte-1yrldur")},m(s,i){x(s,e,i)},p:j,i:j,o:j,d(s){s&&I(e)}}}class it extends R{constructor(e){super(),A(this,e,null,st,O,{})}}function nt(t){let e;return{c(){e=_("div"),e.innerHTML=`<div class="skills-container svelte-1tja9ry"><div class="section-header svelte-1tja9ry">Skills</div> 
        <div class="skill-group svelte-1tja9ry"><div class="skill-group-header svelte-1tja9ry">I have worked with</div> 
            <div class="skill-group-desc svelte-1tja9ry">These are some of the things I picked up working in a
                professional setting, as a Software and Data Visualisation Engineer for over three years.</div></div> 
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
                over the years.</div></div></div>`,c(e,"class","skills-section svelte-1tja9ry"),c(e,"id","skills-section")},m(s,i){x(s,e,i)},p:j,i:j,o:j,d(s){s&&I(e)}}}class ot extends R{constructor(e){super(),A(this,e,null,nt,O,{})}}const{window:He}=et,rt=t=>({}),Pe=t=>({}),lt=t=>({}),De=t=>({});function at(t){let e,s,i,o,r,l,f,v,n;oe(t[21]);const a=t[20].background,m=Se(a,t,t[19],De),w=t[20].foreground,u=Se(w,t,t[19],Pe);return{c(){e=_("svelte-scroller-outer"),s=_("svelte-scroller-background-container"),i=_("svelte-scroller-background"),m&&m.c(),r=S(),l=_("svelte-scroller-foreground"),u&&u.c(),q(i,"class","svelte-xdbafy"),q(s,"class","background-container svelte-xdbafy"),q(s,"style",o=""+(t[5]+t[4])),q(l,"class","svelte-xdbafy"),q(e,"class","svelte-xdbafy")},m(d,y){x(d,e,y),p(e,s),p(s,i),m&&m.m(i,null),t[22](i),p(e,r),p(e,l),u&&u.m(l,null),t[23](l),t[24](e),f=!0,v||(n=ee(He,"resize",t[21]),v=!0)},p(d,y){m&&m.p&&(!f||y[0]&524288)&&xe(m,a,d,d[19],f?Ie(a,d[19],y,lt):Te(d[19]),De),(!f||y[0]&48&&o!==(o=""+(d[5]+d[4])))&&q(s,"style",o),u&&u.p&&(!f||y[0]&524288)&&xe(u,w,d,d[19],f?Ie(w,d[19],y,rt):Te(d[19]),Pe)},i(d){f||(D(m,d),D(u,d),f=!0)},o(d){M(m,d),M(u,d),f=!1},d(d){d&&I(e),m&&m.d(d),t[22](null),u&&u.d(d),t[23](null),t[24](null),v=!1,n()}}}const L=[];let re;if(typeof window<"u"){const t=()=>L.forEach(e=>e());window.addEventListener("scroll",t),window.addEventListener("resize",t)}if(typeof IntersectionObserver<"u"){const t=new Map,e=new IntersectionObserver((s,i)=>{s.forEach(o=>{const r=t.get(o.target),l=L.indexOf(r);o.isIntersecting?l===-1&&L.push(r):(r(),l!==-1&&L.splice(l,1))})},{rootMargin:"400px 0px"});re={add:({outer:s,update:i})=>{const{top:o,bottom:r}=s.getBoundingClientRect();o<window.innerHeight&&r>0&&L.push(i),t.set(s,i),e.observe(s)},remove:({outer:s,update:i})=>{const o=L.indexOf(i);o!==-1&&L.splice(o,1),t.delete(s),e.unobserve(s)}}}else re={add:({update:t})=>{L.push(t)},remove:({update:t})=>{const e=L.indexOf(t);e!==-1&&L.splice(e,1)}};function ct(t,e,s){let i,o,r,l,f,{$$slots:v={},$$scope:n}=e,{top:a=0}=e,{bottom:m=1}=e,{threshold:w=.5}=e,{query:u="section"}=e,{parallax:d=!1}=e,{index:y=0}=e,{count:P=0}=e,{offset:g=0}=e,{progress:h=0}=e,{visible:k=!1}=e,J,C,te,pe,Y,B=0,F,X=0,ae=1;Ye(()=>{Y=C.querySelectorAll(u),s(7,P=Y.length),ce();const b={outer:J,update:ce};return re.add(b),()=>re.remove(b)});function ce(){if(!C)return;const b=J.getBoundingClientRect();pe=b.left,s(18,ae=b.right-pe);const V=C.getBoundingClientRect(),_e=te.getBoundingClientRect();s(10,k=V.top<B&&V.bottom>0);const de=V.bottom-V.top,we=_e.bottom-_e.top,fe=o-i;s(9,h=(i-V.top)/(de-fe)),h<=0?(s(17,X=0),s(16,F=!1)):h>=1?(s(17,X=d?de-we:de-fe),s(16,F=!1)):(s(17,X=d?Math.round(i-h*(we-fe)):i),s(16,F=!0));for(let Q=0;Q<Y.length;Q++){const Fe=Y[Q],{top:be}=Fe.getBoundingClientRect(),ye=Y[Q+1],ke=ye?ye.getBoundingClientRect().top:V.bottom;if(s(8,g=(r-be)/(ke-be)),ke>=r){s(6,y=Q);break}}}function We(){s(0,B=He.innerHeight)}function Ue(b){H[b?"unshift":"push"](()=>{te=b,s(3,te)})}function Ce(b){H[b?"unshift":"push"](()=>{C=b,s(2,C)})}function Be(b){H[b?"unshift":"push"](()=>{J=b,s(1,J)})}return t.$$set=b=>{"top"in b&&s(11,a=b.top),"bottom"in b&&s(12,m=b.bottom),"threshold"in b&&s(13,w=b.threshold),"query"in b&&s(14,u=b.query),"parallax"in b&&s(15,d=b.parallax),"index"in b&&s(6,y=b.index),"count"in b&&s(7,P=b.count),"offset"in b&&s(8,g=b.offset),"progress"in b&&s(9,h=b.progress),"visible"in b&&s(10,k=b.visible),"$$scope"in b&&s(19,n=b.$$scope)},t.$$.update=()=>{t.$$.dirty[0]&2049&&(i=Math.round(a*B)),t.$$.dirty[0]&4097&&(o=Math.round(m*B)),t.$$.dirty[0]&8193&&(r=Math.round(w*B)),t.$$.dirty[0]&47104&&ce(),t.$$.dirty[0]&196608&&s(5,l=`
		position: ${F?"fixed":"absolute"};
		top: 0;
		transform: translate(0, ${X}px);
		z-index: ${1};
	`),t.$$.dirty[0]&327680&&s(4,f=F?`width:${ae}px;`:"")},[B,J,C,te,f,l,y,P,g,h,k,a,m,w,u,d,F,X,ae,n,v,We,Ue,Ce,Be]}class dt extends R{constructor(e){super(),A(this,e,ct,at,O,{top:11,bottom:12,threshold:13,query:14,parallax:15,index:6,count:7,offset:8,progress:9,visible:10},null,[-1,-1])}}function Me(t){let e;return{c(){e=_("div"),e.innerHTML=`<div class="body-section"><div class="section-desc"><a class="site-link" href="https://schubert-da.github.io/undp/" target="_blank" rel="noreferrer">View project</a></div></div> 
            
            <div class="body-section"><div class="section-title"><h2>BRIEF</h2></div> 
                <div class="section-desc">A data story on the work done by the <strong>UNDP 
                    Accelerator Labs Network</strong> which tracks and 
                    documents regional progress towards achieving
                    the UN&#39;s SDGs (Sustainable Development Goals).</div></div> 
            
            <div class="body-section"><div class="section-title"><h2>MY APPROACH</h2></div> 
                <div class="section-desc">In this project I wanted to give a broad overview of the
                    work done by UNDP and give a sense of the measures adopted
                    by communities in developing regions. The work would show
                    the <strong>importance of grassroots innovation and the 
                    value of local change</strong>
                    affected by people solving their most immediate problems.

                    <br/><br/>

                    Data included details of the individual solutions recorded
                    by the Accelerator labs in different countries which formed
                    the basis of the analysis.

                    <br/><br/>

                    I decided on using <strong>Svelte</strong> for the project early
                    on because the shorter deadline for submission meant that I would
                    more than likely be reusing charts and the modularity also goes
                    a long way on these single-page projects.</div></div> 

            <div class="body-section"><img src="projects/UNDP/undp-blocks.png" alt="tile chart for UNDP project"/></div> 

            <div class="body-section"><div class="section-title"><h2>TOOLS</h2></div> 
                <div class="section-desc">The entire project was completed with D3 and Svelte.
                    <br/>
                    An interesting detail is that not a single SVG was used for any of the charts 
                    throughout the project. All graphics were created with basic HTML elements manipulated
                    with Svelte based on the data.</div></div>`,c(e,"class","work-body")},m(s,i){x(s,e,i)},d(s){s&&I(e)}}}function ft(t){let e,s,i,o,r,l,f,v,n,a,m,w,u,d,y,P,g=t[2]===!1&&Me();return{c(){e=_("div"),s=_("div"),i=_("div"),o=_("div"),r=_("img"),f=S(),v=_("div"),n=_("img"),m=S(),w=_("div"),w.innerHTML=`<div class="title"><h2>United Nations Development Program</h2></div> 
            <div class="subtitle">A data story on the work done by the <strong>UNDP 
                Accelerator Labs Network</strong> which tracks and 
                documents regional progress towards achieving
                the UN&#39;s SDGs (Sustainable Development Goals).</div>`,u=S(),g&&g.c(),W(r.src,l="projects/UNDP/undp-bars.png")||c(r,"src",l),c(r,"alt","stacked bar charts for UNDP project"),T(r,"transform","translate(-40%, "+t[3](150,300,t[1].index)+"px)"),c(o,"class","image-track image-track-1 svelte-1ugbw1k"),W(n.src,a="projects/UNDP/undp-blocks.png")||c(n,"src",a),c(n,"alt","tile chart for UNDP project"),T(n,"transform","translate(-5%, "+t[3](-400,300,t[1].index,!0)+"px)"),c(v,"class","image-track image-track-2 svelte-1ugbw1k"),c(i,"class","image-container"),c(w,"class","text-container"),c(s,"class","work-header"),c(e,"id",d="project-container-"+t[0]),c(e,"class","work-container--redesign svelte-1ugbw1k"),U(e,"active",t[0]===t[1].index)},m(h,k){x(h,e,k),p(e,s),p(s,i),p(i,o),p(o,r),p(i,f),p(i,v),p(v,n),p(s,m),p(s,w),p(e,u),g&&g.m(e,null),y||(P=ee(s,"click",t[5]),y=!0)},p(h,[k]){k&2&&T(r,"transform","translate(-40%, "+h[3](150,300,h[1].index)+"px)"),k&2&&T(n,"transform","translate(-5%, "+h[3](-400,300,h[1].index,!0)+"px)"),h[2]===!1?g||(g=Me(),g.c(),g.m(e,null)):g&&(g.d(1),g=null),k&1&&d!==(d="project-container-"+h[0])&&c(e,"id",d),k&3&&U(e,"active",h[0]===h[1].index)},i:j,o:j,d(h){h&&I(e),g&&g.d(),y=!1,P()}}}function ut(t,e,s){let{index:i=0}=e,{scrollInfo:o}=e;function r(n,a,m,w=!1){if(i!==m||o.offset<=0)return n;{let u=w===!1?1:-1;return n-o.offset*a*u}}let l=!0;function f(){s(2,l=!l)}const v=()=>f();return t.$$set=n=>{"index"in n&&s(0,i=n.index),"scrollInfo"in n&&s(1,o=n.scrollInfo)},[i,o,l,r,f,v]}class gt extends R{constructor(e){super(),A(this,e,ut,ft,O,{index:0,scrollInfo:1})}}function Le(t){let e;return{c(){e=_("div"),e.innerHTML=`<div class="body-section"><div class="section-desc"><a class="site-link" href="https://schubert-da.github.io/dvs-world-summit/" target="_blank" rel="noreferrer">View project</a></div></div> 
            
            <div class="body-section"><div class="section-title"><h2>BRIEF</h2></div> 
                <div class="section-desc">The World Data Visualization Prize (2023) was a competition
                    hosted by the <strong>World Government Summit</strong> which throws
                    a spotlight on the progress made by world governments through data.</div></div> 
            
            <div class="body-section"><div class="section-title"><h2>MY APPROACH</h2></div> 
                <div class="section-desc">The World Government Summit provided data on the achievements of governments 
                    in health, poverty, world hunger, etc. The aim of the competition was to create 
                    an insightful data story to put into context the progress made by world governments 
                    in the last ten years.
                    <br/><br/>
                    With a large amount of time series data on achievements of governments in health, 
                    poverty, world hunger, etc, I started by looking for trends in the progress. With 
                    each measure we saw a general trend - there would be steady progress at the start then 
                    it would plateau later on, only to have years worth of progress erased by the global pandemic in 2019.
                    <br/><br/>
                    My initial goal was to understand exactly how COVID-19 threw us off track from 
                    achieving our goals. However as I started to look over the data, I quickly realised 
                    that in most cases we were far from achieving the set goals even if all things went 
                    smoothly - and this is what guided the new angle that I took this data story. Now my focus 
                    was to understand where global development had stagnated in recent years and how things 
                    worsened with covid.</div></div> 

            <div class="body-section"><img src="projects/Summit/summit-bar-chart.png" alt="bar chart for the world dataviz prize project"/></div> 

            <div class="body-section"><div class="section-title"><h2>TOOLS</h2></div> 
                <div class="section-desc">Svelte seemed a no-brainer for this project - it would
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
                    workflow.</div></div>`,c(e,"class","work-body")},m(s,i){x(s,e,i)},d(s){s&&I(e)}}}function vt(t){let e,s,i,o,r,l,f,v,n,a,m,w,u,d,y,P,g=t[2]===!1&&Le();return{c(){e=_("div"),s=_("div"),i=_("div"),o=_("div"),r=_("img"),f=S(),v=_("div"),n=_("img"),m=S(),w=_("div"),w.innerHTML=`<div class="title"><h2>The World Data Visualization Prize 2023</h2></div> 
            <div class="subtitle">The World Data Visualization Prize (2023) was a competition
                hosted by the <strong>World Government Summit</strong> which throws
                a spotlight on the progress made by world governments through data.</div>`,u=S(),g&&g.c(),W(r.src,l="projects/Summit/summit-maps.png")||c(r,"src",l),c(r,"alt","map for the world dataviz prize project"),T(r,"transform","translate(-10%, "+t[3](10,300,t[1].index)+"px)"),c(o,"class","image-track image-track-1 svelte-1bcenb8"),W(n.src,a="projects/Summit/summit-bar-chart.png")||c(n,"src",a),c(n,"alt","bar chart for the world dataviz prize project"),T(n,"transform","translate(-2%, "+t[3](-200,300,t[1].index,!0)+"px)"),c(v,"class","image-track image-track-2 svelte-1bcenb8"),c(i,"class","image-container"),c(w,"class","text-container"),c(s,"class","work-header"),c(e,"id",d="project-container-"+t[0]),c(e,"class","work-container--redesign svelte-1bcenb8"),U(e,"active",t[0]===t[1].index)},m(h,k){x(h,e,k),p(e,s),p(s,i),p(i,o),p(o,r),p(i,f),p(i,v),p(v,n),p(s,m),p(s,w),p(e,u),g&&g.m(e,null),y||(P=ee(s,"click",t[5]),y=!0)},p(h,[k]){k&2&&T(r,"transform","translate(-10%, "+h[3](10,300,h[1].index)+"px)"),k&2&&T(n,"transform","translate(-2%, "+h[3](-200,300,h[1].index,!0)+"px)"),h[2]===!1?g||(g=Le(),g.c(),g.m(e,null)):g&&(g.d(1),g=null),k&1&&d!==(d="project-container-"+h[0])&&c(e,"id",d),k&3&&U(e,"active",h[0]===h[1].index)},i:j,o:j,d(h){h&&I(e),g&&g.d(),y=!1,P()}}}function ht(t,e,s){let{index:i=0}=e,{scrollInfo:o}=e;function r(n,a,m,w=!1){if(i!==m||o.offset<=0)return n;{let u=w===!1?1:-1;return n-o.offset*a*u}}let l=!0;function f(){s(2,l=!l)}const v=()=>f();return t.$$set=n=>{"index"in n&&s(0,i=n.index),"scrollInfo"in n&&s(1,o=n.scrollInfo)},[i,o,l,r,f,v]}class mt extends R{constructor(e){super(),A(this,e,ht,vt,O,{index:0,scrollInfo:1})}}function Ee(t){let e;return{c(){e=_("div"),e.innerHTML=`<div class="body-section"><div class="section-desc"><a class="site-link" href="https://schubert-da.github.io/undp/" target="_blank" rel="noreferrer">View project</a></div></div> 
            
            <div class="body-section"><div class="section-title"><h2>BRIEF</h2></div> 
                <div class="section-desc">For my Kaggle ML and DS Survey 2022 submission, I looked at
                    how data professionals were using low-code tools to quickly
                    build and deploy data pipelines without the need for complex
                    code.</div></div> 
            
            <div class="body-section"><div class="section-title"><h2>MY APPROACH</h2></div> 
                <div class="section-desc">This competition entry won a runner-up spot in the
                    competition. It used data from various low-code trend
                    industry reports as well as Kaggle survey data to look into
                    the usage of these tools.
                    <br/><br/></div></div> 

            <div class="body-section"><img src="projects/Kaggle22/table.png" alt="tile chart for UNDP project"/></div> 

            <div class="body-section"><div class="section-title"><h2>TOOLS</h2></div> 
                <div class="section-desc">The notebook contains graphs in Python(with Plotly), with 
                    more involved graphs and tables using <strong>Markdown</strong> 
                    + <strong>CSS</strong>. The graphs created with CSS (eg. the above tables) 
                    were created with HTML elements, inspired by how Svelte uses data to
                    c</div></div>`,c(e,"class","work-body")},m(s,i){x(s,e,i)},d(s){s&&I(e)}}}function pt(t){let e,s,i,o,r,l,f,v,n,a,m,w,u,d,y,P,g=t[2]===!1&&Ee();return{c(){e=_("div"),s=_("div"),i=_("div"),o=_("div"),r=_("img"),f=S(),v=_("div"),n=_("img"),m=S(),w=_("div"),w.innerHTML=`<div class="title"><h2>State of Low-Code in Data</h2></div> 
            <div class="subtitle">Winning entry for the  Kaggle Machine Learning and Data Science 
                Survey 2022 competition, where I looked at how data professionals 
                were using low-code tools to quickly build and deploy data 
                pipelines without the need for complex code.</div>`,u=S(),g&&g.c(),W(r.src,l="projects/Kaggle22/line-chart.png")||c(r,"src",l),c(r,"alt","stacked bar charts for UNDP project"),T(r,"transform","translate(-40%, "+t[3](150,300,t[1].index)+"px)"),c(o,"class","image-track image-track-1 svelte-1ugbw1k"),W(n.src,a="projects/Kaggle22/area-bi.png")||c(n,"src",a),c(n,"alt","tile chart for UNDP project"),T(n,"transform","translate(-34%, "+t[3](-400,300,t[1].index,!0)+"px)"),c(v,"class","image-track image-track-2 svelte-1ugbw1k"),c(i,"class","image-container"),c(w,"class","text-container"),c(s,"class","work-header"),c(e,"id",d="project-container-"+t[0]),c(e,"class","work-container--redesign svelte-1ugbw1k"),U(e,"active",t[0]===t[1].index)},m(h,k){x(h,e,k),p(e,s),p(s,i),p(i,o),p(o,r),p(i,f),p(i,v),p(v,n),p(s,m),p(s,w),p(e,u),g&&g.m(e,null),y||(P=ee(s,"click",t[5]),y=!0)},p(h,[k]){k&2&&T(r,"transform","translate(-40%, "+h[3](150,300,h[1].index)+"px)"),k&2&&T(n,"transform","translate(-34%, "+h[3](-400,300,h[1].index,!0)+"px)"),h[2]===!1?g||(g=Ee(),g.c(),g.m(e,null)):g&&(g.d(1),g=null),k&1&&d!==(d="project-container-"+h[0])&&c(e,"id",d),k&3&&U(e,"active",h[0]===h[1].index)},i:j,o:j,d(h){h&&I(e),g&&g.d(),y=!1,P()}}}function _t(t,e,s){let{index:i=0}=e,{scrollInfo:o}=e;function r(n,a,m,w=!1){if(i!==m||o.offset<=0)return n;{let u=w===!1?1:-1;return n-o.offset*a*u}}let l=!0;function f(){s(2,l=!l)}const v=()=>f();return t.$$set=n=>{"index"in n&&s(0,i=n.index),"scrollInfo"in n&&s(1,o=n.scrollInfo)},[i,o,l,r,f,v]}class wt extends R{constructor(e){super(),A(this,e,_t,pt,O,{index:0,scrollInfo:1})}}function Ne(t){let e;return{c(){e=_("div"),e.innerHTML=`<div class="body-section"><div class="section-desc"><a class="site-link" href="https://www.revisual.co" target="_blank" rel="noreferrer">SOME OF OUR WORK</a></div></div> 
           
            
            <div class="body-section"><div class="section-title"><h2>BRIEF</h2></div> 
                <div class="section-desc">Since September 2023, I have been working as a <strong>Data
                    Visualisation Engineer</strong> for <a href="https://www.revisual.co" target="_blank" rel="noreferrer">Revisual Labs</a>, an information design firm based out of India. As things
                    progress, I will update this section with some of the
                    amazing stuff we&#39;re working on!</div></div> 

            <div class="body-section"><img src="projects/Revisual/rvl-data-bank.png" alt="a data explorer showing a line chart of mobile subscription 
                    data for several countries"/></div> 
            
            <div class="body-section"><div class="section-title"><h2>THE WORK</h2></div> 
                <div class="section-desc">The majority of work involves writing code in <strong>D3</strong> and <strong>Svelte</strong> for reusable graphics for use
                    within the organisation, as well as work on interactive
                    stories and dashboards for client data.

                    <br/><br/>
                    While I have completed work on several projects with Revisual,
                    with the recent launch of the firm, very few are accessible 
                    to the public as of yet. So I will update this section as 
                    and when things are rolled out.</div></div>`,c(e,"class","work-body")},m(s,i){x(s,e,i)},d(s){s&&I(e)}}}function bt(t){let e,s,i,o,r,l,f,v,n,a,m,w,u,d,y,P,g=t[2]===!1&&Ne();return{c(){e=_("div"),s=_("div"),i=_("div"),o=_("div"),r=_("img"),f=S(),v=_("div"),n=_("img"),m=S(),w=_("div"),w.innerHTML=`<div class="title"><h2>Work at Revisual Labs</h2></div> 
            <div class="subtitle">Since September 2023, I have been working as a <strong>Data
                Visualisation Engineer</strong> for <a href="https://www.revisual.co" target="_blank" rel="noreferrer">Revisual Labs</a>, an information design firm based out of India. As things
                progress, I will update this section with some of the
                amazing stuff we&#39;re working on!</div>`,u=S(),g&&g.c(),W(r.src,l="projects/Revisual/rvl-career-overview.png")||c(r,"src",l),c(r,"alt","stacked bar charts for UNDP project"),T(r,"transform","translate(-33%, "+t[3](150,300,t[1].index)+"px)"),c(o,"class","image-track image-track-1 svelte-csdzi3"),W(n.src,a="projects/Revisual/rvl-data-bank.png")||c(n,"src",a),c(n,"alt","a streamgraph depicting my evolution as a data visualization developer"),T(n,"transform","translate(-15%, "+t[3](-300,300,t[1].index,!0)+"px)"),c(v,"class","image-track image-track-2 svelte-csdzi3"),c(i,"class","image-container"),c(w,"class","text-container"),c(s,"class","work-header"),c(e,"id",d="project-container-"+t[0]),c(e,"class","work-container--redesign svelte-csdzi3"),U(e,"active",t[0]===t[1].index)},m(h,k){x(h,e,k),p(e,s),p(s,i),p(i,o),p(o,r),p(i,f),p(i,v),p(v,n),p(s,m),p(s,w),p(e,u),g&&g.m(e,null),y||(P=ee(s,"click",t[5]),y=!0)},p(h,[k]){k&2&&T(r,"transform","translate(-33%, "+h[3](150,300,h[1].index)+"px)"),k&2&&T(n,"transform","translate(-15%, "+h[3](-300,300,h[1].index,!0)+"px)"),h[2]===!1?g||(g=Ne(),g.c(),g.m(e,null)):g&&(g.d(1),g=null),k&1&&d!==(d="project-container-"+h[0])&&c(e,"id",d),k&3&&U(e,"active",h[0]===h[1].index)},i:j,o:j,d(h){h&&I(e),g&&g.d(),y=!1,P()}}}function yt(t,e,s){let{index:i=0}=e,{scrollInfo:o}=e;function r(n,a,m,w=!1){if(i!==m||o.offset<=0)return n;{let u=w===!1?1:-1;return n-o.offset*a*u}}let l=!0;function f(){s(2,l=!l)}const v=()=>f();return t.$$set=n=>{"index"in n&&s(0,i=n.index),"scrollInfo"in n&&s(1,o=n.scrollInfo)},[i,o,l,r,f,v]}class kt extends R{constructor(e){super(),A(this,e,yt,bt,O,{index:0,scrollInfo:1})}}function jt(t){let e;return{c(){e=_("div"),c(e,"slot","background"),T(e,"z-index","100")},m(s,i){x(s,e,i)},p:j,d(s){s&&I(e)}}}function St(t){let e,s,i,o,r,l,f,v,n;return s=new mt({props:{index:0,scrollInfo:{index:t[0],offset:t[1],progress:t[2]}}}),o=new gt({props:{index:1,scrollInfo:{index:t[0],offset:t[1],progress:t[2]}}}),l=new wt({props:{index:2,scrollInfo:{index:t[0],offset:t[1],progress:t[2]}}}),v=new kt({props:{index:3,scrollInfo:{index:t[0],offset:t[1],progress:t[2]}}}),{c(){e=_("div"),z(s.$$.fragment),i=S(),z(o.$$.fragment),r=S(),z(l.$$.fragment),f=S(),z(v.$$.fragment),c(e,"slot","foreground")},m(a,m){x(a,e,m),E(s,e,null),p(e,i),E(o,e,null),p(e,r),E(l,e,null),p(e,f),E(v,e,null),n=!0},p(a,m){const w={};m&7&&(w.scrollInfo={index:a[0],offset:a[1],progress:a[2]}),s.$set(w);const u={};m&7&&(u.scrollInfo={index:a[0],offset:a[1],progress:a[2]}),o.$set(u);const d={};m&7&&(d.scrollInfo={index:a[0],offset:a[1],progress:a[2]}),l.$set(d);const y={};m&7&&(y.scrollInfo={index:a[0],offset:a[1],progress:a[2]}),v.$set(y)},i(a){n||(D(s.$$.fragment,a),D(o.$$.fragment,a),D(l.$$.fragment,a),D(v.$$.fragment,a),n=!0)},o(a){M(s.$$.fragment,a),M(o.$$.fragment,a),M(l.$$.fragment,a),M(v.$$.fragment,a),n=!1},d(a){a&&I(e),N(s),N(o),N(l),N(v)}}}function It(t){let e,s,i,o,r,l,f,v;function n(u){t[3](u)}function a(u){t[4](u)}function m(u){t[5](u)}let w={top:.2,bottom:.8,query:"div.work-container--redesign",$$slots:{foreground:[St],background:[jt]},$$scope:{ctx:t}};return t[0]!==void 0&&(w.index=t[0]),t[1]!==void 0&&(w.offset=t[1]),t[2]!==void 0&&(w.progress=t[2]),o=new dt({props:w}),H.push(()=>ve(o,"index",n)),H.push(()=>ve(o,"offset",a)),H.push(()=>ve(o,"progress",m)),{c(){e=_("div"),s=_("div"),s.textContent="Projects",i=S(),z(o.$$.fragment),c(s,"class","section-header svelte-1wevnz5"),c(s,"id","works-section"),c(e,"class","container svelte-1wevnz5")},m(u,d){x(u,e,d),p(e,s),p(e,i),E(o,e,null),v=!0},p(u,[d]){const y={};d&71&&(y.$$scope={dirty:d,ctx:u}),!r&&d&1&&(r=!0,y.index=u[0],ue(()=>r=!1)),!l&&d&2&&(l=!0,y.offset=u[1],ue(()=>l=!1)),!f&&d&4&&(f=!0,y.progress=u[2],ue(()=>f=!1)),o.$set(y)},i(u){v||(D(o.$$.fragment,u),v=!0)},o(u){M(o.$$.fragment,u),v=!1},d(u){u&&I(e),N(o)}}}function xt(t,e,s){let i,o,r;function l(n){i=n,s(0,i)}function f(n){o=n,s(1,o)}function v(n){r=n,s(2,r)}return[i,o,r,l,f,v]}class Tt extends R{constructor(e){super(),A(this,e,xt,It,O,{})}}function Pt(t){let e;return{c(){e=_("footer"),e.innerHTML=`<div class="contact svelte-1w9n8ec"><div class="section-header svelte-1w9n8ec">Contact me</div> 
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
                Python and D3.</div></div></div>`,c(e,"class","svelte-1w9n8ec")},m(s,i){x(s,e,i)},p:j,i:j,o:j,d(s){s&&I(e)}}}class Dt extends R{constructor(e){super(),A(this,e,null,Pt,O,{})}}function Mt(t){let e,s,i,o,r,l,f,v;return e=new it({}),i=new ot({}),r=new Tt({}),f=new Dt({}),{c(){z(e.$$.fragment),s=S(),z(i.$$.fragment),o=S(),z(r.$$.fragment),l=S(),z(f.$$.fragment)},m(n,a){E(e,n,a),x(n,s,a),E(i,n,a),x(n,o,a),E(r,n,a),x(n,l,a),E(f,n,a),v=!0},p:j,i(n){v||(D(e.$$.fragment,n),D(i.$$.fragment,n),D(r.$$.fragment,n),D(f.$$.fragment,n),v=!0)},o(n){M(e.$$.fragment,n),M(i.$$.fragment,n),M(r.$$.fragment,n),M(f.$$.fragment,n),v=!1},d(n){N(e,n),n&&I(s),N(i,n),n&&I(o),N(r,n),n&&I(l),N(f,n)}}}class Lt extends R{constructor(e){super(),A(this,e,null,Mt,O,{})}}new Lt({target:document.getElementById("app")});
