import{j as e}from"./iframe-BXO_EhpM.js";import{D as o}from"./DateRangePicker-C_Nolzgq.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BIgQ6y5l.js";import"./Typography-Bc3KsAQu.js";import"./RadioGroup-BbQfmraC.js";import"./index-CxlmtjIK.js";import"./index-D_E6ICQ7.js";import"./Radio-C7_Aj0ZM.js";import"./Input-DOIuvlYX.js";import"./Warning-BMg_Tjff.js";import"./index-jSjLyp38.js";import"./TimePicker-UIyAM6wF.js";import"./createLucideIcon-BvIK0-7g.js";import"./style-BBFTxbZY.js";import"./chevron-right-BbFQLuUX.js";import"./proxy-ClNoopVP.js";const x={title:"In Review/DateRangePicker/Light",component:o},t={render:()=>e.jsx("div",{className:"p-4",children:e.jsx(o,{defaultRange:{from:new Date(new Date().getFullYear(),new Date().getMonth(),10),to:new Date(new Date().getFullYear(),new Date().getMonth(),20)},defaultTime:{startTime:new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate(),9,10),endTime:new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate(),17,30)},minDate:new Date(new Date().getFullYear(),new Date().getMonth(),1),onRangeChange:a=>console.log("Range changed:",a)})})},n={render:()=>e.jsx("div",{className:"p-4",children:e.jsx(o,{showTime:!1,onRangeChange:a=>console.log("Range changed:",a)})})},r={render:()=>e.jsx("div",{className:"p-4",children:e.jsx(o,{navigationMode:"together",onRangeChange:a=>console.log("Range changed:",a)})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
