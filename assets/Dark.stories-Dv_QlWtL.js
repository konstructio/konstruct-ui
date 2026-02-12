import{j as o}from"./iframe-CXfe2m7b.js";import{D as r}from"./DateRangePicker-CL5MH0jq.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B-7A89sm.js";import"./Typography-CXZPBEcx.js";import"./RadioGroup-Biyp_fZL.js";import"./index-CT5XcF7v.js";import"./index-HWT8ds2M.js";import"./Radio-CG3JwMVx.js";import"./Input-Vd5ZMRBq.js";import"./Warning-QrQhKoqr.js";import"./index-DpMUpOLZ.js";import"./TimePicker-JYTxX5uM.js";import"./createLucideIcon-DP3qgoNS.js";import"./style-B03omc7W.js";import"./chevron-right-Bx83USUn.js";import"./proxy-DDpiuYQ4.js";const F={title:"In Review/DateRangePicker/Dark",component:r},t={parameters:{theme:"dark"},render:()=>o.jsx(r,{defaultRange:{from:new Date(new Date().getFullYear(),new Date().getMonth(),10),to:new Date(new Date().getFullYear(),new Date().getMonth(),20)},defaultTime:{startTime:new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate(),9,10),endTime:new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate(),17,30)},minDate:new Date(new Date().getFullYear(),new Date().getMonth(),1),showOutsideDays:!0,onRangeChange:e=>console.log("Range changed:",e)})},a={parameters:{theme:"dark"},render:()=>o.jsx(r,{showTime:!1,onRangeChange:e=>console.log("Range changed:",e)})},n={parameters:{theme:"dark"},render:()=>o.jsx(r,{navigationMode:"together",onRangeChange:e=>console.log("Range changed:",e)})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    theme: 'dark'
  },
  render: () => <DateRangePicker defaultRange={{
    from: new Date(new Date().getFullYear(), new Date().getMonth(), 10),
    to: new Date(new Date().getFullYear(), new Date().getMonth(), 20)
  }} defaultTime={{
    startTime: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 9, 10),
    endTime: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 17, 30)
  }} minDate={new Date(new Date().getFullYear(), new Date().getMonth(), 1)} showOutsideDays onRangeChange={range => console.log('Range changed:', range)} />
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    theme: 'dark'
  },
  render: () => <DateRangePicker showTime={false} onRangeChange={range => console.log('Range changed:', range)} />
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    theme: 'dark'
  },
  render: () => <DateRangePicker navigationMode="together" onRangeChange={range => console.log('Range changed:', range)} />
}`,...n.parameters?.docs?.source}}};const Y=["WithTime","WithoutTime","Corousel"];export{n as Corousel,t as WithTime,a as WithoutTime,Y as __namedExportsOrder,F as default};
