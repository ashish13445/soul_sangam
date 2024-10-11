import{aM as r,ax as k,q as M,aE as u,u as f,I as l,bc as o,bx as i,F as w,cd as U,v as e,aP as C,bz as T,bn as q,H as b,b3 as _,t as z,ce as D,aI as A,aF as H}from"./app-CqYFsAlS.js";import{s as $,a as O,_ as j}from"./index-D9sVtmJK.js";import{_ as P}from"./GuestLayout-BJ_vlnW3.js";import{s as x}from"./index-LogCmm1e.js";import{u as Q}from"./index-eUfx6Jt3.js";import{s as F}from"./index-CUGleBsN.js";import{a as R,b as Z,c as G}from"./index-BBodYeMi.js";import{_ as J}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-BG2EAuaK.js";import"./index-aAc0ImM4.js";import"./index-B8xOHRV7.js";import"./DropdownLink-CeLexrJn.js";import"./ResponsiveNavLink-D9DItoy7.js";import"./index-BOaXpPUW.js";import"./index-CIWkwtLf.js";const c=p=>(A("data-v-fe35a46c"),p=p(),H(),p),K={class:"w-screen h-auto bg-primary-radial flex p-10 sm:pb-10 justify-evenly"},W=c(()=>e("img",{src:j,class:"hidden sm:flex sm:w-40 lg:w-80"},null,-1)),X={class:"flex flex-col justify-center items-center"},Y=c(()=>e("h1",{class:"text-5xl font-extrabold text-white"},"Discover Upcoming Events",-1)),ee=c(()=>e("p",{class:"text-xl text-white py-8"},"Find the best events in your area and get tickets now.",-1)),te=c(()=>e("img",{src:j,class:"hidden sm:flex sm:w-40 lg:w-80"},null,-1)),se={class:"bg-white w-screen flex justify-center p-5"},le={class:"w-full max-w-7xl flex justify-between"},ae={class:"flex flex-col gap-4"},oe={class:"list-none p-0 m-0 flex flex-col"},ie=["onClick"],re={class:"font-medium"},ce=c(()=>e("option",{value:""},"Sort By",-1)),ne=c(()=>e("option",{value:"name"},"Sort by Name",-1)),de=c(()=>e("option",{value:"date"},"Sort by Date",-1)),ue=[ce,ne,de],fe=c(()=>e("div",{class:"flex flex-col gap-4"},[e("div")],-1)),me={class:"w-screen flex justify-center"},_e={class:"bg-white w-full max-w-7xl"},pe={key:0,class:"w-full flex py-3"},ve={class:"w-screen flex justify-center bg-white"},he={class:"grid grid-cols-1 md:grid-cols-3 grid-flow-row gap-0 w-full max-w-7xl"},xe={class:"flex flex-col justify-between items-center p-5 w-auto"},ge=["src"],we={class:"m-0"},be={class:"flex gap-4 mt-1"},ye={__name:"Index",setup(p){const n=Q();r(!0);const m=r([]);k(()=>{axios.get("/events").then(t=>{m.value=t.data})});const g=r(),y=r(),d=r(null),S=r([]),E=t=>{g.value.toggle(t)},I=t=>{y.value.toggle(t)},V=t=>{d.value=t,g.value.hide()};k(()=>{axios.get("/categories").then(t=>{S.value=t.data})});const v=r(""),B=M(()=>{let t=m.value;return d.value&&(t=t.filter(s=>s.category_id===d.value.id)),n.selectedCity?(t=t.filter(s=>s.city===n.selectedCity),t.length===0&&n.selectedState&&(t=m.value.filter(s=>s.state===n.selectedState))):n.selectedState&&(t=t.filter(s=>s.state===n.selectedState)),v.value.trim()!==""&&(t=t.filter(s=>s.name.toLowerCase().includes(v.value.toLowerCase()))),t}),N=()=>{d.value=null},h=r(""),L=()=>{h.value==="name"?m.value.sort((t,s)=>t.name.localeCompare(s.name)):h.value==="date"&&m.value.sort((t,s)=>new Date(t.start_date)-new Date(s.start_date))};return(t,s)=>(u(),f(w,null,[l(o(U),{title:"Events"}),l(P,null,{default:i(()=>[e("div",K,[W,e("div",X,[Y,ee,l(o(R),{class:"w-full lg:w-1/2"},{default:i(()=>[l(o(Z),{class:"pi pi-search",style:{color:"white","font-weight":"bold"}}),l(o(G),{modelValue:v.value,"onUpdate:modelValue":s[0]||(s[0]=a=>v.value=a),placeholder:"Search",class:"w-full bg-black text-white custom-input border border-transparent focus:border-white focus:ring-2 focus:ring-white p-2 rounded"},null,8,["modelValue"])]),_:1})]),te]),e("div",se,[e("div",le,[e("div",null,[l(o(x),{label:"Filters",class:"text-sm md:text-sm",icon:"pi pi-filter",severity:"contrast",text:"",outlined:"",onClick:E}),l(o($),{ref_key:"op",ref:g},{default:i(()=>[e("div",ae,[e("div",null,[e("ul",oe,[(u(!0),f(w,null,C(S.value,a=>(u(),f("li",{key:a.name,class:"flex items-center gap-2 px-2 py-3 hover:bg-emphasis cursor-pointer rounded-border",onClick:Ce=>V(a)},[e("div",null,[e("span",re,_(a.name),1)])],8,ie))),128))])])])]),_:1},512),T(e("select",{"onUpdate:modelValue":s[1]||(s[1]=a=>h.value=a),onChange:L,class:"mx-5 text-sm md:text-md rounded border border-black"},ue,544),[[q,h.value]])]),l(o(x),{label:"All Dates",class:"sm:mx-5",icon:"pi pi-calendar",severity:"contrast",text:"",outlined:"",onClick:I}),l(o($),{ref_key:"da",ref:y},{default:i(()=>[fe]),_:1},512)])]),e("div",me,[e("p",_e,[d.value?(u(),f("div",pe,[l(o(F),{removable:"",onRemove:N},{default:i(()=>[b(_(d.value.name),1)]),_:1})])):z("",!0)])]),e("div",ve,[e("div",he,[(u(!0),f(w,null,C(B.value,a=>(u(),f("div",xe,[l(o(O),null,{header:i(()=>[e("img",{alt:"event image",src:`/storage/event/${a.event_image}`,class:"w-full h-40 object-cover"},null,8,ge)]),title:i(()=>[b(_(a.name),1)]),subtitle:i(()=>[b(_(new Date(a.start_date).toDateString())+" - "+_(new Date(a.end_date).toDateString()),1)]),content:i(()=>[e("p",we,[l(o(F),{label:a.type,class:"border-2 border-blue-600 text-blue-600"},null,8,["label"])])]),footer:i(()=>[e("div",be,[l(o(D),{href:`/events/${a.id}`},{default:i(()=>[l(o(x),{label:"Details",severity:"secondary",outlined:"",class:"w-full"})]),_:2},1032,["href"]),l(o(D),{href:`/events/${a.id}`},{default:i(()=>[l(o(x),{label:"Buy Ticket",class:"w-full"})]),_:2},1032,["href"])])]),_:2},1024)]))),256))])])]),_:1})],64))}},Ae=J(ye,[["__scopeId","data-v-fe35a46c"]]);export{Ae as default};
