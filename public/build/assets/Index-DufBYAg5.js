import{A as j,_ as I,a as w}from"./ResponsiveNavLink-w8IYxMkn.js";import{_ as A,a as z}from"./DropdownLink-BPC462G4.js";import{bZ as U,cf as K,cg as H,ch as b,am as f,ci as $,aS as M,aE as l,u as m,v as o,F as q,aP as V,bz as x,s as O,ao as _,aT as P,aR as R,I as r,aM as v,bx as d,bc as g,ce as Q,H as p,b3 as L,aQ as W,aI as Z,aF as G,t as y}from"./app-DmW52sVY.js";import{s as T}from"./index-RjRP71tX.js";import{s as F}from"./index-C29WRRSE.js";import{R as J}from"./index-B4sutN63.js";import{_ as X}from"./_plugin-vue_export-helper-DlAUqK2U.js";import Y from"./Home-DNJbrkj6.js";import ee from"./UpdatePreference-7YiYx4Tc.js";import"./index-BkEGs8c0.js";import"./index-lIwCBaXZ.js";import"./index-B1iaLLRC.js";import"./index-BipAeG5W.js";import"./index-BUpTR-zu.js";import"./index-DOaunKE6.js";import"./InputLabel-CvItTXrE.js";import"./index-C32MXpEC.js";import"./index-DLM0IZZB.js";import"./PrimaryButton-2s07ubmy.js";import"./index-2RJNvPQE.js";import"./index-DrYVoKVK.js";import"./index-BJ15Ulel.js";import"./index-CGgUQo_s.js";var te=function(e){var n=e.dt;return`
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
`)},ne={root:function(e){var n=e.instance,a=e.props;return["p-dock p-component","p-dock-".concat(a.position),{"p-dock-mobile":n.queryMatches}]},listContainer:"p-dock-list-container",list:"p-dock-list",item:function(e){var n=e.instance,a=e.processedItem,u=e.id;return["p-dock-item",{"p-focus":n.isItemActive(u),"p-disabled":n.disabled(a)}]},itemContent:"p-dock-item-content",itemLink:"p-dock-item-link",itemIcon:"p-dock-item-icon"},ie=U.extend({name:"dock",theme:te,classes:ne}),oe={name:"BaseDock",extends:F,props:{position:{type:String,default:"bottom"},model:null,class:null,style:null,tooltipOptions:null,menuId:{type:String,default:null},tabindex:{type:Number,default:0},breakpoint:{type:String,default:"960px"},ariaLabel:{type:String,default:null},ariaLabelledby:{type:String,default:null}},style:ie,provide:function(){return{$pcDock:this,$parentInstance:this}}};function E(t){return le(t)||re(t)||se(t)||ae()}function ae(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function se(t,e){if(t){if(typeof t=="string")return S(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?S(t,e):void 0}}function re(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function le(t){if(Array.isArray(t))return S(t)}function S(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=Array(e);n<e;n++)a[n]=t[n];return a}var N={name:"DockSub",hostName:"Dock",extends:F,emits:["focus","blur"],props:{position:{type:String,default:"bottom"},model:{type:Array,default:null},templates:{type:null,default:null},tooltipOptions:null,menuId:{type:String,default:null},tabindex:{type:Number,default:0},ariaLabel:{type:String,default:null},ariaLabelledby:{type:String,default:null}},data:function(){return{id:this.menuId,currentIndex:-3,focused:!1,focusedOptionIndex:-1}},watch:{menuId:function(e){this.id=e||K()}},mounted:function(){this.id=this.id||K()},methods:{getItemId:function(e){return"".concat(this.id,"_").concat(e)},getItemProp:function(e,n){return e&&e.item?H.getItemValue(e.item[n]):void 0},getPTOptions:function(e,n,a){return this.ptm(e,{context:{index:a,item:n,active:this.isItemActive(this.getItemId(a))}})},isSameMenuItem:function(e){return e.currentTarget&&(e.currentTarget.isSameNode(e.target)||e.currentTarget.isSameNode(e.target.closest('[data-pc-section="item"]')))},isItemActive:function(e){return e===this.focusedOptionIndex},onListMouseLeave:function(){this.currentIndex=-3},onItemMouseEnter:function(e){this.currentIndex=e},onItemClick:function(e,n){if(this.isSameMenuItem(e)){var a=this.getItemProp(n,"command");a&&a({originalEvent:e,item:n.item})}},onListFocus:function(e){this.focused=!0,this.changeFocusedOptionIndex(0),this.$emit("focus",e)},onListBlur:function(e){this.focused=!1,this.focusedOptionIndex=-1,this.$emit("blur",e)},onListKeyDown:function(e){switch(e.code){case"ArrowDown":{(this.position==="left"||this.position==="right")&&this.onArrowDownKey(),e.preventDefault();break}case"ArrowUp":{(this.position==="left"||this.position==="right")&&this.onArrowUpKey(),e.preventDefault();break}case"ArrowRight":{(this.position==="top"||this.position==="bottom")&&this.onArrowDownKey(),e.preventDefault();break}case"ArrowLeft":{(this.position==="top"||this.position==="bottom")&&this.onArrowUpKey(),e.preventDefault();break}case"Home":{this.onHomeKey(),e.preventDefault();break}case"End":{this.onEndKey(),e.preventDefault();break}case"Enter":case"NumpadEnter":case"Space":{this.onSpaceKey(e),e.preventDefault();break}}},onArrowDownKey:function(){var e=this.findNextOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(e)},onArrowUpKey:function(){var e=this.findPrevOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(e)},onHomeKey:function(){this.changeFocusedOptionIndex(0)},onEndKey:function(){this.changeFocusedOptionIndex(b.find(this.$refs.list,'li[data-pc-section="item"][data-p-disabled="false"]').length-1)},onSpaceKey:function(){var e=b.findSingle(this.$refs.list,'li[id="'.concat("".concat(this.focusedOptionIndex),'"]')),n=e&&b.findSingle(e,'[data-pc-section="itemlink"]');n?n.click():e&&e.click()},findNextOptionIndex:function(e){var n=b.find(this.$refs.list,'li[data-pc-section="item"][data-p-disabled="false"]'),a=E(n).findIndex(function(u){return u.id===e});return a>-1?a+1:0},findPrevOptionIndex:function(e){var n=b.find(this.$refs.list,'li[data-pc-section="item"][data-p-disabled="false"]'),a=E(n).findIndex(function(u){return u.id===e});return a>-1?a-1:0},changeFocusedOptionIndex:function(e){var n=b.find(this.$refs.list,'li[data-pc-section="item"][data-p-disabled="false"]'),a=e>=n.length?n.length-1:e<0?0:e;this.focusedOptionIndex=n[a].getAttribute("id")},disabled:function(e){return typeof e.disabled=="function"?e.disabled():e.disabled},getMenuItemProps:function(e,n){return{action:f({tabindex:-1,"aria-hidden":!0,class:this.cx("itemLink")},this.getPTOptions("itemLink",e,n)),icon:f({class:[this.cx("itemIcon"),e.icon]},this.getPTOptions("itemIcon",e,n))}}},computed:{focusedOptionId:function(){return this.focusedOptionIndex!==-1?this.focusedOptionIndex:null}},directives:{ripple:J,tooltip:$}},de=["id","aria-orientation","aria-activedescendant","tabindex","aria-label","aria-labelledby"],ce=["id","aria-label","aria-disabled","onClick","onMouseenter","data-p-focused","data-p-disabled"],ue=["href","target"];function me(t,e,n,a,u,i){var h=M("ripple"),k=M("tooltip");return l(),m("div",f({class:t.cx("listContainer")},t.ptm("listContainer")),[o("ul",f({ref:"list",id:u.id,class:t.cx("list"),role:"menu","aria-orientation":n.position==="bottom"||n.position==="top"?"horizontal":"vertical","aria-activedescendant":u.focused?i.focusedOptionId:void 0,tabindex:n.tabindex,"aria-label":n.ariaLabel,"aria-labelledby":n.ariaLabelledby,onFocus:e[0]||(e[0]=function(){return i.onListFocus&&i.onListFocus.apply(i,arguments)}),onBlur:e[1]||(e[1]=function(){return i.onListBlur&&i.onListBlur.apply(i,arguments)}),onKeydown:e[2]||(e[2]=function(){return i.onListKeyDown&&i.onListKeyDown.apply(i,arguments)}),onMouseleave:e[3]||(e[3]=function(){return i.onListMouseLeave&&i.onListMouseLeave.apply(i,arguments)})},t.ptm("list")),[(l(!0),m(q,null,V(n.model,function(s,c){return l(),m("li",f({key:c,id:i.getItemId(c),class:t.cx("item",{processedItem:s,id:i.getItemId(c)}),role:"menuitem","aria-label":s.label,"aria-disabled":i.disabled(s),onClick:function(C){return i.onItemClick(C,s)},onMouseenter:function(C){return i.onItemMouseEnter(c)},ref_for:!0},i.getPTOptions("item",s,c),{"data-p-focused":i.isItemActive(i.getItemId(c)),"data-p-disabled":i.disabled(s)||!1}),[o("div",f({class:t.cx("itemContent"),ref_for:!0},i.getPTOptions("itemContent",s,c)),[n.templates.item?(l(),O(P(n.templates.item),{key:1,item:s,index:c,label:s.label,props:i.getMenuItemProps(s,c)},null,8,["item","index","label","props"])):x((l(),m("a",f({key:0,href:s.url,class:t.cx("itemLink"),target:s.target,tabindex:"-1","aria-hidden":"true",ref_for:!0},i.getPTOptions("itemLink",s,c)),[!n.templates.icon&&!n.templates.itemicon?x((l(),m("span",f({key:0,class:[t.cx("itemIcon"),s.icon],ref_for:!0},i.getPTOptions("itemIcon",s,c)),null,16)),[[h]]):(l(),O(P(n.templates.icon||n.templates.itemicon),{key:1,item:s,class:_(t.cx("itemIcon"))},null,8,["item","class"]))],16,ue)),[[k,{value:s.label,disabled:!n.tooltipOptions},n.tooltipOptions]])],16)],16,ce)}),128))],16,de)],16)}N.render=me;var D={name:"Dock",extends:oe,inheritAttrs:!1,matchMediaListener:null,data:function(){return{query:null,queryMatches:!1}},mounted:function(){this.bindMatchMediaListener()},beforeUnmount:function(){this.unbindMatchMediaListener()},methods:{bindMatchMediaListener:function(){var e=this;if(!this.matchMediaListener){var n=matchMedia("(max-width: ".concat(this.breakpoint,")"));this.query=n,this.queryMatches=n.matches,this.matchMediaListener=function(){e.queryMatches=n.matches,e.mobileActive=!1},this.query.addEventListener("change",this.matchMediaListener)}},unbindMatchMediaListener:function(){this.matchMediaListener&&(this.query.removeEventListener("change",this.matchMediaListener),this.matchMediaListener=null)}},computed:{containerClass:function(){return[this.class,this.cx("root")]}},components:{DockSub:N}};function pe(t,e,n,a,u,i){var h=R("DockSub");return l(),m("div",f({class:i.containerClass,style:t.style},t.ptmi("root")),[r(h,{model:t.model,templates:t.$slots,tooltipOptions:t.tooltipOptions,position:t.position,menuId:t.menuId,"aria-label":t.ariaLabel,"aria-labelledby":t.ariaLabelledby,tabindex:t.tabindex,pt:t.pt,unstyled:t.unstyled},null,8,["model","templates","tooltipOptions","position","menuId","aria-label","aria-labelledby","tabindex","pt","unstyled"])],16)}D.render=pe;const fe=t=>(Z("data-v-d05d46d8"),t=t(),G(),t),he={class:"dock-window hidden sm:block"},be={class:"w-full h-screen flex flex-col bg-primary items-center justify-between"},ge={class:"bg-white border-b border-gray-100"},ke={class:"w-screen md:max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"},ve={class:"flex justify-between h-16"},ye={class:"flex"},_e={class:"shrink-0 flex items-center"},xe={class:"hidden space-x-8 sm:-my-px sm:ms-10 sm:flex"},Ie={class:"hidden sm:flex sm:items-center sm:ms-6"},we={class:"ms-3 relative"},Le={class:"inline-flex rounded-md"},Me={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"},Oe=fe(()=>o("svg",{class:"ms-2 -me-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[o("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1)),Se={class:"-me-2 flex items-center sm:hidden"},De={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},Ce={class:"pt-2 pb-3 space-y-1"},Ae={class:"pt-4 pb-1 border-t border-gray-200"},Ke={class:"px-4"},Pe={class:"font-medium text-base text-gray-800"},Te={class:"font-medium text-sm text-gray-500"},Ee={class:"mt-3 space-y-1"},Fe={class:"w-full lg:max-w-5xl h-full overflow-y-auto sm:mt-0 mb-24 sm:mb-0"},Ne={class:"dock-window-bottom block sm:hidden fixed bottom-0 w-full bg-gray-800 text-white z-20"},Be={__name:"DatingLayout",props:{mustVerifyEmail:{type:Boolean},status:{type:String}},setup(t){const e=v([{label:"Home",icon:"https://cdn-icons-png.flaticon.com/512/10473/10473299.png",class:"home"},{label:"Notifications",icon:"https://static.vecteezy.com/system/resources/previews/022/498/184/non_2x/3d-love-like-social-media-notification-icon-isolated-on-transparent-background-file-png.png",class:"matches"},{label:"Chat",icon:"https://static.vecteezy.com/system/resources/previews/018/741/982/non_2x/live-messaging-chat-and-message-symbol-user-interface-theme-3d-icon-rendering-illustration-isolated-in-transparent-background-png.png",class:"chat"},{label:"Preferences",icon:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Settings_%28iOS%29.png/600px-Settings_%28iOS%29.png",class:"settings"}]);v(!1);const n=v(!1),a=v("home");console.log(a.value);const u=i=>{a.value=i.class,console.log(a.value)};return(i,h)=>{const k=M("tooltip");return l(),m("div",null,[o("div",he,[r(g(D),{model:e.value,position:"left"},{itemicon:d(({item:s})=>[x(r(g(T),{alt:s.label,role:"button",src:s.icon,style:{width:"50px",height:"50px"},onClick:c=>u(s)},null,8,["alt","src","onClick"]),[[k,s.label,void 0,{top:!0}]])]),_:1},8,["model"])]),o("div",be,[o("nav",ge,[o("div",ke,[o("div",ve,[o("div",ye,[o("div",_e,[r(g(Q),{href:i.route("dashboard")},{default:d(()=>[r(j,{class:"block h-9 w-auto fill-current text-gray-800"})]),_:1},8,["href"])]),o("div",xe,[r(I,{href:i.route("dashboard"),active:i.route().current("dashboard")},{default:d(()=>[p(" Dashboard ")]),_:1},8,["href","active"]),r(I,{href:i.route("auth.events.page"),active:i.route().current("auth.events.page")},{default:d(()=>[p(" Live Events ")]),_:1},8,["href","active"]),r(I,{href:i.route("dating.index"),active:i.route().current("dating.index")},{default:d(()=>[p(" Dating ")]),_:1},8,["href","active"])])]),o("div",Ie,[o("div",we,[r(z,{align:"right",width:"48"},{trigger:d(()=>[o("span",Le,[o("button",Me,[p(L(i.$page.props.auth.user.name)+" ",1),Oe])])]),content:d(()=>[r(A,{href:i.route("profile.edit")},{default:d(()=>[p(" Profile ")]),_:1},8,["href"]),r(A,{href:i.route("logout"),method:"post",as:"button"},{default:d(()=>[p(" Log Out ")]),_:1},8,["href"])]),_:1})])]),o("div",Se,[o("button",{onClick:h[0]||(h[0]=s=>n.value=!n.value),class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"},[(l(),m("svg",De,[o("path",{class:_({hidden:n.value,"inline-flex":!n.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),o("path",{class:_({hidden:!n.value,"inline-flex":n.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])])])]),o("div",{class:_([{block:n.value,hidden:!n.value},"sm:hidden"])},[o("div",Ce,[r(w,{href:i.route("dashboard"),active:i.route().current("dashboard")},{default:d(()=>[p(" Dashboard ")]),_:1},8,["href","active"])]),o("div",Ae,[o("div",Ke,[o("div",Pe,L(i.$page.props.auth.user.name),1),o("div",Te,L(i.$page.props.auth.user.email),1)]),o("div",Ee,[r(w,{href:i.route("profile.edit")},{default:d(()=>[p(" Profile ")]),_:1},8,["href"]),r(w,{href:i.route("logout"),method:"post",as:"button"},{default:d(()=>[p(" Log Out ")]),_:1},8,["href"])])])],2)]),o("main",Fe,[W(i.$slots,"default",{currentContent:a.value},void 0,!0)]),o("div",Ne,[r(g(D),{model:e.value,position:"bottom"},{itemicon:d(({item:s})=>[x(r(g(T),{alt:s.label,role:"button",src:s.icon,class:"w-12 h-12",onClick:c=>u(s)},null,8,["alt","src","onClick"]),[[k,s.label,void 0,{top:!0}]])]),_:1},8,["model"])])])])}}},je=X(Be,[["__scopeId","data-v-d05d46d8"]]),ze={key:0,class:"max-h-2/3"},Ue={key:1},He=o("h1",null,"Likes or Matches Content",-1),$e=o("p",null,"This is the content for Likes or Matches.",-1),qe=[He,$e],Ve={key:2},Re=o("h1",null,"Chat Content",-1),Qe=o("p",null,"This is the content for Chat.",-1),We=[Re,Qe],Ze={key:3,class:"mt-10 max-h-2/3"},vt={__name:"Index",setup(t){return(e,n)=>(l(),O(je,{class:"h-screen"},{default:d(({currentContent:a})=>[a==="home"?(l(),m("div",ze,[r(Y)])):y("",!0),a==="matches"?(l(),m("div",Ue,qe)):y("",!0),a==="chat"?(l(),m("div",Ve,We)):y("",!0),a==="settings"?(l(),m("div",Ze,[r(ee)])):y("",!0)]),_:1}))}};export{vt as default};
