import{af as U,aa as L,K as S,ap as T,aq as R,ar as b,l as k,as as A,ao as N,I as O}from"./entry.5509b817.js";import j from"./ContentPreviewMode.3cda8534.js";import"./entry.async.3095d3bb.js";/* empty css                                                                           */const F=(p,o,v)=>{const r=[...o||[]],m=[...v||[]],i=[...p||[]];for(const e of r)if(e.oldPath)if(m.splice(m.findIndex(a=>a.path===e.oldPath),1),r.find(a=>a.path===e.oldPath))i.push({path:e.path,parsed:e.parsed});else{const a=i.find(d=>d.path===e.oldPath);a&&(a.path=e.path,e.parsed?a.parsed=e.parsed:e.pathMeta&&["_file","_path","_id","_locale"].forEach(d=>{a.parsed[d]=e.pathMeta[d]}))}else if(e.new)i.push({path:e.path,parsed:e.parsed});else{const c=i.find(a=>a.path===e.path);c&&Object.assign(c,{path:e.path,parsed:e.parsed})}for(const e of m)i.splice(i.findIndex(c=>c.path===e.path),1);return i},E=p=>{let o;return(...v)=>(o||(o=p()),o)},J=E(()=>JSON.parse(JSON.stringify(O()))),K=()=>{var y,C,I,$;const p=U(),o=L().public.studio||{},v=J(),r=($=(I=(C=(y=p==null?void 0:p.vueApp)==null?void 0:y._context)==null?void 0:C.config)==null?void 0:I.globalProperties)==null?void 0:$.$pinceauTheme,m={},i=S("client-db",()=>null),e=T("previewToken",{sameSite:"none",secure:!0}),c=async(t,s,n=!0)=>{const f=await t.getKeys(`${e.value}:`);await Promise.all(f.map(l=>t.removeItem(l))),await t.setItem(`${e.value}$`,JSON.stringify({ignoreBuiltContents:n})),await Promise.all(s.map(l=>{var h;return t.setItem(`${e.value}:${(h=l.parsed)==null?void 0:h._id}`,JSON.stringify(l.parsed))}))},a=t=>{R(p,b,[t||v])},d=t=>{!r||!(r!=null&&r.updateTheme)||R(p,r.updateTheme,[t||m])},w=async t=>{const s=await $fetch("api/projects/preview",{baseURL:o.apiURL,params:{token:e.value}}),n=F(s.files,s.additions,s.deletions),f=n.filter(u=>u.path.startsWith("content"));await c(t,f,(s.files||[]).length!==0);const l=n.filter(u=>u.path.startsWith(".studio")),h=l.find(u=>u.path===".studio/app.config.json");a(h==null?void 0:h.parsed);const g=l.find(u=>u.path===".studio/tokens.config.json");d(g==null?void 0:g.parsed)},P=async()=>{await $fetch("api/projects/preview/sync",{baseURL:o.apiURL,method:"POST",params:{token:e.value}})},_=t=>{const s=k(()=>!!t.value),n=document.createElement("div");n.id="__nuxt_preview_wrapper",document.body.appendChild(n),A(j,{previewToken:e,apiURL:o.apiURL,storageReady:s,refresh:()=>w(t.value).then(()=>N()),init:P}).mount(n)},x=async t=>{var n,f;if(!t)return null;t=t.replace(/\/$/,"");let s=await((n=i.value)==null?void 0:n.getItem(`${e.value}:${t}`));return s||(s=await((f=i.value)==null?void 0:f.getItem(t))),s};return{apiURL:o.apiURL,previewToken:e,contentStorage:i,syncPreview:w,syncPreviewFiles:c,syncPreviewAppConfig:a,syncPreviewTokensConfig:d,requestPreviewSynchronization:P,mountPreviewUI:_,findContentWithId:x}};export{K as useStudio};
