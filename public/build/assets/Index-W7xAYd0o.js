import{A as at}from"./ApplicationLogo-CdLdUDXQ.js";import{_ as U,a as it}from"./DropdownLink-CeLexrJn.js";import{bZ as S,cf as M,cg as z,ch as p,am as b,ci as ot,aS as A,aE as r,u as d,v as o,F as B,aP as F,bz as w,s as k,ao as I,aT as L,aR as W,I as c,aM as T,bx as u,bc as h,ce as st,H as g,b3 as _,aQ as y,aI as rt,aF as lt,cj as ct,b_ as V,ax as q,ck as dt,bA as ut,bo as pt,t as x,bp as bt}from"./app-CqYFsAlS.js";import{s as H}from"./index-BsnOnih4.js";import{s as $}from"./index-B8xOHRV7.js";import{R as Q}from"./index-aAc0ImM4.js";import{_ as P,a as K}from"./ResponsiveNavLink-D9DItoy7.js";import{_ as Z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{s as j}from"./index-BS7xWZV9.js";import ht from"./Home-CH2oNfN7.js";import ft from"./UpdatePreference-C3jZHTyk.js";import{s as mt,a as vt}from"./index-C_SdYsVW.js";import"./index-BG2EAuaK.js";import"./index-BBodYeMi.js";import"./index-BOaXpPUW.js";import"./index-I-ndE2qt.js";import"./index-CIWkwtLf.js";import"./InputLabel-BKIrqicg.js";import"./index-D-BzeJj1.js";import"./PrimaryButton-B5renPlr.js";var gt=function(t){var n=t.dt;return`
.p-dock {
    position: absolute;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: none;
}

.p-dock-list-container {
    display: flex;
    pointer-events: auto;
    background: `.concat(n("dock.background"),`;
    border: 1px solid `).concat(n("dock.border.color"),`;
    padding: `).concat(n("dock.padding"),`;
    border-radius: `).concat(n("dock.border.radius"),`;
}

.p-dock-list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: 0 none;
}

.p-dock-item {
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    will-change: transform;
    padding: `).concat(n("dock.item.padding"),`;
    border-radius: `).concat(n("dock.item.border.radius"),`;
}

.p-dock-item.p-focus {
    box-shadow: `).concat(n("dock.item.focus.ring.shadow"),`;
    outline: `).concat(n("dock.item.focus.ring.width")," ").concat(n("dock.item.focus.ring.style")," ").concat(n("dock.item.focus.ring.color"),`;
    outline-offset: `).concat(n("dock.item.focus.ring.offset"),`;
}

.p-dock-item-link {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    cursor: default;
    width: `).concat(n("dock.item.size"),`;
    height: `).concat(n("dock.item.size"),`;
}

.p-dock-top {
    left: 0;
    top: 0;
    width: 100%;
}

.p-dock-top .p-dock-item {
    transform-origin: center top;
}

.p-dock-bottom {
    left: 0;
    bottom: 0;
    width: 100%;
}

.p-dock-bottom .p-dock-item {
    transform-origin: center bottom;
}

.p-dock-right {
    right: 0;
    top: 0;
    height: 100%;
}

.p-dock-right .p-dock-item {
    transform-origin: center right;
}

.p-dock-right .p-dock-list {
    flex-direction: column;
}

.p-dock-left {
    left: 0;
    top: 0;
    height: 100%;
}

.p-dock-left .p-dock-item {
    transform-origin: center left;
}

.p-dock-left .p-dock-list {
    flex-direction: column;
}

.p-dock-mobile.p-dock-top .p-dock-list-container,
.p-dock-mobile.p-dock-bottom .p-dock-list-container {
    overflow-x: auto;
    width: 100%;
}
.p-dock-mobile.p-dock-top .p-dock-list-container .p-dock-list,
.p-dock-mobile.p-dock-bottom .p-dock-list-container .p-dock-list {
    margin: 0 auto;
}
.p-dock-mobile.p-dock-left .p-dock-list-container,
.p-dock-mobile.p-dock-right .p-dock-list-container {
    overflow-y: auto;
    height: 100%;
}
.p-dock-mobile.p-dock-left .p-dock-list-container .p-dock-list,
.p-dock-mobile.p-dock-right .p-dock-list-container .p-dock-list {
    margin: auto 0;
}
.p-dock-mobile .p-dock-list .p-dock-item {
    transform: none;
    margin: 0;
}
`)},yt={root:function(t){var n=t.instance,i=t.props;return["p-dock p-component","p-dock-".concat(i.position),{"p-dock-mobile":n.queryMatches}]},listContainer:"p-dock-list-container",list:"p-dock-list",item:function(t){var n=t.instance,i=t.processedItem,s=t.id;return["p-dock-item",{"p-focus":n.isItemActive(s),"p-disabled":n.disabled(i)}]},itemContent:"p-dock-item-content",itemLink:"p-dock-item-link",itemIcon:"p-dock-item-icon"},kt=S.extend({name:"dock",theme:gt,classes:yt}),wt={name:"BaseDock",extends:$,props:{position:{type:String,default:"bottom"},model:null,class:null,style:null,tooltipOptions:null,menuId:{type:String,default:null},tabindex:{type:Number,default:0},breakpoint:{type:String,default:"960px"},ariaLabel:{type:String,default:null},ariaLabelledby:{type:String,default:null}},style:kt,provide:function(){return{$pcDock:this,$parentInstance:this}}};function R(e){return Tt(e)||$t(e)||xt(e)||_t()}function _t(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function xt(e,t){if(e){if(typeof e=="string")return D(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?D(e,t):void 0}}function $t(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Tt(e){if(Array.isArray(e))return D(e)}function D(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,i=Array(t);n<t;n++)i[n]=e[n];return i}var G={name:"DockSub",hostName:"Dock",extends:$,emits:["focus","blur"],props:{position:{type:String,default:"bottom"},model:{type:Array,default:null},templates:{type:null,default:null},tooltipOptions:null,menuId:{type:String,default:null},tabindex:{type:Number,default:0},ariaLabel:{type:String,default:null},ariaLabelledby:{type:String,default:null}},data:function(){return{id:this.menuId,currentIndex:-3,focused:!1,focusedOptionIndex:-1}},watch:{menuId:function(t){this.id=t||M()}},mounted:function(){this.id=this.id||M()},methods:{getItemId:function(t){return"".concat(this.id,"_").concat(t)},getItemProp:function(t,n){return t&&t.item?z.getItemValue(t.item[n]):void 0},getPTOptions:function(t,n,i){return this.ptm(t,{context:{index:i,item:n,active:this.isItemActive(this.getItemId(i))}})},isSameMenuItem:function(t){return t.currentTarget&&(t.currentTarget.isSameNode(t.target)||t.currentTarget.isSameNode(t.target.closest('[data-pc-section="item"]')))},isItemActive:function(t){return t===this.focusedOptionIndex},onListMouseLeave:function(){this.currentIndex=-3},onItemMouseEnter:function(t){this.currentIndex=t},onItemClick:function(t,n){if(this.isSameMenuItem(t)){var i=this.getItemProp(n,"command");i&&i({originalEvent:t,item:n.item})}},onListFocus:function(t){this.focused=!0,this.changeFocusedOptionIndex(0),this.$emit("focus",t)},onListBlur:function(t){this.focused=!1,this.focusedOptionIndex=-1,this.$emit("blur",t)},onListKeyDown:function(t){switch(t.code){case"ArrowDown":{(this.position==="left"||this.position==="right")&&this.onArrowDownKey(),t.preventDefault();break}case"ArrowUp":{(this.position==="left"||this.position==="right")&&this.onArrowUpKey(),t.preventDefault();break}case"ArrowRight":{(this.position==="top"||this.position==="bottom")&&this.onArrowDownKey(),t.preventDefault();break}case"ArrowLeft":{(this.position==="top"||this.position==="bottom")&&this.onArrowUpKey(),t.preventDefault();break}case"Home":{this.onHomeKey(),t.preventDefault();break}case"End":{this.onEndKey(),t.preventDefault();break}case"Enter":case"NumpadEnter":case"Space":{this.onSpaceKey(t),t.preventDefault();break}}},onArrowDownKey:function(){var t=this.findNextOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(t)},onArrowUpKey:function(){var t=this.findPrevOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(t)},onHomeKey:function(){this.changeFocusedOptionIndex(0)},onEndKey:function(){this.changeFocusedOptionIndex(p.find(this.$refs.list,'li[data-pc-section="item"][data-p-disabled="false"]').length-1)},onSpaceKey:function(){var t=p.findSingle(this.$refs.list,'li[id="'.concat("".concat(this.focusedOptionIndex),'"]')),n=t&&p.findSingle(t,'[data-pc-section="itemlink"]');n?n.click():t&&t.click()},findNextOptionIndex:function(t){var n=p.find(this.$refs.list,'li[data-pc-section="item"][data-p-disabled="false"]'),i=R(n).findIndex(function(s){return s.id===t});return i>-1?i+1:0},findPrevOptionIndex:function(t){var n=p.find(this.$refs.list,'li[data-pc-section="item"][data-p-disabled="false"]'),i=R(n).findIndex(function(s){return s.id===t});return i>-1?i-1:0},changeFocusedOptionIndex:function(t){var n=p.find(this.$refs.list,'li[data-pc-section="item"][data-p-disabled="false"]'),i=t>=n.length?n.length-1:t<0?0:t;this.focusedOptionIndex=n[i].getAttribute("id")},disabled:function(t){return typeof t.disabled=="function"?t.disabled():t.disabled},getMenuItemProps:function(t,n){return{action:b({tabindex:-1,"aria-hidden":!0,class:this.cx("itemLink")},this.getPTOptions("itemLink",t,n)),icon:b({class:[this.cx("itemIcon"),t.icon]},this.getPTOptions("itemIcon",t,n))}}},computed:{focusedOptionId:function(){return this.focusedOptionIndex!==-1?this.focusedOptionIndex:null}},directives:{ripple:Q,tooltip:ot}},It=["id","aria-orientation","aria-activedescendant","tabindex","aria-label","aria-labelledby"],Lt=["id","aria-label","aria-disabled","onClick","onMouseenter","data-p-focused","data-p-disabled"],St=["href","target"];function At(e,t,n,i,s,a){var f=A("ripple"),v=A("tooltip");return r(),d("div",b({class:e.cx("listContainer")},e.ptm("listContainer")),[o("ul",b({ref:"list",id:s.id,class:e.cx("list"),role:"menu","aria-orientation":n.position==="bottom"||n.position==="top"?"horizontal":"vertical","aria-activedescendant":s.focused?a.focusedOptionId:void 0,tabindex:n.tabindex,"aria-label":n.ariaLabel,"aria-labelledby":n.ariaLabelledby,onFocus:t[0]||(t[0]=function(){return a.onListFocus&&a.onListFocus.apply(a,arguments)}),onBlur:t[1]||(t[1]=function(){return a.onListBlur&&a.onListBlur.apply(a,arguments)}),onKeydown:t[2]||(t[2]=function(){return a.onListKeyDown&&a.onListKeyDown.apply(a,arguments)}),onMouseleave:t[3]||(t[3]=function(){return a.onListMouseLeave&&a.onListMouseLeave.apply(a,arguments)})},e.ptm("list")),[(r(!0),d(B,null,F(n.model,function(l,m){return r(),d("li",b({key:m,id:a.getItemId(m),class:e.cx("item",{processedItem:l,id:a.getItemId(m)}),role:"menuitem","aria-label":l.label,"aria-disabled":a.disabled(l),onClick:function(O){return a.onItemClick(O,l)},onMouseenter:function(O){return a.onItemMouseEnter(m)},ref_for:!0},a.getPTOptions("item",l,m),{"data-p-focused":a.isItemActive(a.getItemId(m)),"data-p-disabled":a.disabled(l)||!1}),[o("div",b({class:e.cx("itemContent"),ref_for:!0},a.getPTOptions("itemContent",l,m)),[n.templates.item?(r(),k(L(n.templates.item),{key:1,item:l,index:m,label:l.label,props:a.getMenuItemProps(l,m)},null,8,["item","index","label","props"])):w((r(),d("a",b({key:0,href:l.url,class:e.cx("itemLink"),target:l.target,tabindex:"-1","aria-hidden":"true",ref_for:!0},a.getPTOptions("itemLink",l,m)),[!n.templates.icon&&!n.templates.itemicon?w((r(),d("span",b({key:0,class:[e.cx("itemIcon"),l.icon],ref_for:!0},a.getPTOptions("itemIcon",l,m)),null,16)),[[f]]):(r(),k(L(n.templates.icon||n.templates.itemicon),{key:1,item:l,class:I(e.cx("itemIcon"))},null,8,["item","class"]))],16,St)),[[v,{value:l.label,disabled:!n.tooltipOptions},n.tooltipOptions]])],16)],16,Lt)}),128))],16,It)],16)}G.render=At;var N={name:"Dock",extends:wt,inheritAttrs:!1,matchMediaListener:null,data:function(){return{query:null,queryMatches:!1}},mounted:function(){this.bindMatchMediaListener()},beforeUnmount:function(){this.unbindMatchMediaListener()},methods:{bindMatchMediaListener:function(){var t=this;if(!this.matchMediaListener){var n=matchMedia("(max-width: ".concat(this.breakpoint,")"));this.query=n,this.queryMatches=n.matches,this.matchMediaListener=function(){t.queryMatches=n.matches,t.mobileActive=!1},this.query.addEventListener("change",this.matchMediaListener)}},unbindMatchMediaListener:function(){this.matchMediaListener&&(this.query.removeEventListener("change",this.matchMediaListener),this.matchMediaListener=null)}},computed:{containerClass:function(){return[this.class,this.cx("root")]}},components:{DockSub:G}};function Bt(e,t,n,i,s,a){var f=W("DockSub");return r(),d("div",b({class:a.containerClass,style:e.style},e.ptmi("root")),[c(f,{model:e.model,templates:e.$slots,tooltipOptions:e.tooltipOptions,position:e.position,menuId:e.menuId,"aria-label":e.ariaLabel,"aria-labelledby":e.ariaLabelledby,tabindex:e.tabindex,pt:e.pt,unstyled:e.unstyled},null,8,["model","templates","tooltipOptions","position","menuId","aria-label","aria-labelledby","tabindex","pt","unstyled"])],16)}N.render=Bt;const Ct=e=>(rt("data-v-30c149f4"),e=e(),lt(),e),Ot={class:"dock-window hidden sm:block"},Mt={class:"w-full h-screen flex flex-col bg-primary-radial items-center justify-between"},Pt={class:"bg-white border-b border-gray-100"},Kt={class:"w-screen md:max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"},Dt={class:"flex justify-between h-16"},Nt={class:"flex"},Et={class:"shrink-0 flex items-center"},zt={class:"hidden space-x-8 sm:-my-px sm:ms-10 sm:flex"},Ft={class:"hidden sm:flex sm:items-center sm:ms-6"},Vt={class:"ms-3 relative"},Ut={class:"inline-flex rounded-md"},Ht={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"},jt=Ct(()=>o("svg",{class:"ms-2 -me-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[o("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1)),Rt={class:"-me-2 flex items-center sm:hidden"},Wt={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},qt={class:"pt-2 pb-3 space-y-1"},Qt={class:"pt-4 pb-1 border-t border-gray-200"},Zt={class:"px-4"},Gt={class:"font-medium text-base text-gray-800"},Jt={class:"font-medium text-sm text-gray-500"},Xt={class:"mt-3 space-y-1"},Yt={class:"w-full lg:max-w-5xl h-full overflow-y-auto sm:mt-0 mb-24 sm:mb-0"},te={class:"dock-window-bottom block sm:hidden fixed bottom-0 w-full bg-gray-800 text-white z-20"},ee={__name:"DatingLayout",props:{mustVerifyEmail:{type:Boolean},status:{type:String}},setup(e){const t=T([{label:"Home",icon:"https://cdn-icons-png.flaticon.com/512/10473/10473299.png",class:"home"},{label:"Notifications",icon:"https://static.vecteezy.com/system/resources/previews/022/498/184/non_2x/3d-love-like-social-media-notification-icon-isolated-on-transparent-background-file-png.png",class:"matches"},{label:"Chat",icon:"https://static.vecteezy.com/system/resources/previews/018/741/982/non_2x/live-messaging-chat-and-message-symbol-user-interface-theme-3d-icon-rendering-illustration-isolated-in-transparent-background-png.png",class:"chat"},{label:"Preferences",icon:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Settings_%28iOS%29.png/600px-Settings_%28iOS%29.png",class:"settings"}]);T(!1);const n=T(!1),i=T("home");console.log(i.value);const s=a=>{i.value=a.class,console.log(i.value)};return(a,f)=>{const v=A("tooltip");return r(),d("div",null,[o("div",Ot,[c(h(N),{model:t.value,position:"left"},{itemicon:u(({item:l})=>[w(c(h(H),{alt:l.label,role:"button",src:l.icon,style:{width:"50px",height:"50px"},onClick:m=>s(l)},null,8,["alt","src","onClick"]),[[v,l.label,void 0,{top:!0}]])]),_:1},8,["model"])]),o("div",Mt,[o("nav",Pt,[o("div",Kt,[o("div",Dt,[o("div",Nt,[o("div",Et,[c(h(st),{href:a.route("dashboard")},{default:u(()=>[c(at,{class:"block h-9 w-auto fill-current text-gray-800"})]),_:1},8,["href"])]),o("div",zt,[c(P,{href:a.route("dashboard"),active:a.route().current("dashboard")},{default:u(()=>[g(" Dashboard ")]),_:1},8,["href","active"]),c(P,{href:a.route("auth.events.page"),active:a.route().current("auth.events.page")},{default:u(()=>[g(" Live Events ")]),_:1},8,["href","active"]),c(P,{href:a.route("dating.index"),active:a.route().current("dating.index")},{default:u(()=>[g(" Dating ")]),_:1},8,["href","active"])])]),o("div",Ft,[o("div",Vt,[c(it,{align:"right",width:"48"},{trigger:u(()=>[o("span",Ut,[o("button",Ht,[g(_(a.$page.props.auth.user.name)+" ",1),jt])])]),content:u(()=>[c(U,{href:a.route("profile.edit")},{default:u(()=>[g(" Profile ")]),_:1},8,["href"]),c(U,{href:a.route("logout"),method:"post",as:"button"},{default:u(()=>[g(" Log Out ")]),_:1},8,["href"])]),_:1})])]),o("div",Rt,[o("button",{onClick:f[0]||(f[0]=l=>n.value=!n.value),class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"},[(r(),d("svg",Wt,[o("path",{class:I({hidden:n.value,"inline-flex":!n.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),o("path",{class:I({hidden:!n.value,"inline-flex":n.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])])])]),o("div",{class:I([{block:n.value,hidden:!n.value},"sm:hidden"])},[o("div",qt,[c(K,{href:a.route("dashboard"),active:a.route().current("dashboard")},{default:u(()=>[g(" Dashboard ")]),_:1},8,["href","active"])]),o("div",Qt,[o("div",Zt,[o("div",Gt,_(a.$page.props.auth.user.name),1),o("div",Jt,_(a.$page.props.auth.user.email),1)]),o("div",Xt,[c(K,{href:a.route("profile.edit")},{default:u(()=>[g(" Profile ")]),_:1},8,["href"]),c(K,{href:a.route("logout"),method:"post",as:"button"},{default:u(()=>[g(" Log Out ")]),_:1},8,["href"])])])],2)]),o("main",Yt,[y(a.$slots,"default",{currentContent:i.value},void 0,!0)]),o("div",te,[c(h(N),{model:t.value,position:"bottom"},{itemicon:u(({item:l})=>[w(c(h(H),{alt:l.label,role:"button",src:l.icon,class:"w-12 h-12",onClick:m=>s(l)},null,8,["alt","src","onClick"]),[[v,l.label,void 0,{top:!0}]])]),_:1},8,["model"])])])])}}},ne=Z(ee,[["__scopeId","data-v-30c149f4"]]),J=ct("chatStore",{state:()=>({selectedUser:null,newMessage:null,messages:[]}),actions:{async sendMessage(){if(this.newMessage.trim()!=="")try{this.messages.push({user:this.selectedUser,text:this.newMessage}),await V.post("/send-message",{user:this.selectedUser,text:this.newMessage}),this.newMessage="",echo.private("chat").whisper("typing",{user:this.selectedUser}),toast.add({severity:"success",summary:"Success",detail:"Message sent",life:3e3})}catch(e){console.error("Error sending message:",e),toast.add({severity:"error",summary:"Error",detail:"Failed to send message",life:3e3})}else toast.add({severity:"warn",summary:"Warning",detail:"Message cannot be empty",life:3e3})}}}),ae=["onClick"],ie={__name:"Matches",setup(e){const t=J(),n=T([]);q(async()=>{try{const a=await V.get("/api/dating/matches");n.value=a.data}catch(a){console.error("Error fetching matches:",a)}});const s=a=>{t.selectedUser=a};return(a,f)=>n.value.length?(r(),k(h(j),{key:0,model:n.value,class:""},{item:u(({item:v,props:l})=>[o("div",{class:"flex items-center justify-between",onClick:m=>s(v.matched_user)},[o("span",null,_(v.matched_user.name),1)],8,ae)]),_:1},8,["model"])):(r(),k(h(j),{key:1},{default:u(()=>[g(" No matches yet! ")]),_:1}))}},oe={class:"h-full bg-primary sm:flex sm:bg-primary-radial sm:my-20"},se={class:""},re={__name:"ChatLayout",setup(e){return(t,n)=>(r(),d("main",oe,[o("div",se,[c(ie)]),y(t.$slots,"default")]))}},le={class:"flex flex-col h-96 w-full pl-5"},ce={class:"flex items-center justify-between p-4 bg-white shadow rounded-t-lg"},de={class:"text-xl font-bold"},ue={class:"flex-1 overflow-y-auto p-4 bg-white shadow"},pe={key:0,class:"text-right"},be={class:"inline-block p-3 text-white bg-blue-500 rounded-lg"},he={key:1,class:"text-left"},fe={class:"inline-block p-3 text-black bg-gray-300 rounded-lg"},me={class:"flex items-center justify-between p-4 bg-white shadow rounded-b-lg"},ve={__name:"Chat",setup(e){const t=J();return dt(),(n,i)=>{const s=W("p-button");return r(),k(re,null,{default:u(()=>[o("div",le,[o("div",ce,[o("h2",de,_(h(t).selectedUser?h(t).selectedUser.name:"Chat"),1),c(s,{icon:"pi pi-sign-out",label:"Logout",class:"p-button-danger"})]),o("div",ue,[(r(!0),d(B,null,F(h(t).messages,(a,f)=>(r(),d("div",{key:f,class:"mb-4"},[a.user===h(t).selectedUser?(r(),d("div",pe,[o("div",be,_(a.text),1)])):(r(),d("div",he,[o("div",fe,_(a.text),1)]))]))),128))]),o("div",me,[w(o("input",{type:"text","onUpdate:modelValue":i[0]||(i[0]=a=>h(t).newMessage=a),onKeyup:i[1]||(i[1]=ut((...a)=>h(t).sendMessage&&h(t).sendMessage(...a),["enter"])),class:"w-full p-2 border rounded-lg",placeholder:"Type your message..."},null,544),[[pt,h(t).newMessage]]),c(s,{icon:"pi pi-send",label:"Send",class:"ml-4 p-button-success",onClick:h(t).sendMessage},null,8,["onClick"])])])]),_:1})}}},ge=Z(ve,[["__scopeId","data-v-a2631df0"]]),ye={class:"bg-secondary text-white font-bold p-5 m-5"},ke={__name:"Notifications",setup(e){const t=T(null);return q(()=>{V.get("/notifications").then(i=>{t.value=i.data.likeNotifications})}),(i,s)=>(r(),d("div",null,[(r(!0),d(B,null,F(t.value,a=>(r(),d("div",ye,_(a.data.message),1))),256))]))}};var we=function(t){var n=t.dt;return`
.p-tabs {
    display: flex;
    flex-direction: column;
}

.p-tablist {
    position: relative;
}

.p-tabs-scrollable > .p-tablist {
    overflow: hidden;
}

.p-tablist-viewport {
    overflow-x: auto;
    overflow-y: hidden;
    scroll-behavior: smooth;
    scrollbar-width: none;
    overscroll-behavior: contain auto;
}

.p-tablist-viewport::-webkit-scrollbar {
    display: none;
}

.p-tablist-tab-list {
    position: relative;
    display: flex;
    background: `.concat(n("tabs.tablist.background"),`;
    border-style: solid;
    border-color: `).concat(n("tabs.tablist.border.color"),`;
    border-width: `).concat(n("tabs.tablist.border.width"),`;
}

.p-tablist-nav-button {
    all: unset;
    position: absolute;
    top: 0;
    z-index: 2;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: `).concat(n("tabs.nav.button.background"),`;
    color: `).concat(n("tabs.nav.button.color"),`;
    width: `).concat(n("tabs.nav.button.width"),`;
    transition: color `).concat(n("tabs.transition.duration"),", outline-color ").concat(n("tabs.transition.duration"),", box-shadow ").concat(n("tabs.transition.duration"),`;
    box-shadow: `).concat(n("tabs.nav.button.shadow"),`;
    outline-color: transparent;
    cursor: pointer;
}

.p-tablist-nav-button:focus-visible {
    z-index: 1;
    box-shadow: `).concat(n("tabs.nav.button.focus.ring.shadow"),`;
    outline: `).concat(n("tabs.nav.button.focus.ring.width")," ").concat(n("tabs.nav.button.focus.ring.style")," ").concat(n("tabs.nav.button.focus.ring.color"),`;
    outline-offset: `).concat(n("tabs.nav.button.focus.ring.offset"),`;
}

.p-tablist-nav-button:hover {
    color: `).concat(n("tabs.nav.button.hover.color"),`;
}

.p-tablist-prev-button {
    left: 0;
}

.p-tablist-next-button {
    right: 0;
}

.p-tab {
    cursor: pointer;
    user-select: none;
    position: relative;
    border-style: solid;
    white-space: nowrap;
    background: `).concat(n("tabs.tab.background"),`;
    border-width: `).concat(n("tabs.tab.border.width"),`;
    border-color: `).concat(n("tabs.tab.border.color"),`;
    color: `).concat(n("tabs.tab.color"),`;
    padding: `).concat(n("tabs.tab.padding"),`;
    font-weight: `).concat(n("tabs.tab.font.weight"),`;
    transition: background `).concat(n("tabs.transition.duration"),", border-color ").concat(n("tabs.transition.duration"),", color ").concat(n("tabs.transition.duration"),", outline-color ").concat(n("tabs.transition.duration"),", box-shadow ").concat(n("tabs.transition.duration"),`;
    margin: `).concat(n("tabs.tab.margin"),`;
    outline-color: transparent;
}

.p-tab:not(.p-disabled):focus-visible {
    z-index: 1;
    box-shadow: `).concat(n("tabs.tab.focus.ring.shadow"),`;
    outline: `).concat(n("tabs.tab.focus.ring.width")," ").concat(n("tabs.tab.focus.ring.style")," ").concat(n("tabs.tab.focus.ring.color"),`;
    outline-offset: `).concat(n("tabs.tab.focus.ring.offset"),`;
}

.p-tab:not(.p-tab-active):not(.p-disabled):hover {
    background: `).concat(n("tabs.tab.hover.background"),`;
    border-color: `).concat(n("tabs.tab.hover.border.color"),`;
    color: `).concat(n("tabs.tab.hover.color"),`;
}

.p-tab-active {
    background: `).concat(n("tabs.tab.active.background"),`;
    border-color: `).concat(n("tabs.tab.active.border.color"),`;
    color: `).concat(n("tabs.tab.active.color"),`;
}

.p-tabpanels {
    background: `).concat(n("tabs.tabpanel.background"),`;
    color: `).concat(n("tabs.tabpanel.color"),`;
    padding: `).concat(n("tabs.tabpanel.padding"),`;
    outline: 0 none;
}

.p-tabpanel:focus-visible {
    box-shadow: `).concat(n("tabs.tabpanel.focus.ring.shadow"),`;
    outline: `).concat(n("tabs.tabpanel.focus.ring.width")," ").concat(n("tabs.tabpanel.focus.ring.style")," ").concat(n("tabs.tabpanel.focus.ring.color"),`;
    outline-offset: `).concat(n("tabs.tabpanel.focus.ring.offset"),`;
}

.p-tablist-active-bar {
    z-index: 1;
    display: block;
    position: absolute;
    bottom: `).concat(n("tabs.active.bar.bottom"),`;
    height: `).concat(n("tabs.active.bar.height"),`;
    background: `).concat(n("tabs.active.bar.background"),`;
    transition: 250ms cubic-bezier(0.35, 0, 0.25, 1);
}
`)},_e={root:function(t){var n=t.props;return["p-tabs p-component",{"p-tabs-scrollable":n.scrollable}]}},xe=S.extend({name:"tabs",theme:we,classes:_e}),$e={name:"BaseTabs",extends:$,props:{value:{type:String,default:void 0},lazy:{type:Boolean,default:!1},scrollable:{type:Boolean,default:!1},showNavigators:{type:Boolean,default:!0},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1}},style:xe,provide:function(){return{$pcTabs:this,$parentInstance:this}}},X={name:"Tabs",extends:$e,inheritAttrs:!1,emits:["update:value"],data:function(){return{id:this.$attrs.id,d_value:this.value}},watch:{"$attrs.id":function(t){this.id=t||M()},value:function(t){this.d_value=t}},mounted:function(){this.id=this.id||M()},methods:{updateValue:function(t){this.d_value!==t&&(this.d_value=t,this.$emit("update:value",t))},isVertical:function(){return this.orientation==="vertical"}}};function Te(e,t,n,i,s,a){return r(),d("div",b({class:e.cx("root")},e.ptmi("root")),[y(e.$slots,"default")],16)}X.render=Te;var Ie={root:"p-tablist",content:function(t){var n=t.instance;return["p-tablist-content",{"p-tablist-viewport":n.$pcTabs.scrollable}]},tabs:"p-tablist-tab-list",inkbar:"p-tablist-active-bar",prevButton:"p-tablist-prev-button p-tablist-nav-button",nextButton:"p-tablist-next-button p-tablist-nav-button"},Le=S.extend({name:"tablist",classes:Ie}),Se={name:"BaseTabList",extends:$,props:{},style:Le,provide:function(){return{$pcTabList:this,$parentInstance:this}}},Y={name:"TabList",extends:Se,inheritAttrs:!1,inject:["$pcTabs"],data:function(){return{isPrevButtonEnabled:!1,isNextButtonEnabled:!0}},resizeObserver:void 0,watch:{showNavigators:function(t){t?this.bindResizeObserver():this.unbindResizeObserver()},activeValue:{flush:"post",handler:function(){this.updateInkBar()}}},mounted:function(){var t=this;this.$nextTick(function(){t.updateInkBar()}),this.showNavigators&&(this.updateButtonState(),this.bindResizeObserver())},updated:function(){this.showNavigators&&this.updateButtonState()},beforeUnmount:function(){this.unbindResizeObserver()},methods:{onScroll:function(t){this.showNavigators&&this.updateButtonState(),t.preventDefault()},onPrevButtonClick:function(){var t=this.$refs.content,n=p.getWidth(t),i=t.scrollLeft-n;t.scrollLeft=i<=0?0:i},onNextButtonClick:function(){var t=this.$refs.content,n=p.getWidth(t)-this.getVisibleButtonWidths(),i=t.scrollLeft+n,s=t.scrollWidth-n;t.scrollLeft=i>=s?s:i},bindResizeObserver:function(){var t=this;this.resizeObserver=new ResizeObserver(function(){return t.updateButtonState()}),this.resizeObserver.observe(this.$refs.list)},unbindResizeObserver:function(){var t;(t=this.resizeObserver)===null||t===void 0||t.unobserve(this.$refs.list),this.resizeObserver=void 0},updateInkBar:function(){var t=this.$refs,n=t.content,i=t.inkbar,s=t.tabs,a=p.findSingle(n,'[data-pc-name="tab"][data-p-active="true"]');this.$pcTabs.isVertical()?(i.style.height=p.getOuterHeight(a)+"px",i.style.top=p.getOffset(a).top-p.getOffset(s).top+"px"):(i.style.width=p.getOuterWidth(a)+"px",i.style.left=p.getOffset(a).left-p.getOffset(s).left+"px")},updateButtonState:function(){var t=this.$refs,n=t.list,i=t.content,s=i.scrollLeft,a=i.scrollTop,f=i.scrollWidth,v=i.scrollHeight,l=i.offsetWidth,m=i.offsetHeight,C=[p.getWidth(i),p.getHeight(i)],O=C[0],nt=C[1];this.$pcTabs.isVertical()?(this.isPrevButtonEnabled=a!==0,this.isNextButtonEnabled=n.offsetHeight>=m&&parseInt(a)!==v-nt):(this.isPrevButtonEnabled=s!==0,this.isNextButtonEnabled=n.offsetWidth>=l&&parseInt(s)!==f-O)},getVisibleButtonWidths:function(){var t=this.$refs,n=t.prevBtn,i=t.nextBtn;return[n,i].reduce(function(s,a){return a?s+p.getWidth(a):s},0)}},computed:{templates:function(){return this.$pcTabs.$slots},activeValue:function(){return this.$pcTabs.d_value},showNavigators:function(){return this.$pcTabs.scrollable&&this.$pcTabs.showNavigators},prevButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.previous:void 0},nextButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.next:void 0}},components:{ChevronLeftIcon:mt,ChevronRightIcon:vt}},Ae=["aria-label","tabindex"],Be=["aria-orientation"],Ce=["aria-label","tabindex"];function Oe(e,t,n,i,s,a){var f=A("ripple");return r(),d("div",b({ref:"list",class:e.cx("root")},e.ptmi("root")),[a.showNavigators&&s.isPrevButtonEnabled?w((r(),d("button",b({key:0,ref:"prevButton",class:e.cx("prevButton"),"aria-label":a.prevButtonAriaLabel,tabindex:a.$pcTabs.tabindex,onClick:t[0]||(t[0]=function(){return a.onPrevButtonClick&&a.onPrevButtonClick.apply(a,arguments)})},e.ptm("prevButton"),{"data-pc-group-section":"navigator"}),[(r(),k(L(a.templates.previcon||"ChevronLeftIcon"),b({"aria-hidden":"true"},e.ptm("prevIcon")),null,16))],16,Ae)),[[f]]):x("",!0),o("div",b({ref:"content",class:e.cx("content"),onScroll:t[1]||(t[1]=function(){return a.onScroll&&a.onScroll.apply(a,arguments)})},e.ptm("content")),[o("div",b({ref:"tabs",class:e.cx("tabs"),role:"tablist","aria-orientation":a.$pcTabs.orientation||"horizontal"},e.ptm("tabs")),[y(e.$slots,"default"),o("span",b({ref:"inkbar",class:e.cx("inkbar"),role:"presentation","aria-hidden":"true"},e.ptm("inkbar")),null,16)],16,Be)],16),a.showNavigators&&s.isNextButtonEnabled?w((r(),d("button",b({key:1,ref:"nextButton",class:e.cx("nextButton"),"aria-label":a.nextButtonAriaLabel,tabindex:a.$pcTabs.tabindex,onClick:t[2]||(t[2]=function(){return a.onNextButtonClick&&a.onNextButtonClick.apply(a,arguments)})},e.ptm("nextButton"),{"data-pc-group-section":"navigator"}),[(r(),k(L(a.templates.nexticon||"ChevronRightIcon"),b({"aria-hidden":"true"},e.ptm("nextIcon")),null,16))],16,Ce)),[[f]]):x("",!0)],16)}Y.render=Oe;var Me={root:function(t){var n=t.instance;return["p-tabpanel",{"p-tabpanel-active":n.active}]}},Pe=S.extend({name:"tabpanel",classes:Me}),Ke={name:"BaseTabPanel",extends:$,props:{value:{type:String,default:void 0},as:{type:String,default:"DIV"},asChild:{type:Boolean,default:!1},header:null,headerStyle:null,headerClass:null,headerProps:null,headerActionProps:null,contentStyle:null,contentClass:null,contentProps:null,disabled:Boolean},style:Pe,provide:function(){return{$pcTabPanel:this,$parentInstance:this}}},tt={name:"TabPanel",extends:Ke,inheritAttrs:!1,inject:["$pcTabs"],computed:{active:function(){var t;return z.equals((t=this.$pcTabs)===null||t===void 0?void 0:t.d_value,this.value)},id:function(){var t;return"".concat((t=this.$pcTabs)===null||t===void 0?void 0:t.id,"_tabpanel_").concat(this.value)},ariaLabelledby:function(){var t;return"".concat((t=this.$pcTabs)===null||t===void 0?void 0:t.id,"_tab_").concat(this.value)},attrs:function(){return b(this.a11yAttrs,this.ptmi("root",this.ptParams))},a11yAttrs:function(){var t;return{id:this.id,tabindex:(t=this.$pcTabs)===null||t===void 0?void 0:t.tabindex,role:"tabpanel","aria-labelledby":this.ariaLabelledby,"data-pc-name":"tabpanel","data-p-active":this.active}},ptParams:function(){return{context:{active:this.active}}}}};function De(e,t,n,i,s,a){var f,v;return a.$pcTabs?(r(),d(B,{key:1},[e.asChild?y(e.$slots,"default",{key:1,class:I(e.cx("root")),active:a.active,a11yAttrs:a.a11yAttrs}):(r(),d(B,{key:0},[!((f=a.$pcTabs)!==null&&f!==void 0&&f.lazy)||a.active?w((r(),k(L(e.as),b({key:0,class:e.cx("root")},a.attrs),{default:u(function(){return[y(e.$slots,"default")]}),_:3},16,["class"])),[[bt,(v=a.$pcTabs)!==null&&v!==void 0&&v.lazy?!0:a.active]]):x("",!0)],64))],64)):y(e.$slots,"default",{key:0})}tt.render=De;var Ne={root:function(t){var n=t.instance,i=t.props;return["p-tab",{"p-tab-active":n.active,"p-disabled":i.disabled}]}},Ee=S.extend({name:"tab",classes:Ne}),ze={name:"BaseTab",extends:$,props:{value:{type:String,default:void 0},disabled:{type:Boolean,default:!1},as:{type:String,default:"BUTTON"},asChild:{type:Boolean,default:!1}},style:Ee,provide:function(){return{$pcTab:this,$parentInstance:this}}},E={name:"Tab",extends:ze,inheritAttrs:!1,inject:["$pcTabs","$pcTabList"],methods:{onFocus:function(){this.$pcTabs.selectOnFocus&&this.changeActiveValue()},onClick:function(){this.changeActiveValue()},onKeydown:function(t){switch(t.code){case"ArrowRight":this.onArrowRightKey(t);break;case"ArrowLeft":this.onArrowLeftKey(t);break;case"Home":this.onHomeKey(t);break;case"End":this.onEndKey(t);break;case"PageDown":this.onPageDownKey(t);break;case"PageUp":this.onPageUpKey(t);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(t);break}},onArrowRightKey:function(t){var n=this.findNextTab(t.currentTarget);n?this.changeFocusedTab(t,n):this.onHomeKey(t),t.preventDefault()},onArrowLeftKey:function(t){var n=this.findPrevTab(t.currentTarget);n?this.changeFocusedTab(t,n):this.onEndKey(t),t.preventDefault()},onHomeKey:function(t){var n=this.findFirstTab();this.changeFocusedTab(t,n),t.preventDefault()},onEndKey:function(t){var n=this.findLastTab();this.changeFocusedTab(t,n),t.preventDefault()},onPageDownKey:function(t){this.scrollInView(this.findLastTab()),t.preventDefault()},onPageUpKey:function(t){this.scrollInView(this.findFirstTab()),t.preventDefault()},onEnterKey:function(t){this.changeActiveValue(),t.preventDefault()},findNextTab:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,i=n?t:t.nextElementSibling;return i?p.getAttribute(i,"data-p-disabled")||p.getAttribute(i,"data-pc-section")==="inkbar"?this.findNextTab(i):p.findSingle(i,'[data-pc-name="tab"]'):null},findPrevTab:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,i=n?t:t.previousElementSibling;return i?p.getAttribute(i,"data-p-disabled")||p.getAttribute(i,"data-pc-section")==="inkbar"?this.findPrevTab(i):p.findSingle(i,'[data-pc-name="tab"]'):null},findFirstTab:function(){return this.findNextTab(this.$pcTabList.$refs.content.firstElementChild,!0)},findLastTab:function(){return this.findPrevTab(this.$pcTabList.$refs.content.lastElementChild,!0)},changeActiveValue:function(){this.$pcTabs.updateValue(this.value)},changeFocusedTab:function(t,n){p.focus(n),this.scrollInView(n)},scrollInView:function(t){var n;t==null||(n=t.scrollIntoView)===null||n===void 0||n.call(t,{block:"nearest"})}},computed:{active:function(){var t;return z.equals((t=this.$pcTabs)===null||t===void 0?void 0:t.d_value,this.value)},id:function(){var t;return"".concat((t=this.$pcTabs)===null||t===void 0?void 0:t.id,"_tab_").concat(this.value)},ariaControls:function(){var t;return"".concat((t=this.$pcTabs)===null||t===void 0?void 0:t.id,"_tabpanel_").concat(this.value)},attrs:function(){return b(this.asAttrs,this.a11yAttrs,this.ptmi("root",this.ptParams))},asAttrs:function(){return this.as==="BUTTON"?{type:"button",disabled:this.disabled}:void 0},a11yAttrs:function(){return{id:this.id,tabindex:this.active?this.$pcTabs.tabindex:-1,role:"tab","aria-selected":this.active,"aria-controls":this.ariaControls,"data-pc-name":"tab","data-p-disabled":this.disabled,"data-p-active":this.active,onFocus:this.onFocus,onKeydown:this.onKeydown}},ptParams:function(){return{context:{active:this.active}}}},directives:{ripple:Q}};function Fe(e,t,n,i,s,a){var f=A("ripple");return e.asChild?y(e.$slots,"default",{key:1,class:I(e.cx("root")),active:a.active,a11yAttrs:a.a11yAttrs,onClick:a.onClick}):w((r(),k(L(e.as),b({key:0,class:e.cx("root"),onClick:a.onClick},a.attrs),{default:u(function(){return[y(e.$slots,"default")]}),_:3},16,["class","onClick"])),[[f]])}E.render=Fe;var Ve={root:"p-tabpanels"},Ue=S.extend({name:"tabpanels",classes:Ve}),He={name:"BaseTabPanels",extends:$,props:{},style:Ue,provide:function(){return{$pcTabPanels:this,$parentInstance:this}}},et={name:"TabPanels",extends:He,inheritAttrs:!1};function je(e,t,n,i,s,a){return r(),d("div",b({class:e.cx("root"),role:"presentation"},e.ptmi("root")),[y(e.$slots,"default")],16)}et.render=je;const Re={key:0,class:"max-h-2/3"},We={key:1},qe={class:"mt-10 bg-white"},Qe={class:"card"},Ze={class:"m-0"},Ge={key:2},Je={key:3,class:"mt-10 max-h-2/3"},yn={__name:"Index",setup(e){return(t,n)=>(r(),k(ne,{class:"h-screen"},{default:u(({currentContent:i})=>[i==="home"?(r(),d("div",Re,[c(ht)])):x("",!0),i==="matches"?(r(),d("div",We,[o("div",qe,[o("div",Qe,[c(h(X),{value:"0"},{default:u(()=>[c(h(Y),{class:"w-full"},{default:u(()=>[c(h(E),{value:"0",class:"w-1/2"},{default:u(()=>[g("Notification")]),_:1}),c(h(E),{value:"1",class:"w-1/2"},{default:u(()=>[g("Matches")]),_:1})]),_:1}),c(h(et),null,{default:u(()=>[c(h(tt),{value:"0"},{default:u(()=>[o("p",Ze,[c(ke)])]),_:1})]),_:1})]),_:1})])])])):x("",!0),i==="chat"?(r(),d("div",Ge,[c(ge)])):x("",!0),i==="settings"?(r(),d("div",Je,[c(ft)])):x("",!0)]),_:1}))}};export{yn as default};
