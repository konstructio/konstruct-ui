import{j as e}from"./iframe-CQUPapgb.js";import{P as l,R as s,T as p,C as m}from"./index-CMraOghY.js";import{T as i}from"./Typography-BOqb3Y-Y.js";import{c as d}from"./index-B-7A89sm.js";import{R as n}from"./RadioGroup-B_q0I00x.js";import{I as f}from"./info-DkjVQbWD.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BLd5dFhW.js";import"./index-CGA3Cy4x.js";import"./index-Cj_TF1lr.js";import"./index-15YaTtXl.js";import"./index-Cz21bcKG.js";import"./index-C_T0SOQg.js";import"./index-KaZVFcL5.js";import"./index-Deo0v7Fy.js";import"./index-BHnE5gDL.js";import"./index-F5ZrBm5H.js";import"./Radio-BSKSbOlY.js";import"./index-B1MlFbps.js";const I={title:"In Review/RadioGroup/Dark",component:n},o={parameters:{theme:"dark"},args:{options:[{label:"Option 1",value:"option1"},{label:"Option 2",value:"option2"},{label:e.jsxs("span",{className:"flex items-center gap-1.5",children:["Option 3"," ",e.jsx(l,{delayDuration:0,children:e.jsxs(s,{children:[e.jsx(p,{asChild:!0,children:e.jsx(f,{className:"w-3.75 h-3.75 text-slate-400 dark:text-metal-400"})}),e.jsx(m,{side:"top",align:"center",className:d("after:content-['']","after:-translate-x-1/2","after:absolute","after:border-metal-700","after:border-l-8","after:border-l-transparent","after:border-r-8","after:border-r-transparent","after:border-t-8","after:bottom-0","after:left-1/2","after:translate-y-full","animate-in","bg-metal-700","fade-in-0","mb-1.5","overflow-visible","px-3","py-2","relative","rounded-lg","shadow-sm","text-white","z-999"),children:"Example tooltip"})]})})]}),value:"option3"}]},render:t=>e.jsxs("div",{className:"w-87.5 flex flex-col gap-3",children:[e.jsx(i,{component:"h6",children:"Row"}),e.jsx(n,{...t,direction:"row",name:"radio-group-row",defaultChecked:"option1",options:t.options.map(({value:r,...a})=>({...a,value:r}))}),e.jsx(i,{component:"h6",className:"mt-5",children:"Column"}),e.jsx(n,{...t,name:"radio-group-col",defaultChecked:"option1",options:t.options.map(({value:r,...a})=>({...a,value:r}))})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    theme: 'dark'
  },
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
  render: args => <div className="w-87.5 flex flex-col gap-3">
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
} satisfies Story`,...o.parameters?.docs?.source}}};const P=["Dark"];export{o as Dark,P as __namedExportsOrder,I as default};
