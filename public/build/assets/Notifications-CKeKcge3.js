import{_ as o}from"./CheckedInLayout-De3skb-Y.js";import{aM as n,ax as c,aE as t,s as r,bx as l,b_ as _,v as f,u as s,aP as p,F as u,b3 as m}from"./app-DmW52sVY.js";import"./ResponsiveNavLink-w8IYxMkn.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./DropdownLink-BPC462G4.js";const d={class:"bg-white p-10 m-10"},w={__name:"Notifications",setup(h){const a=n(null);return c(()=>{_.get(`/notifications/${page.props.ticket.event_id}`).then(e=>{a.value=e.data.notifications})}),(e,v)=>(t(),r(o,null,{default:l(()=>[f("div",null,[(t(!0),s(u,null,p(a.value,i=>(t(),s("div",d,m(i.data.message),1))),256))])]),_:1}))}};export{w as default};
