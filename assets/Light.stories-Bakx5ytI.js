import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{n,t as r}from"./DateRangePicker-BsYMGd1x.js";var i,a,o,s,c,l,u,d,f,p;function m(){return(m=e((()=>{n(),i=t(),a={title:`In Review/DateRangePicker/Light`,component:r},o={render:()=>(0,i.jsx)(`div`,{className:`p-4`,children:(0,i.jsx)(r,{defaultRange:{from:new Date(new Date().getFullYear(),new Date().getMonth(),10),to:new Date(new Date().getFullYear(),new Date().getMonth(),20)},defaultTime:{startTime:new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate(),9,10),endTime:new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate(),17,30)},minDate:new Date(new Date().getFullYear(),new Date().getMonth(),1),onRangeChange:e=>console.log(`Range changed:`,e)})})},s={render:()=>(0,i.jsx)(`div`,{className:`p-4`,children:(0,i.jsx)(r,{showTime:!1,onRangeChange:e=>console.log(`Range changed:`,e)})})},c={render:()=>(0,i.jsx)(`div`,{className:`p-4`,children:(0,i.jsx)(r,{navigationMode:`together`,onRangeChange:e=>console.log(`Range changed:`,e)})})},l={parameters:{theme:`light`},render:()=>{let e=864e5;return(0,i.jsx)(r,{showTime:!1,defaultPreset:`last-7-days`,presets:[{value:`last-24-hours`,label:`Last 24 hours`,resolve:t=>({from:new Date(t.getTime()-e),to:t})},{value:`last-7-days`,label:`Last 7 days`,resolve:t=>({from:new Date(t.getTime()-7*e),to:t})},{value:`last-30-days`,label:`Last 30 days`,resolve:t=>({from:new Date(t.getTime()-30*e),to:t})},{value:`custom`,label:`Custom range`,resolve:()=>({})}],onRangeChange:e=>console.log(`Range changed:`,e)})}},u={parameters:{theme:`light`},render:()=>{let e=e=>t=>({from:new Date(t.getTime()-e*864e5),to:t});return(0,i.jsx)(r,{showTime:!1,revealCalendarOnCustom:!0,defaultPreset:`last-7-days`,labelTimePeriod:`Created`,maxDate:new Date,presets:[{value:`last-24-hours`,label:`Last 24 hours`,resolve:e(1)},{value:`last-7-days`,label:`Last 7 days`,resolve:e(7)},{value:`last-30-days`,label:`Last 30 days`,resolve:e(30)},{value:`custom`,label:`Custom range`,resolve:()=>({})}],onRangeChange:e=>console.log(`Range changed:`,e)})}},d={parameters:{theme:`light`},render:()=>(0,i.jsx)(r,{numberOfMonths:1,showTime:!1,showOutsideDays:!0,onRangeChange:e=>console.log(`Range changed:`,e)})},f={parameters:{theme:`light`},render:()=>(0,i.jsx)(r,{dateDisplayFormat:`numeric`,showTime:!1,defaultRange:{from:new Date(new Date().getFullYear(),new Date().getMonth(),10),to:new Date(new Date().getFullYear(),new Date().getMonth(),20)},onRangeChange:e=>console.log(`Range changed:`,e)})},p=[`WithTime`,`WithoutTime`,`Corousel`,`RollingPresets`,`RevealOnCustom`,`SingleMonth`,`NumericDates`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    theme: 'light'
  },
  render: () => {
    const DAY_MS = 24 * 60 * 60 * 1000;
    return <DateRangePicker showTime={false} defaultPreset="last-7-days" presets={[{
      value: 'last-24-hours',
      label: 'Last 24 hours',
      resolve: now => ({
        from: new Date(now.getTime() - DAY_MS),
        to: now
      })
    }, {
      value: 'last-7-days',
      label: 'Last 7 days',
      resolve: now => ({
        from: new Date(now.getTime() - 7 * DAY_MS),
        to: now
      })
    }, {
      value: 'last-30-days',
      label: 'Last 30 days',
      resolve: now => ({
        from: new Date(now.getTime() - 30 * DAY_MS),
        to: now
      })
    }, {
      value: 'custom',
      label: 'Custom range',
      resolve: () => ({})
    }]} onRangeChange={range => console.log('Range changed:', range)} />;
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    theme: 'light'
  },
  render: () => {
    const DAY_MS = 24 * 60 * 60 * 1000;
    const rolling = (days: number) => (now: Date) => ({
      from: new Date(now.getTime() - days * DAY_MS),
      to: now
    });
    return <DateRangePicker showTime={false} revealCalendarOnCustom defaultPreset="last-7-days" labelTimePeriod="Created" maxDate={new Date()} presets={[{
      value: 'last-24-hours',
      label: 'Last 24 hours',
      resolve: rolling(1)
    }, {
      value: 'last-7-days',
      label: 'Last 7 days',
      resolve: rolling(7)
    }, {
      value: 'last-30-days',
      label: 'Last 30 days',
      resolve: rolling(30)
    }, {
      value: 'custom',
      label: 'Custom range',
      resolve: () => ({})
    }]} onRangeChange={range => console.log('Range changed:', range)} />;
  }
}`,...u.parameters?.docs?.source},description:{story:`Progressive disclosure: the presets act as one-click shortcuts and the calendar
only appears on "Custom range" — the Product Design System's "Created" filter.`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    theme: 'light'
  },
  render: () => <DateRangePicker numberOfMonths={1} showTime={false} showOutsideDays onRangeChange={range => console.log('Range changed:', range)} />
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    theme: 'light'
  },
  render: () => <DateRangePicker dateDisplayFormat="numeric" showTime={false} defaultRange={{
    from: new Date(new Date().getFullYear(), new Date().getMonth(), 10),
    to: new Date(new Date().getFullYear(), new Date().getMonth(), 20)
  }} onRangeChange={range => console.log('Range changed:', range)} />
}`,...f.parameters?.docs?.source}}}})))()}m();export{c as Corousel,f as NumericDates,u as RevealOnCustom,l as RollingPresets,d as SingleMonth,o as WithTime,s as WithoutTime,p as __namedExportsOrder,a as default};