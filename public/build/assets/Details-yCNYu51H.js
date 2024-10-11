import{_ as z}from"./AuthenticatedLayout-C6-aZeaV.js";import{bZ as D,aE as a,u as i,am as _,v as e,aM as h,ck as B,I as c,bc as p,bx as T,F as C,b_ as y,cd as E,b3 as d,H as x,t as b}from"./app-CqYFsAlS.js";import{s as M}from"./index-B8xOHRV7.js";import{s as k}from"./index-CUGleBsN.js";import{s as j}from"./index-I-ndE2qt.js";import"./index-B08sHei8.js";import"./index-BS7xWZV9.js";import"./index-BBodYeMi.js";import"./index-aAc0ImM4.js";import"./index-BOaXpPUW.js";import"./ResponsiveNavLink-D9DItoy7.js";import"./CheckInModal-DmMZxA1C.js";/* empty css                                                                     */import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-eUfx6Jt3.js";import"./index-LogCmm1e.js";import"./index-BG2EAuaK.js";import"./index-CIWkwtLf.js";var N=function(m){var r=m.dt;return`
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
    stroke: `.concat(r("progressspinner.color.1"),`;
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
        stroke: `).concat(r("progressspinner.color.1"),`;
    }
    40% {
        stroke: `).concat(r("progressspinner.color.2"),`;
    }
    66% {
        stroke: `).concat(r("progressspinner.color.3"),`;
    }
    80%,
    90% {
        stroke: `).concat(r("progressspinner.color.4"),`;
    }
}
`)},V={root:"p-progressspinner",spin:"p-progressspinner-spin",circle:"p-progressspinner-circle"},W=D.extend({name:"progressspinner",theme:N,classes:V}),H={name:"BaseProgressSpinner",extends:M,props:{strokeWidth:{type:String,default:"2"},fill:{type:String,default:"none"},animationDuration:{type:String,default:"2s"}},style:W,provide:function(){return{$pcProgressSpinner:this,$parentInstance:this}}},w={name:"ProgressSpinner",extends:H,inheritAttrs:!1,computed:{svgStyle:function(){return{"animation-duration":this.animationDuration}}}},A=["fill","stroke-width"];function F(t,m,r,s,S,f){return a(),i("div",_({class:t.cx("root"),role:"progressbar"},t.ptmi("root")),[(a(),i("svg",_({class:t.cx("spin"),viewBox:"25 25 50 50",style:f.svgStyle},t.ptm("spin")),[e("circle",_({class:t.cx("circle"),cx:"50",cy:"50",r:"20",fill:t.fill,"stroke-width":t.strokeWidth,strokeMiterlimit:"10"},t.ptm("circle")),null,16,A)],16))],16)}w.render=F;const L={key:0,class:"flex flex-col items-center bg-primary-radial"},R={key:0,class:"max-w-7xl w-full text-black flex flex-col items-center"},Z={class:"bg-white rounded mt-10 sm:w-2/3"},G=["src"],I={class:"flex mt-5 mx-10 justify-between"},Y={class:"font-extrabold text-3xl"},q={class:"mx-10 mb-2"},J={class:"text-xl py-1"},K={class:"font-bold py-2"},O={class:"w-full mt-5 sm:flex"},Q={class:"bg-white rounded-lg sm:w-2/5 m-5 p-5 h-content"},U={class:"p-5"},X=e("h1",{class:"text-2xl font-extrabold"}," Terms & Conditions ",-1),ee={class:"text-md py-5"},te={class:"p-5"},se=e("h1",{class:"text-2xl font-extrabold"}," Guidelines ",-1),ne={class:"text-md py-5"},re={class:"bg-white rounded-lg sm:w-3/5 mx-5 p-5 h-content"},oe={class:"p-5"},ae=e("h1",{class:"text-2xl font-extrabold"}," About ",-1),ie={class:"text-md py-5"},le=["innerHTML"],ce={key:1},pe={class:"h-96 flex flex-col justify-center items-center"},Be={__name:"Details",props:["event","user"],setup(t){const m=h([]);h(null);const s=h(t.event);(async()=>{try{const o=await y.get("/events");m.value=o.data}catch(o){console.error("Error fetching events:",o)}})();const f=B(),$=h(!1),P=async o=>{try{const n=(await y.post("/create-checkout-session",{event_id:o})).data,g=new Razorpay({key_id:n.key_id,amount:n.amount,currency:n.currency,name:n.name,description:n.description,order_id:n.order_id,handler:function(l){console.log("Payment successful:",l),y.post("/verify-payment",{razorpay_payment_id:l.razorpay_payment_id,razorpay_order_id:l.razorpay_order_id,razorpay_signature:l.razorpay_signature,event_id:o}).then(v=>{alert("Ticket purchased successfully!")}).catch(v=>{console.error("Payment verification failed:",v)})},prefill:{name:n.name,email:n.email,contact:n.contact},theme:{color:"#3399cc"}});g.on("payment.failed",function(l){console.error("Payment failed:",l.error)}),g.open()}catch{f.add({severity:"error",detail:"You have already purchased a ticket",life:3e3})}};return(o,u)=>(a(),i(C,null,[c(p(E),{title:"Details"}),c(z,null,{default:T(()=>[c(p(j)),$.value==!1?(a(),i("div",L,[s.value?(a(),i("div",R,[e("div",Z,[e("img",{src:`/storage/event/${s.value.event_image}`,class:"w-full h-auto object-cover",alt:"event image"},null,8,G),e("div",I,[e("h1",Y,d(s.value.name),1),e("button",{onClick:u[0]||(u[0]=n=>P(s.value.id)),class:"m-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"}," Buy Ticket ")]),e("div",q,[e("p",J,[e("span",null,d(new Date(s.value.start_date).toDateString()),1),x(" onwards ")]),e("p",K,[c(p(k),{label:s.value.city,class:"border-2 border-blue-600 text-blue-600 mx-2"},null,8,["label"]),c(p(k),{label:s.value.type,class:"border-2 border-blue-600 text-blue-600"},null,8,["label"])])])]),e("div",O,[e("div",Q,[e("section",U,[X,e("p",ee,d(s.value.terms_and_conditions),1)]),e("section",te,[se,e("p",ne,d(s.value.guidelines),1)])]),e("div",re,[e("section",oe,[ae,e("p",ie,d(s.value.about),1)]),s.value.maps_location?(a(),i("div",{key:0,class:"md:flex justify-center w-auto mt-4",innerHTML:s.value.maps_location},null,8,le)):b("",!0)])])])):b("",!0)])):(a(),i("div",ce,[e("div",pe,[x(" Wait. Moving to checkout page... "),c(p(w),{style:{width:"50px",height:"50px"},strokeWidth:"8",fill:"transparent",animationDuration:".5s","aria-label":"Custom ProgressSpinner"})])]))]),_:1})],64))}};export{Be as default};
