import{h as x,g as N,j as w,i as E,k as A,l as y,m as L,n as O,q as k,r as v,f as H,s as S,u as R,v as I,x as C,o as M,c as D,F as q,y as B,z as W,a as g,b as F,t as _,A as T,B as U}from"./entry.407a2055.js";async function Y(e,t){return await G(t).catch(o=>(console.error("Failed to get image meta for "+t,o+""),{width:0,height:0,ratio:0}))}async function G(e){if(typeof Image>"u")throw new TypeError("Image not supported");return new Promise((t,i)=>{const o=new Image;o.onload=()=>{const r={width:o.width,height:o.height,ratio:o.width/o.height};t(r)},o.onerror=r=>i(r),o.src=e})}function z(e){return t=>t?e[t]||t:e.missingValue}function V({formatter:e,keyMap:t,joinWith:i="/",valueMap:o}={}){e||(e=(s,n)=>`${s}=${n}`),t&&typeof t!="function"&&(t=z(t));const r=o||{};return Object.keys(r).forEach(s=>{typeof r[s]!="function"&&(r[s]=z(r[s]))}),(s={})=>Object.entries(s).filter(([c,d])=>typeof d<"u").map(([c,d])=>{const f=r[c];return typeof f=="function"&&(d=f(s[c])),c=typeof t=="function"?t(c):c,e(c,d)}).join(i)}function p(e=""){if(typeof e=="number")return e;if(typeof e=="string"&&e.replace("px","").match(/^\d+$/g))return parseInt(e,10)}function X(e){const t={options:e},i=(r,s={})=>P(t,r,s),o=(r,s={},n={})=>i(r,{...n,modifiers:A(s,n.modifiers||{})}).url;for(const r in e.presets)o[r]=(s,n,c)=>o(s,n,{...e.presets[r],...c});return o.options=e,o.getImage=i,o.getMeta=(r,s)=>J(t,r,s),o.getSizes=(r,s)=>K(t,r,s),t.$img=o,o}async function J(e,t,i){const o=P(e,t,{...i});return typeof o.getMeta=="function"?await o.getMeta():await Y(e,o.url)}function P(e,t,i){var f,m;if(typeof t!="string"||t==="")throw new TypeError(`input must be a string (received ${typeof t}: ${JSON.stringify(t)})`);if(t.startsWith("data:"))return{url:t};const{provider:o,defaults:r}=Q(e,i.provider||e.options.provider),s=Z(e,i.preset);if(t=x(t)?t:N(t),!o.supportsAlias)for(const l in e.options.alias)t.startsWith(l)&&(t=w(e.options.alias[l],t.substr(l.length)));if(o.validateDomains&&x(t)){const l=E(t).host;if(!e.options.domains.find(u=>u===l))return{url:t}}const n=A(i,s,r);n.modifiers={...n.modifiers};const c=n.modifiers.format;(f=n.modifiers)!=null&&f.width&&(n.modifiers.width=p(n.modifiers.width)),(m=n.modifiers)!=null&&m.height&&(n.modifiers.height=p(n.modifiers.height));const d=o.getImage(t,n,e);return d.format=d.format||c||"",d}function Q(e,t){const i=e.options.providers[t];if(!i)throw new Error("Unknown provider: "+t);return i}function Z(e,t){if(!t)return{};if(!e.options.presets[t])throw new Error("Unknown preset: "+t);return e.options.presets[t]}function K(e,t,i){var f,m;const o=p((f=i.modifiers)==null?void 0:f.width),r=p((m=i.modifiers)==null?void 0:m.height),s=o&&r?r/o:0,n=[],c={};if(typeof i.sizes=="string")for(const l of i.sizes.split(/[\s,]+/).filter(u=>u)){const u=l.split(":");u.length===2&&(c[u[0].trim()]=u[1].trim())}else Object.assign(c,i.sizes);for(const l in c){const u=e.options.screens&&e.options.screens[l]||parseInt(l);let a=String(c[l]);const h=a.endsWith("vw");if(!h&&/^\d+$/.test(a)&&(a=a+"px"),!h&&!a.endsWith("px"))continue;let b=parseInt(a);if(!u||!b)continue;h&&(b=Math.round(b/100*u));const j=s?Math.round(b*s):r;n.push({width:b,size:a,screenMaxWidth:u,media:`(max-width: ${u}px)`,src:e.$img(t,{...i.modifiers,width:b,height:j},i)})}n.sort((l,u)=>l.screenMaxWidth-u.screenMaxWidth);const d=n[n.length-1];return d&&(d.media=""),{sizes:n.map(l=>`${l.media?l.media+" ":""}${l.size}`).join(", "),srcset:n.map(l=>`${l.src} ${l.width}w`).join(", "),src:d==null?void 0:d.src}}const ee=V({keyMap:{format:"f",fit:"fit",width:"w",height:"h",resize:"s",quality:"q",background:"b"},joinWith:"&",formatter:(e,t)=>y(e)+"_"+y(t)}),te=(e,{modifiers:t={},baseURL:i}={},o)=>{t.width&&t.height&&(t.resize=`${t.width}x${t.height}`,delete t.width,delete t.height);const r=ee(t)||"_";return i||(i=w(o.options.nuxt.baseURL,"/_ipx")),{url:w(i,r,L(e))}},oe=!0,se=!0,ie=Object.freeze(Object.defineProperty({__proto__:null,getImage:te,supportsAlias:se,validateDomains:oe},Symbol.toStringTag,{value:"Module"})),$={screens:{xs:320,sm:640,md:768,lg:1024,xl:1280,xxl:1536,"2xl":1536},presets:{},provider:"ipx",domains:[],alias:{}};$.providers={ipx:{provider:ie,defaults:void 0}};const re=()=>{const e=O(),t=k();return t.$img||t._img||(t._img=X({...$,nuxt:{baseURL:e.app.baseURL}}))},ae={src:{type:String,required:!0},format:{type:String,default:void 0},quality:{type:[Number,String],default:void 0},background:{type:String,default:void 0},fit:{type:String,default:void 0},modifiers:{type:Object,default:void 0},preset:{type:String,default:void 0},provider:{type:String,default:void 0},sizes:{type:[Object,String],default:void 0},preload:{type:Boolean,default:void 0},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0},alt:{type:String,default:void 0},referrerpolicy:{type:String,default:void 0},usemap:{type:String,default:void 0},longdesc:{type:String,default:void 0},ismap:{type:Boolean,default:void 0},loading:{type:String,default:void 0},crossorigin:{type:[Boolean,String],default:void 0,validator:e=>["anonymous","use-credentials","",!0,!1].includes(e)},decoding:{type:String,default:void 0,validator:e=>["async","auto","sync"].includes(e)}},ne=e=>{const t=v(()=>({provider:e.provider,preset:e.preset})),i=v(()=>({width:p(e.width),height:p(e.height),alt:e.alt,referrerpolicy:e.referrerpolicy,usemap:e.usemap,longdesc:e.longdesc,ismap:e.ismap,crossorigin:e.crossorigin===!0?"anonymous":e.crossorigin||void 0,loading:e.loading,decoding:e.decoding})),o=v(()=>({...e.modifiers,width:p(e.width),height:p(e.height),format:e.format,quality:e.quality,background:e.background,fit:e.fit}));return{options:t,attrs:i,modifiers:o}},le={...ae,placeholder:{type:[Boolean,String,Number,Array],default:void 0}},ce=H({name:"NuxtImg",props:le,emits:["load","error"],setup:(e,t)=>{const i=re(),o=ne(e),r=S(!1),s=v(()=>i.getSizes(e.src,{...o.options.value,sizes:e.sizes,modifiers:{...o.modifiers.value,width:p(e.width),height:p(e.height)}})),n=v(()=>{const a={...o.attrs.value,"data-nuxt-img":""};return e.sizes&&(a.sizes=s.value.sizes,a.srcset=s.value.srcset),a}),c=v(()=>{let a=e.placeholder;if(a===""&&(a=!0),!a||r.value)return!1;if(typeof a=="string")return a;const h=Array.isArray(a)?a:typeof a=="number"?[a,a]:[10,10];return i(e.src,{...o.modifiers.value,width:h[0],height:h[1],quality:h[2]||50},o.options.value)}),d=v(()=>e.sizes?s.value.src:i(e.src,o.modifiers.value,o.options.value)),f=v(()=>c.value?c.value:d.value);if(e.preload){const a=Object.values(s.value).every(h=>h);R({link:[{rel:"preload",as:"image",...a?{href:s.value.src,imagesizes:s.value.sizes,imagesrcset:s.value.srcset}:{href:f.value}}]})}const m=S(),u=k().isHydrating;return I(()=>{if(c.value){const a=new Image;a.src=d.value,a.onload=h=>{m.value&&(m.value.src=d.value),r.value=!0,t.emit("load",h)};return}m.value&&(m.value.complete&&u&&(m.value.getAttribute("data-error")?t.emit("error",new Event("error")):t.emit("load",new Event("load"))),m.value.onload=a=>{t.emit("load",a)},m.value.onerror=a=>{t.emit("error",a)})}),()=>C("img",{ref:m,key:f.value,src:f.value,...n.value,...t.attrs})}}),de=""+globalThis.__publicAssetsURL("videos/Homepage-Demo-Drive-Desktop-NA.webm"),ue={class:"scroll__items"},me=W('<section class="hero relative section"><div class="hero__container min-h-screen grid grid-cols-1 grid-rows-2 justify-items-center"><div class="hero__titles opacity-80 pt-32 max-sm:pt-20 text-center"><h2 class="text-5xl mb-5 text-white text-center z-30 max-sm:text-3xl">Experience Tesla</h2><h3 class="text-1xl text-white text-center">Schedule a Demo Drive Todays</h3></div><video autoplay loop muted class="hero__video absolute w-full h-full object-cover top-0 left-0 -z-10"><source src="'+de+'" type="video/mp4"> Your browser does not support the video tag. </video><button class="hero__button z-10 rounded px-20 py-1 border-white border-2 text-white text-xl max-h-11 self-end mb-20 max-sm:w-full max-sm:text-base max-sm:px-10"> Demo drive </button></div></section>',1),ge={class:"models relative section"},fe=["data-alt","data-iesrc"],he=["srcset"],pe=["srcset"],ve=["srcset"],be={class:"models__container min-h-screen grid grid-cols-1 grid-rows-2 justify-items-center"},_e={class:"models__titles pt-32 max-sm:pt-20 text-center"},we={class:"models__title text-black text-5xl mb-5 max-sm:text-3xl"},xe={class:"models__subtitle tracking-wide"},ye={class:"models__subtitle tracking-wide"},Se={class:"models__buttons flex gap-5 flex-wrap justify-center self-end mb-20"},Me={class:"buttons__explore w-60 h-10 bg-white opacity-70 rounded-lg text-lg max-sm:w-full max-sm:text-base max-sm:px-10 overflow-hidden"},ze=H({__name:"index",setup(e){const t=[{inventory:"Model 3",subtitle1:"Starting at $32,740",subtitle2:"After Federal Tax Credit",srcMobile:"/img/homepage/Homepage-Model-3-Mobile-NA.avif",srcDesktop:"/img/homepage/Homepage-Model-3-Desktop-NA.avif",alt:"Model 3",button1:"Explore Inventory",button2:"Custom Order"},{inventory:"Model Y",subtitle1:"Starting at $40,240",subtitle2:" After Federal Tax Credit",srcMobile:"/img/homepage/Homepage-ModelY-LHD-Mobile.avif",srcDesktop:"/img/homepage/Homepage-Model-Y-Global-Desktop.avif",alt:"Model Y",button1:"Explore Inventory",button2:"Custom Order"},{inventory:"Model S",subtitle1:"Explore Inventory",srcMobile:"/img/homepage/Homepage-Model-S-Mobile-LHD-6.22.avif",srcDesktop:"/img/homepage/Homepage-Model-S-Desktop-LHD-6.22.avif",alt:"Model S",button1:"Explore Inventory",button2:"Demo drive"},{inventory:"Model X",subtitle1:"Explore Inventory",srcMobile:"/img/homepage/Homepage-Model-X-Mobile-LHD_001.avif",srcDesktop:"/img/homepage/Homepage-Model-X-Desktop-LHD.avif",alt:"Model X",button1:"Explore Inventory",button2:"Demo drive"},{inventory:"Solar Panels",subtitle1:"Schedule a Virtual Consultation",srcMobile:"/img/homepage/Homepage-SolarPanels-Mobile.avif",srcDesktop:"/img/homepage/425_HP_SolarPanels_D.avif",alt:"Solar Panels",button1:"Order Now",button2:"Learn more"},{inventory:"Solar Roof",subtitle1:"Produce Clean Energy From Your Roof",srcMobile:"/img/homepage/Homepage-SolarRoof-Mobile.avif",srcDesktop:"/img/homepage/Homepage-SolarRoof-Desktop-Global.avif",alt:"Solar Roof",button1:"Order Now",button2:"Learn more"},{inventory:"Powerwall",subtitle1:"",srcMobile:"/img/homepage/Homepage-Powerwall-Mobile.avif",srcDesktop:"/img/homepage/Homepage-Powerwall-Desktop.avif",alt:"Powerwall",button1:"Order Now",button2:"Learn more"},{inventory:"Accessories",subtitle1:"",srcMobile:"/img/homepage/Homepage-Accessories-Mobile-NA-APAC.avif",srcDesktop:"/img/homepage/Homepage-Accessories-Desktop-NA-APAC.avif",alt:"Accessories",button1:"Shop Now",button2:""}];return I(()=>{const i=new IntersectionObserver(o=>{o.forEach(r=>{r.isIntersecting?r.target.classList.add("active"):r.target.classList.remove("active")})},{threshold:.5});document.querySelectorAll(".models__container").forEach(o=>{i.observe(o)})}),(i,o)=>{const r=ce;return M(),D("div",ue,[me,(M(),D(q,null,B(t,s=>g("section",ge,[g("picture",{class:"models__picture","data-alt":s.alt,"data-iesrc":s.srcDesktop},[g("source",{srcset:s.srcMobile,media:"(max-width: 599px)"},null,8,he),g("source",{srcset:s.srcDesktop,media:"(min-width: 600px)"},null,8,pe),g("source",{srcset:s.srcMobile,media:"(min-width: 600px) and (orientation:portrait)"},null,8,ve),F(r,{class:"models__image absolute w-full h-full object-cover top-0 left-0 -z-10",src:s.srcDesktop,srcset:s.srcDesktop,alt:s.alt},null,8,["src","srcset","alt"])],8,fe),g("div",be,[g("div",_e,[g("h2",we,_(s.inventory),1),g("h3",xe,_(s.subtitle1),1),g("h4",ye,_(s.subtitle2),1)]),g("div",Se,[g("button",Me,_(s.button1),1),T(g("button",{class:"buttons__custom w-60 h-10 bg-black opacity-70 rounded-lg text-white text-lg max-sm:w-full max-sm:text-base max-sm:px-10 overflow-hidden"},_(s.button2),513),[[U,s.button2]])])])])),64))])}}});export{ze as default};