import{b as S,u as m,M as a,a as u,ab as $,o as b,i as I,j as w,s as P,v as x,k as C,_,a3 as E,r as j,a8 as r}from"./entry.a43e537d.js";import{u as D}from"./asyncData.dcb2046b.js";import z from"./ComponentPlaygroundData.7f3e88f4.js";import"./entry.4b40e708.js";import"./TabsHeader.b758a10f.js";import"./ComponentPlaygroundProps.68a11cfb.js";import"./ProseH4.b1802864.js";import"./ProseCodeInline.1eb38295.js";import"./Badge.db704170.js";import"./ContentSlot.1162c6ea.js";import"./ProseP.e64e08c3.js";import"./index.cbb4ad92.js";import"./ComponentPlaygroundSlots.vue.7fd2c7d5.js";import"./ComponentPlaygroundTokens.vue.98eea39d.js";async function B(o){S();const e=m(o);{const{data:n}=await D(`nuxt-component-meta${e?`-${e}`:""}`,()=>$fetch(`/api/component-meta${e?`/${e}`:""}`));return a(()=>n.value)}}const N=o=>(P("data-v-719da5ff"),o=o(),x(),o),k=N(()=>C("div",{class:"ellipsis-item"},null,-1)),A=[k],V=u({__name:"Ellipsis",props:{width:{type:String,default:"10rem"},height:{type:String,default:"10rem"},zIndex:{type:String,default:"10"},top:{type:String,default:"0"},left:{type:String,default:"auto"},right:{type:String,default:"auto"},blur:{type:String,default:"50px"},colors:{type:Array,default:()=>["rgba(0, 71, 225, 0.22)","rgba(26, 214, 255, 0.22)","rgba(0, 220, 130, 0.22)"]}},setup(o){const e=o,n=a(()=>((t=e)=>t.top)()),s=a(()=>((t=e)=>t.left)()),i=a(()=>((t=e)=>t.right)()),c=a(()=>((t=e)=>t.zIndex)()),f=a(()=>((t=e)=>t.width)()),g=a(()=>((t=e)=>t.height)()),y=a(()=>((t=e)=>`blur(${t.blur})`)()),h=a(()=>((t=e)=>{var l,p,d;return`linear-gradient(97.62deg, ${(l=t==null?void 0:t.colors)==null?void 0:l[0]} 2.27%, ${(p=t==null?void 0:t.colors)==null?void 0:p[1]} 50.88%, ${(d=t==null?void 0:t.colors)==null?void 0:d[2]} 98.48%)`})()),{$pinceau:v}=$(e,void 0,{_cCN_top:n,_eih_insetInlineStart:s,_IfB_insetInlineEnd:i,_SsE_zIndex:c,_wj8_maxWidth:f,_t33_height:g,_Jfd_filter:y,_yUj_background:h});return(t,l)=>(b(),I("div",{class:w(["ellipsis",[m(v)]])},A,2))}});const q=_(V,[["__scopeId","data-v-719da5ff"]]),M=u({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const e=a(()=>E(o.component)),n=j({...o.props}),s=await B(o.component);return{as:e,formProps:n,componentData:s}},render(o){const e=Object.entries(this.$slots).reduce((n,[s,i])=>{if(s.startsWith("component-")){const c=s.replace("component-","");n[c]=i}return n},{});return r("div",{class:"component-playground"},[r("div",{class:"component-playground-wrapper"},[r(q,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),r(o.as,{...o.formProps,class:"component-playground-component"},{...e})]),r(z,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":n=>o.formProps=n})])}});const Z=_(M,[["__scopeId","data-v-68845737"]]);export{Z as default};