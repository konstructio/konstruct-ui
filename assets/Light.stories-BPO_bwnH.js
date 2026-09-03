import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{n,t as r}from"./info-Cic366xo.js";import{i,t as a}from"./utils-0TJZseot.js";import{n as o,t as s}from"./Typography-Dr4qxqZo.js";import{a as c,i as l,n as u,o as d,s as f}from"./dist-DcRbZ4Cl.js";import{n as p,t as m}from"./RadioGroup-AUtMH2bR.js";var h,g,_,v;function y(){return(y=e((()=>{f(),n(),o(),i(),p(),h=t(),g={title:`In Review/RadioGroup/Light`,component:m},_={args:{options:[{label:`Option 1`,value:`option1`},{label:`Option 2`,value:`option2`},{label:(0,h.jsxs)(`span`,{className:`flex items-center gap-1.5`,children:[`Option 3`,` `,(0,h.jsx)(l,{delayDuration:0,children:(0,h.jsxs)(c,{children:[(0,h.jsx)(d,{asChild:!0,children:(0,h.jsx)(r,{className:`w-3.75 h-3.75 text-slate-400 dark:text-metal-400`})}),(0,h.jsx)(u,{side:`top`,align:`center`,className:a(`after:content-['']`,`after:-translate-x-1/2`,`after:absolute`,`after:border-metal-700`,`after:border-l-8`,`after:border-l-transparent`,`after:border-r-8`,`after:border-r-transparent`,`after:border-t-8`,`after:bottom-0`,`after:left-1/2`,`after:translate-y-full`,`animate-in`,`bg-metal-700`,`fade-in-0`,`mb-1.5`,`overflow-visible`,`px-3`,`py-2`,`relative`,`rounded-lg`,`shadow-sm`,`text-white`,`z-999`),children:`Example tooltip`})]})})]}),value:`option3`}]},render:e=>(0,h.jsxs)(`div`,{className:`w-87.5 flex flex-col gap-3 text-slate-700`,children:[(0,h.jsx)(s,{component:`h6`,children:`Row`}),(0,h.jsx)(m,{...e,direction:`row`,name:`radio-group-row`,defaultChecked:`option1`,options:e.options.map(({value:e,...t})=>({...t,value:e}))}),(0,h.jsx)(s,{component:`h6`,className:`mt-5`,children:`Column`}),(0,h.jsx)(m,{...e,name:`radio-group-col`,defaultChecked:`option1`,options:e.options.map(({value:e,...t})=>({...t,value:e}))})]})},v=[`Light`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,..._.parameters?.docs?.source}}}})))()}y();export{_ as Light,v as __namedExportsOrder,g as default};