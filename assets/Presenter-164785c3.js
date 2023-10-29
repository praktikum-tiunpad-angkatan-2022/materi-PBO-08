import{o as i,e as m,f as e,d as L,b,p as S,q as h,s as k,_ as O,v as $,w as D,x as F,c as z,a as I,y as R,z as B,A as E,B as q,C as U,D as W,E as G,G as j,H as J,I as K,J as Q,K as X,L as Y,M as ee,N as te,g as t,O as se,l as o,t as oe,n as v,i as P,P as N,S as M,m as V,Q as ne,R as H,T,U as le,j as ae,V as y,W as ie,X as re,F as ce,Y as ue,Z as de,$ as _e,a0 as me,a1 as pe,a2 as ve,a3 as he}from"./index-60baf4c6.js";import{N as fe}from"./NoteDisplay-15fb27ea.js";import ge from"./DrawingControls-56618e81.js";const xe={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},we=e("path",{fill:"currentColor",d:"M8 12h10v2H8z"},null,-1),ye=e("path",{fill:"currentColor",d:"M21.448 20A10.856 10.856 0 0 0 24 13a11 11 0 1 0-11 11a10.856 10.856 0 0 0 7-2.552L27.586 29L29 27.586ZM13 22a9 9 0 1 1 9-9a9.01 9.01 0 0 1-9 9Z"},null,-1),be=[we,ye];function Se(l,r){return i(),m("svg",xe,[...be])}const ke={name:"carbon-zoom-out",render:Se},Ce={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},$e=e("path",{fill:"currentColor",d:"M18 12h-4V8h-2v4H8v2h4v4h2v-4h4v-2z"},null,-1),ze=e("path",{fill:"currentColor",d:"M21.448 20A10.856 10.856 0 0 0 24 13a11 11 0 1 0-11 11a10.856 10.856 0 0 0 7-2.552L27.586 29L29 27.586ZM13 22a9 9 0 1 1 9-9a9.01 9.01 0 0 1-9 9Z"},null,-1),Be=[$e,ze];function Pe(l,r){return i(),m("svg",Ce,[...Be])}const Ne={name:"carbon-zoom-in",render:Pe},Me={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Ve=e("path",{fill:"currentColor",d:"M12 10H6.78A11 11 0 0 1 27 16h2A13 13 0 0 0 6 7.68V4H4v8h8zm8 12h5.22A11 11 0 0 1 5 16H3a13 13 0 0 0 23 8.32V28h2v-8h-8z"},null,-1),He=[Ve];function Te(l,r){return i(),m("svg",Me,[...He])}const Le={name:"carbon-renew",render:Te},Oe={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Ae=e("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),Ze=e("path",{fill:"currentColor",d:"M20.59 22L15 16.41V7h2v8.58l5 5.01L20.59 22z"},null,-1),De=[Ae,Ze];function Fe(l,r){return i(),m("svg",Oe,[...De])}const Ie={name:"carbon-time",render:Fe},Re="/materi-PBO-08/assets/logo-title-horizontal-96c3c915.png",Ee=L({__name:"NoteStatic",props:{class:{type:String,required:!1}},setup(l){const r=l,g=b(()=>{var c,u,n;return(n=(u=(c=S.value)==null?void 0:c.meta)==null?void 0:u.slide)==null?void 0:n.note}),x=b(()=>{var c,u,n;return(n=(u=(c=S.value)==null?void 0:c.meta)==null?void 0:u.slide)==null?void 0:n.noteHTML});return(c,u)=>(i(),h(fe,{class:k(r.class),note:g.value,"note-html":x.value},null,8,["class","note","note-html"]))}}),qe=O(Ee,[["__file","/home/runner/work/materi-PBO-08/materi-PBO-08/node_modules/.pnpm/@slidev+client@0.43.12_postcss@8.4.31_vite@4.5.0/node_modules/@slidev/client/internals/NoteStatic.vue"]]),f=l=>(ve("data-v-9d24a2b7"),l=l(),he(),l),Ue={class:"bg-main h-full slidev-presenter"},We={class:"grid-section top flex"},Ge=f(()=>e("img",{src:Re,class:"ml-2 my-auto h-10 py-1 lg:h-14 lg:py-2",style:{height:"3.5rem"},alt:"Slidev logo"},null,-1)),je=f(()=>e("div",{class:"flex-auto"},null,-1)),Je={class:"text-2xl pl-2 pr-6 my-auto tabular-nums"},Ke=f(()=>e("div",{class:"context"}," current ",-1)),Qe=f(()=>e("div",{class:"context"}," next ",-1)),Xe={key:1,class:"grid-section note grid grid-rows-[1fr_min-content]"},Ye={class:"border-t border-main py-1 px-2 text-sm"},et={class:"grid-section bottom"},tt={class:"progress-bar"},st=L({__name:"Presenter",setup(l){const r=$();D(),F(r);const g=z.titleTemplate.replace("%s",z.title||"Slidev");I({title:`Presenter - ${g}`});const{timer:x,resetTimer:c}=R(),u=$([]),n=b(()=>B.value<E.value?{route:S.value,clicks:B.value+1}:q.value?{route:U.value,clicks:0}:null);return W(),G(()=>{const C=r.value.querySelector("#slide-content"),s=j(J()),w=K();Q(()=>{if(!w.value||Y.value||!ee.value)return;const d=C.getBoundingClientRect(),_=(s.x-d.left)/d.width*100,p=(s.y-d.top)/d.height*100;if(!(_<0||_>100||p<0||p>100))return{x:_,y:p}},d=>{X.cursor=d})}),(C,s)=>{const w=Ie,d=Le,_=te("HiddenText"),p=Ne,A=ke;return i(),m(ce,null,[e("div",Ue,[e("div",{class:k(["grid-container",`layout${t(se)}`])},[e("div",We,[Ge,je,e("div",{class:"timer-btn my-auto relative w-22px h-22px cursor-pointer text-lg",opacity:"50 hover:100",onClick:s[0]||(s[0]=(...a)=>t(c)&&t(c)(...a))},[o(w,{class:"absolute"}),o(d,{class:"absolute opacity-0"})]),e("div",Je,oe(t(x)),1)]),e("div",{ref_key:"main",ref:r,class:"relative grid-section main flex flex-col p-2 lg:p-4",style:v(t(P))},[o(M,{key:"main",class:"h-full w-full"},{default:N(()=>[o(ue,{"render-context":"presenter"})]),_:1}),Ke],4),e("div",{class:"relative grid-section next flex flex-col p-2 lg:p-4",style:v(t(P))},[n.value?(i(),h(M,{key:"next",class:"h-full w-full"},{default:N(()=>{var a;return[o(t(_e),{is:(a=n.value.route)==null?void 0:a.component,"clicks-elements":u.value,"onUpdate:clicksElements":s[1]||(s[1]=Z=>u.value=Z),clicks:n.value.clicks,"clicks-disabled":!1,class:k(t(de)(n.value.route)),route:n.value.route,"render-context":"previewNext"},null,8,["is","clicks-elements","clicks","class","route"])]}),_:1})):V("v-if",!0),Qe],4),V(" Notes "),(i(),m("div",Xe,[(i(),h(qe,{key:1,class:"w-full max-w-full h-full overflow-auto p-2 lg:p-4",style:v({fontSize:`${t(ne)}em`})},null,8,["style"])),e("div",Ye,[e("button",{class:"slidev-icon-btn",onClick:s[2]||(s[2]=(...a)=>t(H)&&t(H)(...a))},[o(_,{text:"Increase font size"}),o(p)]),e("button",{class:"slidev-icon-btn",onClick:s[3]||(s[3]=(...a)=>t(T)&&t(T)(...a))},[o(_,{text:"Decrease font size"}),o(A)])])])),e("div",et,[o(me,{persist:!0})]),(i(),h(ge,{key:2}))],2),e("div",tt,[e("div",{class:"progress h-2px bg-primary transition-all",style:v({width:`${(t(le)-1)/(t(ae)-1)*100}%`})},null,4)])]),o(pe),o(re,{modelValue:t(y),"onUpdate:modelValue":s[4]||(s[4]=a=>ie(y)?y.value=a:null)},null,8,["modelValue"])],64)}}});const at=O(st,[["__scopeId","data-v-9d24a2b7"],["__file","/home/runner/work/materi-PBO-08/materi-PBO-08/node_modules/.pnpm/@slidev+client@0.43.12_postcss@8.4.31_vite@4.5.0/node_modules/@slidev/client/internals/Presenter.vue"]]);export{at as default};
