import{n as e}from"./chunk-jRWAZmH_.js";import{t}from"./iframe-Cx3vh90H.js";import{t as n,u as r}from"./dist-D6sMSREv.js";import{a as i,r as a}from"./dist-C7OvCdCY.js";import{n as o,t as s}from"./Typography-BZxuvxvu.js";import{n as c,t as l}from"./RadioGroup-Ck6aaBL4.js";import{a as u,i as d,n as f,o as p,s as m}from"./dist-zfOHivOm.js";var h,g,_,v;e((()=>{m(),n(),o(),i(),c(),h=t(),g={title:`In Review/RadioGroup/Light`,component:l},_={args:{options:[{label:`Option 1`,value:`option1`},{label:`Option 2`,value:`option2`},{label:(0,h.jsxs)(`span`,{className:`flex items-center gap-1.5`,children:[`Option 3`,` `,(0,h.jsx)(d,{delayDuration:0,children:(0,h.jsxs)(u,{children:[(0,h.jsx)(p,{asChild:!0,children:(0,h.jsx)(r,{className:`w-3.75 h-3.75 text-slate-400 dark:text-metal-400`})}),(0,h.jsx)(f,{side:`top`,align:`center`,className:a(`after:content-['']`,`after:-translate-x-1/2`,`after:absolute`,`after:border-metal-700`,`after:border-l-8`,`after:border-l-transparent`,`after:border-r-8`,`after:border-r-transparent`,`after:border-t-8`,`after:bottom-0`,`after:left-1/2`,`after:translate-y-full`,`animate-in`,`bg-metal-700`,`fade-in-0`,`mb-1.5`,`overflow-visible`,`px-3`,`py-2`,`relative`,`rounded-lg`,`shadow-sm`,`text-white`,`z-999`),children:`Example tooltip`})]})})]}),value:`option3`}]},render:e=>(0,h.jsxs)(`div`,{className:`w-87.5 flex flex-col gap-3 text-slate-700`,children:[(0,h.jsx)(s,{component:`h6`,children:`Row`}),(0,h.jsx)(l,{...e,direction:`row`,name:`radio-group-row`,defaultChecked:`option1`,options:e.options.map(({value:e,...t})=>({...t,value:e}))}),(0,h.jsx)(s,{component:`h6`,className:`mt-5`,children:`Column`}),(0,h.jsx)(l,{...e,name:`radio-group-col`,defaultChecked:`option1`,options:e.options.map(({value:e,...t})=>({...t,value:e}))})]})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,..._.parameters?.docs?.source}}},v=[`Light`]}))();export{_ as Light,v as __namedExportsOrder,g as default};