import{j as e}from"./iframe-B0ykOvC4.js";import{P as l,R as s,T as p,C as m}from"./index-rb1Biydk.js";import{T as n}from"./Typography-B12U-GCI.js";import{c as d}from"./index-BIgQ6y5l.js";import{R as i}from"./RadioGroup-EQBCpc8O.js";import{I as f}from"./info-DQahlcGe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-4GeOFifu.js";import"./index-BvXeOUv6.js";import"./index-CBUw3gf_.js";import"./index-Qi49gsqp.js";import"./index-DZW7LMgM.js";import"./index-CJJkQu7k.js";import"./index-DDXukzp4.js";import"./index-DglKKbRM.js";import"./index-BW2IeJSN.js";import"./index-Dt_7K3_P.js";import"./Radio-DC9Bb5qu.js";import"./index-DWDo_day.js";const P={title:"In Review/RadioGroup/Light",component:i},o={args:{options:[{label:"Option 1",value:"option1"},{label:"Option 2",value:"option2"},{label:e.jsxs("span",{className:"flex items-center gap-1.5",children:["Option 3"," ",e.jsx(l,{delayDuration:0,children:e.jsxs(s,{children:[e.jsx(p,{asChild:!0,children:e.jsx(f,{className:"w-3.75 h-3.75 text-slate-400 dark:text-metal-400"})}),e.jsx(m,{side:"top",align:"center",className:d("after:content-['']","after:-translate-x-1/2","after:absolute","after:border-metal-700","after:border-l-8","after:border-l-transparent","after:border-r-8","after:border-r-transparent","after:border-t-8","after:bottom-0","after:left-1/2","after:translate-y-full","animate-in","bg-metal-700","fade-in-0","mb-1.5","overflow-visible","px-3","py-2","relative","rounded-lg","shadow-sm","text-white","z-999"),children:"Example tooltip"})]})})]}),value:"option3"}]},render:t=>e.jsxs("div",{className:"w-87.5 flex flex-col gap-3 text-slate-700",children:[e.jsx(n,{component:"h6",children:"Row"}),e.jsx(i,{...t,direction:"row",name:"radio-group-row",defaultChecked:"option1",options:t.options.map(({value:a,...r})=>({...r,value:a}))}),e.jsx(n,{component:"h6",className:"mt-5",children:"Column"}),e.jsx(i,{...t,name:"radio-group-col",defaultChecked:"option1",options:t.options.map(({value:a,...r})=>({...r,value:a}))})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    options: [{
      label: 'Option 1',
      value: 'option1'
    }, {
      label: 'Option 2',
      value: 'option2'
    }, {
      label: <span className="flex items-center gap-1.5">
            Option 3{' '}
            <Provider delayDuration={0}>
              <Root>
                <Trigger asChild>
                  <Info className="w-3.75 h-3.75 text-slate-400 dark:text-metal-400" />
                </Trigger>

                <Content side="top" align="center" className={cn("after:content-['']", 'after:-translate-x-1/2', 'after:absolute', 'after:border-metal-700', 'after:border-l-8', 'after:border-l-transparent', 'after:border-r-8', 'after:border-r-transparent', 'after:border-t-8', 'after:bottom-0', 'after:left-1/2', 'after:translate-y-full', 'animate-in', 'bg-metal-700', 'fade-in-0', 'mb-1.5', 'overflow-visible', 'px-3', 'py-2', 'relative', 'rounded-lg', 'shadow-sm', 'text-white', 'z-999')}>
                  Example tooltip
                </Content>
              </Root>
            </Provider>
          </span>,
      value: 'option3'
    }]
  },
  render: args => <div className="w-87.5 flex flex-col gap-3 text-slate-700">
      <Typography component="h6">Row</Typography>

      <RadioGroupComponent {...args} direction="row" name="radio-group-row" defaultChecked="option1" options={args.options.map(({
      value,
      ...delegated
    }) => ({
      ...delegated,
      value
    }))} />

      <Typography component="h6" className="mt-5">
        Column
      </Typography>

      <RadioGroupComponent {...args} name="radio-group-col" defaultChecked="option1" options={args.options.map(({
      value,
      ...delegated
    }) => ({
      ...delegated,
      value
    }))} />
    </div>
} satisfies Story`,...o.parameters?.docs?.source}}};const L=["Light"];export{o as Light,L as __namedExportsOrder,P as default};
