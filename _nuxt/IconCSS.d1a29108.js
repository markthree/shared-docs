import{a as d,ax as x,aa as _,p as o,o as f,b as z,y as S,u as a,j as I}from"./entry.7dbeb767.js";/* empty css                    */import"./entry.25ae2ac3.js";const y=d({__name:"IconCSS",props:{name:{type:String,required:!0},size:{type:String,default:""}},setup(p){var c;const t=p;x(s=>({"12f0d548":a(m)}));const e=_();(c=e==null?void 0:e.nuxtIcon)!=null&&c.aliases;const l=o(()=>{var s;return(((s=e==null?void 0:e.nuxtIcon)==null?void 0:s.aliases)||{})[t.name]||t.name}),m=o(()=>`url('https://api.iconify.design/${l.value.replace(":","/")}.svg')`),r=o(()=>{var n,i,u;if(!t.size&&typeof((n=e.nuxtIcon)==null?void 0:n.size)=="boolean"&&!((i=e.nuxtIcon)!=null&&i.size))return;const s=t.size||((u=e.nuxtIcon)==null?void 0:u.size)||"1em";return String(Number(s))===s?`${s}px`:s});return(s,n)=>(f(),z("span",{style:S({width:a(r),height:a(r)})},null,4))}}),b=I(y,[["__scopeId","data-v-87587933"]]);export{b as default};