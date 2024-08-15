import{_ as E}from"./soul-CCuP3GLf.js";import{_ as $}from"./AuthenticatedLayout-DNZu6aXB.js";import{bZ as B,aE as o,u as i,am as u,v as e,aM as c,I as g,bc as b,bx as y,F as C,ci as k,ce as P,b3 as f,H as m}from"./app-CJsJeg_o.js";import{s as I}from"./index-_Cgk1Q64.js";import"./index-Dpe24yuA.js";import{l as W}from"./index-DySp1qp_.js";import"./ResponsiveNavLink-DvRbVSIq.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./CheckInModal-De9LiZiV.js";var N=function(l){var s=l.dt;return`
.p-progressspinner {
    position: relative;
    margin: 0 auto;
    width: 100px;
    height: 100px;
    display: inline-block;
}

.p-progressspinner::before {
    content: "";
    display: block;
    padding-top: 100%;
}

.p-progressspinner-spin {
    height: 100%;
    transform-origin: center center;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    animation: p-progressspinner-rotate 2s linear infinite;
}

.p-progressspinner-circle {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: 0;
    stroke: `.concat(s("progressspinner.color.1"),`;
    animation: p-progressspinner-dash 1.5s ease-in-out infinite, p-progressspinner-color 6s ease-in-out infinite;
    stroke-linecap: round;
}

@keyframes p-progressspinner-rotate {
    100% {
        transform: rotate(360deg);
    }
}
@keyframes p-progressspinner-dash {
    0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
    }
    50% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -35px;
    }
    100% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -124px;
    }
}
@keyframes p-progressspinner-color {
    100%,
    0% {
        stroke: `).concat(s("progressspinner.color.1"),`;
    }
    40% {
        stroke: `).concat(s("progressspinner.color.2"),`;
    }
    66% {
        stroke: `).concat(s("progressspinner.color.3"),`;
    }
    80%,
    90% {
        stroke: `).concat(s("progressspinner.color.4"),`;
    }
}
`)},F={root:"p-progressspinner",spin:"p-progressspinner-spin",circle:"p-progressspinner-circle"},V=B.extend({name:"progressspinner",theme:N,classes:F}),j={name:"BaseProgressSpinner",extends:I,props:{strokeWidth:{type:String,default:"2"},fill:{type:String,default:"none"},animationDuration:{type:String,default:"2s"}},style:V,provide:function(){return{$pcProgressSpinner:this,$parentInstance:this}}},x={name:"ProgressSpinner",extends:j,inheritAttrs:!1,computed:{svgStyle:function(){return{"animation-duration":this.animationDuration}}}},K=["fill","stroke-width"];function R(t,l,s,r,_,p){return o(),i("div",u({class:t.cx("root"),role:"progressbar"},t.ptmi("root")),[(o(),i("svg",u({class:t.cx("spin"),viewBox:"25 25 50 50",style:p.svgStyle},t.ptm("spin")),[e("circle",u({class:t.cx("circle"),cx:"50",cy:"50",r:"20",fill:t.fill,"stroke-width":t.strokeWidth,strokeMiterlimit:"10"},t.ptm("circle")),null,16,K)],16))],16)}x.render=R;const T=e("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"},"Event Details",-1),Z={key:0,class:"py-12"},A={class:"max-w-7xl mx-auto"},M={class:"bg-white overflow-hidden shadow-sm sm:rounded-lg"},q={class:""},H=e("img",{src:E,class:"w-full h-80 object-cover"},null,-1),J={class:"m-2 p-3 flex justify-between px-10"},L={class:"font-extrabold text-4xl"},O={class:"font-bold text-2xl py-1"},X={class:"text-gray-400"},Y={class:"font-bold text-2xl py-2"},z={class:"text-gray-400"},U=["disabled"],G=["disabled"],Q={key:1},ee={class:"h-96 flex flex-col justify-center items-center"},te=e("br",null,null,-1),se={class:"card flex justify-center"},ne="pk_test_51K4koBSFlDb60EYrJRKOY4WRI0xp460rrhIZPW8XuVChtvmviOFyZUXq0EnNKLIaqzI1AkJik70iFvW1NNCiP1H700RCxV3kwh",ue={__name:"Details",props:["event","user"],setup(t){const l=c([]);c(null);const s=t,r=c(s.event);(async()=>{try{const a=await k.get("/events");l.value=a.data}catch(a){console.error("Error fetching events:",a)}})();const p=W(ne),d=c(!1),w=async a=>{d.value=!0;try{const n=await k.post("/create-checkout-session",{event_id:a}),{id:h}=n.data,D=await p,{error:v}=await D.redirectToCheckout({sessionId:h});v&&console.error("Error redirecting to checkout:",v)}catch(n){console.error("Error during authentication or checkout:",n)}finally{d.value=!1}},S=()=>{alert("age should be between 20-45")};return(a,n)=>(o(),i(C,null,[g(b(P),{title:"Details"}),g($,null,{header:y(()=>[T]),default:y(()=>[d.value==!1?(o(),i("div",Z,[e("div",A,[e("div",M,[e("div",q,[H,e("div",J,[e("div",null,[e("h1",L,f(r.value.name),1),e("p",O,[m("Date: "),e("span",X,f(new Date(r.value.start_date).toLocaleDateString()),1)]),e("p",Y,[m("City: "),e("span",z,f(r.value.city),1)])]),e("div",null,[s.user.age>=20&&s.user.age<=45?(o(),i("button",{key:0,onClick:n[0]||(n[0]=h=>w(r.value.id)),disabled:new Date(r.value.date)<=new Date,class:"m-2 bg-transparent disabled:bg-gray-700 disabled:text-white disabled:hover:text-white hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"}," Buy Ticket ",8,U)):(o(),i("button",{key:1,onClick:n[1]||(n[1]=h=>S()),disabled:new Date(r.value.date)<=new Date,class:"m-2 bg-transparent disabled:bg-gray-700 disabled:text-white disabled:hover:text-white hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"}," Buy Ticket ",8,G))])])])])])])):(o(),i("div",Q,[e("div",ee,[m(" Wait. Moving to checkout page..."),te,e("div",se,[g(b(x),{style:{width:"50px",height:"50px"},strokeWidth:"8",fill:"transparent",animationDuration:".5s","aria-label":"Custom ProgressSpinner"})])])]))]),_:1})],64))}};export{ue as default};
