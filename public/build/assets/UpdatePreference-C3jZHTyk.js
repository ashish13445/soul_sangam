import{bZ as L,cg as b,aS as P,bz as D,aE as m,u as y,v as a,aQ as k,ao as K,am as h,t as q,b3 as x,aR as E,F,aP as N,s as R,A as U,bx as g,ck as j,cq as B,aM as S,ax as z,I as p,bc as v,bC as M,H as V}from"./app-CqYFsAlS.js";import{_ as H}from"./InputLabel-BKIrqicg.js";import{s as O}from"./index-D-BzeJj1.js";import{P as _}from"./PrimaryButton-B5renPlr.js";import{s as G}from"./index-BBodYeMi.js";import{s as X}from"./index-I-ndE2qt.js";import{R as T}from"./index-aAc0ImM4.js";import{s as I}from"./index-B8xOHRV7.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-BOaXpPUW.js";import"./index-CIWkwtLf.js";var J=function(n){var t=n.dt;return`
.p-togglebutton {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: `.concat(t("togglebutton.color"),`;
    background: `).concat(t("togglebutton.background"),`;
    border: 1px solid `).concat(t("togglebutton.border.color"),`;
    padding: `).concat(t("togglebutton.padding"),`;
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background `).concat(t("togglebutton.transition.duration"),", color ").concat(t("togglebutton.transition.duration"),", border-color ").concat(t("togglebutton.transition.duration"),`,
        outline-color `).concat(t("togglebutton.transition.duration"),", box-shadow ").concat(t("togglebutton.transition.duration"),`;
    border-radius: `).concat(t("togglebutton.border.radius"),`;
    outline-color: transparent;
    font-weight: `).concat(t("togglebutton.font.weight"),`;
}

.p-togglebutton-content {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: `).concat(t("togglebutton.gap"),`;
}

.p-togglebutton-label,
.p-togglebutton-icon {
    position: relative;
    transition: none;
}

.p-togglebutton::before {
    content: "";
    background: transparent;
    transition: background `).concat(t("togglebutton.transition.duration"),", color ").concat(t("togglebutton.transition.duration"),", border-color ").concat(t("togglebutton.transition.duration"),`,
            outline-color `).concat(t("togglebutton.transition.duration"),", box-shadow ").concat(t("togglebutton.transition.duration"),`;
    position: absolute;
    left: `).concat(t("togglebutton.content.left"),`;
    top: `).concat(t("togglebutton.content.top"),`;
    width: calc(100% - calc(2 *  `).concat(t("togglebutton.content.left"),`));
    height: calc(100% - calc(2 *  `).concat(t("togglebutton.content.top"),`));
    border-radius: `).concat(t("togglebutton.border.radius"),`;
}

.p-togglebutton.p-togglebutton-checked::before {
    background: `).concat(t("togglebutton.content.checked.background"),`;
    box-shadow: `).concat(t("togglebutton.content.checked.shadow"),`;
}

.p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover {
    background: `).concat(t("togglebutton.hover.background"),`;
    color: `).concat(t("togglebutton.hover.color"),`;
}

.p-togglebutton.p-togglebutton-checked {
    background: `).concat(t("togglebutton.checked.background"),`;
    border-color: `).concat(t("togglebutton.checked.border.color"),`;
    color: `).concat(t("togglebutton.checked.color"),`;
}

.p-togglebutton:focus-visible {
    box-shadow: `).concat(t("togglebutton.focus.ring.shadow"),`;
    outline: `).concat(t("togglebutton.focus.ring.width")," ").concat(t("togglebutton.focus.ring.style")," ").concat(t("togglebutton.focus.ring.color"),`;
    outline-offset: `).concat(t("togglebutton.focus.ring.offset"),`;
}

.p-togglebutton.p-invalid {
    border-color: `).concat(t("togglebutton.invalid.border.color"),`;
}

.p-togglebutton:disabled {
    opacity: 1;
    cursor: default;
    background: `).concat(t("togglebutton.disabled.background"),`;
    border-color: `).concat(t("togglebutton.disabled.border.color"),`;
    color: `).concat(t("togglebutton.disabled.color"),`;
}

.p-togglebutton-icon {
    color: `).concat(t("togglebutton.icon.color"),`;
}

.p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover .p-togglebutton-icon {
    color: `).concat(t("togglebutton.icon.hover.color"),`;
}

.p-togglebutton.p-togglebutton-checked .p-togglebutton-icon {
    color: `).concat(t("togglebutton.icon.checked.color"),`;
}

.p-togglebutton:disabled .p-togglebutton-icon {
    color: `).concat(t("togglebutton.icon.disabled.color"),`;
}
`)},Q={root:function(n){var t=n.instance,r=n.props;return["p-togglebutton p-component",{"p-togglebutton-checked":t.active,"p-invalid":r.invalid}]},content:"p-togglebutton-content",icon:"p-togglebutton-icon",label:"p-togglebutton-label"},W=L.extend({name:"togglebutton",theme:J,classes:Q}),Y={name:"BaseToggleButton",extends:I,props:{modelValue:Boolean,onIcon:String,offIcon:String,onLabel:{type:String,default:"Yes"},offLabel:{type:String,default:"No"},iconPos:{type:String,default:"left"},invalid:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},tabindex:{type:Number,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:W,provide:function(){return{$pcToggleButton:this,$parentInstance:this}}},A={name:"ToggleButton",extends:Y,inheritAttrs:!1,emits:["update:modelValue","change"],methods:{getPTOptions:function(n){var t=n==="root"?this.ptmi:this.ptm;return t(n,{context:{active:this.active,disabled:this.disabled}})},onChange:function(n){!this.disabled&&!this.readonly&&(this.$emit("update:modelValue",!this.modelValue),this.$emit("change",n))}},computed:{active:function(){return this.modelValue===!0},hasLabel:function(){return b.isNotEmpty(this.onLabel)&&b.isNotEmpty(this.offLabel)},label:function(){return this.hasLabel?this.modelValue?this.onLabel:this.offLabel:"&nbsp;"}},directives:{ripple:T}},Z=["tabindex","disabled","aria-pressed","data-p-checked","data-p-disabled"];function tt(e,n,t,r,u,o){var i=P("ripple");return D((m(),y("button",h({type:"button",class:e.cx("root"),tabindex:e.tabindex,disabled:e.disabled,"aria-pressed":e.modelValue,onClick:n[0]||(n[0]=function(){return o.onChange&&o.onChange.apply(o,arguments)})},o.getPTOptions("root"),{"data-p-checked":o.active,"data-p-disabled":e.disabled}),[a("span",h({class:e.cx("content")},o.getPTOptions("content")),[k(e.$slots,"default",{},function(){return[k(e.$slots,"icon",{value:e.modelValue,class:K(e.cx("icon"))},function(){return[e.onIcon||e.offIcon?(m(),y("span",h({key:0,class:[e.cx("icon"),e.modelValue?e.onIcon:e.offIcon]},o.getPTOptions("icon")),null,16)):q("",!0)]}),a("span",h({class:e.cx("label")},o.getPTOptions("label")),x(o.label),17)]})],16)],16,Z)),[[i]])}A.render=tt;var et=function(n){var t=n.dt;return`
.p-selectbutton {
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    outline-color: transparent;
    border-radius: `.concat(t("selectbutton.border.radius"),`;
}

.p-selectbutton .p-togglebutton {
    border-radius: 0;
    border-width: 1px 1px 1px 0;
}

.p-selectbutton .p-togglebutton:focus-visible {
    position: relative;
    z-index: 1;
}

.p-selectbutton .p-togglebutton:first-child {
    border-left-width: 1px;
    border-top-left-radius: `).concat(t("selectbutton.border.radius"),`;
    border-bottom-left-radius: `).concat(t("selectbutton.border.radius"),`;
}

.p-selectbutton .p-togglebutton:last-child {
    border-top-right-radius: `).concat(t("selectbutton.border.radius"),`;
    border-bottom-right-radius: `).concat(t("selectbutton.border.radius"),`;
}

.p-selectbutton.p-invalid {
    outline: 1px solid `).concat(t("selectbutton.invalid.border.color"),`;
    outline-offset: 0;
}
`)},nt={root:function(n){var t=n.props;return["p-selectbutton p-component",{"p-invalid":t.invalid}]}},ot=L.extend({name:"selectbutton",theme:et,classes:nt}),at={name:"BaseSelectButton",extends:I,props:{modelValue:null,options:Array,optionLabel:null,optionValue:null,optionDisabled:null,multiple:Boolean,allowEmpty:{type:Boolean,default:!0},invalid:{type:Boolean,default:!1},disabled:Boolean,dataKey:null,ariaLabelledby:{type:String,default:null}},style:ot,provide:function(){return{$pcSelectButton:this,$parentInstance:this}}};function lt(e,n){var t=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=C(e))||n){t&&(e=t);var r=0,u=function(){};return{s:u,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(s){throw s},f:u}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o,i=!0,l=!1;return{s:function(){t=t.call(e)},n:function(){var s=t.next();return i=s.done,s},e:function(s){l=!0,o=s},f:function(){try{i||t.return==null||t.return()}finally{if(l)throw o}}}}function rt(e){return ut(e)||st(e)||C(e)||it()}function it(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function C(e,n){if(e){if(typeof e=="string")return w(e,n);var t={}.toString.call(e).slice(8,-1);return t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set"?Array.from(e):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?w(e,n):void 0}}function st(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function ut(e){if(Array.isArray(e))return w(e)}function w(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}var $={name:"SelectButton",extends:at,inheritAttrs:!1,emits:["update:modelValue","change"],methods:{getOptionLabel:function(n){return this.optionLabel?b.resolveFieldData(n,this.optionLabel):n},getOptionValue:function(n){return this.optionValue?b.resolveFieldData(n,this.optionValue):n},getOptionRenderKey:function(n){return this.dataKey?b.resolveFieldData(n,this.dataKey):this.getOptionLabel(n)},getPTOptions:function(n,t){return this.ptm(t,{context:{active:this.isSelected(n),disabled:this.isOptionDisabled(n),option:n}})},isOptionDisabled:function(n){return this.optionDisabled?b.resolveFieldData(n,this.optionDisabled):!1},onOptionSelect:function(n,t,r){var u=this;if(!(this.disabled||this.isOptionDisabled(t))){var o=this.isSelected(t);if(!(o&&!this.allowEmpty)){var i=this.getOptionValue(t),l;this.multiple?o?l=this.modelValue.filter(function(c){return!b.equals(c,i,u.equalityKey)}):l=this.modelValue?[].concat(rt(this.modelValue),[i]):[i]:l=o?null:i,this.focusedIndex=r,this.$emit("update:modelValue",l),this.$emit("change",{event:n,value:l})}}},isSelected:function(n){var t=!1,r=this.getOptionValue(n);if(this.multiple){if(this.modelValue){var u=lt(this.modelValue),o;try{for(u.s();!(o=u.n()).done;){var i=o.value;if(b.equals(i,r,this.equalityKey)){t=!0;break}}}catch(l){u.e(l)}finally{u.f()}}}else t=b.equals(this.modelValue,r,this.equalityKey);return t}},computed:{equalityKey:function(){return this.optionValue?null:this.dataKey}},directives:{ripple:T},components:{ToggleButton:A}},ct=["aria-labelledby"];function dt(e,n,t,r,u,o){var i=E("ToggleButton");return m(),y("div",h({class:e.cx("root"),role:"group","aria-labelledby":e.ariaLabelledby},e.ptmi("root")),[(m(!0),y(F,null,N(e.options,function(l,c){return m(),R(i,{key:o.getOptionRenderKey(l),modelValue:o.isSelected(l),onLabel:o.getOptionLabel(l),offLabel:o.getOptionLabel(l),disabled:e.disabled||o.isOptionDisabled(l),unstyled:e.unstyled,onChange:function(d){return o.onOptionSelect(d,l,c)},pt:e.ptm("pcButton")},U({_:2},[e.$slots.option?{name:"default",fn:g(function(){return[k(e.$slots,"option",{option:l,index:c},function(){return[a("span",h({ref_for:!0},e.ptm("pcButton").label),x(o.getOptionLabel(l)),17)]})]}),key:"0"}:void 0]),1032,["modelValue","onLabel","offLabel","disabled","unstyled","onChange","pt"])}),128))],16,ct)}$.render=dt;const pt={class:"bg-white p-10 rounded-lg"},gt=a("header",null,[a("p",{class:"mt-1 text-lg font-normal"}," Update your Preferences ")],-1),bt={class:"mt-4"},ft={class:"py-3"},ht=a("span",{class:"pb-5"}," Gender ",-1),mt={class:"flex"},vt={class:"mt-2 py-3"},yt=a("span",{class:"pb-5"}," Religion ",-1),Vt={class:"flex"},_t={class:"mt-2 py-3"},St=a("span",{class:"pb-5"}," Age ",-1),kt={class:"flex items-center"},wt={class:"md:flex"},Bt=a("span",{class:"pi pi-plus"},null,-1),Ot=a("span",{class:"pi pi-minus"},null,-1),Lt=a("span",{class:"p-5"},"to",-1),xt=a("span",{class:"pi pi-plus"},null,-1),Tt=a("span",{class:"pi pi-minus"},null,-1),It={class:"flex items-center gap-4"},Ut={__name:"UpdatePreference",props:{mustVerifyEmail:{type:Boolean},status:{type:String}},setup(e){const n=j();B().props.auth.user,B().props.user;const t=S({start_age:null,end_age:null,religion:"",gender:""}),r=S(["Male","Female","Non-Binary"]),u=S(["","Hindu","Muslim","Christian","Sikh","Parsi","Jain","Buddhist","Jewish"]);z(()=>{axios.get("/user/preferences").then(s=>{t.value=s.data}).catch(s=>{console.error("There was an error fetching the preferences:",s)})});const o=async()=>{try{const s=await axios.patch("/user/preferences/update",t.value);n.add({severity:"success",summary:"Success",detail:"Preference updated successfully!",life:3e3})}catch(s){console.error("Failed to update preferences:",s)}},i=()=>{t.value.gender=""},l=()=>{t.value.religion=""},c=()=>{t.value.start_age=null,t.value.end_age=null};return(s,d)=>(m(),y("section",pt,[gt,p(v(X)),a("form",{onSubmit:M(o,["prevent"]),class:"mt-6 text-sm space-y-3"},[a("div",bt,[p(H,{for:"preference",value:"Preference"}),a("div",ft,[ht,a("div",mt,[p(v($),{modelValue:t.value.gender,"onUpdate:modelValue":d[0]||(d[0]=f=>t.value.gender=f),options:r.value,"aria-labelledby":"basic"},null,8,["modelValue","options"]),p(_,{type:"button",class:"ml-4 text-blue-500 bg-red-500 hover:bg-red-800",onClick:i},{default:g(()=>[V("X")]),_:1})])]),a("div",vt,[yt,a("div",Vt,[p(v(G),{modelValue:t.value.religion,"onUpdate:modelValue":d[1]||(d[1]=f=>t.value.religion=f),options:u.value,placeholder:"Select a religion",class:"w-full md:w-56"},null,8,["modelValue","options"]),p(_,{type:"button",class:"ml-4 text-blue-500 bg-red-500 hover:bg-red-800",onClick:l},{default:g(()=>[V("X")]),_:1})])]),a("div",_t,[St,a("div",kt,[a("div",wt,[p(v(O),{modelValue:t.value.start_age,"onUpdate:modelValue":d[2]||(d[2]=f=>t.value.start_age=f),inputId:"start",min:18,max:100,fluid:"",class:"md:pr-5 pr-2",showButtons:"",buttonLayout:"horizontal",step:1},{incrementbuttonicon:g(()=>[Bt]),decrementbuttonicon:g(()=>[Ot]),_:1},8,["modelValue"]),Lt,p(v(O),{modelValue:t.value.end_age,"onUpdate:modelValue":d[3]||(d[3]=f=>t.value.end_age=f),inputId:"end",min:t.value.start_age,max:100,fluid:"",showButtons:"",buttonLayout:"horizontal",step:1},{incrementbuttonicon:g(()=>[xt]),decrementbuttonicon:g(()=>[Tt]),_:1},8,["modelValue","min"])]),p(_,{type:"button",class:"bg-red-500 hover:bg-red-800 h-10 w-10",onClick:c},{default:g(()=>[V("X")]),_:1})])])]),a("div",It,[p(_,null,{default:g(()=>[V("Save")]),_:1})])],32)]))}};export{Ut as default};
