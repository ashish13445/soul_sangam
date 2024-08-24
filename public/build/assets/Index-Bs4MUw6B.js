import{s as k}from"./index-71EwOL3m.js";import{_ as C,s as L}from"./ProfilePicture-Bx3HAYtj.js";import{A as B,_ as v,a as $,b as D,c as g}from"./ResponsiveNavLink-bG5ZUwhw.js";import{aM as _,aE as h,u as p,v as e,I as t,b3 as n,bc as r,bx as o,cf as M,H as l,ao as b,aQ as j,ax as E,s as N}from"./app-HtLgu-XO.js";import{s as u}from"./index-Cr5_pWiW.js";import"./index-DOzvAYSv.js";import"./index-BL4vmZTm.js";import"./index-lGBshxg6.js";import"./index-BD10NT_8.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const V={class:"flex"},z={class:"w-1/5 bg-primary p-2"},S=e("h1",{class:"text-white text-2xl font-extrabold px-7"}," Profile ",-1),A={class:"py-12"},O={class:"mx-auto sm:px-6 lg:px-8 space-y-6"},H={class:""},I={class:"p-3 bg-white shadow sm:rounded-lg"},Q={class:"p-1"},T={class:"text-xl font-bold"},U={class:"p-1"},q={class:"text-md"},F={class:"p-1"},G={class:"text-md"},J={class:"p-1"},K={class:"text-md"},R={class:"p-1"},W={class:"text-md"},X={class:"p-1"},Y={class:"text-md"},Z={class:"w-4/5 bg-secondary flex flex-col items-center"},P={class:""},ee={class:"bg-white border-b border-gray-100 max-w-3xl px-4 sm:px-6 lg:px-8"},se={class:"flex justify-between h-16"},te={class:"flex"},oe={class:"shrink-0 flex items-center"},ae={class:"hidden space-x-8 sm:-my-px sm:ms-10 sm:flex"},ie={class:"hidden sm:flex sm:items-center sm:ms-6"},ne={class:"ms-3 relative"},le={class:"inline-flex rounded-md"},de={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"},re=e("svg",{class:"ms-2 -me-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[e("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),ce={class:"-me-2 flex items-center sm:hidden"},ue={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},he={class:"pt-2 pb-3 space-y-1"},_e={class:"pt-4 pb-1 border-t border-gray-200"},pe={class:"px-4"},fe={class:"font-medium text-base text-gray-800"},me={class:"font-medium text-sm text-gray-500"},ve={class:"mt-3 space-y-1"},ge={class:"w-full lg:max-w-5xl"},be={__name:"DatingLayout",props:{mustVerifyEmail:{type:Boolean},status:{type:String}},setup(y){_(!1);const a=_(!1);return(s,c)=>(h(),p("div",null,[e("div",V,[e("div",z,[S,e("div",A,[e("div",O,[e("div",H,[t(C)]),e("div",I,[e("p",Q,[e("span",T,n(s.$page.props.user.name),1)]),e("p",U,[e("span",q,[t(r(u),{label:s.$page.props.user.age},null,8,["label"])])]),e("p",F,[e("span",G,[t(r(u),{label:s.$page.props.user.occupation},null,8,["label"])])]),e("p",J,[e("span",K,[t(r(u),{label:s.$page.props.user.education},null,8,["label"])])]),e("p",R,[e("span",W,[t(r(u),{label:s.$page.props.user.city},null,8,["label"])])]),e("p",X,[e("span",Y,[t(r(u),{label:s.$page.props.user.preference},null,8,["label"])])])])])])]),e("div",Z,[e("nav",P,[e("div",ee,[e("div",se,[e("div",te,[e("div",oe,[t(r(M),{href:s.route("dashboard")},{default:o(()=>[t(B,{class:"block h-9 w-auto fill-current text-gray-800"})]),_:1},8,["href"])]),e("div",ae,[t(v,{href:s.route("dashboard"),active:s.route().current("dashboard")},{default:o(()=>[l(" Dashboard ")]),_:1},8,["href","active"]),t(v,{href:s.route("auth.events.page"),active:s.route().current("auth.events.page")},{default:o(()=>[l(" Live Events ")]),_:1},8,["href","active"]),t(v,{href:s.route("dating.index"),active:s.route().current("dating.index")},{default:o(()=>[l(" Dating ")]),_:1},8,["href","active"])])]),e("div",ie,[e("div",ne,[t(D,{align:"right",width:"48"},{trigger:o(()=>[e("span",le,[e("button",de,[l(n(s.$page.props.auth.user.name)+" ",1),re])])]),content:o(()=>[t($,{href:s.route("profile.edit")},{default:o(()=>[l(" Profile ")]),_:1},8,["href"]),t($,{href:s.route("logout"),method:"post",as:"button"},{default:o(()=>[l(" Log Out ")]),_:1},8,["href"])]),_:1})])]),e("div",ce,[e("button",{onClick:c[0]||(c[0]=f=>a.value=!a.value),class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"},[(h(),p("svg",ue,[e("path",{class:b({hidden:a.value,"inline-flex":!a.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),e("path",{class:b({hidden:!a.value,"inline-flex":a.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])])])]),e("div",{class:b([{block:a.value,hidden:!a.value},"sm:hidden"])},[e("div",he,[t(g,{href:s.route("dashboard"),active:s.route().current("dashboard")},{default:o(()=>[l(" Dashboard ")]),_:1},8,["href","active"])]),e("div",_e,[e("div",pe,[e("div",fe,n(s.$page.props.auth.user.name),1),e("div",me,n(s.$page.props.auth.user.email),1)]),e("div",ve,[t(g,{href:s.route("profile.edit")},{default:o(()=>[l(" Profile ")]),_:1},8,["href"]),t(g,{href:s.route("logout"),method:"post",as:"button"},{default:o(()=>[l(" Log Out ")]),_:1},8,["href"])])])],2)]),e("main",ge,[j(s.$slots,"default")])])])]))}},xe={class:"w-full"},$e={class:"bg-white border border-surface-200 dark:border-surface-700 rounded m-2 md:flex"},ye={class:"mb-4 p-0 w-2/3"},we={class:"h-full overflow-hidden"},ke={class:"w-2/3 h-full"},Ce={class:"p-10"},Le={class:"font-medium"},Be={class:"font-medium text-md py-2"},De={class:"font-medium text-md py-2"},Me={class:"mt-0 font-medium text-md py-2"},je={class:"mt-0 font-medium text-md py-2"},Ee={class:"mt-0 font-medium text-md py-2"},Ne={class:"bg-green-100 p-5"},Ve=e("h1",{class:"text-xl font-bold mb-5"},"Bio",-1),ze={class:"font-medium"},Se={class:"flex justify-center pt-10"},Ae={key:0},Oe=["onClick"],He={key:1},Ie=["onClick"],Xe={__name:"Index",setup(y){const a=_([]);E(()=>{axios.get("dating/profiles").then(d=>{a.value=d.data})});const c=_([]),f=d=>c.value.includes(d),x=d=>{f(d)||axios.post("/like/like",{user_id:d}).then(m=>{c.value.push(d)}).catch(m=>{console.error("Error liking user:",m)})};return(d,m)=>(h(),N(be,null,{default:o(()=>[e("div",xe,[t(r(k),{value:a.value,numVisible:1,numScroll:1,containerClass:""},{item:o(i=>[e("div",$e,[e("div",ye,[e("div",we,[t(r(L),{src:`storage/profile_pictures/${i.data.profile_picture}`,alt:"Profile Picture",class:"w-full h-full object-contain",preview:""},null,8,["src"])])]),e("div",ke,[e("div",Ce,[e("div",Le,"Name:"+n(i.data.name),1),e("div",Be,"Age: "+n(i.data.age),1),e("div",De,"Occupation: "+n(i.data.occupation),1),e("div",Me,"Education: "+n(i.data.education),1),e("div",je,"City: "+n(i.data.city),1),e("div",Ee,"Partner preference: "+n(i.data.preference),1)])])]),e("div",Ne,[Ve,e("p",ze,n(i.data.bio),1)]),e("div",Se,[f(i.data.id)?(h(),p("span",Ae,[e("i",{class:"pi pi-heart-fill cursor-pointer",style:{"font-size":"2rem",color:"red"},onClick:w=>x(i.data.id)},null,8,Oe)])):(h(),p("span",He,[e("i",{class:"pi pi-heart cursor-pointer",style:{"font-size":"2rem"},onClick:w=>x(i.data.id)},null,8,Ie)]))])]),_:1},8,["value"])])]),_:1}))}};export{Xe as default};