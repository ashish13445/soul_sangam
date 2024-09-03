import{aE as i,u,aQ as y,aM as m,b$ as h,I as t,bx as c,v as s,an as x,H as d,bc as a,bA as b,ao as v}from"./app-DmW52sVY.js";import{_ as k}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as $,a as C}from"./TextInput-BtJYNo_u.js";import{_ as D}from"./InputLabel-CvItTXrE.js";import{_ as B}from"./Modal-BvQmmOCc.js";const V={},A={class:"inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150"};function S(r,o){return i(),u("button",A,[y(r.$slots,"default")])}const _=k(V,[["render",S]]),U=["type"],E={__name:"SecondaryButton",props:{type:{type:String,default:"button"}},setup(r){return(o,n)=>(i(),u("button",{type:r.type,class:"inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150"},[y(o.$slots,"default")],8,U))}},I={class:"space-y-6"},N=s("header",null,[s("h2",{class:"text-lg font-medium text-gray-900"},"Delete Account"),s("p",{class:"mt-1 text-sm text-gray-600"}," Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain. ")],-1),P={class:"p-6"},T=s("h2",{class:"text-lg font-medium text-gray-900"}," Are you sure you want to delete your account? ",-1),F=s("p",{class:"mt-1 text-sm text-gray-600"}," Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. ",-1),K={class:"mt-6"},M={class:"mt-6 flex justify-end"},G={__name:"DeleteUserForm",setup(r){const o=m(!1),n=m(null),e=h({password:""}),g=()=>{o.value=!0,x(()=>n.value.focus())},f=()=>{e.delete(route("profile.destroy"),{preserveScroll:!0,onSuccess:()=>l(),onError:()=>n.value.focus(),onFinish:()=>e.reset()})},l=()=>{o.value=!1,e.reset()};return(O,p)=>(i(),u("section",I,[N,t(_,{onClick:g},{default:c(()=>[d("Delete Account")]),_:1}),t(B,{show:o.value,onClose:l},{default:c(()=>[s("div",P,[T,F,s("div",K,[t(D,{for:"password",value:"Password",class:"sr-only"}),t($,{id:"password",ref_key:"passwordInput",ref:n,modelValue:a(e).password,"onUpdate:modelValue":p[0]||(p[0]=w=>a(e).password=w),type:"password",class:"mt-1 block w-3/4",placeholder:"Password",onKeyup:b(f,["enter"])},null,8,["modelValue"]),t(C,{message:a(e).errors.password,class:"mt-2"},null,8,["message"])]),s("div",M,[t(E,{onClick:l},{default:c(()=>[d(" Cancel ")]),_:1}),t(_,{class:v(["ms-3",{"opacity-25":a(e).processing}]),disabled:a(e).processing,onClick:f},{default:c(()=>[d(" Delete Account ")]),_:1},8,["class","disabled"])])])]),_:1},8,["show"])]))}};export{G as default};
