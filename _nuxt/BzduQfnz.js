import{e as m,q as p,aJ as d,aa as f,c as v,h as l,k as h,o as E,aK as e}from"./BLxXztcc.js";const I=["innerHTML"],L=m({__name:"nuxt-icon",props:{name:{},filled:{type:Boolean,default:!1}},async setup(u){let n,a;const i=u,r=p("");let _=!1;async function c(){try{const o=await Object.assign({"/assets/icons/collect.svg":()=>e(()=>import("./CADDCDQ9.js"),[],import.meta.url).then(t=>t.default),"/assets/icons/csdn.svg":()=>e(()=>import("./MG2CTwXk.js"),[],import.meta.url).then(t=>t.default),"/assets/icons/github.svg":()=>e(()=>import("./Dm6rGQy_.js"),[],import.meta.url).then(t=>t.default),"/assets/icons/publish.svg":()=>e(()=>import("./DBQamjhl.js"),[],import.meta.url).then(t=>t.default),"/assets/icons/qq.svg":()=>e(()=>import("./D8PRDWRT.js"),[],import.meta.url).then(t=>t.default),"/assets/icons/top.svg":()=>e(()=>import("./cD3y-__V.js"),[],import.meta.url).then(t=>t.default),"/assets/icons/wechat.svg":()=>e(()=>import("./BXD5raDB.js"),[],import.meta.url).then(t=>t.default),"/assets/icons/weibo.svg":()=>e(()=>import("./BknyKyrf.js"),[],import.meta.url).then(t=>t.default)})[`/assets/icons/${i.name}.svg`]();o.includes("stroke")&&(_=!0),r.value=o}catch{console.error(`[nuxt-icons] Icon '${i.name}' doesn't exist in 'assets/icons'`)}}return[n,a]=d(()=>c()),await n,a(),f(c),(s,o)=>(E(),v("span",{class:h(["nuxt-icon",{"nuxt-icon--fill":!s.filled,"nuxt-icon--stroke":l(_)&&!s.filled}]),innerHTML:l(r)},null,10,I))}});export{L as _};
