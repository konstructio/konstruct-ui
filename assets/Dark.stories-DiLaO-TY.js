import{j as o}from"./iframe-BlTjg9l_.js";import{D as r}from"./DateRangePicker-CBp8RUdk.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B-7A89sm.js";import"./Typography-NrHqQDsO.js";import"./RadioGroup-CtpiYhrz.js";import"./index-Bu_ar9tm.js";import"./index-zjOL5SK6.js";import"./Radio-BIJZW4yh.js";import"./Input-qwyf_9fR.js";import"./Warning-CjdaddJg.js";import"./index-BTMMiShY.js";import"./TimePicker-Cd7KzgpI.js";import"./createLucideIcon-JNXvXrMe.js";import"./style-DP4D6DNq.js";import"./chevron-right-V2LLFm2v.js";const f={title:"In Review/DateRangePicker/Dark",component:r},a={parameters:{theme:"dark"},render:()=>o.jsx(r,{defaultRange:{from:new Date(new Date().getFullYear(),new Date().getMonth(),10),to:new Date(new Date().getFullYear(),new Date().getMonth(),20)},defaultTime:{startTime:new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate(),9,10),endTime:new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate(),17,30)},minDate:new Date(new Date().getFullYear(),new Date().getMonth(),1),showOutsideDays:!0,onRangeChange:e=>console.log("Range changed:",e)})},t={parameters:{theme:"dark"},render:()=>o.jsx(r,{showTime:!1,onRangeChange:e=>console.log("Range changed:",e)})},n={parameters:{theme:"dark"},render:()=>o.jsx(r,{navigationMode:"together",onRangeChange:e=>console.log("Range changed:",e)})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    theme: 'dark'
  },
  render: () => <DateRangePicker showTime={false} onRangeChange={range => console.log('Range changed:', range)} />
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    theme: 'dark'
  },
  render: () => <DateRangePicker navigationMode="together" onRangeChange={range => console.log('Range changed:', range)} />
}`,...n.parameters?.docs?.source}}};const F=["WithTime","WithoutTime","Corousel"];export{n as Corousel,a as WithTime,t as WithoutTime,F as __namedExportsOrder,f as default};
