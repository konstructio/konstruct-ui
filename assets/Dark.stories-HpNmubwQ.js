import{j as o}from"./iframe-CYvr-DNT.js";import{D as r}from"./DateRangePicker-DhSbxznz.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B-7A89sm.js";import"./Typography-DGsQkGV-.js";import"./RadioGroup-TgVEDs1m.js";import"./index-Cs63iYK6.js";import"./index-Bk2x6q9r.js";import"./Radio-CX4U3jyB.js";import"./Input-pC8_2qEP.js";import"./Warning-BMsvqDn2.js";import"./index-Ch8ux4gY.js";import"./TimePicker-BvYqVpvz.js";import"./createLucideIcon-Bg_aPHFQ.js";import"./style-DhfiSkjW.js";import"./chevron-right-Hz6mjwkA.js";const f={title:"In Review/DateRangePicker/Dark",component:r},a={parameters:{theme:"dark"},render:()=>o.jsx(r,{defaultRange:{from:new Date(new Date().getFullYear(),new Date().getMonth(),10),to:new Date(new Date().getFullYear(),new Date().getMonth(),20)},defaultTime:{startTime:new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate(),9,10),endTime:new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate(),17,30)},minDate:new Date(new Date().getFullYear(),new Date().getMonth(),1),showOutsideDays:!0,onRangeChange:e=>console.log("Range changed:",e)})},t={parameters:{theme:"dark"},render:()=>o.jsx(r,{showTime:!1,onRangeChange:e=>console.log("Range changed:",e)})},n={parameters:{theme:"dark"},render:()=>o.jsx(r,{navigationMode:"together",onRangeChange:e=>console.log("Range changed:",e)})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
