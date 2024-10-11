import{s as N}from"./index-BS7xWZV9.js";import{s as O}from"./index-B8xOHRV7.js";import{bZ as P,aE as n,u as c,aQ as B,am as g,b3 as b,s as x,ao as E,aT as j,t as z,cq as I,aM as u,q as M,I as r,bx as l,v as e,bc as i,ce as A,H as v}from"./app-CqYFsAlS.js";import{_ as S,a as C}from"./ResponsiveNavLink-D9DItoy7.js";import{s as D,_ as U}from"./index-CUGleBsN.js";import V from"./CheckInModal-DmMZxA1C.js";import{u as q,s as H}from"./index-eUfx6Jt3.js";var T=function(o){var a=o.dt;return`
.p-avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: `.concat(a("avatar.width"),`;
    height: `).concat(a("avatar.height"),`;
    font-size: `).concat(a("avatar.font.size"),`;
    background: `).concat(a("avatar.background"),`;
    border-radius: `).concat(a("avatar.border.radius"),`;
}

.p-avatar-image {
    background: transparent;
}

.p-avatar-circle {
    border-radius: 50%;
}

.p-avatar-circle img {
    border-radius: 50%;
}

.p-avatar-icon {
    font-size: `).concat(a("avatar.font.size"),`;
}

.p-avatar img {
    width: 100%;
    height: 100%;
}

.p-avatar-lg {
    width: `).concat(a("avatar.lg.width"),`;
    height: `).concat(a("avatar.lg.width"),`;
    font-size: `).concat(a("avatar.lg.font.size"),`;
}

.p-avatar-lg .p-avatar-icon {
    font-size: `).concat(a("avatar.lg.font.size"),`;
}

.p-avatar-xl {
    width: `).concat(a("avatar.xl.width"),`;
    height: `).concat(a("avatar.xl.width"),`;
    font-size: `).concat(a("avatar.xl.font.size"),`;
}

.p-avatar-xl .p-avatar-icon {
    font-size: `).concat(a("avatar.xl.font.size"),`;
}

.p-avatar-group {
    display: flex;
    align-items: center;
}

.p-avatar-group .p-avatar + .p-avatar {
    margin-left: `).concat(a("avatar.group.offset"),`;
}

.p-avatar-group .p-avatar {
    border: 2px solid `).concat(a("avatar.group.border.color"),`;
}
`)},J={root:function(o){var a=o.props;return["p-avatar p-component",{"p-avatar-image":a.image!=null,"p-avatar-circle":a.shape==="circle","p-avatar-lg":a.size==="large","p-avatar-xl":a.size==="xlarge"}]},label:"p-avatar-label",icon:"p-avatar-icon"},Q=P.extend({name:"avatar",theme:T,classes:J}),R={name:"BaseAvatar",extends:O,props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},size:{type:String,default:"normal"},shape:{type:String,default:"square"},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:Q,provide:function(){return{$pcAvatar:this,$parentInstance:this}}},m={name:"Avatar",extends:R,inheritAttrs:!1,emits:["error"],methods:{onError:function(o){this.$emit("error",o)}}},Z=["aria-labelledby","aria-label"],F=["src","alt"];function G(t,o,a,p,d,h){return n(),c("div",g({class:t.cx("root"),"aria-labelledby":t.ariaLabelledby,"aria-label":t.ariaLabel},t.ptmi("root")),[B(t.$slots,"default",{},function(){return[t.label?(n(),c("span",g({key:0,class:t.cx("label")},t.ptm("label")),b(t.label),17)):t.$slots.icon?(n(),x(j(t.$slots.icon),{key:1,class:E(t.cx("icon"))},null,8,["class"])):t.icon?(n(),c("span",g({key:2,class:[t.cx("icon"),t.icon]},t.ptm("icon")),null,16)):t.image?(n(),c("img",g({key:3,src:t.image,alt:t.ariaLabel,onError:o[0]||(o[0]=function(){return h.onError&&h.onError.apply(h,arguments)})},t.ptm("image")),null,16,F)):z("",!0)]})],16,Z)}m.render=G;const K={class:"card flex justify-center h-full","data-aos":"fade-left"},W={class:"flex items-center"},X={class:"relative overflow-hidden w-full border-0 bg-transparent flex items-center pt-5 pl-4 hover:bg-surface-100 dark:hover:bg-surface-800 rounded-none cursor-pointer transition-colors duration-200"},Y=e("i",{class:"pi pi-pencil"},null,-1),ee={class:"inline-flex flex-col items-start"},ae={class:"text-xl font-bold"},te=e("span",{class:"text-sm pl-1"},"member",-1),se=e("button",{class:"bg-black rounded-full text-white h-10 px-4 mr-4 flex items-center"},"upgrade",-1),re={__name:"SideMenu",setup(t){const o=I(),a=u([{items:[{separator:!0},{label:"Edit Profile",icon:"pi pi-pencil",action:route("profile.edit")},{separator:!0},{label:"Dating Preferences",icon:"pi pi-sliders-h",action:route("profile.preference")},{separator:!0},{label:"Settings",icon:"pi pi-cog",action:route("profile.settings")},{separator:!0},{label:"Help Center",icon:"pi pi-shield"},{separator:!0},{label:"Logout",icon:"pi pi-sign-out",action:route("logout"),method:"post"}]}]),p=M(()=>{const d=JSON.parse(o.props.auth.user.profile_pictures);return d&&d.length>0?`/storage/profile_pictures/${d[0]}`:""});return(d,h)=>(n(),c("div",K,[r(i(N),{model:a.value,class:"w-screen h-screen sm:h-auto md:w-96 md:ml-5 p-5"},{start:l(()=>[e("div",W,[e("button",X,[p.value?(n(),x(i(m),{key:0,image:p.value,class:"mr-2",shape:"circle",size:"xlarge"},null,8,["image"])):(n(),x(i(m),{key:1,class:"",shape:"circle",size:"xlarge"})),r(i(A),{href:d.route("profile.pictures"),class:"mr-3 mb-8"},{default:l(()=>[Y]),_:1},8,["href"]),e("span",ee,[e("span",ae,b(d.$page.props.auth.user.name),1),te])]),se])]),item:l(({item:f,props:_})=>[r(i(A),g({class:"flex items-center justify-between",href:f.action},_.action,{method:f.method}),{default:l(()=>[e("span",null,b(f.label),1),e("span",{class:E(["",f.icon])},null,2)]),_:2},1040,["href","method"])]),_:1},8,["model"])]))}},ne={class:"min-h-screen bg-gray-100"},oe={class:"bg-white border-b border-gray-100"},ie={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},le={class:"flex justify-between h-16"},ce={class:"flex"},de=e("div",{class:"shrink-0 flex items-center"},null,-1),pe={class:"w-full hidden sm:flex items-center justify-between"},ue={class:"space-x-8 sm:-my-px sm:ms-10"},me={class:"hidden sm:flex sm:items-center sm:ms-6"},he={class:""},fe={class:"ms-3 relative flex"},ve={key:0},ge={key:1},be={class:"-me-2 flex items-center sm:hidden"},_e={key:0},ye={key:1},$e={class:"pt-2 pb-3 space-y-1"},ke={class:"pt-4 pb-1 border-t border-gray-200"},xe={class:"px-4"},we={class:"font-medium text-base text-gray-800"},Se={class:"font-medium text-sm text-gray-500"},Ce={class:"mt-3 space-y-1"},ze={class:"h-screen bg-primary sm:bg-primary-radial"},Ee={key:0,class:"absolute inset-y-0 right-0 top-16"},Pe={__name:"AuthenticatedLayout",setup(t){const o=I(),a=u(!1);u(),u(),u("");const p=u(!1),d=q();!d.selectedCity&&o.url=="/auth/events/page"&&(p.value=!0);const h=()=>{a.value=!0},f=()=>{a.value=!1},_=u(!1),y=M(()=>{const s=JSON.parse(o.props.auth.user.profile_pictures);return s&&s.length>0?`/storage/profile_pictures/${s[0]}`:""}),w=u(!1),$=()=>{w.value=!w.value};return(s,k)=>(n(),c("div",null,[e("div",ne,[e("nav",oe,[e("div",ie,[e("div",le,[e("div",ce,[de,e("div",pe,[e("div",ue,[r(S,{href:s.route("dashboard"),active:s.route().current("dashboard")},{default:l(()=>[v(" HOME ")]),_:1},8,["href","active"]),r(S,{href:s.route("home"),active:s.route().current("about")},{default:l(()=>[v(" ABOUT US ")]),_:1},8,["href","active"]),r(S,{href:s.route("home"),active:s.route().current("services")},{default:l(()=>[v(" SERVICES ")]),_:1},8,["href","active"])])])]),e("div",me,[e("div",he,[r(i(D),{label:i(d).selectedCity,icon:"pi pi-map-marker",onClick:k[0]||(k[0]=L=>p.value=!0),class:"cursor-pointer"},null,8,["label"]),r(i(H),{visible:p.value,"onUpdate:visible":k[1]||(k[1]=L=>p.value=L),modal:"",header:"Choose City",style:{width:"25rem"}},{default:l(()=>[r(U)]),_:1},8,["visible"])]),e("div",{class:"flex items-center"},[e("button",{onClick:h,class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"}," CheckIn ")]),e("div",fe,[y.value?(n(),c("section",ve,[r(i(m),{onClick:$,image:y.value,class:"mr-2 cursor-pointer",shape:"circle"},null,8,["image"])])):(n(),c("section",ge,[r(i(m),{class:"mr-2 cursor-pointer",onClick:$,shape:"circle"})]))])]),e("div",be,[y.value?(n(),c("section",_e,[r(i(m),{onClick:$,image:y.value,class:"mr-2 cursor-pointer",shape:"circle"},null,8,["image"])])):(n(),c("section",ye,[r(i(m),{class:"mr-2 cursor-pointer",onClick:$,shape:"circle"})]))])])]),e("div",{class:E([{block:_.value,hidden:!_.value},"sm:hidden"])},[e("div",$e,[r(C,{href:s.route("dashboard"),active:s.route().current("dashboard")},{default:l(()=>[v(" Dashboard ")]),_:1},8,["href","active"])]),e("div",ke,[e("div",xe,[e("div",we,b(s.$page.props.auth.user.name),1),e("div",Se,b(s.$page.props.auth.user.email),1)]),e("div",Ce,[r(C,{href:s.route("profile.edit")},{default:l(()=>[v(" Profile ")]),_:1},8,["href"]),r(C,{href:s.route("logout"),method:"post",as:"button"},{default:l(()=>[v(" Log Out ")]),_:1},8,["href"])])])],2)]),e("main",ze,[B(s.$slots,"default"),w.value?(n(),c("aside",Ee,[r(re)])):z("",!0)])]),a.value?(n(),x(V,{key:0,onClose:f})):z("",!0)]))}};export{Pe as _};
