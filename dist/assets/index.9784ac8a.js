import{d as e,u as t,c as r,r as n,o as s,a as o,b as a,F as i,e as u,f as l,w as c,g as d,t as m,n as p,h as f,i as h,j as y,k as v,s as _,l as g}from"./vendor.e6a11cbf.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const k={class:"nav-wrap"},E=e({setup(e){const h=t(),y=r((()=>h.currentRoute.value.name)),v=[{name:"home",path:"/",text:"首页"},{name:"user",path:"/user",text:"数据"}];return(e,t)=>{const r=n("router-link"),h=n("router-view");return s(),o(i,null,[a("ul",k,[(s(),o(i,null,u(v,((e,t)=>a("li",{key:t},[l(r,{to:e.path,class:p({"current-tab":e.name===f(y)})},{default:c((()=>[d(m(e.name),1)])),_:2},1032,["to","class"])]))),64))]),d(" "+m(f(y))+" ",1),a("div",null,[l(h)])],64)}}}),L=Symbol();var b=h({state:{counter:3,name:"李逵"},mutations:{add(e){e.counter++}}});const w={},P=function(e,t){return t&&0!==t.length?Promise.all(t.map((e=>{if((e=`/${e}`)in w)return;w[e]=!0;const t=e.endsWith(".css"),r=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${r}`))return;const n=document.createElement("link");return n.rel=t?"stylesheet":"modulepreload",t||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),t?new Promise(((e,t)=>{n.addEventListener("load",e),n.addEventListener("error",t)})):void 0}))).then((()=>e())):e()};var j=y({history:v(),routes:[{path:"/",name:"home",component:()=>P((()=>import("./Index.cf3f1207.js")),["assets/Index.cf3f1207.js","assets/vendor.e6a11cbf.js"])},{path:"/user",name:"user",component:()=>P((()=>import("./User.55e80e71.js")),["assets/User.55e80e71.js","assets/vendor.e6a11cbf.js"])}]});g(E).use(b,L).use(j).use((function(e){e.use(_)})).mount("#app");export{L as k};