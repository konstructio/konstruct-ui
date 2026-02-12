import{j as e}from"./iframe-CXfe2m7b.js";import{D as o}from"./DateRangePicker-CL5MH0jq.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B-7A89sm.js";import"./Typography-CXZPBEcx.js";import"./RadioGroup-Biyp_fZL.js";import"./index-CT5XcF7v.js";import"./index-HWT8ds2M.js";import"./Radio-CG3JwMVx.js";import"./Input-Vd5ZMRBq.js";import"./Warning-QrQhKoqr.js";import"./index-DpMUpOLZ.js";import"./TimePicker-JYTxX5uM.js";import"./createLucideIcon-DP3qgoNS.js";import"./style-B03omc7W.js";import"./chevron-right-Bx83USUn.js";import"./proxy-DDpiuYQ4.js";const x={title:"In Review/DateRangePicker/Light",component:o},t={render:()=>e.jsx("div",{className:"p-4",children:e.jsx(o,{defaultRange:{from:new Date(new Date().getFullYear(),new Date().getMonth(),10),to:new Date(new Date().getFullYear(),new Date().getMonth(),20)},defaultTime:{startTime:new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate(),9,10),endTime:new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate(),17,30)},minDate:new Date(new Date().getFullYear(),new Date().getMonth(),1),onRangeChange:a=>console.log("Range changed:",a)})})},n={render:()=>e.jsx("div",{className:"p-4",children:e.jsx(o,{showTime:!1,onRangeChange:a=>console.log("Range changed:",a)})})},r={render:()=>e.jsx("div",{className:"p-4",children:e.jsx(o,{navigationMode:"together",onRangeChange:a=>console.log("Range changed:",a)})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div className="p-4">
      <DateRangePicker defaultRange={{
      from: new Date(new Date().getFullYear(), new Date().getMonth(), 10),
      to: new Date(new Date().getFullYear(), new Date().getMonth(), 20)
    }} defaultTime={{
      startTime: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 9, 10),
      endTime: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 17, 30)
    }} minDate={new Date(new Date().getFullYear(), new Date().getMonth(), 1)} onRangeChange={range => console.log('Range changed:', range)} />
    </div>
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div className="p-4">
      <DateRangePicker showTime={false} onRangeChange={range => console.log('Range changed:', range)} />
    </div>
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div className="p-4">
      <DateRangePicker navigationMode="together" onRangeChange={range => console.log('Range changed:', range)} />
    </div>
}`,...r.parameters?.docs?.source}}};const F=["WithTime","WithoutTime","Corousel"];export{r as Corousel,t as WithTime,n as WithoutTime,F as __namedExportsOrder,x as default};
