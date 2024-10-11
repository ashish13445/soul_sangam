import{u}from"./index-eUfx6Jt3.js";import{s as g}from"./index-BBodYeMi.js";import{ax as f,aE as i,u as a,I as v,bc as r,bZ as y,aQ as d,am as c,s as m,aT as h,t as s,b3 as b}from"./app-CqYFsAlS.js";import{s as k}from"./index-CIWkwtLf.js";import{s as C}from"./index-B8xOHRV7.js";const w={class:"p-2"},P={__name:"ChooseCity",setup(e){const o=u();return f(o.fetchCities),(n,l)=>(i(),a("div",w,[v(r(g),{modelValue:r(o).selectedCity,"onUpdate:modelValue":l[0]||(l[0]=p=>r(o).selectedCity=p),options:r(o).cities,class:"mx-4",placeholder:"Select a city"},null,8,["modelValue","options"])]))}};var S=function(o){var n=o.dt;return`
.p-chip {
    display: inline-flex;
    align-items: center;
    background: `.concat(n("chip.background"),`;
    color: `).concat(n("chip.color"),`;
    border-radius: `).concat(n("chip.border.radius"),`;
    padding: `).concat(n("chip.padding.y")," ").concat(n("chip.padding.x"),`;
    gap: `).concat(n("chip.gap"),`;
}

.p-chip-icon {
    color: `).concat(n("chip.icon.color"),`;
    font-size: `).concat(n("chip.icon.font.size"),`;
    width: `).concat(n("chip.icon.size"),`;
    height: `).concat(n("chip.icon.size"),`;
}

.p-chip-image {
    border-radius: 50%;
    width: `).concat(n("chip.image.width"),`;
    height: `).concat(n("chip.image.height"),`;
    margin-left: calc(-1 * `).concat(n("chip.padding.y"),`);
}

.p-chip:has(.p-chip-remove-icon) {
    padding-right: `).concat(n("chip.padding.y"),`;
}

.p-chip:has(.p-chip-image) {
    padding-top: calc(`).concat(n("chip.padding.y"),` / 2);
    padding-bottom: calc(`).concat(n("chip.padding.y"),` / 2);
}

.p-chip-remove-icon {
    cursor: pointer;
    font-size: `).concat(n("chip.remove.icon.font.size"),`;
    width: `).concat(n("chip.remove.icon.size"),`;
    height: `).concat(n("chip.remove.icon.size"),`;
    color: `).concat(n("chip.remove.icon.color"),`;
    border-radius: 50%;
    transition: outline-color `).concat(n("chip.transition.duration"),", box-shadow ").concat(n("chip.transition.duration"),`;
    outline-color: transparent;
}

.p-chip-remove-icon:focus-visible {
    box-shadow: `).concat(n("chip.remove.icon.focus.ring.shadow"),`;
    outline: `).concat(n("chip.remove.icon.focus.ring.width")," ").concat(n("chip.remove.icon.focus.ring.style")," ").concat(n("chip.remove.icon.focus.ring.color"),`;
    outline-offset: `).concat(n("chip.remove.icon.focus.ring.offset"),`;
}
`)},$={root:"p-chip p-component",image:"p-chip-image",icon:"p-chip-icon",label:"p-chip-label",removeIcon:"p-chip-remove-icon"},I=y.extend({name:"chip",theme:S,classes:$}),z={name:"BaseChip",extends:C,props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},removable:{type:Boolean,default:!1},removeIcon:{type:String,default:void 0}},style:I,provide:function(){return{$pcChip:this,$parentInstance:this}}},B={name:"Chip",extends:z,inheritAttrs:!1,emits:["remove"],data:function(){return{visible:!0}},methods:{onKeydown:function(o){(o.key==="Enter"||o.key==="Backspace")&&this.close(o)},close:function(o){this.visible=!1,this.$emit("remove",o)}},components:{TimesCircleIcon:k}},K=["aria-label"],V=["src"];function E(e,o,n,l,p,t){return p.visible?(i(),a("div",c({key:0,class:e.cx("root"),"aria-label":e.label},e.ptmi("root")),[d(e.$slots,"default",{},function(){return[e.image?(i(),a("img",c({key:0,src:e.image},e.ptm("image"),{class:e.cx("image")}),null,16,V)):e.$slots.icon?(i(),m(h(e.$slots.icon),c({key:1,class:e.cx("icon")},e.ptm("icon")),null,16,["class"])):e.icon?(i(),a("span",c({key:2,class:[e.cx("icon"),e.icon]},e.ptm("icon")),null,16)):s("",!0),e.label?(i(),a("div",c({key:3,class:e.cx("label")},e.ptm("label")),b(e.label),17)):s("",!0)]}),e.removable?d(e.$slots,"removeicon",{key:0,removeCallback:t.close,keydownCallback:t.onKeydown},function(){return[(i(),m(h(e.removeIcon?"span":"TimesCircleIcon"),c({tabindex:"0",class:[e.cx("removeIcon"),e.removeIcon],onClick:t.close,onKeydown:t.onKeydown},e.ptm("removeIcon")),null,16,["class","onClick","onKeydown"]))]}):s("",!0)],16,K)):s("",!0)}B.render=E;export{P as _,B as s};
