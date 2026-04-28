import{n as e}from"./chunk-jRWAZmH_.js";import{t}from"./iframe-Dy5_rkim.js";import{n,t as r}from"./DateRangePicker-BQtMfyCK.js";var i,a,o,s,c,l;e((()=>{n(),i=t(),a={title:`In Review/DateRangePicker/Dark`,component:r},o={parameters:{theme:`dark`},render:()=>(0,i.jsx)(r,{defaultRange:{from:new Date(new Date().getFullYear(),new Date().getMonth(),10),to:new Date(new Date().getFullYear(),new Date().getMonth(),20)},defaultTime:{startTime:new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate(),9,10),endTime:new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate(),17,30)},minDate:new Date(new Date().getFullYear(),new Date().getMonth(),1),showOutsideDays:!0,onRangeChange:e=>console.log(`Range changed:`,e)})},s={parameters:{theme:`dark`},render:()=>(0,i.jsx)(r,{showTime:!1,onRangeChange:e=>console.log(`Range changed:`,e)})},c={parameters:{theme:`dark`},render:()=>(0,i.jsx)(r,{navigationMode:`together`,onRangeChange:e=>console.log(`Range changed:`,e)})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    theme: 'dark'
  },
  render: () => <DateRangePicker showTime={false} onRangeChange={range => console.log('Range changed:', range)} />
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    theme: 'dark'
  },
  render: () => <DateRangePicker navigationMode="together" onRangeChange={range => console.log('Range changed:', range)} />
}`,...c.parameters?.docs?.source}}},l=[`WithTime`,`WithoutTime`,`Corousel`]}))();export{c as Corousel,o as WithTime,s as WithoutTime,l as __namedExportsOrder,a as default};