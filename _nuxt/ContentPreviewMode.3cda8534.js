import{_ as k}from"./entry.async.3095d3bb.js";import{j as y,af as g,r as n,L as x,R as h,at as b,o as i,b as u,s as C,O as L,e,q as v,f as R,w as T,W as q,ap as M,E as m,au as I,X as P,ao as B,p as H,i as N,a as j}from"./entry.5509b817.js";/* empty css                                                                           */const r=a=>(H("data-v-50da0ab1"),a=a(),N(),a),A=r(()=>e("svg",{viewBox:"0 0 90 90",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M50.0016 71.0999h29.2561c.9293.0001 1.8422-.241 2.6469-.6992.8047-.4582 1.4729-1.1173 1.9373-1.9109.4645-.7936.7088-1.6939.7083-2.6102-.0004-.9162-.2455-1.8163-.7106-2.6095L64.192 29.713c-.4644-.7934-1.1325-1.4523-1.937-1.9105-.8046-.4581-1.7173-.6993-2.6463-.6993-.9291 0-1.8418.2412-2.6463.6993-.8046.4582-1.4726 1.1171-1.937 1.9105l-5.0238 8.5861-9.8224-16.7898c-.4648-.7934-1.1332-1.4522-1.938-1.9102-.8047-.4581-1.7176-.6992-2.6468-.6992-.9292 0-1.842.2411-2.6468.6992-.8048.458-1.4731 1.1168-1.9379 1.9102L6.56062 63.2701c-.46512.7932-.71021 1.6933-.71061 2.6095-.00041.9163.24389 1.8166.70831 2.6102.46443.7936 1.1326 1.4527 1.93732 1.9109.80473.4582 1.71766.6993 2.64686.6992h18.3646c7.2763 0 12.6422-3.1516 16.3345-9.3002l8.9642-15.3081 4.8015-8.1925 14.4099 24.6083H54.8058l-4.8042 8.1925ZM29.2077 62.899l-12.8161-.0028L35.603 30.0869l9.5857 16.4047-6.418 10.9645c-2.4521 3.9894-5.2377 5.4429-9.563 5.4429Z",fill:"currentColor"})],-1)),E=r(()=>e("span",null,"Preview mode enabled",-1)),O={key:0},S=r(()=>e("div",{id:"__preview_background"},null,-1)),V=r(()=>e("svg",{id:"__preview_loading_icon",width:"32",height:"32",viewBox:"0 0 24 24"},[e("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 4v5h.582m15.356 2A8.001 8.001 0 0 0 4.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 0 1-15.357-2m15.357 2H15"})],-1)),F=r(()=>e("p",null,"Initializing the preview...",-1)),U=y({__name:"ContentPreviewMode",props:{previewToken:{type:Object,required:!0},apiURL:{type:String,required:!0},storageReady:{type:Object,required:!0},refresh:{type:Function,required:!0},init:{type:Function,required:!0}},setup(a){const t=a,l=["__nuxt_preview","__preview_enabled"],_=g(),d=n(!0),c=n(!1),p=n(!1),o=n(!1),w=async()=>{M("previewToken").value="",m().query.preview="",await I(m().path),P(()=>{B()}),d.value=!1,document.body.classList.remove(...l)};return x(async()=>{const s=(await k(()=>import("./index.d304a3a2.js"),[],import.meta.url)).connect(`${t.apiURL}/preview:${t.previewToken.value}`,{transports:["websocket","polling"],auth:{token:t.previewToken.value}});s.on("connect",()=>{t.init()}),document.body.classList.add(...l),s.on("draft:ready",()=>{p.value=!0,s.on("draft:update",()=>{c.value=!0,t.refresh(),c.value=!1})})}),h(()=>p.value,()=>{t.storageReady.value&&t.refresh().then(()=>{o.value=!0,_.callHook("nuxt-studio:preview:ready")})}),h(()=>t.storageReady.value,()=>{p.value&&t.refresh().then(()=>{o.value=!0,_.callHook("nuxt-studio:preview:ready")})}),b(()=>{document.body.classList.remove(...l)}),(f,s)=>(i(),u("div",null,[d.value?(i(),u("div",{key:0,id:"__nuxt_preview",class:C({__preview_ready:o.value,__preview_refreshing:c.value})},[o.value?(i(),u(L,{key:0},[A,E,e("button",{onClick:w}," Close ")],64)):v("",!0)],2)):v("",!0),R(q,{name:"preview-loading"},{default:T(()=>[d.value&&!o.value?(i(),u("div",O,[S,e("div",{id:"__preview_loader"},[V,F,e("button",{onClick:w}," Cancel ")])])):v("",!0)]),_:1})]))}}),$=j(U,[["__scopeId","data-v-50da0ab1"]]);export{$ as default};
