import{j as e}from"./iframe-BlTjg9l_.js";import{D as o}from"./DateRangePicker-CBp8RUdk.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B-7A89sm.js";import"./Typography-NrHqQDsO.js";import"./RadioGroup-CtpiYhrz.js";import"./index-Bu_ar9tm.js";import"./index-zjOL5SK6.js";import"./Radio-BIJZW4yh.js";import"./Input-qwyf_9fR.js";import"./Warning-CjdaddJg.js";import"./index-BTMMiShY.js";import"./TimePicker-Cd7KzgpI.js";import"./createLucideIcon-JNXvXrMe.js";import"./style-DP4D6DNq.js";import"./chevron-right-V2LLFm2v.js";const f={title:"In Review/DateRangePicker/Light",component:o},t={render:()=>e.jsx("div",{className:"p-4",children:e.jsx(o,{defaultRange:{from:new Date(new Date().getFullYear(),new Date().getMonth(),10),to:new Date(new Date().getFullYear(),new Date().getMonth(),20)},defaultTime:{startTime:new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate(),9,10),endTime:new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate(),17,30)},minDate:new Date(new Date().getFullYear(),new Date().getMonth(),1),onRangeChange:a=>console.log("Range changed:",a)})})},n={render:()=>e.jsx("div",{className:"p-4",children:e.jsx(o,{showTime:!1,onRangeChange:a=>console.log("Range changed:",a)})})},r={render:()=>e.jsx("div",{className:"p-4",children:e.jsx(o,{navigationMode:"together",onRangeChange:a=>console.log("Range changed:",a)})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const x=["WithTime","WithoutTime","Corousel"];export{r as Corousel,t as WithTime,n as WithoutTime,x as __namedExportsOrder,f as default};
