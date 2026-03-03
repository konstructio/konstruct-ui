import{j as o}from"./iframe-C9BKWzDJ.js";import{D as r}from"./DateRangePicker-CxFvrkJY.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CGPp45Jz.js";import"./Typography-DB78lGzo.js";import"./RadioGroup-CADR4oPn.js";import"./index-Df-vjiGr.js";import"./index-Bpyo7kJQ.js";import"./Radio-B6irywho.js";import"./Input-jHdWUpAQ.js";import"./Warning-5TQH2Ugh.js";import"./index-DC4_f3fh.js";import"./TimePicker-Dk35FpMp.js";import"./createLucideIcon-iXb1qCA9.js";import"./style-6DP2EV20.js";import"./chevron-right-DCaqjuuF.js";import"./proxy-DyCg3bmp.js";const F={title:"In Review/DateRangePicker/Dark",component:r},t={parameters:{theme:"dark"},render:()=>o.jsx(r,{defaultRange:{from:new Date(new Date().getFullYear(),new Date().getMonth(),10),to:new Date(new Date().getFullYear(),new Date().getMonth(),20)},defaultTime:{startTime:new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate(),9,10),endTime:new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate(),17,30)},minDate:new Date(new Date().getFullYear(),new Date().getMonth(),1),showOutsideDays:!0,onRangeChange:e=>console.log("Range changed:",e)})},a={parameters:{theme:"dark"},render:()=>o.jsx(r,{showTime:!1,onRangeChange:e=>console.log("Range changed:",e)})},n={parameters:{theme:"dark"},render:()=>o.jsx(r,{navigationMode:"together",onRangeChange:e=>console.log("Range changed:",e)})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
