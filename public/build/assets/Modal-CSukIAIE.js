import{bs as v,ax as f,aC as w,q as h,aE as x,s as p,I as o,bx as l,bz as n,bp as c,v as a,g as i,ao as b,aQ as g,t as k,T as _}from"./app-CJsJeg_o.js";const C={class:"fixed inset-0 overflow-y-auto px-4 py-6 sm:px-0 z-50","scroll-region":""},B=a("div",{class:"absolute inset-0 bg-gray-500 opacity-75"},null,-1),E=[B],S={__name:"Modal",props:{show:{type:Boolean,default:!1},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!0}},emits:["close"],setup(e,{emit:m}){const s=e,u=m;v(()=>s.show,()=>{s.show?document.body.style.overflow="hidden":document.body.style.overflow=null});const r=()=>{s.closeable&&u("close")},d=t=>{t.key==="Escape"&&s.show&&r()};f(()=>document.addEventListener("keydown",d)),w(()=>{document.removeEventListener("keydown",d),document.body.style.overflow=null});const y=h(()=>({sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"})[s.maxWidth]);return(t,z)=>(x(),p(_,{to:"body"},[o(i,{"leave-active-class":"duration-200"},{default:l(()=>[n(a("div",C,[o(i,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:l(()=>[n(a("div",{class:"fixed inset-0 transform transition-all",onClick:r},E,512),[[c,e.show]])]),_:1}),o(i,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to-class":"opacity-100 translate-y-0 sm:scale-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100 translate-y-0 sm:scale-100","leave-to-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:l(()=>[n(a("div",{class:b(["mb-6 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto",y.value])},[e.show?g(t.$slots,"default",{key:0}):k("",!0)],2),[[c,e.show]])]),_:3})],512),[[c,e.show]])]),_:3})]))}};export{S as _};
