import{_ as S}from"./AuthenticatedLayout-BbFlOHE_.js";import{bZ as $,aE as o,u as a,am as m,v as e,aM as d,I as p,bc as u,bx as D,F as P,b_ as g,cd as B,b3 as v,H as b,t as E}from"./app-DmW52sVY.js";import{s as z}from"./index-C29WRRSE.js";import{s as y}from"./index-Cm3MCPWX.js";import"./index-Dk9l9vgi.js";import"./ResponsiveNavLink-w8IYxMkn.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-BJ15Ulel.js";import"./index-BipAeG5W.js";import"./index-B4sutN63.js";import"./CheckInModal-D2zsaqQq.js";/* empty css                                                                     */import"./index-CGgUQo_s.js";import"./index-BkEGs8c0.js";var C=function(c){var t=c.dt;return`
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
    stroke: `.concat(t("progressspinner.color.1"),`;
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
        stroke: `).concat(t("progressspinner.color.1"),`;
    }
    40% {
        stroke: `).concat(t("progressspinner.color.2"),`;
    }
    66% {
        stroke: `).concat(t("progressspinner.color.3"),`;
    }
    80%,
    90% {
        stroke: `).concat(t("progressspinner.color.4"),`;
    }
}
`)},N={root:"p-progressspinner",spin:"p-progressspinner-spin",circle:"p-progressspinner-circle"},V=$.extend({name:"progressspinner",theme:C,classes:N}),W={name:"BaseProgressSpinner",extends:z,props:{strokeWidth:{type:String,default:"2"},fill:{type:String,default:"none"},animationDuration:{type:String,default:"2s"}},style:V,provide:function(){return{$pcProgressSpinner:this,$parentInstance:this}}},x={name:"ProgressSpinner",extends:W,inheritAttrs:!1,computed:{svgStyle:function(){return{"animation-duration":this.animationDuration}}}},j=["fill","stroke-width"];function M(s,c,t,n,k,i){return o(),a("div",m({class:s.cx("root"),role:"progressbar"},s.ptmi("root")),[(o(),a("svg",m({class:s.cx("spin"),viewBox:"25 25 50 50",style:i.svgStyle},s.ptm("spin")),[e("circle",m({class:s.cx("circle"),cx:"50",cy:"50",r:"20",fill:s.fill,"stroke-width":s.strokeWidth,strokeMiterlimit:"10"},s.ptm("circle")),null,16,j)],16))],16)}x.render=M;const R={key:0,class:"flex flex-col items-center"},F={key:0,class:"max-w-7xl w-full text-black flex flex-col items-center"},I={class:"bg-white rounded mt-10 w-2/3"},T=["src"],Z={class:"flex mt-5 mx-10 justify-between"},A={class:"font-extrabold text-3xl"},H={class:"mx-10 mb-2"},q={class:"text-xl py-1"},G={class:"font-bold py-2"},J=e("div",{class:"w-full mt-5 flex"},[e("div",{class:"bg-white rounded-lg w-1/5 mx-5 p-5"},"1"),e("div",{class:"bg-white rounded-lg w-3/5 mx-5 p-5"}),e("div",{class:"bg-white w-1/5 mx-5"},"2")],-1),K={key:1},L={class:"h-96 flex flex-col justify-center items-center"},pe={__name:"Details",props:["event","user"],setup(s){const c=d([]);d(null);const n=d(s.event);(async()=>{try{const r=await g.get("/events");c.value=r.data}catch(r){console.error("Error fetching events:",r)}})();const i=d(!1),_=async r=>{i.value=!0;try{const f=(await g.post("/create-checkout-session",{event_id:r})).data,h=new Razorpay(f);h.on("payment.failed",function(w){console.error("Payment failed:",w.error)}),h.open()}catch(l){console.error("Error during Razorpay checkout:",l)}finally{i.value=!1}};return(r,l)=>(o(),a(P,null,[p(u(B),{title:"Details"}),p(S,null,{default:D(()=>[i.value==!1?(o(),a("div",R,[n.value?(o(),a("div",F,[e("div",I,[e("img",{src:`/storage/event/${n.value.event_image}`,class:"w-full h-auto object-cover",alt:"event image"},null,8,T),e("div",Z,[e("h1",A,v(n.value.name),1),e("button",{onClick:l[0]||(l[0]=f=>_(n.value.id)),class:"m-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"}," Buy Ticket ")]),e("div",H,[e("p",q,[e("span",null,v(new Date(n.value.start_date).toDateString()),1),b(" onwards ")]),e("p",G,[p(u(y),{label:n.value.city,class:"border-2 border-blue-600 text-blue-600 mx-2"},null,8,["label"]),p(u(y),{label:n.value.type,class:"border-2 border-blue-600 text-blue-600"},null,8,["label"])])])]),J])):E("",!0)])):(o(),a("div",K,[e("div",L,[b(" Wait. Moving to checkout page... "),p(u(x),{style:{width:"50px",height:"50px"},strokeWidth:"8",fill:"transparent",animationDuration:".5s","aria-label":"Custom ProgressSpinner"})])]))]),_:1})],64))}};export{pe as default};
