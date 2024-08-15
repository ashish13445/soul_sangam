import{c0 as f,aE as _,s as b,bx as m,I as l,bc as t,ce as v,v as o,bC as V,H as g,ao as y}from"./app-CJsJeg_o.js";import{_ as x}from"./AuthenticatedLayout-DNZu6aXB.js";import{_ as r,a as c,b as n}from"./TextInput-ef5W5agX.js";import{P as w}from"./PrimaryButton-CFQw5tkB.js";import{s as d}from"./index-BWkKIvnl.js";import"./ResponsiveNavLink-DvRbVSIq.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./CheckInModal-De9LiZiV.js";import"./index-_Cgk1Q64.js";const h={class:"flex justify-center mt-10"},k={class:"mt-4"},C={class:"mt-4"},P={class:"mt-4"},U={class:"mt-4"},q={class:"mt-4"},B={class:"mt-4"},E={class:"flex flex-wrap gap-4"},F={class:"flex items-center mt-1"},N=o("label",{for:"male",class:"ml-2"},"Male",-1),$={class:"flex items-center"},D=o("label",{for:"female",class:"ml-2"},"Female",-1),I={class:"flex items-center justify-start mt-4"},J={__name:"EventProfile",setup(M){const e=f({name:"",dob:"",occupation:"",education:"",city:"",preference:"",profile_picture:null}),u=i=>{e.profile_picture=i.target.files[0]},p=()=>{let i=new FormData;i.append("name",e.name),i.append("dob",e.dob),i.append("occupation",e.occupation),i.append("education",e.education),i.append("city",e.city),i.append("preference",e.preference),i.append("profile_picture",e.profile_picture),e.post(route("event.profile"),{data:i,headers:{"Content-Type":"multipart/form-data"}})};return(i,a)=>(_(),b(x,null,{default:m(()=>[l(t(v),{title:"Event Profile"}),o("div",h,[o("form",{onSubmit:V(p,["prevent"]),class:"p-10 w-screen m-5 md:w-1/2 bg-white"},[o("div",null,[l(r,{for:"name",value:"Name"}),l(c,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:t(e).name,"onUpdate:modelValue":a[0]||(a[0]=s=>t(e).name=s),required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"]),l(n,{class:"mt-2",message:t(e).errors.name},null,8,["message"])]),o("div",k,[l(r,{for:"dob",value:"Date of Birth"}),l(c,{id:"dob",type:"date",class:"mt-1 block w-full",modelValue:t(e).dob,"onUpdate:modelValue":a[1]||(a[1]=s=>t(e).dob=s),required:"",autocomplete:"dob"},null,8,["modelValue"]),l(n,{class:"mt-2",message:t(e).errors.dob},null,8,["message"])]),o("div",C,[l(r,{for:"profile_picture",value:"Profile Picture"}),o("input",{id:"profile_picture",type:"file",class:"mt-1 block w-full",onChange:u,accept:"image/*"},null,32),l(n,{class:"mt-2",message:t(e).errors.profile_picture},null,8,["message"])]),o("div",P,[l(r,{for:"occupation",value:"Occupation"}),l(c,{id:"occupation",type:"text",class:"mt-1 block w-full",modelValue:t(e).occupation,"onUpdate:modelValue":a[2]||(a[2]=s=>t(e).occupation=s),required:"",autocomplete:"occupation"},null,8,["modelValue"]),l(n,{class:"mt-2",message:t(e).errors.occupation},null,8,["message"])]),o("div",U,[l(r,{for:"education",value:"Education"}),l(c,{id:"education",type:"text",class:"mt-1 block w-full",modelValue:t(e).education,"onUpdate:modelValue":a[3]||(a[3]=s=>t(e).education=s),required:"",autocomplete:"education"},null,8,["modelValue"]),l(n,{class:"mt-2",message:t(e).errors.education},null,8,["message"])]),o("div",q,[l(r,{for:"city",value:"City"}),l(c,{id:"city",type:"text",class:"mt-1 block w-full",modelValue:t(e).city,"onUpdate:modelValue":a[4]||(a[4]=s=>t(e).city=s),required:"",autocomplete:"city"},null,8,["modelValue"]),l(n,{class:"mt-2",message:t(e).errors.city},null,8,["message"])]),o("div",B,[l(r,{for:"preference",value:"Preference"}),o("div",E,[o("div",F,[l(t(d),{modelValue:t(e).preference,"onUpdate:modelValue":a[5]||(a[5]=s=>t(e).preference=s),inputId:"ingredient1",name:"preference",value:"Male"},null,8,["modelValue"]),N]),o("div",$,[l(t(d),{modelValue:t(e).preference,"onUpdate:modelValue":a[6]||(a[6]=s=>t(e).preference=s),inputId:"ingredient2",name:"preference",value:"Female"},null,8,["modelValue"]),D])])]),o("div",I,[l(w,{class:y(["ms-4",{"opacity-25":t(e).processing}]),disabled:t(e).processing},{default:m(()=>[g(" Submit ")]),_:1},8,["class","disabled"])])],32)])]),_:1}))}};export{J as default};