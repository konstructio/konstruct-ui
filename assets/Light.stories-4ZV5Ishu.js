import{n as e}from"./chunk-jRWAZmH_.js";import{t}from"./iframe-Cx3vh90H.js";import{n,t as r}from"./DateRangePicker-ejYp1Vjx.js";var i,a,o,s,c,l;e((()=>{n(),i=t(),a={title:`In Review/DateRangePicker/Light`,component:r},o={render:()=>(0,i.jsx)(`div`,{className:`p-4`,children:(0,i.jsx)(r,{defaultRange:{from:new Date(new Date().getFullYear(),new Date().getMonth(),10),to:new Date(new Date().getFullYear(),new Date().getMonth(),20)},defaultTime:{startTime:new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate(),9,10),endTime:new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate(),17,30)},minDate:new Date(new Date().getFullYear(),new Date().getMonth(),1),onRangeChange:e=>console.log(`Range changed:`,e)})})},s={render:()=>(0,i.jsx)(`div`,{className:`p-4`,children:(0,i.jsx)(r,{showTime:!1,onRangeChange:e=>console.log(`Range changed:`,e)})})},c={render:()=>(0,i.jsx)(`div`,{className:`p-4`,children:(0,i.jsx)(r,{navigationMode:`together`,onRangeChange:e=>console.log(`Range changed:`,e)})})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="p-4">
      <DateRangePicker defaultRange={{
      from: new Date(new Date().getFullYear(), new Date().getMonth(), 10),
      to: new Date(new Date().getFullYear(), new Date().getMonth(), 20)
    }} defaultTime={{
      startTime: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 9, 10),
      endTime: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 17, 30)
    }} minDate={new Date(new Date().getFullYear(), new Date().getMonth(), 1)} onRangeChange={range => console.log('Range changed:', range)} />
    </div>
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="p-4">
      <DateRangePicker showTime={false} onRangeChange={range => console.log('Range changed:', range)} />
    </div>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className="p-4">
      <DateRangePicker navigationMode="together" onRangeChange={range => console.log('Range changed:', range)} />
    </div>
}`,...c.parameters?.docs?.source}}},l=[`WithTime`,`WithoutTime`,`Corousel`]}))();export{c as Corousel,o as WithTime,s as WithoutTime,l as __namedExportsOrder,a as default};