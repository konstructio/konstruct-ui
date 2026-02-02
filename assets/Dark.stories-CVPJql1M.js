import{j as o}from"./iframe-Bn_zYVkQ.js";import{D as r}from"./DateRangePicker-DYhwpKCo.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B-7A89sm.js";import"./Typography-BK75nqwC.js";import"./RadioGroup-D5XVccgy.js";import"./index-C3wFPQlr.js";import"./index-aQzbjv51.js";import"./Radio-BcSOuRyW.js";import"./Input-DOuHIFSP.js";import"./Warning-Cf3Crh7q.js";import"./index-DWQB616r.js";import"./TimePicker-Bbj5jBVe.js";import"./createLucideIcon-Nq0w9UEh.js";import"./style-1YjHF4jU.js";import"./chevron-right-BEKQEKzs.js";const f={title:"In Review/DateRangePicker/Dark",component:r},a={parameters:{theme:"dark"},render:()=>o.jsx(r,{defaultRange:{from:new Date(new Date().getFullYear(),new Date().getMonth(),10),to:new Date(new Date().getFullYear(),new Date().getMonth(),20)},defaultTime:{startTime:new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate(),9,10),endTime:new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate(),17,30)},minDate:new Date(new Date().getFullYear(),new Date().getMonth(),1),showOutsideDays:!0,onRangeChange:e=>console.log("Range changed:",e)})},t={parameters:{theme:"dark"},render:()=>o.jsx(r,{showTime:!1,onRangeChange:e=>console.log("Range changed:",e)})},n={parameters:{theme:"dark"},render:()=>o.jsx(r,{navigationMode:"together",onRangeChange:e=>console.log("Range changed:",e)})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
