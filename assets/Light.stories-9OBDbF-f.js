import{j as e}from"./iframe-CYvr-DNT.js";import{D as o}from"./DateRangePicker-DhSbxznz.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B-7A89sm.js";import"./Typography-DGsQkGV-.js";import"./RadioGroup-TgVEDs1m.js";import"./index-Cs63iYK6.js";import"./index-Bk2x6q9r.js";import"./Radio-CX4U3jyB.js";import"./Input-pC8_2qEP.js";import"./Warning-BMsvqDn2.js";import"./index-Ch8ux4gY.js";import"./TimePicker-BvYqVpvz.js";import"./createLucideIcon-Bg_aPHFQ.js";import"./style-DhfiSkjW.js";import"./chevron-right-Hz6mjwkA.js";const f={title:"In Review/DateRangePicker/Light",component:o},t={render:()=>e.jsx("div",{className:"p-4",children:e.jsx(o,{defaultRange:{from:new Date(new Date().getFullYear(),new Date().getMonth(),10),to:new Date(new Date().getFullYear(),new Date().getMonth(),20)},defaultTime:{startTime:new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate(),9,10),endTime:new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate(),17,30)},minDate:new Date(new Date().getFullYear(),new Date().getMonth(),1),onRangeChange:a=>console.log("Range changed:",a)})})},n={render:()=>e.jsx("div",{className:"p-4",children:e.jsx(o,{showTime:!1,onRangeChange:a=>console.log("Range changed:",a)})})},r={render:()=>e.jsx("div",{className:"p-4",children:e.jsx(o,{navigationMode:"together",onRangeChange:a=>console.log("Range changed:",a)})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
