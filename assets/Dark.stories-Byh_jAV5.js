import{j as o}from"./iframe-6Wg7OtYN.js";import{D as r}from"./DateRangePicker-DlCLiyCn.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CGPp45Jz.js";import"./Typography-DqSFt_Wx.js";import"./RadioGroup-Culu626q.js";import"./index-MZ4BllDj.js";import"./index-imnFuhIZ.js";import"./Radio-C0ovN0Pi.js";import"./Input-C4ZXOFKv.js";import"./Warning-BeXY2IbP.js";import"./index-DXHLnObS.js";import"./TimePicker-Ch1aXL9k.js";import"./createLucideIcon-B2KbbkM7.js";import"./style-DrandUxw.js";import"./chevron-right-t1MWrljr.js";import"./proxy-D97AsNcU.js";const F={title:"In Review/DateRangePicker/Dark",component:r},t={parameters:{theme:"dark"},render:()=>o.jsx(r,{defaultRange:{from:new Date(new Date().getFullYear(),new Date().getMonth(),10),to:new Date(new Date().getFullYear(),new Date().getMonth(),20)},defaultTime:{startTime:new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate(),9,10),endTime:new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate(),17,30)},minDate:new Date(new Date().getFullYear(),new Date().getMonth(),1),showOutsideDays:!0,onRangeChange:e=>console.log("Range changed:",e)})},a={parameters:{theme:"dark"},render:()=>o.jsx(r,{showTime:!1,onRangeChange:e=>console.log("Range changed:",e)})},n={parameters:{theme:"dark"},render:()=>o.jsx(r,{navigationMode:"together",onRangeChange:e=>console.log("Range changed:",e)})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
