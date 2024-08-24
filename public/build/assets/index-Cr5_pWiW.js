import{s as u}from"./index-DOzvAYSv.js";import{aE as i,u as r,am as c,v as C,bZ as v,aQ as l,s as p,aT as d,t,b3 as g}from"./app-HtLgu-XO.js";import{s as f}from"./index-BL4vmZTm.js";var h={name:"TimesCircleIcon",extends:u},y=C("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7 14C5.61553 14 4.26215 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303296 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303296 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26215 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1.16667C5.84628 1.16667 4.71846 1.50879 3.75918 2.14976C2.79989 2.79074 2.05222 3.70178 1.61071 4.76768C1.16919 5.83358 1.05367 7.00647 1.27876 8.13803C1.50384 9.26958 2.05941 10.309 2.87521 11.1248C3.69102 11.9406 4.73042 12.4962 5.86198 12.7212C6.99353 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2188 3.96918 11.1248 2.87521C10.0308 1.78125 8.5471 1.16667 7 1.16667ZM4.66662 9.91668C4.58998 9.91704 4.51404 9.90209 4.44325 9.87271C4.37246 9.84333 4.30826 9.8001 4.2544 9.74557C4.14516 9.6362 4.0838 9.48793 4.0838 9.33335C4.0838 9.17876 4.14516 9.0305 4.2544 8.92113L6.17553 7L4.25443 5.07891C4.15139 4.96832 4.09529 4.82207 4.09796 4.67094C4.10063 4.51982 4.16185 4.37563 4.26872 4.26876C4.3756 4.16188 4.51979 4.10066 4.67091 4.09799C4.82204 4.09532 4.96829 4.15142 5.07887 4.25446L6.99997 6.17556L8.92106 4.25446C9.03164 4.15142 9.1779 4.09532 9.32903 4.09799C9.48015 4.10066 9.62434 4.16188 9.73121 4.26876C9.83809 4.37563 9.89931 4.51982 9.90198 4.67094C9.90464 4.82207 9.84855 4.96832 9.74551 5.07891L7.82441 7L9.74554 8.92113C9.85478 9.0305 9.91614 9.17876 9.91614 9.33335C9.91614 9.48793 9.85478 9.6362 9.74554 9.74557C9.69168 9.8001 9.62748 9.84333 9.55669 9.87271C9.4859 9.90209 9.40996 9.91704 9.33332 9.91668C9.25668 9.91704 9.18073 9.90209 9.10995 9.87271C9.03916 9.84333 8.97495 9.8001 8.9211 9.74557L6.99997 7.82444L5.07884 9.74557C5.02499 9.8001 4.96078 9.84333 4.88999 9.87271C4.81921 9.90209 4.74326 9.91704 4.66662 9.91668Z",fill:"currentColor"},null,-1),b=[y];function w(n,o,e,m,s,a){return i(),r("svg",c({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.pti()),b,16)}h.render=w;var k=function(o){var e=o.dt;return`
.p-chip {
    display: inline-flex;
    align-items: center;
    background: `.concat(e("chip.background"),`;
    color: `).concat(e("chip.color"),`;
    border-radius: `).concat(e("chip.border.radius"),`;
    padding: `).concat(e("chip.padding.y")," ").concat(e("chip.padding.x"),`;
    gap: `).concat(e("chip.gap"),`;
}

.p-chip-icon {
    color: `).concat(e("chip.icon.color"),`;
    font-size: `).concat(e("chip.icon.font.size"),`;
    width: `).concat(e("chip.icon.size"),`;
    height: `).concat(e("chip.icon.size"),`;
}

.p-chip-image {
    border-radius: 50%;
    width: `).concat(e("chip.image.width"),`;
    height: `).concat(e("chip.image.height"),`;
    margin-left: calc(-1 * `).concat(e("chip.padding.y"),`);
}

.p-chip:has(.p-chip-remove-icon) {
    padding-right: `).concat(e("chip.padding.y"),`;
}

.p-chip:has(.p-chip-image) {
    padding-top: calc(`).concat(e("chip.padding.y"),` / 2);
    padding-bottom: calc(`).concat(e("chip.padding.y"),` / 2);
}

.p-chip-remove-icon {
    cursor: pointer;
    font-size: `).concat(e("chip.remove.icon.font.size"),`;
    width: `).concat(e("chip.remove.icon.size"),`;
    height: `).concat(e("chip.remove.icon.size"),`;
    color: `).concat(e("chip.remove.icon.color"),`;
    border-radius: 50%;
    transition: outline-color `).concat(e("chip.transition.duration"),", box-shadow ").concat(e("chip.transition.duration"),`;
    outline-color: transparent;
}

.p-chip-remove-icon:focus-visible {
    box-shadow: `).concat(e("chip.remove.icon.focus.ring.shadow"),`;
    outline: `).concat(e("chip.remove.icon.focus.ring.width")," ").concat(e("chip.remove.icon.focus.ring.style")," ").concat(e("chip.remove.icon.focus.ring.color"),`;
    outline-offset: `).concat(e("chip.remove.icon.focus.ring.offset"),`;
}
`)},$={root:"p-chip p-component",image:"p-chip-image",icon:"p-chip-icon",label:"p-chip-label",removeIcon:"p-chip-remove-icon"},I=v.extend({name:"chip",theme:k,classes:$}),B={name:"BaseChip",extends:f,props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},removable:{type:Boolean,default:!1},removeIcon:{type:String,default:void 0}},style:I,provide:function(){return{$pcChip:this,$parentInstance:this}}},z={name:"Chip",extends:B,inheritAttrs:!1,emits:["remove"],data:function(){return{visible:!0}},methods:{onKeydown:function(o){(o.key==="Enter"||o.key==="Backspace")&&this.close(o)},close:function(o){this.visible=!1,this.$emit("remove",o)}},components:{TimesCircleIcon:h}},L=["aria-label"],S=["src"];function K(n,o,e,m,s,a){return s.visible?(i(),r("div",c({key:0,class:n.cx("root"),"aria-label":n.label},n.ptmi("root")),[l(n.$slots,"default",{},function(){return[n.image?(i(),r("img",c({key:0,src:n.image},n.ptm("image"),{class:n.cx("image")}),null,16,S)):n.$slots.icon?(i(),p(d(n.$slots.icon),c({key:1,class:n.cx("icon")},n.ptm("icon")),null,16,["class"])):n.icon?(i(),r("span",c({key:2,class:[n.cx("icon"),n.icon]},n.ptm("icon")),null,16)):t("",!0),n.label?(i(),r("div",c({key:3,class:n.cx("label")},n.ptm("label")),g(n.label),17)):t("",!0)]}),n.removable?l(n.$slots,"removeicon",{key:0,removeCallback:a.close,keydownCallback:a.onKeydown},function(){return[(i(),p(d(n.removeIcon?"span":"TimesCircleIcon"),c({tabindex:"0",class:[n.cx("removeIcon"),n.removeIcon],onClick:a.close,onKeydown:a.onKeydown},n.ptm("removeIcon")),null,16,["class","onClick","onKeydown"]))]}):t("",!0)],16,L)):t("",!0)}z.render=K;export{z as s};
