import{j as m,r as s,af as P,ag as L,b as I,M as D,z as f,l as O,ah as R,d as e,a7 as V,K as S,C as y,a3 as b,a8 as c,y as B,ai as x,v as N}from"./entry.5509b817.js";import{_ as r}from"./entry.async.3095d3bb.js";import"./ContentSlot.11b7123d.js";/* empty css                                                                                    *//* empty css                                                                                                *//* empty css                                                                                   */import"./EditOnLink.vue_vue_type_script_lang.f91ec419.js";/* empty css                                                                                        */import"./ProseCodeInline.0acb4f89.js";/* empty css                                                                               *//* empty css                                                                                      *//* empty css                                                                                      *//* empty css                                                                                 *//* empty css                                                                                         *//* empty css                                                                                *//* empty css                                                                                         *//* empty css                                                                                   *//* empty css                                                                                 *//* empty css                                                                                 *//* empty css                                                                                 *//* empty css                                                                                 *//* empty css                                                                                 *//* empty css                                                                                 *//* empty css                                                                                 *//* empty css                                                                                 *//* empty css                                                                                  *//* empty css                                                                                 *//* empty css                                                                                 *//* empty css                                                                                *//* empty css                                                                                     */import"./ProseTable.14bf225c.js";import"./ProseTd.dcefb8b4.js";import"./ProseTh.ecc8ee89.js";import"./ProseThead.aa067744.js";import"./ProseTr.0b4d626d.js";/* empty css                                                                                 *//* empty css                                                                               *//* empty css                                                                                 *//* empty css                                                                  */import"./CodeGroup.vue_vue_type_style_index_0_scoped_a516578b_transformed_true_lang.9998e6e6.js";/* empty css                                                                                  */import"./List.vue_vue_type_style_index_0_scoped_f4e70c29_transformed_true_lang.70e85918.js";import"./NuxtImg.vue_vue_type_script_lang.582cada8.js";import"./Props.26f4f4c0.js";import"./TabsHeader.697fed8d.js";/* empty css                                                                                 *//* empty css                                                                                  *//* empty css                                                                                     *//* empty css                                                                                        *//* empty css                                                                                   *//* empty css                                                                              *//* empty css                                                                                  *//* empty css                                                                    *//* empty css                                                                           */import"./ContentDoc.491218f3.js";import"./ContentList.1d215210.js";import"./ContentQuery.34ffb836.js";import"./ContentRenderer.b0d66571.js";import"./ContentRendererMarkdown.fc30f6c4.js";import"./DocumentDrivenEmpty.c2a71ccd.js";import"./Markdown.354f29d5.js";import"./layout.7cd28927.js";import"./ProseTbody.72c043ec.js";import"./_commonjsHelpers.726de751.js";const j=m({emits:{error(t){return!0}},setup(t,{slots:i,emit:o}){const _=s(null),n=P();return L(u=>{if(!n.isHydrating)return o("error",u),_.value=u,!1}),()=>{var u,a;return _.value?(u=i.error)==null?void 0:u.call(i,{error:_}):(a=i.default)==null?void 0:a.call(i)}}}),M=Object.freeze(Object.defineProperty({__proto__:null,default:j},Symbol.toStringTag,{value:"Module"})),z=m({name:"DevOnly",setup(t,i){return()=>null}}),k=Object.freeze(Object.defineProperty({__proto__:null,default:z},Symbol.toStringTag,{value:"Module"})),C=m({name:"ServerPlaceholder",render(){return I("div")}}),q=Object.freeze(Object.defineProperty({__proto__:null,default:C},Symbol.toStringTag,{value:"Module"})),H=m({name:"NuxtLoadingIndicator",props:{throttle:{type:Number,default:200},duration:{type:Number,default:2e3},height:{type:Number,default:3},color:{type:String,default:"repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"}},setup(t,{slots:i}){const o=$({duration:t.duration,throttle:t.throttle}),_=P();return _.hook("page:start",o.start),_.hook("page:finish",o.finish),D(()=>o.clear),()=>f("div",{class:"nuxt-loading-indicator",style:{position:"fixed",top:0,right:0,left:0,pointerEvents:"none",width:`${o.progress.value}%`,height:`${t.height}px`,opacity:o.isLoading.value?1:0,background:t.color,backgroundSize:`${100/o.progress.value*100}% auto`,transition:"width 0.1s, height 0.4s, opacity 0.4s",zIndex:999999}},i)}});function $(t){const i=s(0),o=s(!1),_=O(()=>1e4/t.duration);let n=null,u=null;function a(){p(),i.value=0,o.value=!0,t.throttle?u=setTimeout(v,t.throttle):v()}function h(){i.value=100,g()}function p(){clearInterval(n),clearTimeout(u),n=null,u=null}function T(A){i.value=Math.min(100,i.value+A)}function g(){p(),setTimeout(()=>{o.value=!1,setTimeout(()=>{i.value=0},400)},500)}function v(){n=setInterval(()=>{T(_.value)},100)}return{progress:i,isLoading:o,start:a,finish:h,clear:p}}const w=Object.freeze(Object.defineProperty({__proto__:null,default:H},Symbol.toStringTag,{value:"Module"})),U=t=>Object.fromEntries(Object.entries(t).filter(([,i])=>i!==void 0)),d=(t,i)=>(o,_)=>(R(()=>t({...U(o),..._.attrs},_)),()=>{var n,u;return i?(u=(n=_.slots).default)==null?void 0:u.call(n):null}),E={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:String,contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String},F=m({name:"NoScript",inheritAttrs:!1,props:{...E,title:String,body:Boolean,renderPriority:[String,Number]},setup:d((t,{slots:i})=>{var n;const o={...t},_=(((n=i.default)==null?void 0:n.call(i))||[]).filter(({children:u})=>u).map(({children:u})=>u).join("");return _&&(o.children=_),{noscript:[o]}})}),K=m({name:"Link",inheritAttrs:!1,props:{...E,as:String,crossorigin:String,disabled:Boolean,fetchpriority:String,href:String,hreflang:String,imagesizes:String,imagesrcset:String,integrity:String,media:String,prefetch:{type:Boolean,default:void 0},referrerpolicy:String,rel:String,sizes:String,title:String,type:String,methods:String,target:String,body:Boolean,renderPriority:[String,Number]},setup:d(t=>({link:[t]}))}),G=m({name:"Base",inheritAttrs:!1,props:{...E,href:String,target:String},setup:d(t=>({base:t}))}),J=m({name:"Title",inheritAttrs:!1,setup:d((t,{slots:i})=>{var _,n,u;return{title:((u=(n=(_=i.default)==null?void 0:_.call(i))==null?void 0:n[0])==null?void 0:u.children)||null}})}),Q=m({name:"Meta",inheritAttrs:!1,props:{...E,charset:String,content:String,httpEquiv:String,name:String,body:Boolean,renderPriority:[String,Number]},setup:d(t=>{const i={...t};return i.httpEquiv&&(i["http-equiv"]=i.httpEquiv,delete i.httpEquiv),{meta:[i]}})}),W=m({name:"Style",inheritAttrs:!1,props:{...E,type:String,media:String,nonce:String,title:String,scoped:{type:Boolean,default:void 0},body:Boolean,renderPriority:[String,Number]},setup:d((t,{slots:i})=>{var n,u,a;const o={...t},_=(a=(u=(n=i.default)==null?void 0:n.call(i))==null?void 0:u[0])==null?void 0:a.children;return _&&(o.children=_),{style:[o]}})}),X=m({name:"Head",inheritAttrs:!1,setup:(t,i)=>()=>{var o,_;return(_=(o=i.slots).default)==null?void 0:_.call(o)}}),Y=m({name:"Html",inheritAttrs:!1,props:{...E,manifest:String,version:String,xmlns:String,renderPriority:[String,Number]},setup:d(t=>({htmlAttrs:t}),!0)}),Z=m({name:"Body",inheritAttrs:!1,props:{...E,renderPriority:[String,Number]},setup:d(t=>({bodyAttrs:t}),!0)}),l=Object.freeze(Object.defineProperty({__proto__:null,NoScript:F,Link:K,Base:G,Title:J,Meta:Q,Style:W,Head:X,Html:Y,Body:Z},Symbol.toStringTag,{value:"Module"}));e(()=>r(()=>import("./entry.5509b817.js").then(t=>t.aV),["./entry.5509b817.js","./entry.async.3095d3bb.js","./entry.8fabfa88.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.5509b817.js").then(t=>t.aU),["./entry.5509b817.js","./entry.async.3095d3bb.js","./entry.8fabfa88.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.5509b817.js").then(t=>t.aO),["./entry.5509b817.js","./entry.async.3095d3bb.js","./entry.8fabfa88.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.5509b817.js").then(t=>t.aQ),["./entry.5509b817.js","./entry.async.3095d3bb.js","./entry.8fabfa88.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.5509b817.js").then(t=>t.aR),["./entry.5509b817.js","./entry.async.3095d3bb.js","./entry.8fabfa88.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./AppLayout.b4b3cf82.js"),["./AppLayout.b4b3cf82.js","./entry.5509b817.js","./entry.async.3095d3bb.js","./entry.8fabfa88.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.5509b817.js").then(t=>t.aH),["./entry.5509b817.js","./entry.async.3095d3bb.js","./entry.8fabfa88.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.5509b817.js").then(t=>t.aS),["./entry.5509b817.js","./entry.async.3095d3bb.js","./entry.8fabfa88.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.5509b817.js").then(t=>t.aJ),["./entry.5509b817.js","./entry.async.3095d3bb.js","./entry.8fabfa88.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./DocumentDrivenNotFound.e1989c2b.js"),["./DocumentDrivenNotFound.e1989c2b.js","./ButtonLink.76f68bdd.js","./entry.5509b817.js","./entry.async.3095d3bb.js","./entry.8fabfa88.css","./ContentSlot.11b7123d.js","./ButtonLink.eec5f319.css","./DocumentDrivenNotFound.434430ce.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.5509b817.js").then(t=>t.aP),["./entry.5509b817.js","./entry.async.3095d3bb.js","./entry.8fabfa88.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.5509b817.js").then(t=>t.aN),["./entry.5509b817.js","./entry.async.3095d3bb.js","./entry.8fabfa88.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./DocsAside.82cb658d.js"),["./DocsAside.82cb658d.js","./entry.5509b817.js","./entry.async.3095d3bb.js","./entry.8fabfa88.css","./DocsAside.307f4bb4.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.5509b817.js").then(t=>t.aK),["./entry.5509b817.js","./entry.async.3095d3bb.js","./entry.8fabfa88.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./DocsPageBottom.5bd6aef2.js"),["./DocsPageBottom.5bd6aef2.js","./EditOnLink.vue_vue_type_script_lang.f91ec419.js","./entry.5509b817.js","./entry.async.3095d3bb.js","./entry.8fabfa88.css","./DocsPageBottom.7dd428f5.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./DocsPageContent.fc7f2413.js"),["./DocsPageContent.fc7f2413.js","./DocsAside.82cb658d.js","./entry.5509b817.js","./entry.async.3095d3bb.js","./entry.8fabfa88.css","./DocsAside.307f4bb4.css","./ProseCodeInline.0acb4f89.js","./ProseCodeInline.5c292c0c.css","./Alert.be5c3e70.js","./ContentSlot.11b7123d.js","./Alert.4980d57b.css","./DocsPageBottom.5bd6aef2.js","./EditOnLink.vue_vue_type_script_lang.f91ec419.js","./DocsPageBottom.7dd428f5.css","./DocsPrevNext.74d2d446.js","./DocsPrevNext.ab4a6a73.css","./DocsToc.2b1cf3a9.js","./DocsTocLinks.a237c6aa.js","./DocsTocLinks.2846f127.css","./DocsToc.6b8d2996.css","./DocsPageContent.dbe6327f.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./DocsPrevNext.74d2d446.js"),["./DocsPrevNext.74d2d446.js","./entry.5509b817.js","./entry.async.3095d3bb.js","./entry.8fabfa88.css","./DocsPrevNext.ab4a6a73.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./DocsToc.2b1cf3a9.js"),["./DocsToc.2b1cf3a9.js","./DocsTocLinks.a237c6aa.js","./entry.5509b817.js","./entry.async.3095d3bb.js","./entry.8fabfa88.css","./DocsTocLinks.2846f127.css","./DocsToc.6b8d2996.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./DocsTocLinks.a237c6aa.js"),["./DocsTocLinks.a237c6aa.js","./entry.5509b817.js","./entry.async.3095d3bb.js","./entry.8fabfa88.css","./DocsTocLinks.2846f127.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./EditOnLink.5dc6c433.js"),["./EditOnLink.5dc6c433.js","./EditOnLink.vue_vue_type_script_lang.f91ec419.js","./entry.5509b817.js","./entry.async.3095d3bb.js","./entry.8fabfa88.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseA.664652eb.js"),["./ProseA.664652eb.js","./entry.5509b817.js","./entry.async.3095d3bb.js","./entry.8fabfa88.css","./ProseA.c0b3282e.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseBlockquote.1fba7789.js"),["./ProseBlockquote.1fba7789.js","./entry.5509b817.js","./entry.async.3095d3bb.js","./entry.8fabfa88.css","./ProseBlockquote.8cd3c64f.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseCode.afed3d93.js"),["./ProseCode.afed3d93.js","./ProseCodeCopyButton.be7136d2.js","./entry.5509b817.js","./entry.async.3095d3bb.js","./entry.8fabfa88.css","./index.bf60d878.js","./ProseCode.bb401702.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseCodeInline.0acb4f89.js"),["./ProseCodeInline.0acb4f89.js","./entry.5509b817.js","./entry.async.3095d3bb.js","./entry.8fabfa88.css","./ProseCodeInline.5c292c0c.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseEm.c30fba5d.js"),["./ProseEm.c30fba5d.js","./entry.5509b817.js","./entry.async.3095d3bb.js","./entry.8fabfa88.css","./ProseEm.08155f3c.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseH1.dfe21add.js"),["./ProseH1.dfe21add.js","./entry.5509b817.js","./entry.async.3095d3bb.js","./entry.8fabfa88.css","./ProseH1.713a018b.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseH2.ed1cbc7d.js"),["./ProseH2.ed1cbc7d.js","./entry.5509b817.js","./entry.async.3095d3bb.js","./entry.8fabfa88.css","./ProseH2.c3733cfa.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseH3.3fb38876.js"),["./ProseH3.3fb38876.js","./entry.5509b817.js","./entry.async.3095d3bb.js","./entry.8fabfa88.css","./ProseH3.c20b07eb.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseH4.69d55764.js"),["./ProseH4.69d55764.js","./entry.5509b817.js","./entry.async.3095d3bb.js","./entry.8fabfa88.css","./ProseH4.99474624.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseH5.c9575c4c.js"),["./ProseH5.c9575c4c.js","./entry.5509b817.js","./entry.async.3095d3bb.js","./entry.8fabfa88.css","./ProseH5.fa6d9ad5.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseH6.e5696830.js"),["./ProseH6.e5696830.js","./entry.5509b817.js","./entry.async.3095d3bb.js","./entry.8fabfa88.css","./ProseH6.4a50fcaf.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseHr.ab9bca2f.js"),["./ProseHr.ab9bca2f.js","./entry.5509b817.js","./entry.async.3095d3bb.js","./entry.8fabfa88.css","./ProseHr.7f3ea8bf.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseImg.dece1e8f.js"),["./ProseImg.dece1e8f.js","./entry.5509b817.js","./entry.async.3095d3bb.js","./entry.8fabfa88.css","./ProseImg.1b12ee83.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseLi.dd857534.js"),["./ProseLi.dd857534.js","./entry.5509b817.js","./entry.async.3095d3bb.js","./entry.8fabfa88.css","./ProseLi.7005f7b9.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseOl.a3cbc287.js"),["./ProseOl.a3cbc287.js","./entry.5509b817.js","./entry.async.3095d3bb.js","./entry.8fabfa88.css","./ProseOl.f18f1ab6.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseP.1dc475f0.js"),["./ProseP.1dc475f0.js","./entry.5509b817.js","./entry.async.3095d3bb.js","./entry.8fabfa88.css","./ProseP.8117fd4f.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseStrong.e4f0c6a0.js"),["./ProseStrong.e4f0c6a0.js","./entry.5509b817.js","./entry.async.3095d3bb.js","./entry.8fabfa88.css","./ProseStrong.22b57f6c.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseTable.14bf225c.js"),["./ProseTable.14bf225c.js","./entry.5509b817.js","./entry.async.3095d3bb.js","./entry.8fabfa88.css","./ProseTable.cb863e95.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseTbody.72c043ec.js"),["./ProseTbody.72c043ec.js","./entry.5509b817.js","./entry.async.3095d3bb.js","./entry.8fabfa88.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseTd.dcefb8b4.js"),["./ProseTd.dcefb8b4.js","./entry.5509b817.js","./entry.async.3095d3bb.js","./entry.8fabfa88.css","./ProseTd.8bba0d9d.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseTh.ecc8ee89.js"),["./ProseTh.ecc8ee89.js","./entry.5509b817.js","./entry.async.3095d3bb.js","./entry.8fabfa88.css","./ProseTh.82079a3d.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseThead.aa067744.js"),["./ProseThead.aa067744.js","./entry.5509b817.js","./entry.async.3095d3bb.js","./entry.8fabfa88.css","./ProseThead.8eca405b.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseTr.0b4d626d.js"),["./ProseTr.0b4d626d.js","./entry.5509b817.js","./entry.async.3095d3bb.js","./entry.8fabfa88.css","./ProseTr.09362402.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseUl.b6568d67.js"),["./ProseUl.b6568d67.js","./entry.5509b817.js","./entry.async.3095d3bb.js","./entry.8fabfa88.css","./ProseUl.c24d887f.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseCodeCopyButton.be7136d2.js"),["./ProseCodeCopyButton.be7136d2.js","./entry.5509b817.js","./entry.async.3095d3bb.js","./entry.8fabfa88.css","./index.bf60d878.js","./ProseCode.bb401702.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./Alert.be5c3e70.js"),["./Alert.be5c3e70.js","./ContentSlot.11b7123d.js","./entry.5509b817.js","./entry.async.3095d3bb.js","./entry.8fabfa88.css","./Alert.4980d57b.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./Badge.8bff0f45.js"),["./Badge.8bff0f45.js","./ContentSlot.11b7123d.js","./entry.5509b817.js","./entry.async.3095d3bb.js","./entry.8fabfa88.css","./Badge.1b55ae19.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ButtonLink.76f68bdd.js"),["./ButtonLink.76f68bdd.js","./entry.5509b817.js","./entry.async.3095d3bb.js","./entry.8fabfa88.css","./ContentSlot.11b7123d.js","./ButtonLink.eec5f319.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./Callout.ec2b1c97.js"),["./Callout.ec2b1c97.js","./ContentSlot.11b7123d.js","./entry.5509b817.js","./entry.async.3095d3bb.js","./entry.8fabfa88.css","./Callout.09d7a57a.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./CodeBlock.86c1305d.js"),["./CodeBlock.86c1305d.js","./entry.5509b817.js","./entry.async.3095d3bb.js","./entry.8fabfa88.css","./CodeBlock.e4cadaca.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./CodeGroup.2ab4f153.js"),["./CodeGroup.2ab4f153.js","./CodeGroup.vue_vue_type_style_index_0_scoped_a516578b_transformed_true_lang.9998e6e6.js","./TabsHeader.697fed8d.js","./entry.5509b817.js","./entry.async.3095d3bb.js","./entry.8fabfa88.css","./TabsHeader.fed4d9b4.css","./CodeGroup.142222ce.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.5509b817.js").then(t=>t.aT),["./entry.5509b817.js","./entry.async.3095d3bb.js","./entry.8fabfa88.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./CopyButton.4de1ab0f.js"),["./CopyButton.4de1ab0f.js","./entry.5509b817.js","./entry.async.3095d3bb.js","./entry.8fabfa88.css","./index.bf60d878.js"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./Ellipsis.78038d55.js"),["./Ellipsis.78038d55.js","./entry.5509b817.js","./entry.async.3095d3bb.js","./entry.8fabfa88.css","./Ellipsis.cb474bc0.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./List.ceabcb71.js"),["./List.ceabcb71.js","./List.vue_vue_type_style_index_0_scoped_f4e70c29_transformed_true_lang.70e85918.js","./entry.5509b817.js","./entry.async.3095d3bb.js","./entry.8fabfa88.css","./ContentSlot.11b7123d.js","./List.a65f0e81.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./NuxtImg.cdd1bf49.js"),["./NuxtImg.cdd1bf49.js","./NuxtImg.vue_vue_type_script_lang.582cada8.js","./entry.5509b817.js","./entry.async.3095d3bb.js","./entry.8fabfa88.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./Props.26f4f4c0.js"),["./Props.26f4f4c0.js","./ProseTh.ecc8ee89.js","./entry.5509b817.js","./entry.async.3095d3bb.js","./entry.8fabfa88.css","./ProseTh.82079a3d.css","./ProseTr.0b4d626d.js","./ProseTr.09362402.css","./ProseThead.aa067744.js","./ProseThead.8eca405b.css","./ProseCodeInline.0acb4f89.js","./ProseCodeInline.5c292c0c.css","./ProseTd.dcefb8b4.js","./ProseTd.8bba0d9d.css","./ProseTbody.72c043ec.js","./ProseTable.14bf225c.js","./ProseTable.cb863e95.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./Sandbox.af08f8df.js"),["./Sandbox.af08f8df.js","./TabsHeader.697fed8d.js","./entry.5509b817.js","./entry.async.3095d3bb.js","./entry.8fabfa88.css","./TabsHeader.fed4d9b4.css","./Sandbox.171d9183.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./SourceLink.4f13177f.js"),["./SourceLink.4f13177f.js","./ProseP.1dc475f0.js","./entry.5509b817.js","./entry.async.3095d3bb.js","./entry.8fabfa88.css","./ProseP.8117fd4f.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./TabsHeader.697fed8d.js"),["./TabsHeader.697fed8d.js","./entry.5509b817.js","./entry.async.3095d3bb.js","./entry.8fabfa88.css","./TabsHeader.fed4d9b4.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./Terminal.22713126.js"),["./Terminal.22713126.js","./index.bf60d878.js","./entry.5509b817.js","./entry.async.3095d3bb.js","./entry.8fabfa88.css","./Terminal.c60347f9.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./VideoPlayer.d30d9248.js"),["./VideoPlayer.d30d9248.js","./NuxtImg.vue_vue_type_script_lang.582cada8.js","./entry.5509b817.js","./entry.async.3095d3bb.js","./entry.8fabfa88.css","./VideoPlayer.e2296f21.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./IconCodeSandBox.b078067c.js"),["./IconCodeSandBox.b078067c.js","./entry.5509b817.js","./entry.async.3095d3bb.js","./entry.8fabfa88.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./IconDocus.8426ef2b.js"),["./IconDocus.8426ef2b.js","./entry.5509b817.js","./entry.async.3095d3bb.js","./entry.8fabfa88.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./IconNuxt.c03b35e2.js"),["./IconNuxt.c03b35e2.js","./entry.5509b817.js","./entry.async.3095d3bb.js","./entry.8fabfa88.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./IconNuxtContent.5b8cc938.js"),["./IconNuxtContent.5b8cc938.js","./entry.5509b817.js","./entry.async.3095d3bb.js","./entry.8fabfa88.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./IconNuxtLabs.d7412580.js"),["./IconNuxtLabs.d7412580.js","./entry.5509b817.js","./entry.async.3095d3bb.js","./entry.8fabfa88.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./IconNuxtStudio.0196ed9d.js"),["./IconNuxtStudio.0196ed9d.js","./entry.5509b817.js","./entry.async.3095d3bb.js","./entry.8fabfa88.css","./IconNuxtStudio.34390cd8.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./IconStackBlitz.9382346e.js"),["./IconStackBlitz.9382346e.js","./entry.5509b817.js","./entry.async.3095d3bb.js","./entry.8fabfa88.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./IconVueTelescope.6fea9f51.js"),["./IconVueTelescope.6fea9f51.js","./entry.5509b817.js","./entry.async.3095d3bb.js","./entry.8fabfa88.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./BlockHero.a803719c.js"),["./BlockHero.a803719c.js","./ContentSlot.11b7123d.js","./entry.5509b817.js","./entry.async.3095d3bb.js","./entry.8fabfa88.css","./ButtonLink.76f68bdd.js","./ButtonLink.eec5f319.css","./Terminal.22713126.js","./index.bf60d878.js","./Terminal.c60347f9.css","./BlockHero.3339d24a.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./Card.e6f2e540.js"),["./Card.e6f2e540.js","./entry.5509b817.js","./entry.async.3095d3bb.js","./entry.8fabfa88.css","./ContentSlot.11b7123d.js","./Card.cefe153a.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./CardGrid.5dddbb0d.js"),["./CardGrid.5dddbb0d.js","./ContentSlot.11b7123d.js","./entry.5509b817.js","./entry.async.3095d3bb.js","./entry.8fabfa88.css","./CardGrid.0224782b.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./VoltaBoard.0937e456.js"),["./VoltaBoard.0937e456.js","./entry.5509b817.js","./entry.async.3095d3bb.js","./entry.8fabfa88.css","./VoltaBoard.db5da1f6.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ContentPreviewMode.3cda8534.js"),["./ContentPreviewMode.3cda8534.js","./entry.async.3095d3bb.js","./entry.5509b817.js","./entry.8fabfa88.css","./ContentPreviewMode.7e5d251b.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ContentDoc.491218f3.js"),["./ContentDoc.491218f3.js","./entry.5509b817.js","./entry.async.3095d3bb.js","./entry.8fabfa88.css","./ContentRenderer.b0d66571.js","./ContentRendererMarkdown.fc30f6c4.js","./_commonjsHelpers.726de751.js","./ContentQuery.34ffb836.js"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ContentList.1d215210.js"),["./ContentList.1d215210.js","./ContentQuery.34ffb836.js","./entry.5509b817.js","./entry.async.3095d3bb.js","./entry.8fabfa88.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>Promise.resolve().then(()=>et),void 0,import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ContentQuery.34ffb836.js"),["./ContentQuery.34ffb836.js","./entry.5509b817.js","./entry.async.3095d3bb.js","./entry.8fabfa88.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ContentRenderer.b0d66571.js"),["./ContentRenderer.b0d66571.js","./ContentRendererMarkdown.fc30f6c4.js","./entry.5509b817.js","./entry.async.3095d3bb.js","./entry.8fabfa88.css","./_commonjsHelpers.726de751.js"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ContentRendererMarkdown.fc30f6c4.js"),["./ContentRendererMarkdown.fc30f6c4.js","./entry.5509b817.js","./entry.async.3095d3bb.js","./entry.8fabfa88.css","./_commonjsHelpers.726de751.js"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ContentSlot.11b7123d.js"),["./ContentSlot.11b7123d.js","./entry.5509b817.js","./entry.async.3095d3bb.js","./entry.8fabfa88.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./DocumentDrivenEmpty.c2a71ccd.js"),["./DocumentDrivenEmpty.c2a71ccd.js","./entry.5509b817.js","./entry.async.3095d3bb.js","./entry.8fabfa88.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./Markdown.354f29d5.js"),["./Markdown.354f29d5.js","./ContentSlot.11b7123d.js","./entry.5509b817.js","./entry.async.3095d3bb.js","./entry.8fabfa88.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./welcome.c05e431c.js"),["./welcome.c05e431c.js","./entry.5509b817.js","./entry.async.3095d3bb.js","./entry.8fabfa88.css","./ContentSlot.11b7123d.js","./EditOnLink.vue_vue_type_script_lang.f91ec419.js","./ProseCodeInline.0acb4f89.js","./ProseCodeInline.5c292c0c.css","./ProseTable.14bf225c.js","./ProseTable.cb863e95.css","./ProseTd.dcefb8b4.js","./ProseTd.8bba0d9d.css","./ProseTh.ecc8ee89.js","./ProseTh.82079a3d.css","./ProseThead.aa067744.js","./ProseThead.8eca405b.css","./ProseTr.0b4d626d.js","./ProseTr.09362402.css","./CodeGroup.vue_vue_type_style_index_0_scoped_a516578b_transformed_true_lang.9998e6e6.js","./TabsHeader.697fed8d.js","./TabsHeader.fed4d9b4.css","./CodeGroup.142222ce.css","./List.vue_vue_type_style_index_0_scoped_f4e70c29_transformed_true_lang.70e85918.js","./List.a65f0e81.css","./NuxtImg.vue_vue_type_script_lang.582cada8.js","./Props.26f4f4c0.js","./ProseTbody.72c043ec.js","./ContentDoc.491218f3.js","./ContentRenderer.b0d66571.js","./ContentRendererMarkdown.fc30f6c4.js","./_commonjsHelpers.726de751.js","./ContentQuery.34ffb836.js","./ContentList.1d215210.js","./DocumentDrivenEmpty.c2a71ccd.js","./Markdown.354f29d5.js","./layout.7cd28927.js","./ButtonLink.eec5f319.css","./DocumentDrivenNotFound.434430ce.css","./DocsAside.307f4bb4.css","./DocsPageBottom.7dd428f5.css","./Alert.4980d57b.css","./DocsPrevNext.ab4a6a73.css","./DocsTocLinks.2846f127.css","./DocsToc.6b8d2996.css","./DocsPageContent.dbe6327f.css","./ProseA.c0b3282e.css","./ProseBlockquote.8cd3c64f.css","./ProseCode.bb401702.css","./ProseEm.08155f3c.css","./ProseH1.713a018b.css","./ProseH2.c3733cfa.css","./ProseH3.c20b07eb.css","./ProseH4.99474624.css","./ProseH5.fa6d9ad5.css","./ProseH6.4a50fcaf.css","./ProseHr.7f3ea8bf.css","./ProseImg.1b12ee83.css","./ProseLi.7005f7b9.css","./ProseOl.f18f1ab6.css","./ProseP.8117fd4f.css","./ProseStrong.22b57f6c.css","./ProseUl.c24d887f.css","./Badge.1b55ae19.css","./Callout.09d7a57a.css","./CodeBlock.e4cadaca.css","./Ellipsis.cb474bc0.css","./Sandbox.171d9183.css","./Terminal.c60347f9.css","./VideoPlayer.e2296f21.css","./IconNuxtStudio.34390cd8.css","./BlockHero.3339d24a.css","./Card.cefe153a.css","./CardGrid.0224782b.css","./VoltaBoard.db5da1f6.css","./ContentPreviewMode.7e5d251b.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./layout.7cd28927.js"),["./layout.7cd28927.js","./entry.5509b817.js","./entry.async.3095d3bb.js","./entry.8fabfa88.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>Promise.resolve().then(()=>M),void 0,import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.5509b817.js").then(t=>t.aL),["./entry.5509b817.js","./entry.async.3095d3bb.js","./entry.8fabfa88.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>Promise.resolve().then(()=>k),void 0,import.meta.url).then(t=>t.default||t));e(()=>r(()=>Promise.resolve().then(()=>q),void 0,import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.5509b817.js").then(t=>t.aF),["./entry.5509b817.js","./entry.async.3095d3bb.js","./entry.8fabfa88.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>Promise.resolve().then(()=>w),void 0,import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.5509b817.js").then(t=>t.aM),["./entry.5509b817.js","./entry.async.3095d3bb.js","./entry.8fabfa88.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.5509b817.js").then(t=>t.aI),["./entry.5509b817.js","./entry.async.3095d3bb.js","./entry.8fabfa88.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.5509b817.js").then(t=>t.aG),["./entry.5509b817.js","./entry.async.3095d3bb.js","./entry.8fabfa88.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>Promise.resolve().then(()=>l),void 0,import.meta.url).then(t=>t.NoScript));e(()=>r(()=>Promise.resolve().then(()=>l),void 0,import.meta.url).then(t=>t.Link));e(()=>r(()=>Promise.resolve().then(()=>l),void 0,import.meta.url).then(t=>t.Base));e(()=>r(()=>Promise.resolve().then(()=>l),void 0,import.meta.url).then(t=>t.Title));e(()=>r(()=>Promise.resolve().then(()=>l),void 0,import.meta.url).then(t=>t.Meta));e(()=>r(()=>Promise.resolve().then(()=>l),void 0,import.meta.url).then(t=>t.Style));e(()=>r(()=>Promise.resolve().then(()=>l),void 0,import.meta.url).then(t=>t.Head));e(()=>r(()=>Promise.resolve().then(()=>l),void 0,import.meta.url).then(t=>t.Html));e(()=>r(()=>Promise.resolve().then(()=>l),void 0,import.meta.url).then(t=>t.Body));const tt=m({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(t){const{query:i}=V(t),o=O(()=>{var n;return typeof((n=i.value)==null?void 0:n.params)=="function"?i.value.params():i.value});if(!o.value&&S("dd-navigation").value){const{navigation:n}=y();return{navigation:n}}const{data:_}=await b(`content-navigation-${c(o.value)}`,()=>x(o.value));return{navigation:_}},render(t){const i=B(),{navigation:o}=t,_=a=>f(N,{to:a._path},()=>a.title),n=(a,h)=>f("ul",h?{"data-level":h}:null,a.map(p=>p.children?f("li",null,[_(p),n(p.children,h+1)]):f("li",null,_(p)))),u=a=>n(a,0);return i!=null&&i.default?i.default({navigation:o,...this.$attrs}):u(o)}}),et=Object.freeze(Object.defineProperty({__proto__:null,default:tt},Symbol.toStringTag,{value:"Module"}));export{tt as default};
